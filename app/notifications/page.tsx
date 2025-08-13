import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Bell, MapPin, Clock, Settings } from "lucide-react"

export default function NotificationsPage() {
  const notifications = [
    {
      id: 1,
      title: "Nouveau projet dans votre région",
      message: "Construction d'une école primaire à Akanda",
      type: "info",
      location: "Estuaire",
      time: "Il y a 2h",
      read: false,
    },
    {
      id: 2,
      title: "Signalement traité",
      message: "Votre signalement sur la route de Kango a été pris en compte",
      type: "success",
      location: "Estuaire",
      time: "Il y a 1 jour",
      read: false,
    },
    {
      id: 3,
      title: "Retard signalé",
      message: "Retard sur le projet Centre de Santé Franceville",
      type: "warning",
      location: "Haut-Ogooué",
      time: "Il y a 2 jours",
      read: true,
    },
  ]

  return (
    <div className="min-h-screen bg-stone-50 py-8">
      <div className="container mx-auto px-4 max-w-4xl">
        <div className="mb-8">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-stone-800 mb-4">Notifications</h1>
              <p className="text-stone-600">Restez informé des dernières actualités de votre région</p>
            </div>
            <Button variant="outline">
              <Settings className="w-4 h-4 mr-2" />
              Paramètres
            </Button>
          </div>
        </div>

        <div className="space-y-4">
          {notifications.map((notification) => (
            <Card key={notification.id} className={`${!notification.read ? "border-orange-200 bg-orange-50/30" : ""}`}>
              <CardContent className="p-4">
                <div className="flex items-start gap-4">
                  <div className="w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center">
                    <Bell className="w-5 h-5 text-orange-600" />
                  </div>

                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="font-semibold text-stone-800">{notification.title}</h3>
                      {!notification.read && <div className="w-2 h-2 bg-orange-600 rounded-full" />}
                    </div>

                    <p className="text-stone-600 mb-2">{notification.message}</p>

                    <div className="flex items-center gap-4 text-sm text-stone-500">
                      <div className="flex items-center gap-1">
                        <MapPin className="w-3 h-3" />
                        {notification.location}
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="w-3 h-3" />
                        {notification.time}
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </div>
  )
}
