import { Card, CardContent } from "@/components/ui/card"
import { Target, Heart, Shield, Lightbulb } from "lucide-react"

export function Mission() {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-stone-800 mb-6">Notre Mission Citoyenne</h2>
          <p className="text-lg text-stone-600 max-w-3xl mx-auto">
            TransparenCity s'engage à renforcer la démocratie participative au Gabon en donnant aux citoyens les outils
            nécessaires pour suivre et évaluer l'action publique dans leurs communautés.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          <Card className="border-orange-200 hover:shadow-lg transition-shadow">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="font-semibold text-stone-800 mb-2">Transparence</h3>
              <p className="text-sm text-stone-600">
                Rendre visible l'avancement des projets publics dans toutes les provinces
              </p>
            </CardContent>
          </Card>

          <Card className="border-amber-200 hover:shadow-lg transition-shadow">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Heart className="w-6 h-6 text-amber-600" />
              </div>
              <h3 className="font-semibold text-stone-800 mb-2">Engagement</h3>
              <p className="text-sm text-stone-600">
                Encourager la participation active des citoyens dans la vie publique
              </p>
            </CardContent>
          </Card>

          <Card className="border-stone-200 hover:shadow-lg transition-shadow">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-stone-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Shield className="w-6 h-6 text-stone-600" />
              </div>
              <h3 className="font-semibold text-stone-800 mb-2">Redevabilité</h3>
              <p className="text-sm text-stone-600">
                Tenir les institutions publiques responsables de leurs engagements
              </p>
            </CardContent>
          </Card>

          <Card className="border-orange-200 hover:shadow-lg transition-shadow">
            <CardContent className="p-6 text-center">
              <div className="w-12 h-12 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Lightbulb className="w-6 h-6 text-orange-600" />
              </div>
              <h3 className="font-semibold text-stone-800 mb-2">Innovation</h3>
              <p className="text-sm text-stone-600">Utiliser la technologie pour améliorer la gouvernance publique</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
