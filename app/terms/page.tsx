"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card } from "@/components/ui/card"

export default function TermsPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navigation />

      <main className="flex-1 py-12">
        <div className="container mx-auto px-4 max-w-4xl space-y-8">
          <div className="space-y-2 text-center">
            <h1 className="text-3xl font-extrabold text-foreground">Terms of Service</h1>
            <p className="text-xs text-muted-foreground">Last updated: October 2026</p>
          </div>

          <Card className="border-border bg-card p-6 md:p-8 space-y-6 text-sm text-muted-foreground leading-relaxed">
            <section className="space-y-2">
              <h2 className="text-lg font-bold text-foreground">1. User Agreement</h2>
              <p>
                By accessing or using CareerVista, you agree to comply with all terms and conditions set forth herein.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-lg font-bold text-foreground">2. Acceptable Use</h2>
              <p>
                Employers agree to post authentic, lawful job postings. Candidates agree to submit accurate resume information and credentials.
              </p>
            </section>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  )
}
