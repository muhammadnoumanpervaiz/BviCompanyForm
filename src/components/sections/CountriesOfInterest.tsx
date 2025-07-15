import { Field } from "formik"
import FormSection from "../ui/FormSection"
import SelectField from "../ui/SelectField"

export default function CountriesOfInterest() {
  return (
    <FormSection
      title="Countries of interest"
      description="We are required to check that the company will not be interacting with forbidden locations. For 'jurisdiction of operation' if you are alone, select your country of residency. If you have more shareholders, pick the most relevant. For 'target jurisdiction' select 1-3 countries that are relevant. Even if you will have clients from other countries, it's ok."
    >
      <div className="space-y-6">
        <Field name="jurisdictionOfOperation">
          {({ field, meta }: any) => (
            <SelectField
              label="Jurisdiction of operation"
              placeholder="Select the country where you are located"
              {...field}
            />
          )}
        </Field>

        <Field name="targetJurisdictions">
          {({ field, meta }: any) => (
            <SelectField
              label="Target jurisdictions"
              placeholder="Select the countries where your clients are located"
              {...field}
            />
          )}
        </Field>
      </div>
    </FormSection>
  )
}
