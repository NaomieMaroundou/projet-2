"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { AlertTriangle, ZoomIn, ZoomOut } from "lucide-react"

const problems = [
  {
    id: 1,
    title: "Retard École Akanda",
    type: "retard",
    severity: "moyen",
    coordinates: { x: 45, y: 30 },
    province: "Estuaire",
    date: "Il y a 3 jours",
  },
  {
    id: 2,
    title: "Qualité Route Kango",
    type: "qualite",
    severity: "eleve",
    coordinates: { x: 40, y: 35 },
    province: "Estuaire",
    date: "Il y a 1 semaine",
  },
  {
    id: 3,
    title: "Sécurité Chantier Franceville",
    type: "securite",
    severity: "critique",
    coordinates: { x: 70, y: 60 },
    province: "Haut-Ogooué",
    date: "Il y a 2 semaines",
  },
  {
    id: 4,
    title: "Accès Hôpital Port-Gentil",
    type: "acces",
    severity: "moyen",
    coordinates: { x: 25, y: 45 },
    province: "Ogooué-Maritime",
    date: "Il y a 4 jours",
  },
]

export function ProblemsMap() {
  const [zoom, setZoom] = useState(1)
  const [selectedProblem, setSelectedProblem] = useState<(typeof problems)[0] | null>(null)

  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case "critique":
        return "#ef4444"
      case "eleve":
        return "#f97316"
      case "moyen":
        return "#eab308"
      case "faible":
        return "#22c55e"
      default:
        return "#6b7280"
    }
  }

  const getSeverityLabel = (severity: string) => {
    switch (severity) {
      case "critique":
        return "Critique"
      case "eleve":
        return "Élevé"
      case "moyen":
        return "Moyen"
      case "faible":
        return "Faible"
      default:
        return "Inconnu"
    }
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <AlertTriangle className="w-5 h-5 text-red-600" />
            Carte des Problèmes
          </div>
          <div className="flex gap-1">
            <Button variant="outline" size="sm" onClick={() => setZoom(Math.min(zoom + 0.2, 2))} disabled={zoom >= 2}>
              <ZoomIn className="w-4 h-4" />
            </Button>
            <Button
              variant="outline"
              size="sm"
              onClick={() => setZoom(Math.max(zoom - 0.2, 0.8))}
              disabled={zoom <= 0.8}
            >
              <ZoomOut className="w-4 h-4" />
            </Button>
          </div>
        </CardTitle>
      </CardHeader>
      <CardContent className="p-0">
        <div className="relative h-[300px] bg-gradient-to-br from-green-100 to-blue-100 overflow-hidden">
          <div className="absolute inset-0 transition-transform duration-300" style={{ transform: `scale(${zoom})` }}>
            {/* Contour du Gabon */}
            <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100">
              <path
                d="M20 30 Q25 25 35 28 L45 25 Q55 22 65 28 L75 35 Q80 45 75 55 L70 65 Q65 75 55 78 L45 80 Q35 82 25 78 L15 70 Q10 60 12 50 L15 40 Q18 35 20 30 Z"
                fill="rgba(34, 197, 94, 0.1)"
                stroke="rgba(34, 197, 94, 0.3)"
                strokeWidth="0.5"
              />
            </svg>

            {/* Marqueurs des problèmes */}
            {problems.map((problem) => (
              <div
                key={problem.id}
                className="absolute cursor-pointer transition-all duration-200 hover:scale-125"
                style={{
                  left: `${problem.coordinates.x}%`,
                  top: `${problem.coordinates.y}%`,
                  transform: "translate(-50%, -50%)",
                }}
                onClick={() => setSelectedProblem(problem)}
              >
                <div
                  className="w-6 h-6 rounded-full flex items-center justify-center shadow-lg animate-pulse"
                  style={{ backgroundColor: getSeverityColor(problem.severity) }}
                >
                  <AlertTriangle className="w-3 h-3 text-white" />
                </div>
              </div>
            ))}
          </div>

          {/* Détails du problème sélectionné */}
          {selectedProblem && (
            <div className="absolute bottom-4 left-4 right-4 bg-white rounded-lg shadow-lg border p-3 z-10">
              <div className="flex items-start justify-between mb-2">
                <div>
                  <h4 className="font-medium text-stone-800 text-sm">{selectedProblem.title}</h4>
                  <p className="text-xs text-stone-600">{selectedProblem.province}</p>
                </div>
                <Badge
                  style={{
                    backgroundColor: getSeverityColor(selectedProblem.severity),
                    color: "white",
                  }}
                  className="text-xs"
                >
                  {getSeverityLabel(selectedProblem.severity)}
                </Badge>
              </div>
              <div className="flex items-center justify-between text-xs text-stone-500">
                <span>{selectedProblem.date}</span>
                <Button
                  size="sm"
                  variant="outline"
                  className="h-6 px-2 text-xs bg-transparent"
                  onClick={() => setSelectedProblem(null)}
                >
                  Fermer
                </Button>
              </div>
            </div>
          )}

          {/* Légende */}
          <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm p-2 rounded-lg shadow-lg">
            <h5 className="text-xs font-semibold text-stone-800 mb-1">Sévérité</h5>
            <div className="space-y-1">
              <div className="flex items-center gap-1 text-xs">
                <div className="w-2 h-2 rounded-full bg-red-500"></div>
                <span>Critique</span>
              </div>
              <div className="flex items-center gap-1 text-xs">
                <div className="w-2 h-2 rounded-full bg-orange-500"></div>
                <span>Élevé</span>
              </div>
              <div className="flex items-center gap-1 text-xs">
                <div className="w-2 h-2 rounded-full bg-yellow-500"></div>
                <span>Moyen</span>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
