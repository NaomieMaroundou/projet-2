export default function ProjetPage({ params }: { params: { id: string } }) {
  return (
    <div className="min-h-screen bg-stone-50 py-8">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-stone-800 mb-4">Détails du Projet #{params.id}</h1>
          <p className="text-stone-600">
            Page détaillée du projet en cours de développement. Cette page contiendra toutes les informations complètes
            du projet.
          </p>
        </div>

        <div className="bg-white rounded-lg p-8 shadow-sm">
          <p className="text-center text-stone-600">Contenu détaillé du projet à venir...</p>
        </div>
      </div>
    </div>
  )
}
