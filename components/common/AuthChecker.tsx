"use client";

import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { jwtStorage } from "@/utils/local_storage_utils";
import { useCurrentUser } from "@/api/query_hooks";
import { routes } from "@/lib/route";
import { Loader } from "./Loader";

type Props = {
  children: React.ReactNode;
  redirectTo?: string;
};

export const AuthChecker = ({ children }: Props) => {
  const router = useRouter();
  const authToken = jwtStorage.get();

  const {
    data: currentUser,
    isLoading,
    isFetched,
    isFetching,
    error,
  } = useCurrentUser(!!authToken);

  useEffect(() => {
    if (error) {
      sessionStorage.clear();
      localStorage.clear();
      router.replace("/");
    }
  }, [error, router]);

  useEffect(() => {
    if (!currentUser) return;
    const isLandlord = currentUser?.isViewer;
    if (isLandlord) {
      router.push(routes.landlordDashboard);
    } else {
      if (currentUser?.profile === null) {
        router.push(routes.createProfile);
      } else {
        router.push(routes.dashboard);
      }
    }
  }, [currentUser, router]);

  if (authToken && isLoading && !isFetched && !isFetching) return <Loader />;

  return <>{children}</>;
};
