import { ChevronDown } from "lucide-react"

interface SelectOption {
  value: string
  label: string
}

interface SelectFieldProps {
  label: string
  placeholder?: string
  options?: SelectOption[]
  error?: string
  required?: boolean
  [key: string]: any
}

export default function SelectField({
  label,
  placeholder,
  options = [],
  error,
  required = false,
  ...props
}: SelectFieldProps) {
  return (
    <div className="space-y-2">
      <label className="block text-sm font-medium text-slate-300">
        {label}
        {required && <span className="text-red-400 ml-1">*</span>}
      </label>
      <div className="relative">
        <select
          className={`w-full px-4 py-3 bg-slate-800 border rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors appearance-none ${
            error ? "border-red-500 focus:ring-red-500" : "border-slate-600 hover:border-slate-500"
          }`}
          {...props}
        >
          <option value="" disabled className="text-slate-500">
            {placeholder}
          </option>
          {options.map((option) => (
            <option key={option.value} value={option.value} className="bg-slate-800">
              {option.label}
            </option>
          ))}
        </select>
        <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400 pointer-events-none" />
      </div>
      {error && <p className="text-red-400 text-sm">{error}</p>}
    </div>
  )
}
