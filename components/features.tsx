"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Map, MessageSquare, BarChart3, Bell, Award, Mail } from "lucide-react"
import Link from "next/link"

export function Features() {
  const features = [
    {
      icon: Map,
      title: "Carte Interactive",
      description: "Explorez les projets publics par province avec filtres avancés",
      link: "/carte",
      color: "orange",
    },
    {
      icon: MessageSquare,
      title: "Signalements Citoyens",
      description: "Rapportez les problèmes avec photos, vidéos et géolocalisation",
      link: "/signaler",
      color: "amber",
    },
    {
      icon: BarChart3,
      title: "Tableau de Bord",
      description: "Statistiques en temps réel par région et type de projet",
      link: "/dashboard",
      color: "stone",
    },
    {
      icon: Bell,
      title: "Notifications Locales",
      description: "Alertes personnalisées selon votre localisation",
      link: "/notifications",
      color: "orange",
    },
    {
      icon: Award,
      title: "Discussions Citoyennes",
      description: "Participez aux débats publics et partagez vos idées",
      link: "/discussions",
      color: "amber",
    },
    {
      icon: Mail,
      title: "Newsletter Personnalisée",
      description: "Bulletin d'information adapté à votre province et vos intérêts",
      link: "#newsletter",
      color: "stone",
    },
  ]

  return (
    <section className="py-20 px-4 bg-stone-50">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-stone-800 mb-6">Fonctionnalités Complètes</h2>
          <p className="text-lg text-stone-600 max-w-3xl mx-auto">
            Une plateforme complète conçue pour répondre aux besoins spécifiques des citoyens gabonais en matière de
            transparence et de participation publique.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => {
            const Icon = feature.icon
            const colorClasses = {
              orange: "bg-orange-100 text-orange-600 border-orange-200",
              amber: "bg-amber-100 text-amber-600 border-amber-200",
              stone: "bg-stone-100 text-stone-600 border-stone-200",
            }

            return (
              <Link key={index} href={feature.link}>
                <Card
                  className={`${colorClasses[feature.color as keyof typeof colorClasses].split(" ")[2]} hover:shadow-lg transition-all duration-300 hover:-translate-y-1 cursor-pointer`}
                >
                  <CardHeader className="pb-3">
                    <div
                      className={`w-12 h-12 ${colorClasses[feature.color as keyof typeof colorClasses].split(" ")[0]} rounded-full flex items-center justify-center mb-3`}
                    >
                      <Icon
                        className={`w-6 h-6 ${colorClasses[feature.color as keyof typeof colorClasses].split(" ")[1]}`}
                      />
                    </div>
                    <CardTitle className="text-lg text-stone-800">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent className="pt-0">
                    <p className="text-sm text-stone-600">{feature.description}</p>
                  </CardContent>
                </Card>
              </Link>
            )
          })}
        </div>
      </div>
    </section>
  )
}
