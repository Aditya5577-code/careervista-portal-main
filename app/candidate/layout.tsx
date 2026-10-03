import type React from "react"
import { CandidateSidebar } from "@/components/candidate/candidate-sidebar"

export default function CandidateLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <div className="flex h-screen bg-background">
      <CandidateSidebar />
      <main className="flex-1 overflow-y-auto">{children}</main>
    </div>
  )
}
