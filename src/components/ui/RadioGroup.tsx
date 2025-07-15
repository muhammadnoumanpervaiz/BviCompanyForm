"use client"

interface RadioOption {
  value: string
  label: string
}

interface RadioGroupProps {
  label: string
  name: string
  options: RadioOption[]
  value?: string
  onChange?: (value: string) => void
}

export default function RadioGroup({ label, name, options, value, onChange }: RadioGroupProps) {
  return (
    <div className="space-y-3">
      <label className="block text-sm font-medium text-slate-300">{label}</label>
      <div className="flex space-x-6">
        {options.map((option) => (
          <label key={option.value} className="flex items-center space-x-2 cursor-pointer">
            <input
              type="radio"
              name={name}
              value={option.value}
              checked={value === option.value}
              onChange={(e) => onChange?.(e.target.value)}
              className="w-4 h-4 text-blue-600 bg-slate-800 border-slate-600 focus:ring-blue-500 focus:ring-2"
            />
            <span className="text-slate-300">{option.label}</span>
          </label>
        ))}
      </div>
    </div>
  )
}
