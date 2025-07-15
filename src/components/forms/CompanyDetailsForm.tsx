"use client"

import { useState } from "react"
import { Formik, Form } from "formik"
import FormHeader from "../ui/FormHeader"
import StepIndicator from "../ui/StepIndicator"
import PointOfContact from "../sections/PointOfContact"
import CompanyInformation from "../sections/CompanyInformation"
import CountriesOfInterest from "../sections/CountriesOfInterest"
import SharesStructure from "../sections/SharesStructure"
import FormActions from "../ui/FormActions"
import type { CompanyFormData } from "../../types/form"
import { companyValidationSchema } from "../../utils/validation"

const initialValues: CompanyFormData = {
  fullName: "Stefano Covolan",
  email: "korporatio@email.com",
  companyName: "",
  alternativeCompanyName: "",
  companyDesignation: "",
  jurisdictionOfOperation: "",
  targetJurisdictions: "",
  numberOfShares: "",
  areAllSharesIssued: "",
  numberOfIssuedShares: "",
  valuePerShares: "",
}

export default function CompanyDetailsForm() {
  const [currentStep] = useState(1)
  const [isSaving, setIsSaving] = useState(false)

  const handleSubmit = async (values: CompanyFormData) => {
    console.log("Form submitted:", values)
    await new Promise((resolve) => setTimeout(resolve, 1000))
  }

  const handleSaveAndExit = async (values: CompanyFormData) => {
    setIsSaving(true)
    console.log("Saving and exiting:", values)
    await new Promise((resolve) => setTimeout(resolve, 1000))
    setIsSaving(false)
  }

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <div className="container mx-auto px-6 py-8 max-w-4xl">
        <FormHeader />
        <StepIndicator currentStep={currentStep} />

        <Formik
          initialValues={initialValues}
          validationSchema={companyValidationSchema}
          onSubmit={handleSubmit}
          validateOnChange={true}
          validateOnBlur={true}
        >
          {({ values, isValid, dirty }) => (
            <Form className="space-y-12">
              <PointOfContact />
              <CompanyInformation />
              <CountriesOfInterest />
              <SharesStructure />
              <FormActions
                onSaveAndExit={() => handleSaveAndExit(values)}
                isValid={isValid}
                isDirty={dirty}
                isSaving={isSaving}
              />
            </Form>
          )}
        </Formik>
      </div>
    </div>
  )
}
