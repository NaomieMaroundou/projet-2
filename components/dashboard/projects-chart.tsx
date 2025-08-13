"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { ChartContainer, ChartTooltip, ChartTooltipContent } from "@/components/ui/chart"
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from "recharts"

const projectsData = [
  { month: "Jan", termine: 12, en_cours: 25, planifie: 8 },
  { month: "Fév", termine: 15, en_cours: 28, planifie: 12 },
  { month: "Mar", termine: 18, en_cours: 32, planifie: 15 },
  { month: "Avr", termine: 22, en_cours: 35, planifie: 18 },
  { month: "Mai", termine: 28, en_cours: 38, planifie: 22 },
  { month: "Jun", termine: 35, en_cours: 42, planifie: 25 },
]

export function ProjectsChart() {
  return (
    <Card>
      <CardHeader>
        <CardTitle className="text-lg">Évolution des Projets</CardTitle>
      </CardHeader>
      <CardContent>
        <ChartContainer
          config={{
            termine: { label: "Terminés", color: "hsl(var(--chart-1))" },
            en_cours: { label: "En cours", color: "hsl(var(--chart-2))" },
            planifie: { label: "Planifiés", color: "hsl(var(--chart-3))" },
          }}
          className="h-[250px]"
        >
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={projectsData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <ChartTooltip content={<ChartTooltipContent />} />
              <Bar dataKey="termine" fill="var(--color-termine)" />
              <Bar dataKey="en_cours" fill="var(--color-en_cours)" />
              <Bar dataKey="planifie" fill="var(--color-planifie)" />
            </BarChart>
          </ResponsiveContainer>
        </ChartContainer>
      </CardContent>
    </Card>
  )
}
