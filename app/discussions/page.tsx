import { DiscussionsList } from "@/components/discussions/discussions-list"
import { CreateDiscussion } from "@/components/discussions/create-discussion"
import { TrendingTopics } from "@/components/discussions/trending-topics"

export default function DiscussionsPage() {
  return (
    <div className="min-h-screen bg-stone-50 py-8">
      <div className="container mx-auto px-4 max-w-6xl">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-stone-800 mb-4">Discussions Citoyennes</h1>
          <p className="text-stone-600 max-w-2xl">
            Participez aux débats publics, partagez vos idées et contribuez à l'amélioration de votre communauté. Votre
            voix compte dans la construction d'un Gabon plus transparent.
          </p>
        </div>

        <div className="grid lg:grid-cols-4 gap-8">
          <div className="lg:col-span-3">
            <div className="space-y-6">
              <CreateDiscussion />
              <DiscussionsList />
            </div>
          </div>
          <div className="lg:col-span-1">
            <TrendingTopics />
          </div>
        </div>
      </div>
    </div>
  )
}
