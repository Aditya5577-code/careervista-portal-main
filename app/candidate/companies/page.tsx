"use client"

import { useState } from "react"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Building2, MapPin, Users, Briefcase, Check, Plus, ExternalLink } from "lucide-react"

const COMPANIES = [
  {
    id: "techcorp",
    name: "TechCorp Inc.",
    logo: "https://images.unsplash.com/photo-1549923746-c502d488b3ea?w=100&auto=format&fit=crop&q=80",
    industry: "SaaS / Cloud Software",
    location: "San Francisco, CA",
    openJobs: 12,
    followed: true,
  },
  {
    id: "datapulse",
    name: "DataPulse AI",
    logo: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=100&auto=format&fit=crop&q=80",
    industry: "Artificial Intelligence",
    location: "New York, NY",
    openJobs: 8,
    followed: true,
  },
  {
    id: "creativeflow",
    name: "CreativeFlow",
    logo: "https://images.unsplash.com/photo-1572021335469-31706a17aaef?w=100&auto=format&fit=crop&q=80",
    industry: "Design & Media",
    location: "Austin, TX",
    openJobs: 5,
    followed: false,
  },
]

export default function CandidateCompaniesPage() {
  const [list, setList] = useState(COMPANIES)

  const toggleFollow = (id: string) => {
    setList((prev) =>
      prev.map((c) => (c.id === id ? { ...c, followed: !c.followed } : c))
    )
  }

  return (
    <div className="p-6 md:p-8 space-y-6 max-w-6xl">
      <div>
        <h1 className="text-3xl font-extrabold text-foreground tracking-tight">Companies You Follow</h1>
        <p className="text-sm text-muted-foreground pt-1">
          Receive updates, job alerts, and recruitment news from tech employers you care about.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {list.map((c) => (
          <Card key={c.id} className="border-border bg-card p-6 space-y-4 hover:shadow-md transition-all">
            <div className="flex items-start justify-between">
              <Avatar className="h-12 w-12 rounded-lg border border-border">
                <AvatarImage src={c.logo} alt={c.name} />
                <AvatarFallback>{c.name.substring(0, 2)}</AvatarFallback>
              </Avatar>

              <Button
                variant={c.followed ? "secondary" : "outline"}
                size="sm"
                onClick={() => toggleFollow(c.id)}
                className="text-xs gap-1"
              >
                {c.followed ? <Check className="h-3.5 w-3.5 text-primary" /> : <Plus className="h-3.5 w-3.5" />}
                {c.followed ? "Following" : "Follow"}
              </Button>
            </div>

            <div>
              <h3 className="font-bold text-foreground text-base">{c.name}</h3>
              <p className="text-xs text-primary font-medium">{c.industry}</p>
            </div>

            <div className="space-y-1 text-xs text-muted-foreground pt-1">
              <div className="flex items-center gap-1.5">
                <MapPin className="h-3.5 w-3.5" /> {c.location}
              </div>
              <div className="flex items-center gap-1.5">
                <Briefcase className="h-3.5 w-3.5" /> {c.openJobs} Open Roles
              </div>
            </div>

            <Button variant="outline" size="sm" asChild className="w-full text-xs gap-1">
              <Link href="/candidate/jobs">
                View Openings <ExternalLink className="h-3 w-3" />
              </Link>
            </Button>
          </Card>
        ))}
      </div>
    </div>
  )
}
