import { StepField } from "@/constants/type";

export const FinancialDetailsTitle = "Financial details";

export const FinancialDetailsFields: StepField[] = [
  {
    name: "employmentStatusId",
    label: "Employment Status",
    type: "select",
    options: [
      { name: "Unemployed", value: "Unemployed" },
      { name: "Employed", value: "Employed" },
      { name: "Student", value: "Student" },
      { name: "Freelancer", value: "Freelancer" },
      { name: "SelfEmployed", value: "SelfEmployed" },
      { name: "Retired", value: "Retired" },
    ],
  },
  {
    name: "occupationOrJobTitle",
    label: "Occupation / Job title",
    type: "text",
  },
  {
    name: "employerName",
    label: "Employer Name",
    type: "text",
  },
  {
    name: "averageMonthlySalaryOrIncome",
    label: "Average monthly Salary or Income",
    type: "number",
  },
  {
    name: "nameOfPreviousLandlord",
    label: "Name of Previous Landlord",
    type: "text",
  },
  {
    name: "emailOfPreviousLandlord",
    label: "Email of Previous Landlord",
    type: "text",
  },
  {
    name: "addressOfRentedProperty",
    label: "Address of Previous Rented Property",
    type: "text",
  },
  {
    name: "durationOfPreviousRentalContract",
    label: "Duration of Previous Rental Contract",
    type: "text",
  },
  {
    name: "monthlyRentPaidPrevious",
    label: "Previous Monthly Rent Paid",
    type: "number",
  },
];
