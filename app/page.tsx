import { DashboardShell } from "@/components/dashboard-shell"
import { ArticlesPage } from "@/components/articles-page"

export default function Home() {
  return (
    <DashboardShell>
      <ArticlesPage />
    </DashboardShell>
  )
}
