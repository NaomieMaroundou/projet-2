import { Button } from "@/components/ui/button"
import { MapPin, Users, Eye } from "lucide-react"
import Link from "next/link"

export function Hero() {
  return (
    <section className="relative bg-gradient-to-br from-orange-100 via-amber-50 to-stone-100 py-20 px-4">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center gap-2 mb-6">
            <div className="w-12 h-12 bg-gradient-to-br from-orange-600 to-amber-600 rounded-full flex items-center justify-center">
              <Eye className="w-6 h-6 text-white" />
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-stone-800">TransparenCity</h1>
          </div>

          <p className="text-xl md:text-2xl text-stone-600 mb-8 max-w-3xl mx-auto">
            Ensemble pour une transparence publique au Gabon 🇬🇦
          </p>

          <p className="text-lg text-stone-700 mb-12 max-w-4xl mx-auto leading-relaxed">
            Suivez les projets d'infrastructures publiques, signalez les problèmes et participez activement à
            l'amélioration de votre communauté. Chaque citoyen compte dans la construction d'un Gabon plus transparent.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/carte">
              <Button
                size="lg"
                className="bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-700 hover:to-amber-700 text-white px-8 py-3"
              >
                <MapPin className="w-5 h-5 mr-2" />
                Explorer la Carte
              </Button>
            </Link>
            <Link href="/signaler">
              <Button
                size="lg"
                variant="outline"
                className="border-orange-600 text-orange-600 hover:bg-orange-50 px-8 py-3 bg-transparent"
              >
                <Users className="w-5 h-5 mr-2" />
                Faire un Signalement
              </Button>
            </Link>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mt-16">
          <div className="text-center p-6 bg-white/60 rounded-xl backdrop-blur-sm">
            <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <MapPin className="w-8 h-8 text-orange-600" />
            </div>
            <h3 className="text-xl font-semibold text-stone-800 mb-2">Suivi Géolocalisé</h3>
            <p className="text-stone-600">Visualisez les projets publics par province sur une carte interactive</p>
          </div>

          <div className="text-center p-6 bg-white/60 rounded-xl backdrop-blur-sm">
            <div className="w-16 h-16 bg-amber-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Users className="w-8 h-8 text-amber-600" />
            </div>
            <h3 className="text-xl font-semibold text-stone-800 mb-2">Participation Citoyenne</h3>
            <p className="text-stone-600">Signalez les problèmes et contribuez à l'amélioration des services</p>
          </div>

          <div className="text-center p-6 bg-white/60 rounded-xl backdrop-blur-sm">
            <div className="w-16 h-16 bg-stone-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Eye className="w-8 h-8 text-stone-600" />
            </div>
            <h3 className="text-xl font-semibold text-stone-800 mb-2">Transparence Totale</h3>
            <p className="text-stone-600">Accédez aux données publiques en temps réel et aux rapports détaillés</p>
          </div>
        </div>

        {/* Illustration hero */}
        
  )
}
