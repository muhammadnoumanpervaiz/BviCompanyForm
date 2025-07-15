import { Field } from "formik"
import FormSection from "../ui/FormSection"
import InputField from "../ui/InputField"
import SelectField from "../ui/SelectField"

export default function CompanyInformation() {
  return (
    <FormSection
      title="Company information"
      description="Every company must have a name and a deisgnation. For the company name you can use both letters and numbers, but not special symbols. For the designations, there is no actual different between one or another."
    >
      <div className="space-y-6">
        <Field name="companyName">
          {({ field, meta }: any) => (
            <InputField label="Company name" placeholder="The name you want your company to have" {...field} />
          )}
        </Field>

        <Field name="alternativeCompanyName">
          {({ field, meta }: any) => (
            <InputField
              label="Alternative company name"
              placeholder="The name to use if the first name is not available"
              {...field}
            />
          )}
        </Field>

        <Field name="companyDesignation">
          {({ field, meta }: any) => (
            <SelectField label="Company designation" placeholder="Select the option that you prefer" {...field} />
          )}
        </Field>
      </div>
    </FormSection>
  )
}
