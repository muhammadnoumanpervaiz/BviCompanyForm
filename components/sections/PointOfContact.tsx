import { Field } from "formik"
import FormSection from "@/components/ui/FormSection"
import InputField from "@/components/ui/InputField"
import { CheckCircle, XCircle } from "lucide-react"

export default function PointOfContact() {
  return (
    <FormSection
      title="Point of contact"
      description="This is the individual that we will communicate with. Communications related to this form but also to the company once incorporated will be sent to the same email address. You can change it later on if required."
    >
      <div className="grid grid-cols-2 gap-8">
        <Field name="fullName">
          {({ field, meta }: any) => (
            <InputField
              label="Full name"
              placeholder="Enter your full name"
              icon={meta.touched && !meta.error ? CheckCircle : undefined}
              iconColor="text-green-500"
              error={meta.touched && meta.error}
              required
              {...field}
            />
          )}
        </Field>

        <Field name="email">
          {({ field, meta }: any) => (
            <InputField
              label="Email"
              type="email"
              placeholder="Enter your email address"
              icon={meta.touched && meta.error ? XCircle : meta.touched && !meta.error ? CheckCircle : undefined}
              iconColor={meta.touched && meta.error ? "text-red-500" : "text-green-500"}
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
