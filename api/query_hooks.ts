'use client';

import {
  useQuery,
  useMutation,
  UseQueryOptions,
  UseMutationOptions,
  useQueryClient,
} from '@tanstack/react-query';

import { api } from '@/api/api';

import {
  ChangeEmailData,
  ChangePasswordData,
  CreateProperty,
  FetchMediaInfosResponse,
  Institution,
  InviteResponse,
  Invites,
  ResetPasswordData,
  ResetPasswordEmailPayload,
  ScoreData,
  ScoreRequestPayload,
  SigninData,
  SignupData,
  TenantScoreReport,
  Tokens,
} from '@/api/types';

import { MediaInfo } from '@/api/types';
import { FileData, FileInfo } from '@/api/types';

import { AccountDetailsData, CreateOrUpdateAccountDetailsData } from '@/api/types';

export const useCreateQuery = <TData, TError = unknown>(
  key: unknown[],
  fetcher: () => Promise<TData>,
  options?: UseQueryOptions<TData, TError>,
) => useQuery({ queryKey: key, queryFn: fetcher, ...options });

export const useCreateMutation = <TData, TVariables, TError = unknown>(
  mutator: (data: TVariables) => Promise<TData>,
  options?: UseMutationOptions<TData, TError, TVariables>,
) => useMutation({ mutationFn: mutator, ...options });

export const useSignin = () => useCreateMutation<Tokens, SigninData>(api.authentication.signin);
export const useSignup = () => useCreateMutation<Tokens, SignupData>(api.authentication.signup);
export const useSignupViewer = () =>
  useCreateMutation<Tokens, SignupData>(api.authentication.signupViewer);
export const useLogout = () => useCreateMutation<void, void>(api.authentication.logout);
export const useDrop = () => useCreateMutation<void, void>(api.authentication.drop);
export const useChangeEmail = () =>
  useCreateMutation<void, ChangeEmailData>(api.authentication.changeEmail);
export const useChangePassword = () =>
  useCreateMutation<void, ChangePasswordData>(api.authentication.changePassword);
export const useResetPassword = () =>
  useCreateMutation<void, ResetPasswordData>(api.authentication.resetPassword);
export const useTriggerResetPassword = () =>
  useCreateMutation<void, ResetPasswordEmailPayload>(api.authentication.triggerResetPassword);
export const useResendVerification = () =>
  useCreateMutation<void, { email: string }>(api.authentication.resendVerification);

// hooks/useUser.ts
export const useCurrentUser = (enabled?: boolean) =>
  useCreateQuery<any | any>(['user', 'me'], api.user.getCurrent, {
    queryKey: ['user', 'me'],
    enabled,
  });
export const useTriggerCheckoutSession = () =>
  useCreateMutation<any, void>(api.user.subscription.triggerCheckoutSession);
export const useTriggerCheckoutReset = () =>
  useCreateMutation<void, void>(api.user.subscription.triggerCheckoutReset);
export const useTriggerCheckoutStatus = () =>
  useCreateMutation<any, void>(api.user.subscription.triggerCheckoutStatus);
export const useTriggerPortalSession = () =>
  useCreateMutation<string, void>(api.user.subscription.triggerPortalSession);
export const useTriggerKycSession = () =>
  useCreateMutation<void, void>(api.user.kyc.triggerCheckoutSession);
export const useKycStatus = ({ viewerId, enabled }: { viewerId?: string; enabled?: boolean }) =>
  useCreateQuery<any>(
    ['kyc', 'status', viewerId],
    () => api.user.kyc.triggerCheckoutStatus(viewerId),
    {
      queryKey: ['kyc', 'status', viewerId],
      enabled,
    },
  );
export const useKycDecision = (viewerId?: string) =>
  useCreateQuery<any>(['kyc', 'decision', viewerId], () =>
    api.user.kyc.getSessionDecision(viewerId),
  );
export const useKycReset = () => useCreateMutation<void, void>(api.user.kyc.triggerCheckoutReset);
export const useKycMediaInfos = () =>
  useCreateQuery<FetchMediaInfosResponse>(['kyc', 'media', 'infos'], api.user.kyc.fetchMediaInfos);
export const useKycMediaById = (fileInfo: MediaInfo) =>
  useCreateQuery<string>(['kyc', 'media', fileInfo.id], () =>
    api.user.kyc.fetchMediaById(fileInfo),
  );

