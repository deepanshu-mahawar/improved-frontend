'use client';

import { useEffect, useCallback } from 'react';

import { useSearchParams, useRouter } from 'next/navigation';

import { jwtStorage } from './local_storage_utils';

import { api } from '@/api/api';

type Tokens = {
  accessToken: string;
  refreshToken: string;
};

export const useAuthCallbackHandler = () => {
  const searchParams = useSearchParams();
  const router = useRouter();

  const handleAuth = useCallback(async () => {
    try {
      const accessToken = searchParams?.get('accessToken') ?? '';
      const refreshToken = searchParams?.get('refreshToken') ?? '';

      if (!accessToken || !refreshToken) {
        console.log('Missing tokens in URL parameters');
        return;
      }

      jwtStorage.set({ accessToken, refreshToken });

      await api.user.getCurrent();
    } catch (error) {
      console.log('Auth verification failed');
      await jwtStorage.set({} as Tokens);
    }
  }, [searchParams]);

  useEffect(() => {
    handleAuth();
  }, [handleAuth]);
};
