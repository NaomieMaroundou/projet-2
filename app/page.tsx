import { Hero } from "@/components/hero"
import { Mission } from "@/components/mission"
import { Features } from "@/components/features"
import { Stats } from "@/components/stats"
import { Newsletter } from "@/components/newsletter"

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Mission />
      <Features />
      <Stats />
      <Newsletter />
    </main>
  )
}