// hooks/useFiles.ts
export const useUploadFile = () => useCreateMutation<FileInfo, FileData>(api.user.files.upload);

export const useUpdateFile = () =>
  useCreateMutation<FileInfo, { id: string; data: FileData }>(({ id, data }) =>
    api.user.files.update(id, data),
  );

export const useDeleteFile = () =>
  useCreateMutation<void, string>((fileId) => api.user.files.deleteById(fileId));

export const useGetFileInfo = (id: string) =>
  useCreateQuery<FileInfo>(['file', id], () => api.user.files.getFileInfoById(id));
export const useGetAllFilesInfo = () =>
  useCreateQuery<FileInfo[]>(['files', 'all'], api.user.files.getAllFilesInfo);
export const useGetFileById = (fileInfo: FileInfo) =>
  useCreateQuery<void>(['file', 'download', fileInfo.id], () =>
    api.user.files.getFileById(fileInfo),
  );
export const useSendEmail = () =>
  useCreateMutation<FileInfo, FormData>(api.user.files.sendCertificateEmail);

// hooks/useAccountDetails.ts
export const useCreateAccountDetails = () =>
  useCreateMutation<AccountDetailsData, CreateOrUpdateAccountDetailsData>(
    api.accountDetails.createAccountDetails,
  );
export const useUpdateAccountDetails = () =>
  useCreateMutation<AccountDetailsData, CreateOrUpdateAccountDetailsData>(
    api.accountDetails.updateAccountDetails,
  );
export const useDeleteAccountDetails = () =>
  useCreateMutation<void, void>(api.accountDetails.deleteAccountDetails);
export const useAccountDetails = () =>
  useCreateQuery<CreateOrUpdateAccountDetailsData>(
    ['accountDetails'],
    api.accountDetails.getAccountDetails,
  );

// hooks/useProfileDetails.ts
export const useCreateProfileDetails = () =>
  useCreateMutation<any, any>(api.profileDetails.createProfileDetails);
export const useUpdateProfileDetails = () =>
  useCreateMutation<any, any>(api.profileDetails.updateProfileDetails);
export const useDeleteProfileDetails = () =>
  useCreateMutation<void, void>(api.profileDetails.deleteProfileDetails);
export const useProfileDetails = (options?: UseQueryOptions<any, any>) =>
  useCreateQuery<any>(['profileDetails'], api.profileDetails.getProfileDetails, options);

// hooks/useBank.ts
export const useBankResetSession = () =>
  useCreateMutation<void, void>(api.bank.triggerCheckoutReset);
export const useBankInstitutions = (countryName: string) =>
  useCreateQuery<Institution[]>(['banks', countryName], () =>
    api.bank.getInstitutionsByCountryName(countryName),
  );
export const useCreateBankLink = () => useCreateMutation(api.bank.createLink);
export const useBankAccounts = (viewerId?: string, enabled?: boolean) =>
  useCreateQuery<any>(['bankAccounts', viewerId], () => api.bank.getAccounts(viewerId), {
    queryKey: ['bankAccounts', viewerId],
    enabled,
  });
export const useBankTransactions = (accountIds: Array<string>, viewerId?: string) =>
  useCreateQuery<Array<any>>(
    ['bankTransactions', accountIds.join(','), viewerId],
    () => Promise.all(accountIds.map((accountId) => api.bank.getTransactions(accountId, viewerId))),
    {
      queryKey: ['bankTransactions', accountIds.join(','), viewerId],
      enabled: !!accountIds?.length,
    },
  );
export const useBankBalance = (accountId: string) =>
  useCreateQuery<any>(['bankBalance', accountId], () => api.bank.getBalance(accountId));
export const useBankAccountDetails = (accountId: string) =>
  useCreateQuery<any>(['bankAccountDetails', accountId], () =>
    api.bank.getAccountDetails(accountId),
  );
export const useBankScoring = () => useCreateMutation<ScoreData, any[]>(api.bank.calculateScoring);

// hooks/useContact.ts
export const useSendContactMessage = () =>
  useCreateMutation<void, { name: string; email: string; message: string }>(
    api.contact.sendMessage,
  );

