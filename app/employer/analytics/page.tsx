"use client"

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { BarChart3, TrendingUp, Users, Eye, Clock, Award, ArrowUpRight } from "lucide-react"

export default function EmployerAnalyticsPage() {
  return (
    <div className="p-6 md:p-8 space-y-6 max-w-6xl">
      <div>
        <h1 className="text-3xl font-extrabold text-foreground tracking-tight">Recruitment Analytics & Insights</h1>
        <p className="text-xs text-muted-foreground pt-1">
          Monitor your job listing reach, candidate conversion rates, and time-to-hire metrics.
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <Card className="border-border bg-card p-4 space-y-2">
          <div className="flex items-center justify-between text-muted-foreground">
            <span className="text-xs font-medium">Total Job Views</span>
            <Eye className="h-4 w-4 text-primary" />
          </div>
          <p className="text-2xl md:text-3xl font-black text-foreground">14,250</p>
          <span className="text-[11px] text-emerald-500 font-semibold flex items-center gap-0.5">
            <TrendingUp className="h-3 w-3" /> +18.4% from last month
          </span>
        </Card>

        <Card className="border-border bg-card p-4 space-y-2">
          <div className="flex items-center justify-between text-muted-foreground">
            <span className="text-xs font-medium">Applications Received</span>
            <Users className="h-4 w-4 text-primary" />
          </div>
          <p className="text-2xl md:text-3xl font-black text-foreground">428</p>
          <span className="text-[11px] text-emerald-500 font-semibold flex items-center gap-0.5">
            <TrendingUp className="h-3 w-3" /> +12.1% conversion
          </span>
        </Card>

        <Card className="border-border bg-card p-4 space-y-2">
          <div className="flex items-center justify-between text-muted-foreground">
            <span className="text-xs font-medium">Avg Time to Hire</span>
            <Clock className="h-4 w-4 text-primary" />
          </div>
          <p className="text-2xl md:text-3xl font-black text-foreground">14 Days</p>
          <span className="text-[11px] text-primary font-semibold">4 days faster than avg</span>
        </Card>

        <Card className="border-border bg-card p-4 space-y-2">
          <div className="flex items-center justify-between text-muted-foreground">
            <span className="text-xs font-medium">Offer Acceptance</span>
            <Award className="h-4 w-4 text-primary" />
          </div>
          <p className="text-2xl md:text-3xl font-black text-foreground">92%</p>
          <span className="text-[11px] text-emerald-500 font-semibold">+4% higher benchmark</span>
        </Card>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <Card className="border-border bg-card">
          <CardHeader>
            <CardTitle className="text-base font-bold">Candidate Funnel Stages</CardTitle>
            <CardDescription className="text-xs">Breakdown of applicants by recruitment stage</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-1.5">
              <div className="flex justify-between text-xs font-medium">
                <span>Applied (428)</span>
                <span>100%</span>
              </div>
              <Progress value={100} className="h-2.5" />
            </div>

            <div className="space-y-1.5">
              <div className="flex justify-between text-xs font-medium">
                <span>Screened / Shortlisted (142)</span>
                <span>33%</span>
              </div>
              <Progress value={33} className="h-2.5 bg-primary/20" />
            </div>

            <div className="space-y-1.5">
              <div className="flex justify-between text-xs font-medium">
                <span>Technical Interview (48)</span>
                <span>11%</span>
              </div>
              <Progress value={11} className="h-2.5 bg-primary/40" />
            </div>

            <div className="space-y-1.5">
              <div className="flex justify-between text-xs font-medium">
                <span>Offer Extended (12)</span>
                <span>2.8%</span>
              </div>
              <Progress value={8} className="h-2.5 bg-primary/70" />
            </div>
          </CardContent>
        </Card>

        <Card className="border-border bg-card">
          <CardHeader>
            <CardTitle className="text-base font-bold">Top Performing Jobs</CardTitle>
            <CardDescription className="text-xs">Highest candidate engagement listings</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
              <div>
                <p className="text-xs font-bold text-foreground">Senior Frontend Engineer</p>
                <p className="text-[11px] text-muted-foreground">184 Applications • 3.4k Views</p>
              </div>
              <Badge variant="secondary" className="text-xs">
                Top Performer
              </Badge>
            </div>

            <div className="flex items-center justify-between p-3 bg-muted/30 rounded-lg">
              <div>
                <p className="text-xs font-bold text-foreground">Full Stack Developer</p>
                <p className="text-[11px] text-muted-foreground">142 Applications • 2.8k Views</p>
              </div>
              <Badge variant="outline" className="text-xs">
                High Interest
              </Badge>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
