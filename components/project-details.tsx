"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Calendar, MapPin, DollarSign, Users, AlertTriangle, MessageSquare, Share2, Heart, Eye } from "lucide-react"

export function ProjectDetails() {
  const [liked, setLiked] = useState(false)
  const [likes, setLikes] = useState(24)
  const [views, setViews] = useState(156)
  const [comments, setComments] = useState(8)

  // Projet exemple sélectionné
  const project = {
    id: 1,
    name: "Construction École Primaire Akanda",
    type: "Éducation",
    province: "Estuaire",
    commune: "Akanda",
    status: "en_cours",
    progress: 65,
    budget: "450 000 000 FCFA",
    dateDebut: "15 Mars 2024",
    dateFin: "30 Novembre 2024",
    entrepreneur: "SOGEA SATOM Gabon",
    maitreDoeuvre: "Ministère de l'Éducation Nationale",
    description:
      "Construction d'une école primaire moderne de 12 classes avec cantine scolaire, bibliothèque et terrain de sport. Le projet vise à améliorer l'accès à l'éducation dans la commune d'Akanda.",
    beneficiaires: "850 élèves",
    signalements: 3,
    derniereMAJ: "Il y a 2 jours",
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "termine":
        return "bg-green-100 text-green-800"
      case "en_cours":
        return "bg-orange-100 text-orange-800"
      case "planifie":
        return "bg-blue-100 text-blue-800"
      case "retard":
        return "bg-red-100 text-red-800"
      default:
        return "bg-gray-100 text-gray-800"
    }
  }

  const getStatusLabel = (status: string) => {
    switch (status) {
      case "termine":
        return "Terminé"
      case "en_cours":
        return "En cours"
      case "planifie":
        return "Planifié"
      case "retard":
        return "En retard"
      default:
        return "Inconnu"
    }
  }

  const handleLike = () => {
    setLiked(!liked)
    setLikes(liked ? likes - 1 : likes + 1)
  }

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: project.name,
        text: project.description,
        url: window.location.href,
      })
    } else {
      navigator.clipboard.writeText(window.location.href)
      alert("Lien copié dans le presse-papiers !")
    }
  }

  const handleViewMore = () => {
    window.location.href = `/projet/${project.id}`
  }

  const handleReport = () => {
    window.location.href = `/signaler?projet=${project.id}`
  }

  const handleComment = () => {
    alert("Fonctionnalité de commentaires en développement")
    setComments(comments + 1)
  }

  return (
    <Card className="h-[600px] overflow-y-auto">
      <CardHeader>
        <CardTitle className="text-lg">Détails du Projet</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div>
          <h3 className="font-semibold text-stone-800 mb-2">{project.name}</h3>
          <div className="flex items-center gap-2 mb-2">
            <Badge className={getStatusColor(project.status)}>{getStatusLabel(project.status)}</Badge>
            <Badge variant="outline">{project.type}</Badge>
          </div>
          <p className="text-sm text-stone-600">{project.description}</p>
        </div>

        {/* Avancement */}
        <div>
          <div className="flex justify-between items-center mb-2">
            <span className="text-sm font-medium text-stone-700">Avancement</span>
            <span className="text-sm text-stone-600">{project.progress}%</span>
          </div>
          <Progress value={project.progress} className="h-2" />
        </div>

        {/* Informations clés */}
        <div className="space-y-3">
          <div className="flex items-center gap-2 text-sm">
            <MapPin className="w-4 h-4 text-stone-500" />
            <span className="text-stone-600">
              {project.commune}, {project.province}
            </span>
          </div>

          <div className="flex items-center gap-2 text-sm">
            <DollarSign className="w-4 h-4 text-stone-500" />
            <span className="text-stone-600">Budget: {project.budget}</span>
          </div>

          <div className="flex items-center gap-2 text-sm">
            <Users className="w-4 h-4 text-stone-500" />
            <span className="text-stone-600">Bénéficiaires: {project.beneficiaires}</span>
          </div>

          <div className="flex items-center gap-2 text-sm">
            <Calendar className="w-4 h-4 text-stone-500" />
            <span className="text-stone-600">
              {project.dateDebut} - {project.dateFin}
            </span>
          </div>
        </div>

        {/* Acteurs */}
        <div className="space-y-2">
          <h4 className="text-sm font-medium text-stone-700">Acteurs du projet</h4>
          <div className="text-sm text-stone-600 space-y-1">
            <div>
              <strong>Entrepreneur:</strong> {project.entrepreneur}
            </div>
            <div>
              <strong>Maître d'œuvre:</strong> {project.maitreDoeuvre}
            </div>
          </div>
        </div>

        {/* Signalements */}
        {project.signalements > 0 && (
          <div className="p-3 bg-amber-50 border border-amber-200 rounded-lg">
            <div className="flex items-center gap-2 mb-1">
              <AlertTriangle className="w-4 h-4 text-amber-600" />
              <span className="text-sm font-medium text-amber-800">{project.signalements} signalement(s)</span>
            </div>
            <p className="text-xs text-amber-700">Des citoyens ont signalé des problèmes sur ce projet</p>
          </div>
        )}

        {/* Interactions */}
        <div className="flex items-center justify-between p-3 bg-stone-50 rounded-lg">
          <div className="flex items-center gap-4">
            <button
              onClick={handleLike}
              className={`flex items-center gap-1 text-sm transition-colors ${
                liked ? "text-red-600" : "text-stone-600 hover:text-red-600"
              }`}
            >
              <Heart className={`w-4 h-4 ${liked ? "fill-current" : ""}`} />
              {likes}
            </button>

            <button
              onClick={handleComment}
              className="flex items-center gap-1 text-sm text-stone-600 hover:text-blue-600 transition-colors"
            >
              <MessageSquare className="w-4 h-4" />
              {comments}
            </button>

            <div className="flex items-center gap-1 text-sm text-stone-600">
              <Eye className="w-4 h-4" />
              {views}
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="space-y-2">
          <Button
            className="w-full bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-700 hover:to-amber-700 text-white"
            onClick={handleReport}
          >
            <MessageSquare className="w-4 h-4 mr-2" />
            Signaler un Problème
          </Button>

          <div className="grid grid-cols-2 gap-2">
            <Button variant="outline" size="sm" onClick={handleShare}>
              <Share2 className="w-4 h-4 mr-1" />
              Partager
            </Button>
            <Button variant="outline" size="sm" onClick={handleViewMore}>
              Voir Plus
            </Button>
          </div>
        </div>

        {/* Dernière mise à jour */}
        <div className="text-xs text-stone-500 text-center pt-2 border-t border-stone-200">
          Dernière mise à jour: {project.derniereMAJ}
        </div>
      </CardContent>
    </Card>
  )
}
