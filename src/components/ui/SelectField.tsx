import { ChevronDown } from "lucide-react"

interface SelectFieldProps {
  label: string
  placeholder?: string
  [key: string]: any
}

export default function SelectField({ label, placeholder, ...props }: SelectFieldProps) {
  return (
    <div className="space-y-2">
      <label className="block text-sm font-medium text-slate-300">{label}</label>
      <div className="relative">
        <select
          className="w-full px-4 py-3 bg-slate-800 border border-slate-600 rounded-md text-white focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-colors appearance-none hover:border-slate-500"
          {...props}
        >
          <option value="" disabled className="text-slate-500">
            {placeholder}
          </option>
        </select>
        <ChevronDown className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400 pointer-events-none" />
      </div>
    </div>
  )
}
