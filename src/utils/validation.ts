import * as Yup from "yup"

export const companyValidationSchema = Yup.object({
  fullName: Yup.string().required("Full name is required"),
  email: Yup.string().email("Invalid email").required("Email is required"),
  companyName: Yup.string().required("Company name is required"),
  alternativeCompanyName: Yup.string(),
  companyDesignation: Yup.string().required("Company designation is required"),
  jurisdictionOfOperation: Yup.string().required("Jurisdiction of operation is required"),
  targetJurisdictions: Yup.string().required("Target jurisdictions are required"),
  numberOfShares: Yup.string().required("Number of shares is required"),
  areAllSharesIssued: Yup.string().required("Please specify if all shares are issued"),
  numberOfIssuedShares: Yup.string().when("areAllSharesIssued", {
    is: "no",
    then: (schema) => schema.required("Number of issued shares is required"),
    otherwise: (schema) => schema,
  }),
  valuePerShares: Yup.string().required("Value per shares is required"),
})
