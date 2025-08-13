"use client"

import { useEffect, useRef, useState } from "react"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { MapPin, Loader2, AlertCircle, ExternalLink } from "lucide-react"
import { Alert, AlertDescription } from "@/components/ui/alert"

// Données des projets avec coordonnées réelles du Gabon
const projects = [
  {
    id: 1,
    name: "Construction École Primaire Akanda",
    type: "education",
    province: "Estuaire",
    status: "en_cours",
    progress: 65,
    budget: "450M FCFA",
    coordinates: { lat: 0.5149, lng: 9.5582, x: 45, y: 30 }, // Akanda
    description: "Nouvelle école primaire de 12 classes avec cantine scolaire",
  },
  {
    id: 2,
    name: "Réhabilitation Route Libreville-Kango",
    type: "transport",
    province: "Estuaire",
    status: "planifie",
    progress: 15,
    budget: "2.8Md FCFA",
    coordinates: { lat: 0.4162, lng: 9.4673, x: 40, y: 35 }, // Libreville
    description: "Réfection complète de 45km de route avec éclairage",
  },
  {
    id: 3,
    name: "Centre de Santé Franceville",
    type: "sante",
    province: "Haut-Ogooué",
    status: "termine",
    progress: 100,
    budget: "680M FCFA",
    coordinates: { lat: -1.6332, lng: 13.5833, x: 70, y: 60 }, // Franceville
    description: "Centre de santé moderne avec maternité et urgences",
  },
  {
    id: 4,
    name: "Électrification Rurale Lambaréné",
    type: "energie",
    province: "Moyen-Ogooué",
    status: "en_cours",
    progress: 40,
    budget: "320M FCFA",
    coordinates: { lat: -0.7, lng: 10.2333, x: 35, y: 50 }, // Lambaréné
    description: "Extension du réseau électrique vers 8 villages",
  },
  {
    id: 5,
    name: "Marché Municipal Oyem",
    type: "infrastructure",
    province: "Woleu-Ntem",
    status: "en_cours",
    progress: 80,
    budget: "290M FCFA",
    coordinates: { lat: 1.5993, lng: 11.5793, x: 50, y: 20 }, // Oyem
    description: "Nouveau marché couvert avec 150 étals",
  },
  {
    id: 6,
    name: "Hôpital Régional Port-Gentil",
    type: "sante",
    province: "Ogooué-Maritime",
    status: "en_cours",
    progress: 55,
    budget: "1.2Md FCFA",
    coordinates: { lat: -0.7193, lng: 8.7815, x: 25, y: 45 }, // Port-Gentil
    description: "Extension de l'hôpital avec nouveau bloc opératoire",
  },
]

const provinces = [
  { name: "Estuaire", coordinates: { x: 42, y: 32 } },
  { name: "Haut-Ogooué", coordinates: { x: 68, y: 58 } },
  { name: "Moyen-Ogooué", coordinates: { x: 38, y: 48 } },
  { name: "Ngounié", coordinates: { x: 45, y: 65 } },
  { name: "Nyanga", coordinates: { x: 35, y: 75 } },
  { name: "Ogooué-Ivindo", coordinates: { x: 55, y: 40 } },
  { name: "Ogooué-Lolo", coordinates: { x: 60, y: 55 } },
  { name: "Ogooué-Maritime", coordinates: { x: 25, y: 45 } },
  { name: "Woleu-Ntem", coordinates: { x: 48, y: 22 } },
]

declare global {
  interface Window {
    google: any
    initMap: () => void
  }
}

