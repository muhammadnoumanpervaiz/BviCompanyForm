"use client"

import { CheckCircle, X } from "lucide-react"

interface SuccessModalProps {
  isOpen: boolean
  onClose: () => void
}

export default function SuccessModal({ isOpen, onClose }: SuccessModalProps) {
  if (!isOpen) return null

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-slate-800 rounded-lg p-8 max-w-md w-full mx-4 relative">
        <button onClick={onClose} className="absolute top-4 right-4 text-slate-400 hover:text-white">
          <X className="w-6 h-6" />
        </button>

        <div className="text-center">
          <div className="mx-auto flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
            <CheckCircle className="w-8 h-8 text-green-600" />
          </div>

          <h3 className="text-xl font-semibold text-white mb-2">Form Submitted Successfully!</h3>

          <p className="text-slate-400 mb-6">
            Your BVI company registration form has been submitted successfully. We will review your application and get
            back to you within 2-3 business days.
          </p>

          <button
            onClick={onClose}
            className="w-full px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-md transition-colors"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  )
}
