import { StepField } from "@/constants/type";

export const PrivateDetailsTitle = "Private details";

export const PrivateDetailsFields: StepField[] = [
  {
    name: "name",
    label: "Name",
    type: "text",
  },
  {
    name: "aboutMyself",
    label: "Introduce Yourself",
    type: "textarea",
  },
  {
    name: "maritalStatusId",
    label: "Marital Status",
    type: "select",
    options: [
      { name: "Single", value: "Single" },
      { name: "Married", value: "Married" },
      { name: "Divorced", value: "Divorced" },
      { name: "Widowed", value: "Widowed" },
    ],
  },
  {
    name: "numberOfChildren",
    label: "Number of Children",
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
    name: "educationalLevelId",
    label: "Education Level",
    type: "select",
    options: [
      { name: "HighSchool", value: "HighSchool" },
      { name: "Bachelors", value: "Bachelors" },
      { name: "Master", value: "Master" },
      { name: "PhD", value: "PhD" },
      { name: "Other", value: "Other" },
    ],
  },
  {
    name: "smokingHabitId",
    label: "Smoking Habits",
    type: "select",
    options: [
      {
        name: "Non Smoker",
        value: "NonSmoker",
      },
      {
        name: "Occasional",
        value: "Occasional",
      },
      {
        name: "Regular",
        value: "Regular",
      },
    ],
  },
  {
    name: "universityName",
    label: "University Name",
    type: "text",
  },
  {
    name: "havePet",
    label: "Pet Ownership",
    type: "select",
    options: [
      { name: "NotSelected", value: "" },
      { name: "Yes", value: true },
      { name: "No", value: false },
    ],
  },
];
