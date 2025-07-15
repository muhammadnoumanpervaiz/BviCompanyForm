import * as Yup from "yup"

export const companyValidationSchema = Yup.object({
  fullName: Yup.string()
    .min(2, "Full name must be at least 2 characters")
    .max(50, "Full name must be less than 50 characters")
    .required("Full name is required"),

  email: Yup.string().email("Please enter a valid email address").required("Email is required"),

  companyName: Yup.string()
    .min(2, "Company name must be at least 2 characters")
    .max(100, "Company name must be less than 100 characters")
    .matches(/^[a-zA-Z0-9\s]+$/, "Company name can only contain letters, numbers, and spaces")
    .required("Company name is required"),

  alternativeCompanyName: Yup.string()
    .min(0, "Alternative company name is optional")
    .max(100, "Alternative company name must be less than 100 characters")
    .matches(/^[a-zA-Z0-9\s]*$/, "Alternative company name can only contain letters, numbers, and spaces"),

  companyDesignation: Yup.string().required("Company designation is required"),

  jurisdictionOfOperation: Yup.string().required("Jurisdiction of operation is required"),

  targetJurisdictions: Yup.string().required("Target jurisdictions are required"),

  numberOfShares: Yup.string().required("Number of shares is required"),

  areAllSharesIssued: Yup.string()
    .oneOf(["yes", "no"], "Please select either Yes or No")
    .required("Please specify if all shares are issued"),

  numberOfIssuedShares: Yup.string().when("areAllSharesIssued", {
    is: "no",
    then: (schema) =>
      schema
        .required("Number of issued shares is required when not all shares are issued")
        .matches(/^\d+$/, "Must be a valid number")
        .test("positive", "Must be a positive number", (value) => {
          return value ? Number.parseInt(value) > 0 : false
        }),
    otherwise: (schema) => schema.notRequired(),
  }),

  valuePerShares: Yup.string().required("Value per shares is required"),
})
