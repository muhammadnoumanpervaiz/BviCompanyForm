interface StepIndicatorProps {
  currentStep: number
}

const steps = [
  { number: 1, label: "Company Details" },
  { number: 2, label: "Shareholders" },
  { number: 3, label: "Beneficial Owner" },
  { number: 4, label: "Director" },
]

export default function StepIndicator({ currentStep }: StepIndicatorProps) {
  return (
    <div className="flex items-center justify-center mb-16 space-x-8">
      {steps.map((step, index) => (
        <div key={step.number} className="flex items-center space-x-3">
          <div
            className={`w-12 h-12 rounded-full flex items-center justify-center text-lg font-semibold ${
              step.number === currentStep ? "bg-blue-600 text-white" : "bg-slate-700 text-slate-400"
            }`}
          >
            {step.number}
          </div>
          <span className={`text-base font-medium ${step.number === currentStep ? "text-blue-400" : "text-slate-400"}`}>
            {step.label}
          </span>
        </div>
      ))}
    </div>
  )
}
