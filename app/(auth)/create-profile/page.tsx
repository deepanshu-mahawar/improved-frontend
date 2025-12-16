"use client";

import { useEffect, useState } from "react";

import { Box, Checkbox, Step, StepLabel, Typography } from "@mui/material";
import { Select, MenuItem } from "@mui/material";
import { Formik, Form, ErrorMessage } from "formik";

import { useCreateProfile } from "./useCreateProfile";
import { Tooltip } from "@mui/material";

import theme from "@/theme/theme";
import {
  localStorageUtils,
  LocalStorageKeys,
} from "@/utils/local_storage_utils";
import { useTranslations } from "next-intl";
import { CustomStepIcon } from "@/components/common/CustomStep";
import { AddressAutocomplete } from "@/components/common/AddressAutoComplete";
import {
  MainSection,
  FormTitle,
  Description,
  FormWrapper,
  ErrorText,
  Button,
  SubFormContainer,
  Wrapper,
  InputFieldLabel,
  InputField,
  InputFieldWrapper,
  ProfileFormStepper,
  CreateProfileFormContainer,
  CreateProfileButtonContainer,
} from "../styled";

export default function CreateProfilePage() {
  const {
    step,
    steps,
    initialValues,
    handleStepSubmit,
    currentStep,
    isLastStep,
    setStep,
    isLoading,
  } = useCreateProfile();

  const [isChecked, setIsChecked] = useState(false);
  const t = useTranslations("createProfile");

  return (
    <MainSection>
      <CreateProfileFormContainer>
        <ProfileFormStepper activeStep={step} alternativeLabel>
          {steps.map((section: any, index: any) => (
            <Step key={index}>
              <StepLabel StepIconComponent={CustomStepIcon}>
                {section.title}
              </StepLabel>
            </Step>
          ))}
        </ProfileFormStepper>

        <SubFormContainer>
          <Wrapper>
            <FormTitle>{t("title")}</FormTitle>
            <Description>{t("description")}</Description>
          </Wrapper>

          <Formik
            key={step}
            initialValues={initialValues}
            validationSchema={currentStep.validationSchema}
            enableReinitialize
            onSubmit={handleStepSubmit}
          >
            {(formik) => (
              <FormWrapperInner
                formik={formik}
                currentStep={currentStep}
                isLastStep={isLastStep}
                isChecked={isChecked}
                setIsChecked={setIsChecked}
                step={step}
                setStep={setStep}
                isLoading={isLoading}
              />
            )}
          </Formik>
        </SubFormContainer>
      </CreateProfileFormContainer>
    </MainSection>
  );
}
const FormWrapperInner = ({
  formik,
  currentStep,
  isLastStep,
  isChecked,
  setIsChecked,
  step,
  setStep,
  isLoading,
}: any) => {
  const { values, handleChange, handleBlur, touched, errors } = formik;

  useEffect(() => {
    const prevValues =
      localStorageUtils.getItem<Record<string, string>>(
        LocalStorageKeys.CREATE_PROFILE_VALUES
      ) || {};

    const filledFields: Record<string, string> = {};
    currentStep.fields.forEach((field: any) => {
      const val = values[field.name];
      if (val !== "" && val !== undefined && val !== null) {
        filledFields[field.name] = val;
      }
    });

    const newData = { ...prevValues, ...filledFields };
    localStorageUtils.setItem(LocalStorageKeys.CREATE_PROFILE_VALUES, newData);
  }, [values, currentStep.fields]);

  return (
    <Form>
      <FormWrapper>
        <FormTitle>{currentStep.title}</FormTitle>
        {currentStep.fields.map((field: any) => (
          <InputFieldWrapper key={field.name}>
            <InputFieldLabel htmlFor={field.name}>
              {field.label}
            </InputFieldLabel>
            {field.name === "currentAddress" ? (
              <AddressAutocomplete
                name={field.name}
                //@ts-ignore
                value={values[field.name]}
                onChange={(name, value) => {
                  handleChange({ target: { name, value } });
                }}
                disabled={false}
              />
            ) : field.name === "aboutMyself" && field.type === "textarea" ? (
              <Tooltip
                title="the tenant should write 2-3 sentences about him here"
                arrow
                placement="top"
              >
                <InputField
                  as="textarea"
                  id={field.name}
                  name={field.name}
                  value={values[field.name]}
                  onChange={(event: React.ChangeEvent<HTMLTextAreaElement>) => {
                    const value = event.target.value;
                    const words = value.trim().split(/\s+/);
                    const wordLimit = 50;

                    if (value === "" || words.length <= wordLimit) {
                      handleChange(event);
                    }
                  }}
                  onBlur={handleBlur}
                  $hasError={touched[field.name] && !!errors[field.name]}
                />
              </Tooltip>
            ) : field.type === "textarea" ? (
              <InputField
                as="textarea"
                id={field.name}
                name={field.name}
                value={values[field.name]}
                onChange={(event: React.ChangeEvent<HTMLTextAreaElement>) => {
                  const value = event.target.value;
                  const words = value.trim().split(/\s+/);
                  const wordLimit = 50;

                  if (value === "" || words.length <= wordLimit) {
                    handleChange(event);
                  }
                }}
                onBlur={handleBlur}
                $hasError={touched[field.name] && !!errors[field.name]}
              />
            ) : field.type === "select" ? (
              <>
                <Select
                  labelId={`${field.name}-label`}
                  id={field.name}
                  name={field.name}
                  value={values[field.name]}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  sx={{
                    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
                      borderColor: theme.color.primary.mainPrimary,
                      borderWidth: "1px",
                      borderStyle: "solid",
                    },
                    fontSize: "13px",
                    fontWeight: "400",
                  }}
                  MenuProps={{
                    PaperProps: {
                      sx: {
                        maxHeight: field.name === "countryOfOrigin" ? 200 : 300,
                      },
                    },
                  }}
                >
                  <MenuItem value="" sx={{ fontSize: "13px" }}>
                    <em>Not Selected</em>
                  </MenuItem>
                  {field.options?.map((option: any) => (
                    <MenuItem
                      key={`${field.name}-${option.name}`}
                      value={option.value}
                      title={option.name}
                      data-name={option.name}
                      sx={{
                        fontSize: "13px",
                      }}
                    >
                      {option.name}
                    </MenuItem>
                  ))}
                </Select>
              </>
            ) : (
              <InputField
                as="input"
                id={field.name}
                name={field.name}
                type={field.type}
                value={values[field.name]}
                onChange={handleChange}
                onBlur={handleBlur}
                $hasError={touched[field.name] && !!errors[field.name]}
                {...(field.name === "dateOfBirth" && {
                  max: new Date(Date.now() - 86400000)
                    .toISOString()
                    .split("T")[0],
                })}
              />
            )}
            <ErrorMessage name={field.name} component={ErrorText} />
          </InputFieldWrapper>
        ))}
      </FormWrapper>

      <CreateProfileButtonContainer>
        {isLastStep && (
          <Box sx={{ display: "flex", alignItems: "center" }}>
            <Checkbox
              checked={isChecked}
              onChange={(e) => setIsChecked(e.target.checked)}
              sx={{
                color: `${theme.color.primary.mainPrimary}`,
                "&.Mui-checked": {
                  color: `${theme.color.primary.mainPrimary}`,
                },
              }}
            />
            <Typography sx={{ fontSize: "14px" }}>
              I hereby guarantee that all data is correct.
            </Typography>
          </Box>
        )}

        <Box sx={{ display: "flex", gap: "10px" }}>
          {step > 0 && (
            <Button
              type="button"
              onClick={() => setStep((step: number) => step - 1)}
            >
              Back
            </Button>
          )}

          {isLastStep ? (
            <Button type="submit" $disabled={!isChecked}>
              Submit
            </Button>
          ) : (
            <Button>Next</Button>
          )}
        </Box>
      </CreateProfileButtonContainer>
    </Form>
  );
};
