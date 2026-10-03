import type React from "react"
import { EmployerSidebar } from "@/components/employer/employer-sidebar"

export default function EmployerLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex h-screen bg-background">
      <EmployerSidebar />
      <main className="flex-1 overflow-y-auto">{children}</main>
    </div>
  )
}
