import { Card, CardContent } from "@/components/ui/card"
import { TrendingUp, Users, MapPin, CheckCircle } from "lucide-react"

export function Stats() {
  const stats = [
    {
      icon: MapPin,
      value: "156",
      label: "Projets Suivis",
      description: "À travers les 9 provinces",
      color: "orange",
    },
    {
      icon: Users,
      value: "2,847",
      label: "Citoyens Engagés",
      description: "Utilisateurs actifs",
      color: "amber",
    },
    {
      icon: CheckCircle,
      value: "89",
      label: "Signalements Traités",
      description: "Ce mois-ci",
      color: "stone",
    },
    {
      icon: TrendingUp,
      value: "94%",
      label: "Taux de Satisfaction",
      description: "Des utilisateurs",
      color: "orange",
    },
  ]

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-orange-600 to-amber-600 text-white">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Impact en Chiffres</h2>
          <p className="text-lg text-orange-100 max-w-3xl mx-auto">
            Découvrez l'impact concret de TransparenCity sur la transparence publique au Gabon depuis son lancement.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => {
            const Icon = stat.icon

            return (
              <Card
                key={index}
                className="bg-white/10 backdrop-blur-sm border-white/20 hover:bg-white/20 transition-all duration-300"
              >
                <CardContent className="p-6 text-center">
                  <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-3xl font-bold text-white mb-2">{stat.value}</div>
                  <div className="text-lg font-semibold text-white mb-1">{stat.label}</div>
                  <div className="text-sm text-orange-100">{stat.description}</div>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </div>
    </section>
  )
}
