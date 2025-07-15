"use client"

interface RadioOption {
  value: string
  label: string
}

interface RadioGroupProps {
  label: string
  name: string
  options: RadioOption[]
  error?: string
  required?: boolean
  value?: string
  onChange?: (value: string) => void
}

export default function RadioGroup({
  label,
  name,
  options,
  error,
  required = false,
  value,
  onChange,
}: RadioGroupProps) {
  const handleChange = (optionValue: string) => {
    if (onChange) {
      onChange(optionValue)
    }
  }

  return (
    <div className="space-y-3">
      <label className="block text-sm font-medium text-slate-300">
        {label}
        {required && <span className="text-red-400 ml-1">*</span>}
      </label>
      <div className="flex space-x-6">
        {options.map((option) => (
          <label key={option.value} className="flex items-center space-x-2 cursor-pointer">
            <input
              type="radio"
              name={name}
              value={option.value}
              checked={value === option.value}
              onChange={() => handleChange(option.value)}
              className="w-4 h-4 text-blue-600 bg-slate-800 border-slate-600 focus:ring-blue-500 focus:ring-2"
            />
            <span className="text-slate-300">{option.label}</span>
          </label>
        ))}
      </div>
      {error && <p className="text-red-400 text-sm">{error}</p>}
    </div>
  )
}
