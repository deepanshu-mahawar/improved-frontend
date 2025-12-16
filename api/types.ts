"use client";

export type Entity = {
  id: string;
};

export type Tokens = {
  accessToken: string;
  refreshToken: string;
};

export type SignupData = {
  email: string;
  password: string;
};

export type SigninData = {
  email: string;
  password: string;
};

export type FileData = {
  categoryId: string;
  comment: string;
  name: string;
  file: File;
  userId: string;
};

export type FileInfo = {
  categoryId: string;
  comment: string;
  name: string;
  fileName: string;
  updated_at: string;
  mimetype: string;
} & Entity;

export type CreateOrUpdateAccountDetailsData = {
  phone: string;
};

export type AccountDetailsData = CreateOrUpdateAccountDetailsData & {
  userId: string;
};

export type ChangeEmailData = {
  email: string;
};

export type ResetPasswordData = {
  email: string;
  password: string;
  code: string;
};

export type ChangePasswordData = {
  password: string;
};

export type EmailsPayload = {
  emails: string[];
};

export type ResetPasswordEmailPayload = {
  email: string;
};

export interface MediaInfo {
  id: string;
  name: string;
  context?: string;
  timestamp?: string | null;
  size?: number;
  mimetype: string;
  sessionId?: string;
  url?: string;
}

export interface FetchMediaInfosResponse {
  status: string;
  images: MediaInfo[];
  videos: unknown[];
}

export type ScoreRequestPayload = {
  currentUserId: string;
  targetUserId: string;
};
export interface API {
  authentication: {
    signup: (data: SignupData) => Promise<Tokens>;
    signupViewer: (data: SignupData) => Promise<Tokens>;
    signin: (data: SigninData) => Promise<Tokens>;
    logout: () => Promise<void>;
    changeEmail: (data: ChangeEmailData) => Promise<void>;
    changePassword: (data: ChangePasswordData) => Promise<void>;
    drop: () => Promise<void>;
    triggerResetPassword: (data: ResetPasswordEmailPayload) => Promise<void>;
    resetPassword: (data: ResetPasswordData) => Promise<void>;
    resendVerification: (data: { email: string }) => Promise<void>;
  };
  user: {
    getCurrent: () => Promise<any | any>;
    subscription: {
      // TODO: Change to DTO of Stripe.Checkout.Session
      triggerCheckoutSession: () => Promise<any>;
      // TODO: Change to DTO of Stripe.Checkout.Session
      triggerCheckoutStatus: () => Promise<any>;
      triggerCheckoutReset: () => Promise<void>;
      triggerPortalSession: () => Promise<string>;
    };
    kyc: {
      triggerCheckoutSession: () => Promise<void>;
      triggerCheckoutStatus: (viewerId?: string) => Promise<any>;
      triggerCheckoutReset: () => Promise<void>;
      fetchMediaInfos: () => Promise<FetchMediaInfosResponse>;
      fetchMediaById: (fileInfo: MediaInfo) => Promise<string>;
      getSessionDecision: (viewerId?: string) => Promise<any>;
    };
    files: {
      upload: (file: FileData) => Promise<FileInfo>;
      getFileInfoById: (id: string) => Promise<FileInfo>;
      update: (id: string, data: FileData) => Promise<FileInfo>;
      deleteById: (id: string) => Promise<void>;
      getFileById: (fileInfo: FileInfo) => Promise<void>;
      getAllFilesInfo: () => Promise<FileInfo[]>;
      sendCertificateEmail: (formData: FormData) => Promise<FileInfo>;
    };
    viewers: {
      inviteViewers: (data: EmailsPayload) => Promise<void>;
      manageInvites: (data: EmailsPayload) => Promise<void>;
    };
    bank: {
      housingPassScore: (
        reqPayload?: ScoreRequestPayload
      ) => Promise<TenantScoreReport>;
    };
  };
  accountDetails: {
    createAccountDetails: (
      data: CreateOrUpdateAccountDetailsData
    ) => Promise<AccountDetailsData>;
    getAccountDetails: () => Promise<CreateOrUpdateAccountDetailsData>;
    updateAccountDetails: (
      data: CreateOrUpdateAccountDetailsData
    ) => Promise<AccountDetailsData>;
    deleteAccountDetails: () => Promise<void>;
  };
  profileDetails: {
    createProfileDetails: (data: any) => Promise<any>;
    updateProfileDetails: (data: any) => Promise<any>;
    deleteProfileDetails: () => Promise<void>;
    getProfileDetails: () => Promise<any>;
  };
  bank: {
    getInstitutionsByCountryName: (
      countryName: string
    ) => Promise<Institution[]>;
    createLink: (data: any) => Promise<any>;
    getAccounts: (viewerId?: string) => Promise<any>;
    getTransactions: (accountId: string, viewerId?: string) => Promise<any>;
    getBalance: (accountId: string) => Promise<any>;
    getAccountDetails: (accountId: string) => Promise<any>;
    triggerCheckoutReset: () => Promise<void>;
    calculateScoring: (
      transaction: any[],
      viewerId?: string
    ) => Promise<ScoreData>;
  };
  contact: {
    sendMessage: (data: {
      name: string;
      email: string;
      message: string;
    }) => Promise<void>;
  };
  properties: {
    getMyProperties: (accessToken: string) => Promise<CreateProperty[]>;
    createProperty: (
      data: CreateProperty,
      accessToken: string
    ) => Promise<CreateProperty>;
    getPropertyById: (
      propertyId: string,
      accessToken: string
    ) => Promise<CreateProperty>;
    updateProperty: (
      propertyId: string,
      data: Partial<CreateProperty>,
      accessToken: string
    ) => Promise<CreateProperty>;
    deleteProperty: (
      propertyId: string,
      accessToken: string
    ) => Promise<{ message: string }>;
  };
  invites: {
    sendInvite: (data: {
      propertyId: string;
      email: string;
      name: string;
    }) => Promise<Invites>;
    getInvitesByProperty: (propertyId: string) => Promise<Invites>;
    resendInvite: (inviteId: string) => Promise<Invites>;
    acceptInvite: (inviteId: string) => Promise<Invites>;
    getInviteById: (inviteId: string) => Promise<InviteResponse>;
  };
  landlord: {
    addTenantToLandlord: (landlordId: string, tenantId: string) => Promise<any>;
    getLandlordWithTenants: (landlordId: string) => Promise<any>;
  };
  scores: {
    getScores: (currentUserId: string, targetUserId: string) => Promise<any>;
  };
}

