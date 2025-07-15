"use client"

import { ArrowLeft, ArrowRight, X } from "lucide-react"

interface FormActionsProps {
  onSaveAndExit: () => void
  isValid: boolean
  isDirty: boolean
  isSaving: boolean
  isSubmitting: boolean
}

export default function FormActions({ onSaveAndExit, isValid, isDirty, isSaving, isSubmitting }: FormActionsProps) {
  return (
    <div className="flex items-center justify-between pt-8">
      <button
        type="button"
        className="flex items-center space-x-2 px-6 py-3 bg-slate-700 hover:bg-slate-600 text-white rounded-md transition-colors"
      >
        <ArrowLeft className="w-4 h-4" />
        <span>BACK</span>
      </button>

      <div className="flex items-center space-x-6">
        <div className="flex items-center space-x-3">
          <div className="text-slate-400 text-sm">I know the form autosaved but, I wish to</div>
          <button
            type="button"
            onClick={onSaveAndExit}
            disabled={isSaving}
            className="px-4 py-2 bg-slate-600 hover:bg-slate-500 text-white rounded-md transition-colors disabled:opacity-50 disabled:cursor-not-allowed text-sm"
          >
            {isSaving ? "SAVING..." : "SAVE & EXIT"}
          </button>
          <div className="text-slate-400 text-sm">anyway. ;)</div>
          <X className="w-4 h-4 text-slate-400" />
        </div>

        <button
          type="submit"
          disabled={isSubmitting}
          className="flex items-center space-x-2 px-8 py-3 bg-blue-600 hover:bg-blue-700 disabled:bg-slate-600 disabled:cursor-not-allowed text-white rounded-md transition-colors"
        >
          <span>{isSubmitting ? "SUBMITTING..." : "NEXT"}</span>
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  )
}
