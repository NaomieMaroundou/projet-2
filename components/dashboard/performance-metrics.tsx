"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"
import { TrendingUp, TrendingDown, Minus } from "lucide-react"

const institutions = [
  {
    name: "Ministère de l'Éducation",
    projets: 45,
    completion: 78,
    budget_utilise: 85,
    delai_moyen: 16,
    trend: "up",
    note: 4.2,
  },
  {
    name: "Ministère de la Santé",
    projets: 32,
    completion: 72,
    budget_utilise: 79,
    delai_moyen: 18,
    trend: "up",
    note: 4.0,
  },
  {
    name: "Ministère des Transports",
    projets: 28,
    completion: 65,
    budget_utilise: 88,
    delai_moyen: 22,
    trend: "down",
    note: 3.8,
  },
  {
    name: "Ministère de l'Énergie",
    projets: 24,
    completion: 69,
    budget_utilise: 82,
    delai_moyen: 19,
    trend: "stable",
    note: 3.9,
  },
  {
    name: "Collectivités Locales",
    projets: 38,
    completion: 58,
    budget_utilise: 75,
    delai_moyen: 24,
    trend: "down",
    note: 3.5,
  },
]

export function PerformanceMetrics() {
  const getTrendIcon = (trend: string) => {
    switch (trend) {
      case "up":
        return <TrendingUp className="w-4 h-4 text-green-600" />
      case "down":
        return <TrendingDown className="w-4 h-4 text-red-600" />
      default:
        return <Minus className="w-4 h-4 text-stone-600" />
    }
  }

  const getTrendColor = (trend: string) => {
    switch (trend) {
      case "up":
        return "text-green-600"
      case "down":
        return "text-red-600"
      default:
        return "text-stone-600"
    }
  }

  const getNoteColor = (note: number) => {
    if (note >= 4.0) return "bg-green-100 text-green-800"
    if (note >= 3.5) return "bg-orange-100 text-orange-800"
    return "bg-red-100 text-red-800"
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Performance des Institutions</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {institutions.map((institution, index) => (
            <div key={index} className="p-4 border border-stone-200 rounded-lg">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <h3 className="font-semibold text-stone-800">{institution.name}</h3>
                  <p className="text-sm text-stone-600">{institution.projets} projets actifs</p>
                </div>
                <div className="flex items-center gap-2">
                  <Badge className={`${getNoteColor(institution.note)} text-xs`}>{institution.note}/5</Badge>
                  <div className={getTrendColor(institution.trend)}>{getTrendIcon(institution.trend)}</div>
                </div>
              </div>

              <div className="grid grid-cols-3 gap-4">
                <div>
                  <div className="text-xs text-stone-600 mb-1">Taux de réalisation</div>
                  <div className="flex items-center gap-2">
                    <Progress value={institution.completion} className="h-2 flex-1" />
                    <span className="text-sm font-medium">{institution.completion}%</span>
                  </div>
                </div>

                <div>
                  <div className="text-xs text-stone-600 mb-1">Budget utilisé</div>
                  <div className="flex items-center gap-2">
                    <Progress value={institution.budget_utilise} className="h-2 flex-1" />
                    <span className="text-sm font-medium">{institution.budget_utilise}%</span>
                  </div>
                </div>

                <div>
                  <div className="text-xs text-stone-600 mb-1">Délai moyen</div>
                  <div className="text-sm font-medium">{institution.delai_moyen} mois</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
