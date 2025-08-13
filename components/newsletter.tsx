"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Mail, MapPin, Bell, BarChart3 } from "lucide-react"

export function Newsletter() {
  return (
    <section className="py-20 px-4 bg-white">
      <div className="container mx-auto max-w-4xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-stone-800 mb-6">Restez Informé</h2>
          <p className="text-lg text-stone-600 max-w-2xl mx-auto">
            Recevez notre bulletin d'information personnalisé avec les dernières actualités de votre province et les
            projets qui vous intéressent.
          </p>
        </div>

        <Card className="border-orange-200">
          <CardHeader className="text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-orange-600 to-amber-600 rounded-full flex items-center justify-center mx-auto mb-4">
              <Mail className="w-8 h-8 text-white" />
            </div>
            <CardTitle className="text-2xl text-stone-800">Newsletter TransparenCity</CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <label className="text-sm font-medium text-stone-700 mb-2 block">Votre email</label>
                <Input type="email" placeholder="votre.email@exemple.com" className="border-stone-300" />
              </div>
              <div>
                <label className="text-sm font-medium text-stone-700 mb-2 block">Votre province</label>
                <Select>
                  <SelectTrigger className="border-stone-300">
                    <SelectValue placeholder="Sélectionnez votre province" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="estuaire">Estuaire</SelectItem>
                    <SelectItem value="haut-ogooue">Haut-Ogooué</SelectItem>
                    <SelectItem value="moyen-ogooue">Moyen-Ogooué</SelectItem>
                    <SelectItem value="ngounie">Ngounié</SelectItem>
                    <SelectItem value="nyanga">Nyanga</SelectItem>
                    <SelectItem value="ogooue-ivindo">Ogooué-Ivindo</SelectItem>
                    <SelectItem value="ogooue-lolo">Ogooué-Lolo</SelectItem>
                    <SelectItem value="ogooue-maritime">Ogooué-Maritime</SelectItem>
                    <SelectItem value="woleu-ntem">Woleu-Ntem</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            <div>
              <label className="text-sm font-medium text-stone-700 mb-3 block">Types de contenus souhaités</label>
              <div className="grid md:grid-cols-2 gap-3">
                <div className="flex items-center space-x-2">
                  <Checkbox id="alertes" />
                  <label htmlFor="alertes" className="text-sm text-stone-600 flex items-center">
                    <Bell className="w-4 h-4 mr-1 text-orange-600" />
                    Alertes locales
                  </label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="stats" />
                  <label htmlFor="stats" className="text-sm text-stone-600 flex items-center">
                    <BarChart3 className="w-4 h-4 mr-1 text-amber-600" />
                    Statistiques mensuelles
                  </label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="projets" />
                  <label htmlFor="projets" className="text-sm text-stone-600 flex items-center">
                    <MapPin className="w-4 h-4 mr-1 text-stone-600" />
                    Nouveaux projets
                  </label>
                </div>
                <div className="flex items-center space-x-2">
                  <Checkbox id="participation" />
                  <label htmlFor="participation" className="text-sm text-stone-600 flex items-center">
                    <Mail className="w-4 h-4 mr-1 text-orange-600" />
                    Appels à participation
                  </label>
                </div>
              </div>
            </div>

            <Button
              className="w-full bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-700 hover:to-amber-700 text-white"
              onClick={() => alert("Inscription à la newsletter réussie ! Vous recevrez bientôt nos actualités.")}
            >
              S'abonner à la Newsletter
            </Button>

            <p className="text-xs text-stone-500 text-center">
              En vous abonnant, vous acceptez de recevoir nos communications. Vous pouvez vous désabonner à tout moment.
            </p>
          </CardContent>
        </Card>
      </div>
    </section>
  )
}
