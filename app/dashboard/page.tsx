import { StatsOverview } from "@/components/dashboard/stats-overview"
import { ProjectsChart } from "@/components/dashboard/projects-chart"
import { StatusDistribution } from "@/components/dashboard/status-distribution"
import { ProvinceComparison } from "@/components/dashboard/province-comparison"
import { RecentActivity } from "@/components/dashboard/recent-activity"
import { PerformanceMetrics } from "@/components/dashboard/performance-metrics"
import { ProblemsMap } from "@/components/dashboard/problems-map"

export default function DashboardPage() {
  return (
    <div className="min-h-screen bg-stone-50 py-8">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-stone-800 mb-4">Tableau de Bord Public</h1>
          <p className="text-stone-600 max-w-2xl">
            Visualisez en temps réel l'avancement des projets publics au Gabon. Données transparentes et accessibles à
            tous les citoyens.
          </p>
        </div>

        <div className="space-y-8">
          <StatsOverview />

          <div className="grid lg:grid-cols-3 gap-6">
            <div className="lg:col-span-1">
              <ProjectsChart />
            </div>
            <div className="lg:col-span-1">
              <StatusDistribution />
            </div>
            <div className="lg:col-span-1">
              <ProblemsMap />
            </div>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            <ProvinceComparison />
            <RecentActivity />
          </div>

          <PerformanceMetrics />
        </div>
      </div>
    </div>
  )
}
