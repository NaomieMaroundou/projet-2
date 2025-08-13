import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { MessageSquare, ThumbsUp, Clock, MapPin, Eye } from "lucide-react"

const discussions = [
  {
    id: 1,
    title: "Amélioration du transport public à Libreville",
    content: "Que pensez-vous des nouvelles lignes de bus proposées ? Comment améliorer la mobilité urbaine ?",
    author: "Marie K.",
    province: "Estuaire",
    category: "Transport",
    likes: 24,
    replies: 12,
    views: 156,
    time: "Il y a 2h",
    isHot: true,
  },
  {
    id: 2,
    title: "Qualité de l'eau potable dans les zones rurales",
    content: "Discussion sur les projets d'amélioration de l'accès à l'eau potable dans nos villages.",
    author: "Jean-Paul M.",
    province: "Haut-Ogooué",
    category: "Infrastructure",
    likes: 18,
    replies: 8,
    views: 89,
    time: "Il y a 4h",
    isHot: false,
  },
  {
    id: 3,
    title: "Éducation numérique : équipement des écoles",
    content: "Comment accélérer la digitalisation de nos établissements scolaires ?",
    author: "Fatou B.",
    province: "Estuaire",
    category: "Éducation",
    likes: 31,
    replies: 15,
    views: 203,
    time: "Il y a 6h",
    isHot: true,
  },
  {
    id: 4,
    title: "Gestion des déchets à Port-Gentil",
    content: "Propositions pour améliorer la collecte et le traitement des déchets urbains.",
    author: "Claude N.",
    province: "Ogooué-Maritime",
    category: "Environnement",
    likes: 12,
    replies: 6,
    views: 67,
    time: "Il y a 8h",
    isHot: false,
  },
  {
    id: 5,
    title: "Développement du tourisme local",
    content: "Comment valoriser nos sites touristiques et créer des emplois dans le secteur ?",
    author: "Sylvie A.",
    province: "Nyanga",
    category: "Économie",
    likes: 22,
    replies: 11,
    views: 134,
    time: "Il y a 12h",
    isHot: false,
  },
]

const categories = {
  Transport: "bg-blue-100 text-blue-800",
  Infrastructure: "bg-green-100 text-green-800",
  Éducation: "bg-purple-100 text-purple-800",
  Environnement: "bg-emerald-100 text-emerald-800",
  Économie: "bg-orange-100 text-orange-800",
}

export function DiscussionsList() {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between">
        <h2 className="text-xl font-semibold text-stone-800">Discussions Récentes</h2>
        <div className="flex gap-2">
          <Button variant="outline" size="sm">
            Plus récentes
          </Button>
          <Button variant="outline" size="sm">
            Plus populaires
          </Button>
        </div>
      </div>

      {discussions.map((discussion) => (
        <Card key={discussion.id} className="hover:shadow-md transition-shadow cursor-pointer">
          <CardContent className="p-6">
            <div className="flex items-start gap-4">
              <Avatar className="w-10 h-10">
                <AvatarFallback className="bg-gradient-to-br from-orange-600 to-amber-600 text-white">
                  {discussion.author.charAt(0)}
                </AvatarFallback>
              </Avatar>

              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-2">
                  {discussion.isHot && <Badge className="bg-red-100 text-red-800 text-xs">🔥 Populaire</Badge>}
                  <Badge className={`${categories[discussion.category as keyof typeof categories]} text-xs`}>
                    {discussion.category}
                  </Badge>
                  <div className="flex items-center gap-1 text-xs text-stone-500">
                    <MapPin className="w-3 h-3" />
                    {discussion.province}
                  </div>
                </div>

                <h3 className="font-semibold text-stone-800 mb-2 hover:text-orange-600 transition-colors">
                  {discussion.title}
                </h3>

                <p className="text-stone-600 text-sm mb-3 line-clamp-2">{discussion.content}</p>

                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-4 text-sm text-stone-500">
                    <div className="flex items-center gap-1">
                      <ThumbsUp className="w-4 h-4" />
                      {discussion.likes}
                    </div>
                    <div className="flex items-center gap-1">
                      <MessageSquare className="w-4 h-4" />
                      {discussion.replies}
                    </div>
                    <div className="flex items-center gap-1">
                      <Eye className="w-4 h-4" />
                      {discussion.views}
                    </div>
                  </div>

                  <div className="flex items-center gap-2 text-xs text-stone-500">
                    <span>Par {discussion.author}</span>
                    <span>•</span>
                    <div className="flex items-center gap-1">
                      <Clock className="w-3 h-3" />
                      {discussion.time}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      ))}

      <div className="text-center pt-6">
        <Button variant="outline" className="bg-transparent">
          Charger plus de discussions
        </Button>
      </div>
    </div>
  )
}
