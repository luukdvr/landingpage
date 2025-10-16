import { ReactNode } from "react"

type Props = {
  children: ReactNode
  variant?: "default" | "success" | "warning" | "error"
  className?: string
}

export function Badge({ children, variant="default", className="" }: Props) {
  const styles = {
    default: "bg-slate-100 text-slate-700",
    success: "bg-accent-100 text-accent-700",
    warning: "bg-yellow-100 text-yellow-700",
    error: "bg-red-100 text-red-700",
  }
  
  return (
    <span className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium ${styles[variant]} ${className}`}>
      {children}
    </span>
  )
}
