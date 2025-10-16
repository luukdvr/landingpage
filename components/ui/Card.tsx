import { ReactNode } from "react"

type Props = {
  children: ReactNode
  className?: string
}

export function Card({ children, className="" }: Props) {
  return (
    <div className={`bg-white rounded-xl border border-slate-200 shadow-sm ${className}`}>
      {children}
    </div>
  )
}
