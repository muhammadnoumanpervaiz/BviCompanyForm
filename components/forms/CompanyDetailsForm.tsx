"use client"

import { useState } from "react"
import { Formik, Form } from "formik"
import { toast, Toaster } from "react-hot-toast"
import FormHeader from "@/components/ui/FormHeader"
import StepIndicator from "@/components/ui/StepIndicator"
import PointOfContact from "@/components/sections/PointOfContact"
import CompanyInformation from "@/components/sections/CompanyInformation"
import CountriesOfInterest from "@/components/sections/CountriesOfInterest"
import SharesStructure from "@/components/sections/SharesStructure"
import FormActions from "@/components/ui/FormActions"
import SuccessModal from "@/components/ui/SuccessModal"
import type { CompanyFormData } from "@/types/form"
import { companyValidationSchema } from "@/utils/validation"

const initialValues: CompanyFormData = {
  fullName: "",
  email: "",
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
  const [showSuccessModal, setShowSuccessModal] = useState(false)

  const handleSubmit = async (values: CompanyFormData, { setSubmitting, setTouched, setFieldError }: any) => {
    try {
      console.log("Attempting to submit form with values:", values)

      // Mark all fields as touched to show validation errors
      const touchedFields = Object.keys(values).reduce((acc, key) => {
        acc[key] = true
        return acc
      }, {} as any)
      setTouched(touchedFields)

      // Validate the form manually
      try {
        await companyValidationSchema.validate(values, { abortEarly: false })
      } catch (validationError: any) {
        console.log("Validation errors:", validationError.errors)

        // Set field-specific errors
        if (validationError.inner) {
          validationError.inner.forEach((error: any) => {
            setFieldError(error.path, error.message)
          })
        }

        toast.error("Cannot submit the form. Please fill all required fields correctly.")
        setSubmitting(false)
        return
      }

      // Additional custom validation for conditional fields
      if (values.areAllSharesIssued === "no" && !values.numberOfIssuedShares.trim()) {
        setFieldError("numberOfIssuedShares", "Number of issued shares is required when not all shares are issued")
        toast.error("Cannot submit the form. Please fill all required fields correctly.")
        setSubmitting(false)
        return
      }

      console.log("Form validation passed, submitting...")

      // Simulate API call
      await new Promise((resolve) => setTimeout(resolve, 2000))

      setShowSuccessModal(true)
      toast.success("Form submitted successfully!")
    } catch (error) {
      console.error("Submission error:", error)
      toast.error("An error occurred while submitting the form.")
    } finally {
      setSubmitting(false)
    }
  }

  const handleSaveAndExit = async (values: CompanyFormData) => {
    setIsSaving(true)

    try {
      // Check if form has any data to save
      const hasData = Object.values(values).some((value) => value !== "")

      if (!hasData) {
        toast.error("No data to save. Please fill at least one field.")
        setIsSaving(false)
        return
      }

      console.log("Saving and exiting:", values)

      // Simulate save operation
      await new Promise((resolve) => setTimeout(resolve, 1500))

      toast.success("Form saved successfully!")
    } catch (error) {
      toast.error("An error occurred while saving the form.")
    } finally {
      setIsSaving(false)
    }
  }

  return (
    <div className="min-h-screen bg-slate-900 text-white">
      <Toaster
        position="top-right"
        toastOptions={{
          duration: 4000,
          style: {
            background: "#1e293b",
            color: "#fff",
            border: "1px solid #475569",
          },
          success: {
            iconTheme: {
              primary: "#10b981",
              secondary: "#fff",
            },
          },
          error: {
            iconTheme: {
              primary: "#ef4444",
              secondary: "#fff",
            },
          },
        }}
      />

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
          {({ values, isValid, dirty, isSubmitting, setTouched, setFieldValue }) => (
            <Form className="space-y-12">
              <PointOfContact />
              <CompanyInformation />
              <CountriesOfInterest />
              <SharesStructure setFieldValue={setFieldValue} />
              <FormActions
                onSaveAndExit={() => handleSaveAndExit(values)}
                isValid={isValid}
                isDirty={dirty}
                isSaving={isSaving}
                isSubmitting={isSubmitting}
              />
            </Form>
          )}
        </Formik>
      </div>

      <SuccessModal isOpen={showSuccessModal} onClose={() => setShowSuccessModal(false)} />
    </div>
  )
}
