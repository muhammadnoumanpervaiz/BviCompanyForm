"use client"

import { Field } from "formik"
import FormSection from "@/components/ui/FormSection"
import SelectField from "@/components/ui/SelectField"
import InputField from "@/components/ui/InputField"
import RadioGroup from "@/components/ui/RadioGroup"

const shareOptions = [
  { value: "100", label: "100 shares" },
  { value: "1000", label: "1,000 shares" },
  { value: "10000", label: "10,000 shares" },
  { value: "50000", label: "50,000 shares" },
  { value: "100000", label: "100,000 shares" },
]

const valuePerShareOptions = [
  { value: "0.01", label: "$0.01 per share" },
  { value: "0.10", label: "$0.10 per share" },
  { value: "1.00", label: "$1.00 per share" },
  { value: "10.00", label: "$10.00 per share" },
  { value: "100.00", label: "$100.00 per share" },
]

interface SharesStructureProps {
  setFieldValue: (field: string, value: any) => void
}

export default function SharesStructure({ setFieldValue }: SharesStructureProps) {
  return (
    <FormSection
      title="Shares structure"
      description="All companies must have at least 1 share. Apart from that, you can structure things in whatever way you like. Issued shares are shares that will be distributed from day 1. Unissued shares are shares that you can distribute later on, i.e. to future team members or investors. The value per shares represents your personal liability, so, if you wish to reduce risks, just pick the smallest number."
    >
      <div className="space-y-6">
        <Field name="numberOfShares">
          {({ field, meta }: any) => (
            <SelectField
              label="Number of shares"
              placeholder="Select how many shares you wish to have"
              options={shareOptions}
              error={meta.touched && meta.error}
              required
              {...field}
            />
          )}
        </Field>

        <Field name="areAllSharesIssued">
          {({ field, meta, form }: any) => (
            <RadioGroup
              label="Are all shares issued?"
              name="areAllSharesIssued"
              options={[
                { value: "yes", label: "Yes" },
                { value: "no", label: "No" },
              ]}
              value={form.values.areAllSharesIssued}
              onChange={(value) => {
                setFieldValue("areAllSharesIssued", value)
                // Clear the numberOfIssuedShares when "yes" is selected
                if (value === "yes") {
                  setFieldValue("numberOfIssuedShares", "")
                }
              }}
              error={meta.touched && meta.error}
              required
            />
          )}
        </Field>

        <Field name="numberOfIssuedShares">
          {({ field, meta, form }: any) => (
            <InputField
              label="Number of issued shares"
              placeholder="Write how many shares you wish to issue on day 1"
              error={meta.touched && meta.error}
              disabled={form.values.areAllSharesIssued === "yes"}
              required={form.values.areAllSharesIssued === "no"}
              {...field}
            />
          )}
        </Field>

        <Field name="valuePerShares">
          {({ field, meta }: any) => (
            <SelectField
              label="Value per shares"
              placeholder="Select how much each share is worth"
              options={valuePerShareOptions}
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
