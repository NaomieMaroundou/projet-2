"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Slider } from "@/components/ui/slider"
import { Filter, RotateCcw } from "lucide-react"

export function MapFilters() {
  const [selectedProvince, setSelectedProvince] = useState<string>("all")
  const [selectedTypes, setSelectedTypes] = useState<string[]>([])
  const [selectedStatus, setSelectedStatus] = useState<string>("all")
  const [progressRange, setProgressRange] = useState<number[]>([0, 100])

  const provinces = [
    "Estuaire",
    "Haut-Ogooué",
    "Moyen-Ogooué",
    "Ngounié",
    "Nyanga",
    "Ogooué-Ivindo",
    "Ogooué-Lolo",
    "Ogooué-Maritime",
    "Woleu-Ntem",
  ]

  const projectTypes = [
    { id: "education", label: "Éducation", color: "text-blue-600" },
    { id: "sante", label: "Santé", color: "text-red-600" },
    { id: "transport", label: "Transport", color: "text-green-600" },
    { id: "infrastructure", label: "Infrastructure", color: "text-purple-600" },
    { id: "energie", label: "Énergie", color: "text-yellow-600" },
    { id: "eau", label: "Eau & Assainissement", color: "text-cyan-600" },
  ]

  const statusOptions = [
    { value: "planifie", label: "Planifié" },
    { value: "en_cours", label: "En cours" },
    { value: "termine", label: "Terminé" },
    { value: "retard", label: "En retard" },
    { value: "suspendu", label: "Suspendu" },
  ]

  const handleTypeChange = (typeId: string, checked: boolean) => {
    if (checked) {
      setSelectedTypes([...selectedTypes, typeId])
    } else {
      setSelectedTypes(selectedTypes.filter((t) => t !== typeId))
    }
  }

  const resetFilters = () => {
    setSelectedProvince("all")
    setSelectedTypes([])
    setSelectedStatus("all")
    setProgressRange([0, 100])
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Filter className="w-5 h-5 text-orange-600" />
          Filtres
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Province */}
        <div>
          <label className="text-sm font-medium text-stone-700 mb-2 block">Province</label>
          <Select value={selectedProvince} onValueChange={setSelectedProvince}>
            <SelectTrigger>
              <SelectValue placeholder="Toutes les provinces" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Toutes les provinces</SelectItem>
              {provinces.map((province) => (
                <SelectItem key={province} value={province}>
                  {province}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Type de projet */}
        <div>
          <label className="text-sm font-medium text-stone-700 mb-3 block">Type de projet</label>
          <div className="space-y-2">
            {projectTypes.map((type) => (
              <div key={type.id} className="flex items-center space-x-2">
                <Checkbox
                  id={type.id}
                  checked={selectedTypes.includes(type.id)}
                  onCheckedChange={(checked) => handleTypeChange(type.id, checked as boolean)}
                />
                <label htmlFor={type.id} className={`text-sm ${type.color} cursor-pointer`}>
                  {type.label}
                </label>
              </div>
            ))}
          </div>
        </div>

        {/* Statut */}
        <div>
          <label className="text-sm font-medium text-stone-700 mb-2 block">Statut</label>
          <Select value={selectedStatus} onValueChange={setSelectedStatus}>
            <SelectTrigger>
              <SelectValue placeholder="Tous les statuts" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">Tous les statuts</SelectItem>
              {statusOptions.map((status) => (
                <SelectItem key={status.value} value={status.value}>
                  {status.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Avancement */}
        <div>
          <label className="text-sm font-medium text-stone-700 mb-3 block">
            Avancement ({progressRange[0]}% - {progressRange[1]}%)
          </label>
          <Slider
            value={progressRange}
            onValueChange={setProgressRange}
            max={100}
            min={0}
            step={5}
            className="w-full"
          />
        </div>

        {/* Actions */}
        <div className="space-y-2">
          <Button
            className="w-full bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-700 hover:to-amber-700 text-white"
            onClick={() => alert("Filtres appliqués ! Les résultats de la carte ont été mis à jour.")}
          >
            Appliquer les Filtres
          </Button>
          <Button variant="outline" className="w-full bg-transparent" onClick={resetFilters}>
            <RotateCcw className="w-4 h-4 mr-2" />
            Réinitialiser
          </Button>
        </div>

        {/* Statistiques rapides */}
        <div className="pt-4 border-t border-stone-200">
          <h4 className="text-sm font-medium text-stone-700 mb-2">Résultats</h4>
          <div className="text-sm text-stone-600 space-y-1">
            <div>156 projets trouvés</div>
            <div>89 en cours</div>
            <div>45 terminés</div>
            <div>22 planifiés</div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
