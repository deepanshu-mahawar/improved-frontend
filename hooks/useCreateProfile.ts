"use client";

import { useEffect, useState } from "react";

import { useRouter } from "next/navigation";

import {
  localStorageUtils,
  LocalStorageKeys,
} from "@/utils/local_storage_utils";

import {
  AdditionalFinancialInformationSchema,
  AdministrationDetailsSchema,
  FinancialDetailsSchema,
  PrivateDetailsSchema,
} from "@/schemas/schema";

import { routes } from "@/lib/route";
import { useCreateProfileDetails } from "@/api/query_hooks";
import { useSnackBar } from "./useSnackbar";
import { StepField } from "@/constants/type";
import {
  PrivateDetailsFields,
  PrivateDetailsTitle,
} from "@/components/create-profile-steps/PrivateDetails";
import {
  AdministrationDetailsFields,
  AdministrationDetailsTitle,
} from "@/components/create-profile-steps/AdministrationDetails";
import {
  FinancialDetailsFields,
  FinancialDetailsTitle,
} from "@/components/create-profile-steps/FinanceDetails";
import {
  AdditionalFinancialInformationFields,
  AdditionalFinancialInformationTitle,
} from "@/components/create-profile-steps/AdditionalFinanceInfo";

type StepConfig = {
  title: string;
  fields: StepField[];
  validationSchema: any;
};

const steps: StepConfig[] = [
  {
    title: PrivateDetailsTitle,
    fields: PrivateDetailsFields,
    validationSchema: PrivateDetailsSchema,
  },
  {
    title: AdministrationDetailsTitle,
    fields: AdministrationDetailsFields,
    validationSchema: AdministrationDetailsSchema,
  },
  {
    title: FinancialDetailsTitle,
    fields: FinancialDetailsFields,
    validationSchema: FinancialDetailsSchema,
  },
  {
    title: AdditionalFinancialInformationTitle,
    fields: AdditionalFinancialInformationFields,
    validationSchema: AdditionalFinancialInformationSchema,
  },
];

export const initialProfileValues = steps.reduce((acc, curr) => {
  curr.fields.forEach((field) => {
    acc[field.name] = "";
  });
  return acc;
}, {} as Record<string, string>);

export const useCreateProfile = () => {
  const savedStep =
    localStorageUtils.getItem<number>(LocalStorageKeys.CREATE_PROFILE_STEP) ??
    0;
  const [step, setStep] = useState(savedStep);

  useEffect(() => {
    localStorageUtils.setItem(LocalStorageKeys.CREATE_PROFILE_STEP, step);
  }, [step]);

  const currentStep = steps[step];
  const isLastStep = step === steps.length - 1;
  const router = useRouter();

  const { mutateAsync: createProfileDetails, isPending } =
    useCreateProfileDetails();

  const sendNotification = useSnackBar();

  const savedValues =
    localStorageUtils.getItem<Record<string, string>>(
      LocalStorageKeys.CREATE_PROFILE_VALUES
    ) || {};
  const mergedInitialValues = { ...initialProfileValues, ...savedValues };

  const handleStepSubmit = async (values: Record<string, string>) => {
    if (isLastStep) {
      await handleProfileSubmit(values);
    } else {
      const prevValues =
        localStorageUtils.getItem<Record<string, string>>(
          LocalStorageKeys.CREATE_PROFILE_VALUES
        ) || {};

      const filledFields: Record<string, string> = {};
      currentStep.fields.forEach((field) => {
        const val = values[field.name];
        if (val !== "" && val !== undefined && val !== null) {
          filledFields[field.name] = val;
        }
      });

      const newData = { ...prevValues, ...filledFields };
      localStorageUtils.setItem(
        LocalStorageKeys.CREATE_PROFILE_VALUES,
        newData
      );

      setStep((prev) => prev + 1);
    }
  };

  const handleProfileSubmit = async (values: Record<string, string>) => {
    const payload = {
      ...values,
      haveChildren: Boolean(values?.numberOfChildren),
      previousRentalExperience: false,
      referenceLetterFromPreviousLandlord: false,
    };

    try {
      await createProfileDetails(payload);
      sendNotification("Profile created successfully", "success");

      setTimeout(() => {
        localStorageUtils.removeItem(LocalStorageKeys.CREATE_PROFILE_VALUES);
        localStorageUtils.removeItem(LocalStorageKeys.CREATE_PROFILE_STEP);
      }, 3000);

      router.replace(routes.dashboard);
    } catch (error) {
      console.error("Error while submitting profile:", error);
    }
  };

  return {
    step,
    steps,
    initialValues: mergedInitialValues,
    handleStepSubmit,
    currentStep,
    isLastStep,
    setStep,
    isLoading: isPending,
  };
};
