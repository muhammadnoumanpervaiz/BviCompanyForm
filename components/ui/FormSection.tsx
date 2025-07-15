import type { ReactNode } from "react"

interface FormSectionProps {
  title: string
  description: string
  children: ReactNode
}

export default function FormSection({ title, description, children }: FormSectionProps) {
  return (
    <div className="border-b border-blue-500 pb-8">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-8">
        <div className="lg:col-span-1">
          <h2 className="text-xl font-semibold text-white mb-3">{title}</h2>
          <p className="text-slate-400 text-sm leading-relaxed">{description}</p>
        </div>
        <div className="lg:col-span-2">{children}</div>
      </div>
    </div>
  )
}
