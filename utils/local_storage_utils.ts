'use client';

import { Tokens } from '../api/types';

export enum LocalStorageKeys {
  JWT = 'token',
  LOCALE = 'locale',
  LOGGER = 'logger',
  STEPPER_VIEW = 'stepperView',
  SUBSCRIPTION_INITIATED = 'SUBSCRIPTION_INITIATED',
  SHARED_EMAILS = 'SHARED_EMAILS',
  CREATE_PROFILE_VALUES = 'CREATE_PROFILE_VALUES',
  CREATE_PROFILE_STEP = 'CREATE_PROFILE_STEP',
  LANDLORD_USER_ID = 'LandlordUserId',
}

export const sessionStorageUtils = {
  getItem<T>(key: string): T | undefined {
    if (typeof window === 'undefined') return;
    const item = sessionStorage.getItem(key);
    if (item) {
      try {
        return JSON.parse(item) as T;
      } catch {
        console.warn(`Failed to parse localStorage item for key: ${key}`);
      }
    }
    return undefined;
  },

  setItem<T>(key: string, data: T) {
    try {
      if (typeof window === 'undefined') return;
      const json = JSON.stringify(data);
      sessionStorage.setItem(key, json);
    } catch {
      console.warn(`Failed to stringify localStorage data for key: ${key}`);
    }
  },

  removeItem(key: LocalStorageKeys | string) {
    if (typeof window === 'undefined') return;
    sessionStorage.removeItem(key);
  },
};

export const localStorageUtils = {
  getItem<T>(key: LocalStorageKeys | string): T | undefined {
    if (typeof window === 'undefined') return;
    const item = localStorage.getItem(key);
    if (item) {
      try {
        return JSON.parse(item) as T;
      } catch {
        console.warn(`Failed to parse localStorage item for key: ${key}`);
      }
    }
    return undefined;
  },

  setItem<T>(key: LocalStorageKeys | string, data: T) {
    try {
      if (typeof window === 'undefined') return;
      const json = JSON.stringify(data);
      localStorage.setItem(key, json);
    } catch {
      console.warn(`Failed to stringify localStorage data for key: ${key}`);
    }
  },

  removeItem(key: LocalStorageKeys | string) {
    if (typeof window === 'undefined') return;
    localStorage.removeItem(key);
  },
};

export const jwtStorage = {
  get: () => localStorageUtils.getItem<Tokens>(LocalStorageKeys.JWT),
  set: (data: Tokens) => localStorageUtils.setItem(LocalStorageKeys.JWT, data),
  remove: () => localStorageUtils.removeItem(LocalStorageKeys.JWT),
};

export const loggerStorage = {
  get: () => localStorageUtils.getItem<boolean>(LocalStorageKeys.LOGGER),
  set: (value: boolean) => localStorageUtils.setItem(LocalStorageKeys.LOGGER, value),
  remove: () => localStorageUtils.removeItem(LocalStorageKeys.LOGGER),
};

export const veriffSubscriptionStorage = {
  get: () => localStorageUtils.getItem<boolean>(LocalStorageKeys.SUBSCRIPTION_INITIATED),
  set: (value: boolean) =>
    localStorageUtils.setItem(LocalStorageKeys.SUBSCRIPTION_INITIATED, value),
  remove: () => localStorageUtils.removeItem(LocalStorageKeys.SUBSCRIPTION_INITIATED),
};
