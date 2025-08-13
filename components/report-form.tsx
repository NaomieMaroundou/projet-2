"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Badge } from "@/components/ui/badge"
import { AlertTriangle, MapPin, Phone, Mail } from "lucide-react"
import { MediaCapture } from "@/components/media-capture"

export function ReportForm() {
  const [isAnonymous, setIsAnonymous] = useState(true)
  const [selectedProject, setSelectedProject] = useState("")
  const [reportType, setReportType] = useState("")

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

  const reportTypes = [
    { value: "retard", label: "Retard dans les travaux", color: "bg-orange-100 text-orange-800" },
    { value: "qualite", label: "Problème de qualité", color: "bg-red-100 text-red-800" },
    { value: "securite", label: "Problème de sécurité", color: "bg-red-100 text-red-800" },
    { value: "environnement", label: "Impact environnemental", color: "bg-green-100 text-green-800" },
    { value: "acces", label: "Problème d'accès", color: "bg-blue-100 text-blue-800" },
    { value: "corruption", label: "Suspicion de corruption", color: "bg-purple-100 text-purple-800" },
    { value: "autre", label: "Autre problème", color: "bg-gray-100 text-gray-800" },
  ]

  const projects = [
    "Construction École Primaire Akanda",
    "Réhabilitation Route Libreville-Kango",
    "Centre de Santé Franceville",
    "Électrification Rurale Lambaréné",
    "Marché Municipal Oyem",
    "Nouveau projet à signaler",
  ]

  return (
    <Card>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <AlertTriangle className="w-5 h-5 text-orange-600" />
          Nouveau Signalement
        </CardTitle>
      </CardHeader>
      <CardContent className="space-y-6">
        {/* Type de signalement */}
        <div>
          <label className="text-sm font-medium text-stone-700 mb-3 block">Type de problème *</label>
          <div className="grid grid-cols-2 gap-2">
            {reportTypes.map((type) => (
              <button
                key={type.value}
                onClick={() => setReportType(type.value)}
                className={`p-3 text-left rounded-lg border transition-all ${
                  reportType === type.value
                    ? "border-orange-500 bg-orange-50"
                    : "border-stone-200 hover:border-stone-300"
                }`}
              >
                <Badge className={`${type.color} text-xs mb-1`}>{type.label}</Badge>
              </button>
            ))}
          </div>
        </div>

        {/* Localisation */}
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <label className="text-sm font-medium text-stone-700 mb-2 block">Province *</label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="Sélectionnez votre province" />
              </SelectTrigger>
              <SelectContent>
                {provinces.map((province) => (
                  <SelectItem key={province} value={province}>
                    {province}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
          <div>
            <label className="text-sm font-medium text-stone-700 mb-2 block">Commune/Ville</label>
            <Input placeholder="Ex: Libreville, Franceville..." />
          </div>
        </div>

        {/* Projet concerné */}
        <div>
          <label className="text-sm font-medium text-stone-700 mb-2 block">Projet concerné</label>
          <Select value={selectedProject} onValueChange={setSelectedProject}>
            <SelectTrigger>
              <SelectValue placeholder="Sélectionnez un projet ou tapez le nom" />
            </SelectTrigger>
            <SelectContent>
              {projects.map((project) => (
                <SelectItem key={project} value={project}>
                  {project}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        </div>

        {/* Localisation précise */}
        <div>
          <label className="text-sm font-medium text-stone-700 mb-2 block">Localisation précise</label>
          <div className="flex gap-2">
            <Input placeholder="Adresse ou point de repère" className="flex-1" />
            <Button variant="outline" size="icon">
              <MapPin className="w-4 h-4" />
            </Button>
          </div>
          <p className="text-xs text-stone-500 mt-1">Cliquez sur l'icône pour utiliser votre géolocalisation</p>
        </div>

        {/* Description */}
        <div>
          <label className="text-sm font-medium text-stone-700 mb-2 block">Description détaillée *</label>
          <Textarea placeholder="Décrivez le problème observé de manière détaillée..." className="min-h-32" />
        </div>

        {/* Médias */}
        <div>
          <label className="text-sm font-medium text-stone-700 mb-3 block">Preuves (photos, vidéos, audio)</label>
          <MediaCapture />
        </div>

        {/* Mode de signalement */}
        <div className="space-y-4">
          <div className="flex items-center space-x-2">
            <Checkbox id="anonymous" checked={isAnonymous} onCheckedChange={setIsAnonymous} />
            <label htmlFor="anonymous" className="text-sm text-stone-700">
              Signalement anonyme
            </label>
          </div>

          {!isAnonymous && (
            <div className="grid md:grid-cols-2 gap-4 p-4 bg-stone-50 rounded-lg">
              <div>
                <label className="text-sm font-medium text-stone-700 mb-2 block">
                  <Mail className="w-4 h-4 inline mr-1" />
                  Email (optionnel)
                </label>
                <Input type="email" placeholder="votre.email@exemple.com" />
              </div>
              <div>
                <label className="text-sm font-medium text-stone-700 mb-2 block">
                  <Phone className="w-4 h-4 inline mr-1" />
                  Téléphone (optionnel)
                </label>
                <Input type="tel" placeholder="+241 XX XX XX XX" />
              </div>
              <div className="md:col-span-2">
                <p className="text-xs text-stone-600">
                  En fournissant vos coordonnées, vous pourrez suivre l'évolution de votre signalement et être contacté
                  si nécessaire.
                </p>
              </div>
            </div>
          )}
        </div>

        {/* Urgence */}
        <div>
          <label className="text-sm font-medium text-stone-700 mb-2 block">Niveau d'urgence</label>
          <Select>
            <SelectTrigger>
              <SelectValue placeholder="Sélectionnez le niveau d'urgence" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="faible">Faible - Peut attendre</SelectItem>
              <SelectItem value="moyen">Moyen - À traiter prochainement</SelectItem>
              <SelectItem value="eleve">Élevé - Nécessite une attention rapide</SelectItem>
              <SelectItem value="critique">Critique - Danger immédiat</SelectItem>
            </SelectContent>
          </Select>
        </div>

        {/* Actions */}
        <div className="space-y-3">
          <Button
            className="w-full bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-700 hover:to-amber-700 text-white"
            onClick={() =>
              alert(
                "Signalement envoyé avec succès ! Nous examinerons votre rapport dans les plus brefs délais. Merci pour votre contribution citoyenne.",
              )
            }
          >
            Envoyer le Signalement
          </Button>

          <div className="text-xs text-stone-500 text-center">
            En envoyant ce signalement, vous acceptez nos conditions d'utilisation et contribuez à améliorer la
            transparence publique au Gabon.
          </div>
        </div>
      </CardContent>
    </Card>
  )
}
