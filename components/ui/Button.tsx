import { ButtonHTMLAttributes } from "react"

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: "primary" | "secondary" | "link"
  size?: "sm" | "md" | "lg"
}

export function Button({ variant="primary", size="md", className="", ...props }: Props) {
  const base = "inline-flex items-center justify-center rounded-lg font-medium transition focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
  const styles = {
    primary: "bg-brand-600 hover:bg-brand-700 text-white focus:ring-brand-600",
    secondary: "bg-slate-100 hover:bg-slate-200 text-slate-900 focus:ring-slate-400",
    link: "bg-transparent text-brand-700 hover:text-brand-800 underline underline-offset-4",
  }
  const sizes = {
    sm: "px-3 py-1.5 text-sm",
    md: "px-4 py-2 text-base",
    lg: "px-6 py-3 text-lg",
  }
  return <button className={`${base} ${styles[variant]} ${sizes[size]} ${className}`} {...props} />
}
