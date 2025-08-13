"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"
import { Badge } from "@/components/ui/badge"

const provincesData = [
  {
    name: "Estuaire",
    projets: 45,
    budget: "12.5Md FCFA",
    completion: 78,
    signalements: 12,
  },
  {
    name: "Haut-Ogooué",
    projets: 32,
    budget: "8.2Md FCFA",
    completion: 65,
    signalements: 8,
  },
  {
    name: "Ogooué-Maritime",
    projets: 28,
    budget: "6.8Md FCFA",
    completion: 72,
    signalements: 5,
  },
  {
    name: "Moyen-Ogooué",
    projets: 24,
    budget: "5.4Md FCFA",
    completion: 58,
    signalements: 7,
  },
  {
    name: "Woleu-Ntem",
    projets: 22,
    budget: "4.9Md FCFA",
    completion: 69,
    signalements: 4,
  },
  {
    name: "Ngounié",
    projets: 18,
    budget: "3.8Md FCFA",
    completion: 61,
    signalements: 6,
  },
  {
    name: "Ogooué-Ivindo",
    projets: 16,
    budget: "3.2Md FCFA",
    completion: 55,
    signalements: 3,
  },
  {
    name: "Ogooué-Lolo",
    projets: 14,
    budget: "2.9Md FCFA",
    completion: 63,
    signalements: 2,
  },
  {
    name: "Nyanga",
    projets: 12,
    budget: "2.1Md FCFA",
    completion: 52,
    signalements: 1,
  },
]

export function ProvinceComparison() {
  return (
    <Card>
      <CardHeader>
        <CardTitle>Comparaison par Province</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {provincesData.map((province, index) => (
            <div key={province.name} className="p-4 border border-stone-200 rounded-lg">
              <div className="flex items-center justify-between mb-3">
                <div>
                  <h3 className="font-semibold text-stone-800">{province.name}</h3>
                  <p className="text-sm text-stone-600">
                    {province.projets} projets • {province.budget}
                  </p>
                </div>
                <div className="flex items-center gap-2">
                  <Badge variant="outline" className="text-xs">
                    {province.signalements} signalement(s)
                  </Badge>
                  <span className="text-sm font-medium text-stone-700">{province.completion}%</span>
                </div>
              </div>

              <Progress value={province.completion} className="h-2" />
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
