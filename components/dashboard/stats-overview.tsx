import { Card, CardContent } from "@/components/ui/card"
import { Building, TrendingUp, Users, AlertTriangle, CheckCircle, Clock, DollarSign, MapPin } from "lucide-react"

export function StatsOverview() {
  const stats = [
    {
      title: "Projets Actifs",
      value: "156",
      change: "+12%",
      changeType: "positive",
      icon: Building,
      color: "orange",
    },
    {
      title: "Budget Total",
      value: "45,2",
      subtitle: "Milliards FCFA",
      change: "+8%",
      changeType: "positive",
      icon: DollarSign,
      color: "green",
    },
    {
      title: "Projets Terminés",
      value: "89",
      change: "+15%",
      changeType: "positive",
      icon: CheckCircle,
      color: "green",
    },
    {
      title: "En Retard",
      value: "23",
      change: "-5%",
      changeType: "negative",
      icon: AlertTriangle,
      color: "red",
    },
    {
      title: "Signalements",
      value: "147",
      change: "+3%",
      changeType: "neutral",
      icon: Users,
      color: "blue",
    },
    {
      title: "Provinces Couvertes",
      value: "9/9",
      change: "100%",
      changeType: "positive",
      icon: MapPin,
      color: "purple",
    },
    {
      title: "Taux de Réalisation",
      value: "73%",
      change: "+2%",
      changeType: "positive",
      icon: TrendingUp,
      color: "amber",
    },
    {
      title: "Délai Moyen",
      value: "18",
      subtitle: "mois",
      change: "-1 mois",
      changeType: "positive",
      icon: Clock,
      color: "stone",
    },
  ]

  const getColorClasses = (color: string) => {
    const colors = {
      orange: "bg-orange-100 text-orange-600",
      green: "bg-green-100 text-green-600",
      red: "bg-red-100 text-red-600",
      blue: "bg-blue-100 text-blue-600",
      purple: "bg-purple-100 text-purple-600",
      amber: "bg-amber-100 text-amber-600",
      stone: "bg-stone-100 text-stone-600",
    }
    return colors[color as keyof typeof colors] || colors.stone
  }

  const getChangeColor = (type: string) => {
    switch (type) {
      case "positive":
        return "text-green-600"
      case "negative":
        return "text-red-600"
      default:
        return "text-stone-600"
    }
  }

  return (
    <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-4 xl:grid-cols-8 gap-4">
      {stats.map((stat, index) => {
        const Icon = stat.icon
        return (
          <Card key={index} className="hover:shadow-md transition-shadow">
            <CardContent className="p-3 sm:p-4">
              <div className="flex items-center justify-between mb-2 sm:mb-3">
                <div
                  className={`w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center ${getColorClasses(stat.color)}`}
                >
                  <Icon className="w-4 h-4 sm:w-5 sm:h-5" />
                </div>
                <div className={`text-xs font-medium ${getChangeColor(stat.changeType)}`}>{stat.change}</div>
              </div>

              <div className="space-y-1">
                <div className="flex items-baseline gap-1">
                  <div className="text-lg sm:text-2xl font-bold text-stone-800">{stat.value}</div>
                  {stat.subtitle && <div className="text-xs text-stone-500">{stat.subtitle}</div>}
                </div>
                <div className="text-xs sm:text-sm text-stone-600">{stat.title}</div>
              </div>
            </CardContent>
          </Card>
        )
      })}
    </div>
  )
}
