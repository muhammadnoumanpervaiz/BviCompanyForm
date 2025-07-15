import type { LucideIcon } from "lucide-react"

interface InputFieldProps {
  label: string
  placeholder?: string
  type?: string
  icon?: LucideIcon
  iconColor?: string
  hasError?: boolean
  [key: string]: any
}

export default function InputField({
  label,
  placeholder,
  type = "text",
  icon: Icon,
  iconColor = "text-slate-400",
  hasError = false,
  ...props
}: InputFieldProps) {
  return (
    <div className="space-y-2">
      <label className="block text-sm font-medium text-slate-300">{label}</label>
      <div className="relative">
        <input
          type={type}
          placeholder={placeholder}
          className={`w-full px-4 py-3 bg-slate-800 border rounded-md text-white placeholder-slate-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors ${
            hasError ? "border-red-500" : "border-slate-600 hover:border-slate-500"
          }`}
          {...props}
        />
        {Icon && <Icon className={`absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 ${iconColor}`} />}
      </div>
    </div>
  )
}
