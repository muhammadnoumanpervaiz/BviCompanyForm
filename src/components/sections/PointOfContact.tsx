import { Field } from "formik"
import FormSection from "../ui/FormSection"
import InputField from "../ui/InputField"
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
            <InputField label="Full name" icon={CheckCircle} iconColor="text-green-500" {...field} />
          )}
        </Field>

        <Field name="email">
          {({ field, meta }: any) => (
            <div>
              <InputField
                label="Email"
                type="email"
                icon={XCircle}
                iconColor="text-red-500"
                hasError={true}
                {...field}
              />
              <p className="text-red-400 text-sm mt-2">The email suggested is not valid. Please provide another one.</p>
            </div>
          )}
        </Field>
      </div>
    </FormSection>
  )
}
