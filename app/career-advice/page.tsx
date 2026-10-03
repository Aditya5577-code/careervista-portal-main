"use client"

import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Sparkles, FileText, CheckCircle2, MessageSquare, ArrowRight, Zap, Target } from "lucide-react"

export default function CareerAdvicePage() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navigation />

      <main className="flex-1 py-12">
        <div className="container mx-auto px-4 max-w-6xl space-y-12">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <Badge variant="outline" className="px-4 py-1 border-primary/30 text-primary font-medium">
              <Sparkles className="h-3.5 w-3.5 mr-1.5 inline" /> Career Growth & Prep Toolkit
            </Badge>
            <h1 className="text-4xl md:text-5xl font-extrabold text-foreground tracking-tight">
              Actionable Tech Career Advice
            </h1>
            <p className="text-lg text-muted-foreground">
              Master technical interviews, optimize your online presence, and navigate career transitions with confidence.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="border-border bg-card hover:shadow-lg transition-all p-6 space-y-4">
              <div className="p-3 bg-primary/10 rounded-xl text-primary w-fit">
                <FileText className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-foreground">Resume Optimization</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Use bullet-point frameworks (Action + Tool + Quantified Result) to pass applicant tracking systems.
              </p>
              <Button variant="outline" size="sm" asChild className="w-full">
                <Link href="/resources">Read Resume Guides</Link>
              </Button>
            </Card>

            <Card className="border-border bg-card hover:shadow-lg transition-all p-6 space-y-4">
              <div className="p-3 bg-primary/10 rounded-xl text-primary w-fit">
                <MessageSquare className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-foreground">Behavioral Prep</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Master the STAR method for leadership questions, conflict resolution, and technical trade-off discussions.
              </p>
              <Button variant="outline" size="sm" asChild className="w-full">
                <Link href="/resources">Read Prep Guides</Link>
              </Button>
            </Card>

            <Card className="border-border bg-card hover:shadow-lg transition-all p-6 space-y-4">
              <div className="p-3 bg-primary/10 rounded-xl text-primary w-fit">
                <Target className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-foreground">Mock Interview Checklist</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Step-by-step checklist for live coding challenges, system architecture whiteboards, and recruiter calls.
              </p>
              <Button variant="outline" size="sm" asChild className="w-full">
                <Link href="/resources">View Checklists</Link>
              </Button>
            </Card>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
