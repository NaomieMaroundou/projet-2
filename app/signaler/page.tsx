import { ReportForm } from "@/components/report-form"
import { ReportHistory } from "@/components/report-history"

export default function SignalerPage() {
  return (
    <div className="min-h-screen bg-stone-50 py-8">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-stone-800 mb-4">Signaler un Problème</h1>
          <p className="text-stone-600 max-w-2xl">
            Votre voix compte ! Signalez les problèmes que vous observez sur les projets publics de votre région.
            Ensemble, améliorons la qualité des infrastructures au Gabon.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div className="lg:col-span-2">
            <ReportForm />
          </div>
          <div className="lg:col-span-1">
            <ReportHistory />
          </div>
        </div>
      </div>
    </div>
  )
}
