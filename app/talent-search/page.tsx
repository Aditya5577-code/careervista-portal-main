"use client"

import { useState } from "react"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Search, MapPin, Briefcase, Mail, Sparkles, CheckCircle2, Bookmark, UserCheck } from "lucide-react"

const CANDIDATES = [
  {
    id: "cand-1",
    name: "Sarah Johnson",
    role: "Senior Frontend Engineer",
    location: "San Francisco, CA",
    experience: "6 years",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=120&auto=format&fit=crop&q=80",
    matchScore: "96% Match",
    status: "Actively Looking",
  },
  {
    id: "cand-2",
    name: "David Kim",
    role: "Backend & Systems Developer",
    location: "Seattle, WA (Remote)",
    experience: "5 years",
    skills: ["Node.js", "Go", "PostgreSQL", "Docker", "Kubernetes"],
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&auto=format&fit=crop&q=80",
    matchScore: "92% Match",
    status: "Open to Offers",
  },
  {
    id: "cand-3",
    name: "Emily Watson",
    role: "Lead UI/UX Product Designer",
    location: "Austin, TX",
    experience: "8 years",
    skills: ["Figma", "Design Systems", "User Research", "Prototyping"],
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=120&auto=format&fit=crop&q=80",
    matchScore: "88% Match",
    status: "Actively Looking",
  },
]

export default function TalentSearchPage() {
  const [query, setQuery] = useState("")
  const [shortlisted, setShortlisted] = useState<string[]>([])

  const toggleShortlist = (id: string) => {
    setShortlisted((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    )
  }

  const filtered = CANDIDATES.filter((c) =>
    c.name.toLowerCase().includes(query.toLowerCase()) ||
    c.role.toLowerCase().includes(query.toLowerCase()) ||
    c.skills.some((s) => s.toLowerCase().includes(query.toLowerCase()))
  )

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navigation />

      <main className="flex-1 py-12">
        <div className="container mx-auto px-4 max-w-6xl space-y-8">
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <Badge variant="outline" className="px-4 py-1 border-primary/30 text-primary font-medium">
              <Sparkles className="h-3.5 w-3.5 mr-1.5 inline" /> AI Talent Sourcing
            </Badge>
            <h1 className="text-4xl font-extrabold text-foreground tracking-tight">
              Search Pre-Screened Tech Candidates
            </h1>
            <p className="text-lg text-muted-foreground">
              Filter top engineers and designers by verified skills, experience level, and availability.
            </p>

            <div className="pt-2 max-w-xl mx-auto relative">
              <Search className="absolute left-4 top-3.5 h-5 w-5 text-muted-foreground" />
              <Input
                placeholder="Search skills (React, Node, Figma), role, or name..."
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="pl-12 h-12 rounded-xl text-base shadow-sm"
              />
            </div>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {filtered.map((cand) => {
              const isSaved = shortlisted.includes(cand.id)

              return (
                <Card key={cand.id} className="border-border bg-card hover:shadow-lg transition-all flex flex-col justify-between">
                  <CardContent className="p-6 space-y-4">
                    <div className="flex items-start justify-between">
                      <div className="flex items-center space-x-3">
                        <Avatar className="h-14 w-14 border border-border">
                          <AvatarImage src={cand.avatar} alt={cand.name} />
                          <AvatarFallback>{cand.name.substring(0, 2)}</AvatarFallback>
                        </Avatar>
                        <div>
                          <h3 className="font-bold text-foreground text-lg">{cand.name}</h3>
                          <p className="text-xs text-primary font-medium">{cand.role}</p>
                        </div>
                      </div>
                      <Badge className="bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-0 text-[10px]">
                        {cand.matchScore}
                      </Badge>
                    </div>

                    <div className="space-y-1 text-xs text-muted-foreground pt-1">
                      <div className="flex items-center gap-1.5">
                        <MapPin className="h-3.5 w-3.5" /> {cand.location}
                      </div>
                      <div className="flex items-center gap-1.5">
                        <Briefcase className="h-3.5 w-3.5" /> {cand.experience} experience
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {cand.skills.map((skill) => (
                        <Badge key={skill} variant="outline" className="text-[11px] font-normal">
                          {skill}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>

                  <div className="p-4 bg-muted/30 border-t border-border flex items-center justify-between gap-2">
                    <Button
                      variant={isSaved ? "secondary" : "outline"}
                      size="sm"
                      onClick={() => toggleShortlist(cand.id)}
                      className="text-xs gap-1"
                    >
                      <Bookmark className={`h-3.5 w-3.5 ${isSaved ? "fill-primary text-primary" : ""}`} />
                      {isSaved ? "Shortlisted" : "Shortlist"}
                    </Button>

                    <Button size="sm" asChild className="text-xs gap-1">
                      <Link href="/employer/messages">
                        <Mail className="h-3.5 w-3.5" /> Message
                      </Link>
                    </Button>
                  </div>
                </Card>
              )
            })}
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