// hooks/useViewers.ts
export const useInviteViewers = () =>
  useCreateMutation<void, { emails: string[] }>(api.user.viewers.inviteViewers);

export const useManageInvites = () =>
  useCreateMutation<void, { emails: string[] }>(api.user.viewers.manageInvites);

// Housing pass score
export const useHousingPassScore = () =>
  useCreateMutation<TenantScoreReport, ScoreRequestPayload | undefined>(
    api.user.bank.housingPassScore,
  );

export const useGetMyProperties = (accessToken: string) =>
  useCreateQuery<CreateProperty[]>(['propertyDetails', accessToken], () =>
    api.properties.getMyProperties(accessToken),
  );

export const useCreateProperty = () =>
  useCreateMutation<CreateProperty, { data: CreateProperty; accessToken: string }>(
    ({ data, accessToken }) => api.properties.createProperty(data, accessToken),
  );

export const useGetPropertyById = (propertyId: string, accessToken: string, enabled?: boolean) =>
  useCreateQuery<CreateProperty>(
    ['property', propertyId],
    () => api.properties.getPropertyById(propertyId, accessToken),
    { queryKey: ['property', propertyId], enabled },
  );

export const useDeleteProperty = () => {
  const qc = useQueryClient();
  return useCreateMutation<void, { propertyId: string; accessToken: string }>(
    ({ propertyId, accessToken }) =>
      api.properties.deleteProperty(propertyId, accessToken).then(() => {}),
    {
      onSuccess: () => {
        qc.invalidateQueries({ queryKey: ['propertyDetails'] });
      },
    },
  );
};

export const useSendInvite = () => {
  const qc = useQueryClient();
  return useMutation({
    mutationFn: api.invites.sendInvite,
    onSuccess: (_data, variables) => {
      qc.invalidateQueries({ queryKey: ['invites', variables.propertyId] });
    },
  });
};

export const useInvites = (propertyId: string) =>
  useCreateQuery<Invites>(['invites', propertyId], () =>
    api.invites.getInvitesByProperty(propertyId),
  );

export const useResendInvite = () => {
  const qc = useQueryClient();

  return useMutation({
    mutationFn: api.invites.resendInvite,
    onSuccess: (_data, inviteId) => {
      qc.invalidateQueries({ queryKey: ['invites'] });
    },
  });
};

export const useAcceptInvite = () => {
  const qc = useQueryClient();

  return useMutation({
    mutationFn: api.invites.acceptInvite,
    onSuccess: (data, inviteId) => {
      qc.invalidateQueries({ queryKey: ['invites'] });
      console.log('Invite accepted successfully:', data);
    },
    onError: (error) => {
      console.error('Failed to accept invite:', error);
    },
  });
};

export const useGetInvite = (inviteId: string, enabled = true) => {
  return useCreateQuery<InviteResponse>(
    ['invite', inviteId],
    () => api.invites.getInviteById(inviteId),
    { queryKey: ['invite', inviteId], enabled },
  );
};

export const useUpdateProperty = () => {
  const qc = useQueryClient();

  return useCreateMutation<
    CreateProperty,
    { propertyId: string; data: Partial<CreateProperty>; accessToken: string }
  >(
    ({ propertyId, data, accessToken }) =>
      api.properties.updateProperty(propertyId, data, accessToken),
    {
      onSuccess: () => {
        qc.invalidateQueries({ queryKey: ['propertyDetails'] });
        qc.invalidateQueries({ queryKey: ['property'] });
      },
    },
  );
};

export const useAddTenantToLandlord = () =>
  useCreateMutation<null, { landlordId: string; tenantId: string }>(({ landlordId, tenantId }) =>
    api.landlord.addTenantToLandlord(landlordId, tenantId),
  );

export const useGetLandlordWithTenants = (landlordId: string) =>
  useCreateQuery<any>(['landlord', landlordId, 'tenants'], () =>
    api.landlord.getLandlordWithTenants(landlordId),
  );

export const useGetScores = (currentUserId?: string, targetUserId?: string) =>
  useCreateQuery<any>(
    ['scores', currentUserId, targetUserId],
    () => api.scores.getScores(currentUserId!, targetUserId!),
    {
      queryKey: ['scores', currentUserId, targetUserId],
      enabled: !!currentUserId && !!targetUserId,
    },
  );
