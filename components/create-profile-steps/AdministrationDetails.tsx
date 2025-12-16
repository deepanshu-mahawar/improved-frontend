import { StepField } from "@/constants/type";
import { countries as countriesList } from "countries-list";
export const AdministrationDetailsTitle = "Administration details";

export const countries = Object.entries(countriesList).map(
  ([code, country]) => ({
    name: country.name,
    value: country.name,
  })
);

export const AdministrationDetailsFields: StepField[] = [
  {
    name: "currentAddress",
    label: "Current Address",
    type: "text",
  },
  {
    name: "dateOfBirth",
    label: "Date of Birth",
    type: "date",
  },
  {
    name: "countryOfOrigin",
    label: "Country of Origin",
    type: "select",
    options: countries,
  },
  {
    name: "numberOfOccupants",
    label: "Number of Occupants",
    type: "select",
    options: [
      { name: "0", value: "0" },
      { name: "1", value: "1" },
      { name: "2", value: "2" },
      { name: "3", value: "3" },
      { name: "4", value: "4" },
      { name: "5", value: "5" },
      { name: "6", value: "6" },
      { name: "7", value: "7" },
      { name: "8", value: "8" },
      { name: "9", value: "9" },
      { name: "10", value: "10" },
    ],
  },
  {
    name: "residencePermitId",
    label: "Residency Permit",
    type: "select",
    options: [
      { name: "permanent", value: "permanent" },
      { name: "temporary", value: "temporary" },
      { name: "restricted", value: "restricted" },
    ],
  },
  {
    name: "privateLiabilityEnsurance",
    label: "Do you have a valid private liability insurance?",
    type: "select",
    options: [
      { name: "Yes", value: true },
      { name: "No", value: false },
    ],
  },
];
