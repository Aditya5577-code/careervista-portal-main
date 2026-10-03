"use client"

import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Card, CardContent } from "@/components/ui/card"

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navigation />

      <main className="flex-1 py-12">
        <div className="container mx-auto px-4 max-w-4xl space-y-8">
          <div className="space-y-2 text-center">
            <h1 className="text-3xl font-extrabold text-foreground">Privacy Policy</h1>
            <p className="text-xs text-muted-foreground">Last updated: October 2026</p>
          </div>

          <Card className="border-border bg-card p-6 md:p-8 space-y-6 text-sm text-muted-foreground leading-relaxed">
            <section className="space-y-2">
              <h2 className="text-lg font-bold text-foreground">1. Data Collection</h2>
              <p>
                CareerVista collects personal information you provide when registering as a candidate or employer, including contact details, resume documents, work experience, and communication logs.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-lg font-bold text-foreground">2. How We Use Your Information</h2>
              <p>
                We use your data strictly to facilitate job applications, match candidates with employer positions, improve our matching algorithms, and communicate account notifications.
              </p>
            </section>

            <section className="space-y-2">
              <h2 className="text-lg font-bold text-foreground">3. Information Sharing</h2>
              <p>
                Candidate profiles are shared only with registered employers when you apply for a position or enable resume visibility settings. We do not sell your personal data to third-party data brokers.
              </p>
            </section>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  )
}
