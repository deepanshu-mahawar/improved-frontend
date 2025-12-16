'use client';

import mime from 'mime-types';

import axios, { axiosFileClient, axiosLandlordTyped, axiosTyped } from './axios_client';

import {
  API,
  AccountDetailsData,
  ChangeEmailData,
  ChangePasswordData,
  CreateOrUpdateAccountDetailsData,
  FileData,
  FileInfo,
  MediaInfo,
  ResetPasswordData,
  ResetPasswordEmailPayload,
  SigninData,
  SignupData,
  Tokens,
  FetchMediaInfosResponse,
  Institution,
  TenantScoreReport,
  ScoreRequestPayload,
  CreateProperty,
  Invites,
  InviteResponse,
} from './types';
import { jwtStorage } from '@/utils/local_storage_utils';

const accessToken = jwtStorage.get()?.accessToken || '';

export const api: API = {
  authentication: {
    logout: async () => {
      await axios({ method: 'GET', url: '/auth/logout' });
    },
    signin: async (data: SigninData) => {
      return await axiosTyped<SigninData, Tokens>({
        method: 'POST',
        url: '/auth/signin',
        data: data,
      });
    },
    signup: async (data: SignupData) => {
      const result = await axiosTyped<SignupData, Tokens>({
        method: 'POST',
        url: '/auth/signup',
        data: data,
      });

      return result;
    },
    signupViewer: async (data: SignupData) => {
      const result = await axiosTyped<SignupData, Tokens>({
        method: 'POST',
        url: '/auth/signup/viewer',
        data: data,
      });

      return result;
    },
    changeEmail: async (data: ChangeEmailData) => {
      await axiosTyped<ChangeEmailData, undefined>({
        method: 'POST',
        url: '/auth/change-email',
        data: data,
      });
    },
    changePassword: async (data: ChangePasswordData) => {
      await axiosTyped<ChangePasswordData, undefined>({
        method: 'POST',
        url: '/auth/change-password',
        data,
      });
    },
    drop: async () => {
      await axios({ method: 'GET', url: '/auth/drop' });
    },
    resetPassword: async (data: ResetPasswordData) => {
      await axiosTyped<ResetPasswordData, undefined>({
        method: 'POST',
        url: '/auth/reset-password',
        data: data,
      });
    },
    triggerResetPassword: async (data: ResetPasswordEmailPayload) => {
      await axiosTyped<ResetPasswordEmailPayload, undefined>({
        method: 'POST',
        url: '/auth/trigger-reset-password',
        data: data,
      });
    },
    resendVerification: async (data: { email: string }) => {
      await axiosTyped<{ email: string }, void>({
        method: 'POST',
        url: '/auth/resend-verification',
        data: data,
      });
    },
  },
  user: {
    getCurrent: async () => {
      return await axiosTyped<undefined, any | any>({
        method: 'GET',
        url: '/user',
      });
    },
    subscription: {
      triggerCheckoutReset: async () => {
        await axiosTyped<undefined, { url: string }>({
          method: 'GET',
          url: `/subscription/reset-customer-status-session`,
        });
      },
      triggerCheckoutSession: async () => {
        const session = await axiosTyped<undefined, any>({
          method: 'POST',
          url: `/subscription/create-customer-checkout-session`,
        });
        return session;
      },

      triggerCheckoutStatus: async () => {
        const session = await axiosTyped<undefined, any>({
          method: 'GET',
          url: `/subscription/checkout-customer-status-session`,
        });
        return session;
      },

      triggerPortalSession: async () => {
        const session = await axiosTyped<undefined, { url: string }>({
          method: 'POST',
          url: `/subscription/create-customer-portal-session`,
        });
        return session.url;
      },
    },
    kyc: {
      triggerCheckoutSession: async () => {
        const session = await axiosTyped<
          undefined,
          {
            status: 'success';
            verification: {
              id: string;
              url: string;
              vendorData: string;
              host: string;
              status: 'created';
              sessionToken: string;
            };
          }
        >({
          method: 'POST',
          url: `/kyc/create-customer-checkout-session`,
        });

        if (session.verification.url) {
          window.location.href = session.verification.url;
        }
      },
      triggerCheckoutStatus: async (viewerId?: string) => {
        const url = viewerId
          ? `/kyc/viewer/checkout-customer-status-session?userId=${viewerId}`
          : `/kyc/checkout-customer-status-session`;
        const session = await axiosTyped<undefined, any>({
          method: 'GET',
          url: url,
        });
        return session;
      },
      getSessionDecision: async (viewerId?: string) => {
        const url = viewerId ? `/kyc/viewer/decision?userId=${viewerId}` : `/kyc/decision`;
        const response = await axiosTyped<undefined, any>({
          method: 'GET',
          url: url,
        });
        return response;
      },
      triggerCheckoutReset: async () => {
        await axiosTyped<undefined, { url: string }>({
          method: 'GET',
          url: `/kyc/reset-customer-status-session`,
        });
        window.location.reload();
      },
      fetchMediaInfos: async () => {
        const response = await axiosTyped<undefined, FetchMediaInfosResponse>({
          method: 'GET',
          url: `/kyc/media/infos`,
        });
        return response;
      },
      fetchMediaById: async (fileInfo: MediaInfo): Promise<string> => {
        const response = await axiosFileClient<unknown, BlobPart>(
          {
            url: `/kyc/media/${fileInfo.id}`,
            method: 'GET',
          },
          'render',
        );

        // @ts-ignore
        return URL.createObjectURL(response);
      },
    },
    files: {
      upload: async (data: FileData) => {
        const form = new FormData();
        form.append('file', data.file);
        form.append('name', data.name);
        form.append('categoryId', data.categoryId);
        form.append('comment', data.comment);

        const result = await axiosTyped<FormData, FileInfo>({
          method: 'POST',
          url: '/user/files/upload',
          headers: {
            'Content-Type': 'multipart/form-data;',
          },
          data: form,
        });

        return result;
      },
      getFileInfoById: async (id: string) => {
        const result = await axiosTyped<undefined, FileInfo>({
          method: 'GET',
          url: '/user/files/' + id,
        });

        return result;
      },
      update: async (id: string, data: FileData) => {
        const form = new FormData();
        form.append('file', data.file);
        form.append('name', data.name);
        form.append('categoryId', data.categoryId);
        form.append('comment', data.comment);

        const result = await axiosTyped<FormData, FileInfo>({
          method: 'PUT',
          url: `/user/files/${id}`,
          headers: {
            'Content-Type': 'multipart/form-data;',
          },
          data: form,
        });

        return result;
      },
      deleteById: async (fileId: string) => {
        await axiosTyped<undefined, undefined>({
          method: 'DELETE',
          url: `/user/files/${fileId}`,
        });
      },
      getFileById: async (fileInfo: FileInfo) => {
        const mimeExt = mime.extension(fileInfo.mimetype);
        console.log(mimeExt);
        const fileName = mimeExt
          ? `${fileInfo.name}.${mimeExt}`
          : fileInfo.fileName || fileInfo.name;

        axiosFileClient(
          {
            method: 'GET',
            url: `/user/files/${fileInfo.id}`,
          },
          fileName,
        );
      },
      getAllFilesInfo: async () => {
        const result = await axiosTyped<undefined, FileInfo[]>({
          method: 'GET',
          url: '/user/files/all',
        });

        return result;
      },
      sendCertificateEmail: async (formData: FormData) => {
        return await axiosTyped<FormData, FileInfo>({
          method: 'POST',
          url: '/user/certificate/email',
          headers: {
            'Content-Type': 'multipart/form-data',
          },
          data: formData,
        });
      },
    },
    viewers: {
      inviteViewers: async (data: { emails: string[] }) =>
        await axiosTyped<{ emails: string[] }, undefined>({
          method: 'POST',
          url: '/user/viewers/invite',
          data: data,
        }),

      manageInvites: async (data: { emails: string[] }) =>
        await axiosTyped<{ emails: string[] }, undefined>({
          method: 'POST',
          url: '/user/viewers/manage',
          data: data,
        }),
    },
    bank: {
      housingPassScore: async (reqPayload?: ScoreRequestPayload) => {
        let url = `/user/bank/housing-pass-score`;
        if (reqPayload) {
          if (reqPayload.currentUserId) url += `?currentUserId=${reqPayload.currentUserId}`;
          if (reqPayload.targetUserId) url += `&targetUserId=${reqPayload.targetUserId}`;
        }
        return await axiosTyped<undefined, TenantScoreReport>({
          method: 'GET',
          url,
        });
      },
    },
  },
  accountDetails: {
    createAccountDetails: async (data: CreateOrUpdateAccountDetailsData) => {
      return await axiosTyped<CreateOrUpdateAccountDetailsData, AccountDetailsData>({
        method: 'POST',
        url: '/account-details/user',
        data: data,
      });
    },
    deleteAccountDetails: async () => {
      return await axiosTyped<undefined, undefined>({
        method: 'DELETE',
        url: '/account-details/user',
      });
    },
    updateAccountDetails: async (data: CreateOrUpdateAccountDetailsData) => {
      return await axiosTyped<CreateOrUpdateAccountDetailsData, AccountDetailsData>({
        method: 'PUT',
        url: '/account-details/user',
        data: data,
      });
    },
    getAccountDetails: async () => {
      return await axiosTyped<undefined, AccountDetailsData>({
        method: 'GET',
        url: '/account-details/user',
      });
    },
  },
  profileDetails: {
    createProfileDetails: async (data: any) => {
      return await axiosTyped<any, any>({
        method: 'POST',
        url: '/profile-details/user',
        data: data,
      });
    },
    deleteProfileDetails: async () => {
      return await axiosTyped<undefined, undefined>({
        method: 'DELETE',
        url: '/profile-details/user',
      });
    },
    getProfileDetails: async () => {
      return await axiosTyped<undefined, any>({
        method: 'GET',
        url: '/profile-details/user',
      });
    },
    updateProfileDetails: async (data: any) => {
      return await axiosTyped<any, any>({
        method: 'PUT',
        url: '/profile-details/user',
        data: data,
      });
    },
  },
  bank: {
    triggerCheckoutReset: async () => {
      await axiosTyped<undefined, { url: string }>({
        method: 'GET',
        url: `/user/bank/reset-customer-status-session`,
      });
    },
    getInstitutionsByCountryName: async (countryName: string) => {
      const banks = await axiosTyped<string, Institution[]>({
        method: 'GET',
        url: `/user/bank/banks/${countryName}`,
      });

      return [
        ...banks,
        {
          id: 'SANDBOXFINANCE_SFIN0000',
          name: 'Sandbox Test',
          logo: '',
          bic: '',
          transaction_total_days: '365',
          countries: ['Russia'],
        },
      ];
    },
    createLink: async (data: any) => {
      return await axiosTyped<any, any>({
        method: 'POST',
        url: '/user/bank/create-link',
        data: data,
      });
    },
    getAccounts: async (viewerId?: string) => {
      const url = viewerId
        ? `/user/bank/viewer/accounts?userId=${viewerId}`
        : `/user/bank/accounts`;
      return await axiosTyped<undefined, any>({
        method: 'GET',
        url: `${url}`,
      });
    },
    getTransactions: async (accountId: string, viewerId?: string) => {
      const url = viewerId
        ? `/user/bank/viewer/transactions/${accountId}?userId=${viewerId}`
        : `/user/bank/transactions/${accountId}`;
      return await axiosTyped<string, any>({
        method: 'GET',
        url: url,
      });
    },
    getBalance: async (accountId: string) => {
      return await axiosTyped<string, any>({
        method: 'GET',
        url: `/user/bank/balance/${accountId}`,
      });
    },
    getAccountDetails: async (accountId: string) => {
      return await axiosTyped<string, any>({
        method: 'GET',
        url: `/user/bank/account-details/${accountId}`,
      });
    },
    calculateScoring: async (transactions: any[]) => {
      return await axiosTyped<any[], any>({
        method: 'POST',
        url: `/scoring/calculate-housing-pass-score`,
        data: transactions,
      });
    },
  },
  contact: {
    sendMessage: (data: { name: string; email: string; message: string }) => {
      return axiosTyped<{ name: string; email: string; message: string }, void>({
        method: 'POST',
        url: '/contact/send',
        data: data,
      });
    },
  },
  properties: {
    createProperty: async (data: CreateProperty, accessToken: string) => {
      return await axiosLandlordTyped<CreateProperty, CreateProperty>({
        method: 'POST',
        url: '/properties/create',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${accessToken}`,
        },
        data: data,
      });
    },
    getMyProperties: async (accessToken: string) => {
      return await axiosLandlordTyped<undefined, CreateProperty[]>({
        method: 'GET',
        url: '/properties/get/my-properties',
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
    },
    getPropertyById: async (propertyId: string) => {
      return await axiosLandlordTyped<null, CreateProperty>({
        method: 'GET',
        url: `/properties/get/${propertyId}`,
      });
    },
    updateProperty: async (
      propertyId: string,
      data: Partial<CreateProperty>,
      accessToken: string,
    ) => {
      return await axiosLandlordTyped<Partial<CreateProperty>, CreateProperty>({
        method: 'PUT',
        url: `/properties/update/${propertyId}`,
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${accessToken}`,
        },
        data: data,
      });
    },
    deleteProperty: async (propertyId: string, accessToken: string) => {
      return await axiosLandlordTyped<null, { message: string }>({
        method: 'DELETE',
        url: `/properties/delete/${propertyId}`,
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
    },
  },
  invites: {
    sendInvite: async (data: { propertyId: string; email: string; name: string }) => {
      return await axiosLandlordTyped<typeof data, Invites>({
        method: 'POST',
        url: '/invites/create',
        data,
      });
    },
    getInvitesByProperty: async (propertyId: string) => {
      const result = await axiosLandlordTyped<undefined, Invites>({
        method: 'GET',
        url: `/invites/get/${propertyId}`,
      });
      return result;
    },
    resendInvite: async (inviteId: string) => {
      const result = await axiosLandlordTyped<undefined, Invites>({
        method: 'POST',
        url: `/invites/resend/${inviteId}`,
      });
      return result;
    },
    acceptInvite: async (inviteId: string) => {
      const result = await axiosLandlordTyped<undefined, Invites>({
        method: 'POST',
        url: `/invites/accept/${inviteId}`,
      });
      return result;
    },

    getInviteById: async (inviteId: string) => {
      const result = await axiosLandlordTyped<undefined, InviteResponse>({
        method: 'GET',
        url: `/invites/getInviteById/${inviteId}`,
      });
      return result;
    },
  },
  landlord: {
    addTenantToLandlord: async (landlordId: string, tenantId: string) => {
      return await axiosLandlordTyped<null, any>({
        method: 'POST',
        url: `/addTenantToLandlord/${landlordId}/add-tenant/${tenantId}`,
      });
    },

    getLandlordWithTenants: async (landlordId: string) => {
      return await axiosLandlordTyped<null, any>({
        method: 'GET',
        url: `/addTenantToLandlord/${landlordId}`,
      });
    },
  },
  scores: {
    getScores: async (currentUserId: string, targetUserId: string) => {
      return await axiosLandlordTyped<null, any>({
        method: 'GET',
        url: `/scores/${currentUserId}/${targetUserId}`,
        headers: {
          Authorization: `Bearer ${accessToken}`,
        },
      });
    },
  },
};
