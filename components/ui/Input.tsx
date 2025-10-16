import { InputHTMLAttributes } from "react"

type Props = InputHTMLAttributes<HTMLInputElement> & {
  label?: string
  error?: string
}

export function Input({ label, error, className="", ...props }: Props) {
  return (
    <div className="w-full">
      {label && (
        <label className="block text-sm font-medium text-slate-700 mb-2">
          {label}
        </label>
      )}
      <input 
        className={`w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-brand-600 focus:border-transparent transition ${
          error ? 'border-red-500' : 'border-slate-300'
        } ${className}`}
        {...props}
      />
      {error && (
        <p className="mt-1 text-sm text-red-600">{error}</p>
      )}
    </div>
  )
}
