import { SectionName } from "@/constants/constant";
import * as Yup from "yup";

export const signInValues = {
  email: "",
  password: "",
};

export const signUpValues = {
  name: "",
  email: "",
  password: "",
};

export const signInSchema = Yup.object({
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string()
    .min(6, "Must be at least 6 characters")
    .required("Required"),
});

export const signUpSchema = Yup.object({
  email: Yup.string().email("Invalid email").required("Required"),
  password: Yup.string()
    .min(6, "Must be at least 6 characters")
    .required("Required"),
});

export const PrivateDetailsSchema = Yup.object({
  aboutMyself: Yup.string().required("This is required"),
  maritalStatusId: Yup.string().required("Marital status is required."),
  numberOfChildren: Yup.string().required("Number of children is required."),
  educationalLevelId: Yup.string().required("Education level is required."),
  smokingHabitId: Yup.string().required("Smoking habit is required."),
  universityName: Yup.string().required("University name is required."),
  havePet: Yup.boolean().required("Pet owenership is required."),
});

export const AdministrationDetailsSchema = Yup.object({
  currentAddress: Yup.string().required("Current address is required."),
  dateOfBirth: Yup.date()
    .max(
      new Date(Date.now() - 86400000),
      "Date of birth cannot be today or in the future"
    )
    .required("Date of birth is required"),
  countryOfOrigin: Yup.string().required("Country of origin is required."),
  numberOfOccupants: Yup.string().required("Number of occupants is required."),
  residencePermitId: Yup.string().required("Residence permit id is required."),
  privateLiabilityEnsurance: Yup.bool().required(
    "Please mention if you have liability insurance."
  ),
});

export const FinancialDetailsSchema = Yup.object({
  employmentStatusId: Yup.string().required("Employment Id"),
  occupationOrJobTitle: Yup.string().required("Current Job Title"),
  employerName: Yup.string().required("Employer Name"),
  averageMonthlySalaryOrIncome: Yup.number()
    .positive()
    .required("Monthly Income is required."),
  nameOfPreviousLandlord: Yup.string().required("Name of landlord"),
  durationOfPreviousRentalContract: Yup.string().required(
    "Duration of contract"
  ),
  monthlyRentPaidPrevious: Yup.number()
    .positive()
    .required("Monthly rent paid is required."),
  emailOfPreviousLandlord: Yup.string()
    .email("Email is not valid")
    .required("Email of landlord is required."),
  addressOfRentedProperty: Yup.string().required(
    "Address of rented property is required."
  ),
});

export const AdditionalFinancialInformationSchema = Yup.object({
  isThereForeclosure: Yup.boolean().required("This is required"),
  bankruptcyProceedings: Yup.boolean().required("This is required"),
  swornAffidavit: Yup.boolean().required("This is required"),
  paymentObligations: Yup.boolean().required("This is required"),
});

export const validationSchema = Yup.object({
  aboutMyself: Yup.string().required("This is required"),
  addressOfRentedProperty: Yup.string().required("This is required"),
  averageMonthlySalaryOrIncome: Yup.number()
    .positive()
    .required("This is required"),
  bankruptcyProceedings: Yup.string().required("This is required"),
  countryOfOrigin: Yup.string().required("This is required"),
  currentAddress: Yup.string().required("This is required"),
  durationOfPreviousRentalContract: Yup.string().required("This is required"),
  educationalLevelId: Yup.string().required("This is required"),
  employerName: Yup.string().required("This is required"),
  employmentStatusId: Yup.string().required("This is required"),
  isThereForeclosure: Yup.boolean().required("This is required"),
  maritalStatusId: Yup.string().required("This is required"),
  monthlyRentPaidPrevious: Yup.number().positive().required("This is required"),
  nameOfPreviousLandlord: Yup.string().required("This is required"),
  numberOfChildren: Yup.string().required("This is required"),
  numberOfOccupants: Yup.string().required("This is required"),
  occupationOrJobTitle: Yup.string().required("This is required"),
  paymentObligations: Yup.boolean().required("This is required"),
  privateLiabilityEnsurance: Yup.string().required("This is required"),
  residencePermitId: Yup.string().required("This is required"),
  smokingHabitId: Yup.string().required("This is required"),
  swornAffidavit: Yup.boolean().required("This is required"),
  universityName: Yup.string().required("This is required"),
  haveChildren: Yup.boolean().required("This is required"),
  havePet: Yup.boolean().required("This is required"),
  previousRentalExperience: Yup.boolean().required("This is required"),
  referenceLetterFromPreviousLandlord:
    Yup.boolean().required("This is required"),
});

export const validationSchemas: Partial<Record<SectionName, any>> = {
  [SectionName.AdministrationDetails]: Yup.object({
    currentAddress: Yup.string().required("Current address is required."),
    dateOfBirth: Yup.date().required("Date of birth is required."),
    countryOfOrigin: Yup.string().required("Country of origin is required."),
    numberOfOccupants: Yup.string().required(
      "Number of occupants is required."
    ),
    residencePermitId: Yup.string().required(
      "Residence permit id is required."
    ),
    privateLiabilityEnsurance: Yup.bool().required(
      "Please mention if you have liability insurance."
    ),
  }),
  [SectionName.PrivateDetails]: Yup.object({
    aboutMyself: Yup.string().required("This is required"),
    maritalStatusId: Yup.string().required("Marital status is required."),
    numberOfChildren: Yup.string().required("Number of children is required."),
    educationalLevelId: Yup.string().required("Education level is required."),
    smokingHabitId: Yup.string().required("Smoking habit is required."),
    universityName: Yup.string().required("University name is required."),
    havePet: Yup.boolean().required("Pet owenership is required."),
  }),
  [SectionName.FinancialDetails]: Yup.object({
    employmentStatusId: Yup.string().required("Employment Id"),
    occupationOrJobTitle: Yup.string().required("Current Job Title"),
    employerName: Yup.string().required("Employer Name"),
    averageMonthlySalaryOrIncome: Yup.number()
      .positive()
      .required("Monthly Income is required."),
    nameOfPreviousLandlord: Yup.string().required("Name of landlord"),
    durationOfPreviousRentalContract: Yup.string().required(
      "Duration of contract"
    ),
    monthlyRentPaidPrevious: Yup.number()
      .positive()
      .required("Monthly rent paid is required."),
    emailOfPreviousLandlord: Yup.string()
      .email("Email is not valid")
      .required("Email of landlord is required."),
    addressOfRentedProperty: Yup.string().required(
      "Address of rented property is required."
    ),
  }),
  [SectionName.AdditionalFinancialInformation]: Yup.object({
    isThereForeclosure: Yup.boolean().required("This is required"),
    bankruptcyProceedings: Yup.string().required("This is required"),
    swornAffidavit: Yup.boolean().required("This is required"),
    paymentObligations: Yup.boolean().required("This is required"),
  }),
};
