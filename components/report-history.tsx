import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Clock, Eye, MessageSquare, CheckCircle } from "lucide-react"

export function ReportHistory() {
  const recentReports = [
    {
      id: 1,
      title: "Retard École Akanda",
      type: "retard",
      status: "en_cours",
      date: "Il y a 3 jours",
      responses: 2,
    },
    {
      id: 2,
      title: "Qualité Route Kango",
      type: "qualite",
      status: "resolu",
      date: "Il y a 1 semaine",
      responses: 5,
    },
    {
      id: 3,
      title: "Sécurité Chantier Franceville",
      type: "securite",
      status: "nouveau",
      date: "Il y a 2 semaines",
      responses: 0,
    },
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "nouveau":
        return "bg-blue-100 text-blue-800"
      case "en_cours":
        return "bg-orange-100 text-orange-800"
      case "resolu":
        return "bg-green-100 text-green-800"
      case "rejete":
        return "bg-red-100 text-red-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const getStatusLabel = (status: string) => {
    switch (status) {
      case "nouveau":
        return "Nouveau"
      case "en_cours":
        return "En cours"
      case "resolu":
        return "Résolu"
      case "rejete":
        return "Rejeté"
      default:
        return "Inconnu"
    }
  }

  return (
    <div className="space-y-6">
      {/* Statistiques rapides */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Vos Contributions</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 gap-4 text-center">
            <div>
              <div className="text-2xl font-bold text-orange-600">12</div>
              <div className="text-sm text-stone-600">Signalements</div>
            </div>
            <div>
              <div className="text-2xl font-bold text-green-600">8</div>
              <div className="text-sm text-stone-600">Résolus</div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Signalements récents */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Signalements Récents</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          {recentReports.map((report) => (
            <div key={report.id} className="p-3 border border-stone-200 rounded-lg">
              <div className="flex items-start justify-between mb-2">
                <h4 className="font-medium text-stone-800 text-sm">{report.title}</h4>
                <Badge className={`${getStatusColor(report.status)} text-xs`}>{getStatusLabel(report.status)}</Badge>
              </div>

              <div className="flex items-center gap-4 text-xs text-stone-500">
                <div className="flex items-center gap-1">
                  <Clock className="w-3 h-3" />
                  {report.date}
                </div>
                <div className="flex items-center gap-1">
                  <MessageSquare className="w-3 h-3" />
                  {report.responses} réponse(s)
                </div>
              </div>

              <Button variant="ghost" size="sm" className="w-full mt-2 text-xs">
                <Eye className="w-3 h-3 mr-1" />
                Voir les détails
              </Button>
            </div>
          ))}

          <Button variant="outline" className="w-full bg-transparent">
            Voir tous mes signalements
          </Button>
        </CardContent>
      </Card>

      {/* Conseils */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Conseils pour un bon signalement</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3 text-sm text-stone-600">
          <div className="flex items-start gap-2">
            <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
            <span>Soyez précis dans votre description</span>
          </div>
          <div className="flex items-start gap-2">
            <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
            <span>Ajoutez des photos si possible</span>
          </div>
          <div className="flex items-start gap-2">
            <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
            <span>Indiquez la localisation exacte</span>
          </div>
          <div className="flex items-start gap-2">
            <CheckCircle className="w-4 h-4 text-green-600 mt-0.5 flex-shrink-0" />
            <span>Restez factuel et objectif</span>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
