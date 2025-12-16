import { StepField } from "@/constants/type";

export const AdditionalFinancialInformationTitle =
  "Additional financial information";

export const AdditionalFinancialInformationFields: StepField[] = [
  {
    name: "bankruptcyProceedings",
    label: "Are there any bankruptcy proceeding against you?",
    type: "select",
    options: [
      { name: "Yes", value: true },
      { name: "No", value: false },
    ],
  },
  {
    name: "paymentObligations",
    label:
      "Are there any payment obligations from credits or maintenance obligation?",
    type: "select",
    options: [
      { name: "Yes", value: true },
      { name: "No", value: false },
    ],
  },
  {
    name: "isThereForeclosure",
    label: "Is there a foreclosure against you?",
    type: "select",
    options: [
      { name: "Yes", value: true },
      { name: "No", value: false },
    ],
  },
  {
    name: "swornAffidavit",
    label: "Did you have to make a sworn affidavit?",
    type: "select",
    options: [
      { name: "Yes", value: true },
      { name: "No", value: false },
    ],
  },
];
