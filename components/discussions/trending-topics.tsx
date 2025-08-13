import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { TrendingUp, Hash, Users, MessageSquare } from "lucide-react"

const trendingTopics = [
  { tag: "transport-public", discussions: 12, participants: 45 },
  { tag: "éducation-numérique", discussions: 8, participants: 32 },
  { tag: "eau-potable", discussions: 6, participants: 28 },
  { tag: "routes-rurales", discussions: 9, participants: 41 },
  { tag: "santé-maternelle", discussions: 5, participants: 23 },
]

const popularDiscussions = [
  {
    title: "Amélioration du transport public",
    replies: 24,
    category: "Transport",
  },
  {
    title: "Éducation numérique dans les écoles",
    replies: 18,
    category: "Éducation",
  },
  {
    title: "Accès à l'eau potable",
    replies: 15,
    category: "Infrastructure",
  },
]

const activeUsers = [
  { name: "Marie K.", contributions: 15 },
  { name: "Jean-Paul M.", contributions: 12 },
  { name: "Fatou B.", contributions: 11 },
  { name: "Claude N.", contributions: 9 },
  { name: "Sylvie A.", contributions: 8 },
]

export function TrendingTopics() {
  return (
    <div className="space-y-6">
      {/* Sujets tendance */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-lg">
            <TrendingUp className="w-5 h-5 text-orange-600" />
            Sujets Tendance
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {trendingTopics.map((topic, index) => (
            <div
              key={topic.tag}
              className="flex items-center justify-between p-2 hover:bg-stone-50 rounded cursor-pointer"
            >
              <div className="flex items-center gap-2">
                <Hash className="w-4 h-4 text-stone-500" />
                <span className="text-sm font-medium text-stone-800">{topic.tag}</span>
              </div>
              <div className="text-xs text-stone-500">{topic.discussions} discussions</div>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Discussions populaires */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-lg">
            <MessageSquare className="w-5 h-5 text-orange-600" />
            Populaires
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {popularDiscussions.map((discussion, index) => (
            <div key={index} className="p-2 hover:bg-stone-50 rounded cursor-pointer">
              <h4 className="text-sm font-medium text-stone-800 mb-1">{discussion.title}</h4>
              <div className="flex items-center justify-between">
                <Badge variant="secondary" className="text-xs">
                  {discussion.category}
                </Badge>
                <span className="text-xs text-stone-500">{discussion.replies} réponses</span>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Contributeurs actifs */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2 text-lg">
            <Users className="w-5 h-5 text-orange-600" />
            Contributeurs Actifs
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {activeUsers.map((user, index) => (
            <div key={index} className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 bg-gradient-to-br from-orange-600 to-amber-600 rounded-full flex items-center justify-center text-white text-xs">
                  {user.name.charAt(0)}
                </div>
                <span className="text-sm text-stone-800">{user.name}</span>
              </div>
              <Badge variant="outline" className="text-xs">
                {user.contributions}
              </Badge>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Statistiques */}
      <Card>
        <CardHeader>
          <CardTitle className="text-lg">Statistiques</CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          <div className="flex justify-between">
            <span className="text-sm text-stone-600">Discussions actives</span>
            <span className="text-sm font-medium">127</span>
          </div>
          <div className="flex justify-between">
            <span className="text-sm text-stone-600">Participants ce mois</span>
            <span className="text-sm font-medium">1,234</span>
          </div>
          <div className="flex justify-between">
            <span className="text-sm text-stone-600">Messages postés</span>
            <span className="text-sm font-medium">3,456</span>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
