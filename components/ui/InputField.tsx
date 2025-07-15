import type { LucideIcon } from "lucide-react"

interface InputFieldProps {
  label: string
  placeholder?: string
  type?: string
  error?: string
  icon?: LucideIcon
  iconColor?: string
  required?: boolean
  disabled?: boolean
  [key: string]: any
}

export default function InputField({
  label,
  placeholder,
  type = "text",
  error,
  icon: Icon,
  iconColor = "text-slate-400",
  required = false,
  disabled = false,
  ...props
}: InputFieldProps) {
  return (
    <div className="space-y-2">
      <label className="block text-sm font-medium text-slate-300">
        {label}
        {required && <span className="text-red-400 ml-1">*</span>}
      </label>
      <div className="relative">
        <input
          type={type}
          placeholder={placeholder}
          disabled={disabled}
          className={`w-full px-4 py-3 bg-slate-800 border rounded-md text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors ${
            error ? "border-red-500 focus:ring-red-500" : "border-slate-600 hover:border-slate-500"
          } ${disabled ? "opacity-50 cursor-not-allowed" : ""}`}
          {...props}
        />
        {Icon && <Icon className={`absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 ${iconColor}`} />}
      </div>
      {error && <p className="text-red-400 text-sm">{error}</p>}
    </div>
  )
}