export function GoogleMapsComponent() {
  const mapRef = useRef<HTMLDivElement>(null)
  const [map, setMap] = useState<any>(null)
  const [selectedProject, setSelectedProject] = useState<(typeof projects)[0] | null>(null)
  const [isLoading, setIsLoading] = useState(true)
  const [useGoogleMaps, setUseGoogleMaps] = useState(false)
  const [hoveredProject, setHoveredProject] = useState<number | null>(null)

  const getProjectIcon = (type: string) => {
    const icons = {
      education: "🏫",
      sante: "🏥",
      transport: "🛣️",
      infrastructure: "🏢",
      energie: "⚡",
    }
    return icons[type as keyof typeof icons] || "📍"
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "termine":
        return "#10b981" // green
      case "en_cours":
        return "#f59e0b" // orange
      case "planifie":
        return "#3b82f6" // blue
      case "retard":
        return "#ef4444" // red
      default:
        return "#6b7280" // gray
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

  // Fonction pour initialiser Google Maps (si clé API disponible)
  const initializeGoogleMaps = () => {
    if (!window.google || !mapRef.current) return

    try {
      const gabonCenter = { lat: -0.8037, lng: 11.6094 }

      const mapInstance = new window.google.maps.Map(mapRef.current, {
        zoom: 6,
        center: gabonCenter,
        styles: [
          {
            featureType: "water",
            elementType: "geometry",
            stylers: [{ color: "#a2daf2" }],
          },
          {
            featureType: "landscape.natural",
            elementType: "geometry",
            stylers: [{ color: "#f5f5f2" }],
          },
          {
            featureType: "road",
            elementType: "geometry",
            stylers: [{ color: "#ffffff" }],
          },
        ],
      })

      setMap(mapInstance)

      // Ajouter les marqueurs
      projects.forEach((project) => {
        const marker = new window.google.maps.Marker({
          position: { lat: project.coordinates.lat, lng: project.coordinates.lng },
          map: mapInstance,
          title: project.name,
          icon: {
            url: `data:image/svg+xml;charset=UTF-8,${encodeURIComponent(`
              <svg width="40" height="40" viewBox="0 0 40 40" xmlns="http://www.w3.org/2000/svg">
                <circle cx="20" cy="20" r="18" fill="${getStatusColor(project.status)}" stroke="white" strokeWidth="2"/>
                <text x="20" y="26" textAnchor="middle" fontSize="16" fill="white">${getProjectIcon(project.type)}</text>
              </svg>
            `)}`,
            scaledSize: new window.google.maps.Size(40, 40),
          },
        })

        const infoWindow = new window.google.maps.InfoWindow({
          content: `
            <div style="padding: 10px; max-width: 250px;">
              <h3 style="margin: 0 0 8px 0; font-size: 14px; font-weight: bold;">${project.name}</h3>
              <p style="margin: 0 0 8px 0; font-size: 12px; color: #666;">${project.description}</p>
              <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">
                <span style="background: ${getStatusColor(project.status)}; color: white; padding: 2px 8px; border-radius: 12px; font-size: 11px;">
                  ${getStatusLabel(project.status)}
                </span>
                <span style="font-size: 12px; color: #666;">${project.progress}%</span>
              </div>
              <div style="font-size: 12px; color: #666;">
                <strong>Budget:</strong> ${project.budget}<br>
                <strong>Province:</strong> ${project.province}
              </div>
            </div>
          `,
        })

        marker.addListener("click", () => {
          infoWindow.open(mapInstance, marker)
          setSelectedProject(project)
        })
      })

      setIsLoading(false)
    } catch (err) {
      console.error("Erreur Google Maps:", err)
      setUseGoogleMaps(false)
      setIsLoading(false)
    }
  }

  // Tentative de chargement de Google Maps
  useEffect(() => {
    // Simuler un délai de chargement puis basculer vers la carte SVG
    const timer = setTimeout(() => {
      setIsLoading(false)
      setUseGoogleMaps(false)
    }, 2000)

    return () => clearTimeout(timer)
  }, [])

  // Rendu de la carte SVG de fallback
  const renderSVGMap = () => (
    <div className="relative w-full h-[500px] bg-gradient-to-br from-green-100 to-blue-100 overflow-hidden rounded-b-lg">
      {/* Contour du Gabon */}
      <svg className="absolute inset-0 w-full h-full" viewBox="0 0 100 100">
        <defs>
          <pattern id="water" patternUnits="userSpaceOnUse" width="4" height="4">
            <rect width="4" height="4" fill="#a2daf2" />
            <path d="M0,4l4,-4M-1,1l2,-2M3,5l2,-2" stroke="#7dd3fc" strokeWidth="0.5" />
          </pattern>
        </defs>

        {/* Océan Atlantique */}
        <rect x="0" y="0" width="30" height="100" fill="url(#water)" />

        {/* Contour du Gabon */}
        <path
          d="M20 30 Q25 25 35 28 L45 25 Q55 22 65 28 L75 35 Q80 45 75 55 L70 65 Q65 75 55 78 L45 80 Q35 82 25 78 L15 70 Q10 60 12 50 L15 40 Q18 35 20 30 Z"
          fill="rgba(34, 197, 94, 0.1)"
          stroke="rgba(34, 197, 94, 0.3)"
          strokeWidth="0.5"
        />

        {/* Frontières des provinces */}
        <g stroke="rgba(34, 197, 94, 0.2)" strokeWidth="0.3" fill="none">
          <path d="M20 30 L35 35 L45 40" />
          <path d="M35 35 L50 30 L65 35" />
          <path d="M45 40 L60 45 L70 50" />
          <path d="M35 50 L50 55 L65 60" />
          <path d="M25 60 L40 65 L55 70" />
        </g>
      </svg>

      {/* Noms des provinces */}
      {provinces.map((province, index) => (
        <div
          key={index}
          className="absolute text-xs text-stone-600 font-medium pointer-events-none select-none"
          style={{
            left: `${province.coordinates.x}%`,
            top: `${province.coordinates.y}%`,
            transform: "translate(-50%, -50%)",
          }}
        >
          {province.name}
        </div>
      ))}

      {/* Marqueurs des projets */}
      {projects.map((project) => {
        const Icon = getProjectIcon(project.type)
        const isHovered = hoveredProject === project.id
        const isSelected = selectedProject?.id === project.id

        return (
          <div
            key={project.id}
            className={`absolute cursor-pointer transition-all duration-200 ${
              isHovered || isSelected ? "scale-125 z-10" : "z-5"
            }`}
            style={{
              left: `${project.coordinates.x}%`,
              top: `${project.coordinates.y}%`,
              transform: "translate(-50%, -50%)",
            }}
            onMouseEnter={() => setHoveredProject(project.id)}
            onMouseLeave={() => setHoveredProject(null)}
            onClick={() => setSelectedProject(project)}
          >
            <div
              className="w-8 h-8 rounded-full flex items-center justify-center shadow-lg text-white text-sm font-bold"
              style={{ backgroundColor: getStatusColor(project.status) }}
            >
              {Icon}
            </div>

            {/* Tooltip au survol */}
            {isHovered && (
              <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 bg-white p-3 rounded-lg shadow-lg border min-w-64 z-20">
                <div className="text-sm font-medium text-stone-800 mb-1">{project.name}</div>
                <div className="text-xs text-stone-600 mb-2">{project.province}</div>
                <div className="flex items-center gap-2 mb-2">
                  <Badge variant="secondary" className="text-xs">
                    {getStatusLabel(project.status)}
                  </Badge>
                  <span className="text-xs text-stone-600">{project.progress}%</span>
                </div>
                <div className="text-xs text-stone-600">{project.description}</div>
              </div>
            )}
          </div>
        )
      })}

      {/* Légende */}
      <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm p-3 rounded-lg shadow-lg">
        <h4 className="text-xs font-semibold text-stone-800 mb-2">Légende</h4>
        <div className="space-y-1">
          <div className="flex items-center gap-2 text-xs">
            <div className="w-3 h-3 rounded-full bg-green-500"></div>
            <span>Terminé</span>
          </div>
          <div className="flex items-center gap-2 text-xs">
            <div className="w-3 h-3 rounded-full bg-orange-500"></div>
            <span>En cours</span>
          </div>
          <div className="flex items-center gap-2 text-xs">
            <div className="w-3 h-3 rounded-full bg-blue-500"></div>
            <span>Planifié</span>
          </div>
        </div>
      </div>
    </div>
  )

  return (
    <Card className="h-[600px]">
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <MapPin className="w-5 h-5 text-orange-600" />
          Carte Interactive du Gabon
        </CardTitle>

        {/* Alerte pour la clé API */}
        <Alert className="border-orange-200 bg-orange-50">
          <AlertCircle className="h-4 w-4 text-orange-600" />
          <AlertDescription className="text-sm">
            <div className="flex items-center justify-between">
              <span>Carte de démonstration - Pour utiliser Google Maps, configurez une clé API valide</span>
              <Button
                variant="outline"
                size="sm"
                className="ml-2 bg-transparent"
                onClick={() =>
                  window.open("https://developers.google.com/maps/documentation/javascript/get-api-key", "_blank")
                }
              >
                <ExternalLink className="w-3 h-3 mr-1" />
                Guide API
              </Button>
            </div>
          </AlertDescription>
        </Alert>
      </CardHeader>

      <CardContent className="p-0 relative">
        {isLoading && (
          <div className="absolute inset-0 flex items-center justify-center bg-white/80 z-10">
            <div className="text-center">
              <Loader2 className="w-8 h-8 animate-spin text-orange-600 mx-auto mb-2" />
              <p className="text-stone-600">Chargement de la carte...</p>
            </div>
          </div>
        )}

        {!isLoading && (
          <>{useGoogleMaps ? <div ref={mapRef} className="w-full h-[500px] rounded-b-lg" /> : renderSVGMap()}</>
        )}

        {/* Détails du projet sélectionné */}
        {selectedProject && (
          <div className="absolute bottom-4 left-4 right-4 bg-white rounded-lg shadow-lg border p-4 z-20">
            <div className="flex items-start justify-between mb-3">
              <div>
                <h3 className="font-semibold text-stone-800">{selectedProject.name}</h3>
                <p className="text-sm text-stone-600">{selectedProject.province}</p>
              </div>
              <Badge variant="secondary">{getStatusLabel(selectedProject.status)}</Badge>
            </div>

            <p className="text-sm text-stone-600 mb-3">{selectedProject.description}</p>

            <div className="flex items-center justify-between text-sm mb-3">
              <span className="text-stone-600">Budget: {selectedProject.budget}</span>
              <span className="text-stone-600">Avancement: {selectedProject.progress}%</span>
            </div>

            <div className="w-full bg-stone-200 rounded-full h-2 mb-3">
              <div
                className="h-2 rounded-full"
                style={{
                  width: `${selectedProject.progress}%`,
                  backgroundColor: getStatusColor(selectedProject.status),
                }}
              />
            </div>

            <div className="flex gap-2">
              <Button size="sm" variant="outline" onClick={() => alert("Fonctionnalité en développement")}>
                Voir Détails
              </Button>
              <Button size="sm" variant="outline" onClick={() => (window.location.href = "/signaler")}>
                Signaler un Problème
              </Button>
              <Button size="sm" variant="ghost" onClick={() => setSelectedProject(null)}>
                Fermer
              </Button>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  )
}
