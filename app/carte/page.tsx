import { InteractiveMap } from "@/components/interactive-map"
import { MapFilters } from "@/components/map-filters"
import { ProjectDetails } from "@/components/project-details"

export default function CartePage() {
  return (
    <div className="min-h-screen bg-stone-50">
      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-stone-800 mb-4">Carte Interactive du Gabon</h1>
          <p className="text-stone-600 max-w-2xl">
            Explorez les projets d'infrastructures publiques à travers les 9 provinces du Gabon. Filtrez par type de
            projet, statut d'avancement et localisation.
          </p>
        </div>

        <div className="grid lg:grid-cols-4 gap-6">
          <div className="lg:col-span-1">
            <MapFilters />
          </div>
          <div className="lg:col-span-2">
            <InteractiveMap />
          </div>
          <div className="lg:col-span-1">
            <ProjectDetails />
          </div>
        </div>
      </div>
    </div>
  )
}
