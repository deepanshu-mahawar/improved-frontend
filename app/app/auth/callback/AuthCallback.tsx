"use client";

import { useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { jwtStorage } from "@/utils/local_storage_utils";
import { routes } from "@/lib/routes";
import { useCurrentUser } from "@/api/query_hooks";
import { useQueryClient } from "@tanstack/react-query";

export const AuthCallback = () => {
  const router = useRouter();
  const queryClient = useQueryClient();
  const searchParams = useSearchParams();
  const { refetch } = useCurrentUser(false);

  const accessToken = searchParams?.get("accessToken") ?? "";
  const refreshToken = searchParams?.get("refreshToken") ?? "";

  useEffect(() => {
    if (!accessToken || !refreshToken) return;
    const handleAuth = async () => {
      try {
        jwtStorage.set({
          accessToken: accessToken.trim(),
          refreshToken: refreshToken.trim(),
        });

        const stored = jwtStorage.get();
        console.log("Stored tokens:", stored?.accessToken);
        if (!stored?.accessToken) {
          console.error("Failed to store access token");
          return;
        }

        const returnUrl = localStorage.getItem("returnUrl") || routes.root;
        localStorage.removeItem("returnUrl");

        await refetch();
        await queryClient.invalidateQueries({ queryKey: ["user", "me"] });

        router.replace(returnUrl);
      } catch (err) {
        console.error("AuthCallback error:", err);
        jwtStorage.remove();
      }
    };

    handleAuth();
  }, [accessToken, refreshToken, searchParams, refetch, queryClient, router]);

  return null;
};
