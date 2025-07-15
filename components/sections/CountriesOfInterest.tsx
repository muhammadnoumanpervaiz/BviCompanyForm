import { Field } from "formik"
import FormSection from "@/components/ui/FormSection"
import SelectField from "@/components/ui/SelectField"

const jurisdictionOptions = [
  { value: "bvi", label: "British Virgin Islands" },
  { value: "cayman", label: "Cayman Islands" },
  { value: "bermuda", label: "Bermuda" },
  { value: "bahamas", label: "Bahamas" },
  { value: "seychelles", label: "Seychelles" },
  { value: "panama", label: "Panama" },
]

const targetJurisdictionOptions = [
  { value: "us", label: "United States" },
  { value: "uk", label: "United Kingdom" },
  { value: "eu", label: "European Union" },
  { value: "asia", label: "Asia Pacific" },
  { value: "canada", label: "Canada" },
  { value: "australia", label: "Australia" },
  { value: "middle-east", label: "Middle East" },
]

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
              options={jurisdictionOptions}
              error={meta.touched && meta.error}
              required
              {...field}
            />
          )}
        </Field>

        <Field name="targetJurisdictions">
          {({ field, meta }: any) => (
            <SelectField
              label="Target jurisdictions"
              placeholder="Select the countries where your clients are located"
              options={targetJurisdictionOptions}
              error={meta.touched && meta.error}
              required
              {...field}
            />
          )}
        </Field>
      </div>
    </FormSection>
  )
}
