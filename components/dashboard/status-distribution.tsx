"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Progress } from "@/components/ui/progress"

const statusData = [
  { name: "Terminés", value: 89, total: 335, color: "bg-green-500", percentage: 27 },
  { name: "En cours", value: 156, total: 335, color: "bg-orange-500", percentage: 47 },
  { name: "Planifiés", value: 67, total: 335, color: "bg-blue-500", percentage: 20 },
  { name: "En retard", value: 23, total: 335, color: "bg-red-500", percentage: 6 },
]

export function StatusDistribution() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">Répartition par Statut</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        {statusData.map((status, index) => (
          <div key={index} className="space-y-2">
            <div className="flex items-center justify-between text-sm">
              <div className="flex items-center gap-2">
                <div className={`w-3 h-3 rounded-full ${status.color}`}></div>
                <span className="font-medium text-stone-800">{status.name}</span>
              </div>
              <div className="text-stone-600">
                {status.value} ({status.percentage}%)
              </div>
            </div>
            <Progress value={status.percentage} className="h-2" />
          </div>
        ))}

        <div className="pt-3 border-t border-stone-200">
          <div className="text-center">
            <div className="text-2xl font-bold text-stone-800">335</div>
            <div className="text-sm text-stone-600">Total des projets</div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
