"use client"

import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Sparkles, Building2, Zap, ShieldCheck, CheckCircle2, ArrowRight, Cpu, Video, Users } from "lucide-react"

export default function HiringSolutionsPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navigation />

      <main className="flex-1 py-16">
        <div className="container mx-auto px-4 max-w-6xl space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <Badge variant="outline" className="px-4 py-1 border-primary/30 text-primary font-medium">
              <Sparkles className="h-3.5 w-3.5 mr-1.5 inline" /> Enterprise Recruitment Intelligence
            </Badge>
            <h1 className="text-4xl md:text-5xl font-extrabold text-foreground tracking-tight">
              Next-Gen Enterprise Hiring Platform
            </h1>
            <p className="text-lg text-muted-foreground">
              Automate candidate screening, streamline interview scheduling, and integrate with your existing HR tech stack.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-border bg-card p-6 space-y-4">
              <div className="p-3 bg-primary/10 rounded-xl text-primary w-fit">
                <Cpu className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-foreground">AI Skill Screening</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Automatically verify technical experience and score applicants against your customized job rubrics.
              </p>
            </Card>

            <Card className="border-border bg-card p-6 space-y-4">
              <div className="p-3 bg-primary/10 rounded-xl text-primary w-fit">
                <Video className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-foreground">Asynchronous Video Interviews</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Save 15+ hours per week by reviewing candidate video responses before scheduling live interviews.
              </p>
            </Card>

            <Card className="border-border bg-card p-6 space-y-4">
              <div className="p-3 bg-primary/10 rounded-xl text-primary w-fit">
                <Users className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-foreground">ATS Bi-Directional Sync</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Seamlessly import candidate profiles directly into Greenhouse, Lever, Workday, or custom HR systems.
              </p>
            </Card>
          </div>

          <div className="text-center pt-8">
            <Button size="lg" asChild className="gap-2 font-semibold">
              <Link href="/pricing">
                Explore Enterprise Plans <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
