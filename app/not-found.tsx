import Link from "next/link"
import { Button } from "../components/ui/Button"

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <h1 className="text-6xl font-bold text-slate-300 mb-4">404</h1>
        <h2 className="text-2xl font-bold mb-4">Pagina niet gevonden</h2>
        <p className="text-slate-600 mb-8">
          De pagina die je zoekt bestaat niet of is verplaatst.
        </p>
        <Link href="/">
          <Button size="lg">Terug naar home</Button>
        </Link>
      </div>
    </div>
  )
}
