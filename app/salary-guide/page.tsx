"use client"

import { useState } from "react"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Progress } from "@/components/ui/progress"
import { DollarSign, TrendingUp, Sparkles, MapPin, Award, ArrowUpRight, BarChart2 } from "lucide-react"

const SALARY_DATA: Record<string, Record<string, { p25: number; p50: number; p75: number; p90: number }>> = {
  frontend: {
    junior: { p25: 75000, p50: 92000, p75: 110000, p90: 125000 },
    mid: { p25: 105000, p50: 130000, p75: 155000, p90: 175000 },
    senior: { p25: 145000, p50: 175000, p75: 210000, p90: 245000 },
    lead: { p25: 180000, p50: 220000, p75: 265000, p90: 310000 },
  },
  backend: {
    junior: { p25: 80000, p50: 98000, p75: 118000, p90: 135000 },
    mid: { p25: 115000, p50: 140000, p75: 168000, p90: 190000 },
    senior: { p25: 155000, p50: 190000, p75: 230000, p90: 270000 },
    lead: { p25: 195000, p50: 240000, p75: 290000, p90: 340000 },
  },
  devops: {
    junior: { p25: 85000, p50: 102000, p75: 125000, p90: 140000 },
    mid: { p25: 120000, p50: 148000, p75: 175000, p90: 200000 },
    senior: { p25: 160000, p50: 198000, p75: 240000, p90: 285000 },
    lead: { p25: 200000, p50: 250000, p75: 305000, p90: 360000 },
  },
  design: {
    junior: { p25: 68000, p50: 85000, p75: 102000, p90: 118000 },
    mid: { p25: 95000, p50: 120000, p75: 145000, p90: 165000 },
    senior: { p25: 135000, p50: 165000, p75: 198000, p90: 230000 },
    lead: { p25: 170000, p50: 205000, p75: 250000, p90: 290000 },
  },
}

export default function SalaryGuidePage() {
  const [role, setRole] = useState("frontend")
  const [experience, setExperience] = useState("senior")
  const [locationMultiplier, setLocationMultiplier] = useState(1.0)

  const rawStats = SALARY_DATA[role]?.[experience] || SALARY_DATA.frontend.senior
  const stats = {
    p25: Math.round(rawStats.p25 * locationMultiplier),
    p50: Math.round(rawStats.p50 * locationMultiplier),
    p75: Math.round(rawStats.p75 * locationMultiplier),
    p90: Math.round(rawStats.p90 * locationMultiplier),
  }

  const formatCurrency = (val: number) =>
    new Intl.NumberFormat("en-US", { style: "currency", currency: "USD", maximumFractionDigits: 0 }).format(val)

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navigation />

      <main className="flex-1 py-12">
        <div className="container mx-auto px-4 max-w-6xl space-y-10">
          {/* Hero */}
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <Badge variant="outline" className="px-4 py-1 border-primary/30 text-primary font-medium">
              <Sparkles className="h-3.5 w-3.5 mr-1.5 inline" /> 2026 Tech Salary Calculator
            </Badge>
            <h1 className="text-4xl md:text-5xl font-extrabold text-foreground tracking-tight">
              Know Your True Market Worth
            </h1>
            <p className="text-lg text-muted-foreground">
              Explore real-time compensation data benchmarked across 250,000+ tech offers by role, experience, and region.
            </p>
          </div>

          {/* Calculator Card */}
          <Card className="border-border bg-card p-6 md:p-8 space-y-8 shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="space-y-2">
                <label className="text-sm font-semibold text-foreground">Target Role</label>
                <Select value={role} onValueChange={setRole}>
                  <SelectTrigger className="h-11">
                    <SelectValue placeholder="Select Role" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="frontend">Frontend Engineer (React/Next.js)</SelectItem>
                    <SelectItem value="backend">Backend Engineer (Node/Java/Go)</SelectItem>
                    <SelectItem value="devops">DevOps & Cloud Engineer</SelectItem>
                    <SelectItem value="design">UI/UX Product Designer</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-foreground">Experience Level</label>
                <Select value={experience} onValueChange={setExperience}>
                  <SelectTrigger className="h-11">
                    <SelectValue placeholder="Select Experience" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="junior">Junior (0-2 years)</SelectItem>
                    <SelectItem value="mid">Mid-Level (3-5 years)</SelectItem>
                    <SelectItem value="senior">Senior (5-8 years)</SelectItem>
                    <SelectItem value="lead">Lead / Staff (8+ years)</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div className="space-y-2">
                <label className="text-sm font-semibold text-foreground">Location Tier</label>
                <Select
                  value={String(locationMultiplier)}
                  onValueChange={(val) => setLocationMultiplier(parseFloat(val))}
                >
                  <SelectTrigger className="h-11">
                    <SelectValue placeholder="Select Location" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="1.2">Tier 1 US (SF, NYC, Seattle)</SelectItem>
                    <SelectItem value="1.0">Tier 2 US & Remote (Austin, Denver)</SelectItem>
                    <SelectItem value="0.85">Europe / UK Tech Hubs</SelectItem>
                    <SelectItem value="0.6">Asia / APAC Region</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>

            {/* Results Grid */}
            <div className="bg-muted/40 rounded-2xl p-6 md:p-8 space-y-6 border border-border">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-xs uppercase tracking-wider font-semibold text-primary">Estimated Median Base Salary</p>
                  <h2 className="text-4xl md:text-5xl font-black text-foreground pt-1">{formatCurrency(stats.p50)}</h2>
                  <p className="text-xs text-muted-foreground pt-1">
                    Excludes equity grants, performance bonuses ($15k-$40k avg), and 401(k) match.
                  </p>
                </div>
                <div className="hidden sm:block p-4 bg-primary/10 rounded-full text-primary">
                  <BarChart2 className="h-10 w-10" />
                </div>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 pt-4 border-t border-border">
                <div className="bg-card p-4 rounded-xl border border-border">
                  <p className="text-xs text-muted-foreground">25th Percentile</p>
                  <p className="text-lg font-bold text-foreground">{formatCurrency(stats.p25)}</p>
                </div>
                <div className="bg-card p-4 rounded-xl border border-primary/40">
                  <p className="text-xs font-semibold text-primary">50th Percentile (Median)</p>
                  <p className="text-lg font-extrabold text-foreground">{formatCurrency(stats.p50)}</p>
                </div>
                <div className="bg-card p-4 rounded-xl border border-border">
                  <p className="text-xs text-muted-foreground">75th Percentile</p>
                  <p className="text-lg font-bold text-foreground">{formatCurrency(stats.p75)}</p>
                </div>
                <div className="bg-card p-4 rounded-xl border border-border">
                  <p className="text-xs text-muted-foreground">90th Percentile (Top Tier)</p>
                  <p className="text-lg font-bold text-foreground">{formatCurrency(stats.p90)}</p>
                </div>
              </div>
            </div>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  )
}
