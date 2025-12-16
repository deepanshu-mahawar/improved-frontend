"use client";

import { useCallback, useState } from "react";

import { MutationCache, QueryCache, QueryClient } from "@tanstack/react-query";
import { useSnackBar } from "@/hooks/useSnackbar";

export const useHpQueryClient = () => {
  const sendMessage = useSnackBar();

  const globalErrorHandler = useCallback(
    (error: unknown) => {
      sendMessage(
        `Unexpected error occured,some details may be inccorrect. Please refresh and try again.`,
        "error"
      );
      console.log("Error", error);
    },
    [sendMessage]
  );

  const [queryClient] = useState(
    () =>
      new QueryClient({
        queryCache: new QueryCache({
          onError: globalErrorHandler,
        }),
        mutationCache: new MutationCache({
          onError: globalErrorHandler,
        }),
        defaultOptions: {
          queries: {
            networkMode: "offlineFirst",
            retry: 2,
          },
        },
      })
  );
  return queryClient;
};
