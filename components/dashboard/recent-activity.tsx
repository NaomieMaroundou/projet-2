import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Clock, MapPin, AlertTriangle, CheckCircle, MessageSquare } from "lucide-react"

const activities = [
  {
    id: 1,
    type: "signalement",
    title: "Nouveau signalement",
    description: "Retard sur École Akanda",
    location: "Estuaire",
    time: "Il y a 2h",
    status: "nouveau",
  },
  {
    id: 2,
    type: "completion",
    title: "Projet terminé",
    description: "Centre de Santé Franceville",
    location: "Haut-Ogooué",
    time: "Il y a 4h",
    status: "termine",
  },
  {
    id: 3,
    type: "update",
    title: "Mise à jour",
    description: "Avancement Route Kango: 65%",
    location: "Estuaire",
    time: "Il y a 6h",
    status: "en_cours",
  },
  {
    id: 4,
    type: "signalement",
    title: "Signalement résolu",
    description: "Problème qualité résolu",
    location: "Ogooué-Maritime",
    time: "Il y a 8h",
    status: "resolu",
  },
  {
    id: 5,
    type: "discussion",
    title: "Nouvelle discussion",
    description: "Amélioration transport public",
    location: "Estuaire",
    time: "Il y a 12h",
    status: "discussion",
  },
]

export function RecentActivity() {
  const getActivityIcon = (type: string) => {
    switch (type) {
      case "signalement":
        return AlertTriangle
      case "completion":
        return CheckCircle
      case "update":
        return Clock
      case "discussion":
        return MessageSquare
      default:
        return Clock
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "nouveau":
        return "bg-blue-100 text-blue-800"
      case "termine":
        return "bg-green-100 text-green-800"
      case "en_cours":
        return "bg-orange-100 text-orange-800"
      case "resolu":
        return "bg-green-100 text-green-800"
      case "discussion":
        return "bg-purple-100 text-purple-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Activité Récente</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {activities.map((activity) => {
            const Icon = getActivityIcon(activity.type)
            return (
              <div key={activity.id} className="flex items-start gap-3 p-3 border border-stone-200 rounded-lg">
                <div className="w-8 h-8 bg-stone-100 rounded-full flex items-center justify-center flex-shrink-0">
                  <Icon className="w-4 h-4 text-stone-600" />
                </div>

                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between mb-1">
                    <h4 className="text-sm font-medium text-stone-800">{activity.title}</h4>
                    <Badge className={`${getStatusColor(activity.status)} text-xs`}>{activity.status}</Badge>
                  </div>

                  <p className="text-sm text-stone-600 mb-2">{activity.description}</p>

                  <div className="flex items-center gap-3 text-xs text-stone-500">
                    <div className="flex items-center gap-1">
                      <MapPin className="w-3 h-3" />
                      {activity.location}
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {activity.time}
                    </div>
                  </div>
                </div>
              </div>
            )
          })}
        </div>
      </CardContent>
    </Card>
  )
}