export type RiskFreeRentalRange = {
  minRent: number;
  maxRent: number;
};

export type ScoreData = {
  totalScore: number;
  incomeToRentScore: number;
  employmentStabilityScore: number;
  debtToIncomeScore: number;
  rentalHistoryScore: number;
  savingsScore: number;
  grossMonthlyIncome: number;
  netMonthlyIncome: number;
  riskLevel: string;
  percentileRank: number;
  riskFreeRentalRange: {
    minRent: number;
    maxRent: number;
  };
  topInboundTransactions: [
    {
      transactionAmount: {
        amount: string;
        currency: string;
      };
      valueDate: string;
      bookingDate: string;
      remittanceInformationUnstructured: string;
      creditorName: string;
    },
    {
      transactionAmount: {
        amount: string;
        currency: string;
      };
      valueDate: string;
      bookingDate: string;
      remittanceInformationUnstructured: string;
      creditorName: string;
    },
    {
      transactionAmount: {
        amount: string;
        currency: string;
      };
      valueDate: string;
      bookingDate: string;
      remittanceInformationUnstructured: string;
      creditorName: string;
    }
  ];
};

export type Verification = {
  id: string;
  code: number;
  person: {
    gender: string | null;
    idNumber: string | null;
    lastName: string | null;
    firstName: string | null;
    citizenship: string | null;
    dateOfBirth: string | null;
    nationality: string | null;
    yearOfBirth: string | null;
    placeOfBirth: string | null;
    pepSanctionMatch: boolean | null;
  };
  reason: string | null;
  status: string;
  comments: string[];
  document: {
    type: string;
    state: string | null;
    number: string | null;
    country: string;
    validFrom: string | null;
    validUntil: string | null;
  };
  endUserId: string | null;
  reasonCode: string | null;
  vendorData: string;
  decisionTime: string;
  acceptanceTime: string;
  additionalVerifiedData: Record<string, unknown>;
};

export type Institution = {
  id: string;
  name: string;
  logo: string;
  bic: string;
  transaction_total_days: string;
  countries: Array<string>;
};

export type TenantScoreReport = {
  totalScore: number;
  incomeToRentScore: number;
  employmentStabilityScore: number;
  debtToIncomeScore: number;
  rentalHistoryScore: number;
  savingsScore: number;
  grossMonthlyIncome: number;
  netMonthlyIncome: number;
  riskLevel: "low" | "moderate" | "high";
  percentileRank: number;
  riskFreeRentalRange: {
    minRent: number;
    maxRent: number;
  };
};

export type CreateProperty = {
  id: any;
  propertyId: string;
  name: string;
  pmsId: string;
  fullAddress: string;
  ownerName: string;
  numberOfRooms: number;
  sizeInSquareMeters: number;
  maxNumberOfTenants: number;
  monthlyRent: number;
  availabilityDate: string;
  invites?: Invites[];
  createdAt?: Date;
  updatedAt?: Date;
};

export type Invites = {
  id: string;
  name: string;
  email: string;
  accepted: boolean;
  property?: {
    id: string;
  };
};

export type InviteResponse = {
  id: string;
  name: string;
  email: string;
  accepted: boolean;
  property: {
    id: string;
    name: string;
    address?: string;
  };
  password: boolean;
};
