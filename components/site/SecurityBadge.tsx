import { Shield } from "lucide-react"

export function SecurityBadge() {
  return (
    <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 text-slate-700 text-sm">
      <Shield className="w-4 h-4 text-brand-600" />
      <span>🔒 Bank-level security • Jouw data blijft privé</span>
    </div>
  )
}
