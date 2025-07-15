import { Field } from "formik"
import FormSection from "../ui/FormSection"
import SelectField from "../ui/SelectField"
import InputField from "../ui/InputField"
import RadioGroup from "../ui/RadioGroup"

export default function SharesStructure() {
  return (
    <FormSection
      title="Shares structure"
      description="All companies must have at least 1 share. Apart from that, you can structure things in whatever way you like. Issued shares are shares that will be distributed from day 1. Unissued shares are shares that you can distribute later on, i.e. to future team members or investors. The value per shares represents your personal liability, so, if you wish to reduce risks, just pick the smallest number."
    >
      <div className="space-y-6">
        <Field name="numberOfShares">
          {({ field, meta }: any) => (
            <SelectField label="Number of shares" placeholder="Select how many shares you wish to have" {...field} />
          )}
        </Field>

        <Field name="areAllSharesIssued">
          {({ field, meta }: any) => (
            <RadioGroup
              label="Are all shares issued?"
              name="areAllSharesIssued"
              options={[
                { value: "yes", label: "Yes" },
                { value: "no", label: "No" },
              ]}
              {...field}
            />
          )}
        </Field>

        <Field name="numberOfIssuedShares">
          {({ field, meta }: any) => (
            <InputField
              label="Number of issued shares"
              placeholder="Write how many shares you wish to issue on day 1"
              {...field}
            />
          )}
        </Field>

        <Field name="valuePerShares">
          {({ field, meta }: any) => (
            <SelectField label="Value per shares" placeholder="Select how much each share is worth" {...field} />
          )}
        </Field>
      </div>
    </FormSection>
  )
}
