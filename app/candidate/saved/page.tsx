"use client"

import { useState } from "react"
import Link from "next/link"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Bookmark, Search, MapPin, DollarSign, Clock, Trash2, ArrowUpRight } from "lucide-react"

const SAVED_JOBS = [
  {
    id: "saved-1",
    title: "Senior Frontend Engineer (React / Next.js)",
    company: "TechCorp Inc.",
    logo: "https://images.unsplash.com/photo-1549923746-c502d488b3ea?w=100&auto=format&fit=crop&q=80",
    location: "San Francisco, CA (Remote)",
    salary: "$140,000 - $180,000",
    savedDate: "Saved 2 days ago",
    tags: ["React", "Next.js", "TypeScript"],
  },
  {
    id: "saved-2",
    title: "Lead Product Designer (UI/UX)",
    company: "CreativeFlow",
    logo: "https://images.unsplash.com/photo-1572021335469-31706a17aaef?w=100&auto=format&fit=crop&q=80",
    location: "Austin, TX (Remote)",
    salary: "$150,000 - $190,000",
    savedDate: "Saved 4 days ago",
    tags: ["Figma", "UI/UX", "Design Systems"],
  },
]

export default function CandidateSavedJobsPage() {
  const [items, setItems] = useState(SAVED_JOBS)
  const [searchTerm, setSearchTerm] = useState("")

  const removeSaved = (id: string) => {
    setItems((prev) => prev.filter((item) => item.id !== id))
  }

  const filtered = items.filter((j) =>
    j.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    j.company.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="p-6 md:p-8 space-y-6 max-w-6xl">
      <div>
        <h1 className="text-3xl font-extrabold text-foreground tracking-tight">Saved Jobs</h1>
        <p className="text-sm text-muted-foreground pt-1">
          Keep track of positions you have bookmarked for quick application.
        </p>
      </div>

      <div className="flex items-center justify-between gap-4">
        <div className="relative flex-1 max-w-md">
          <Search className="absolute left-3.5 top-3.5 h-4 w-4 text-muted-foreground" />
          <Input
            placeholder="Search saved jobs..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10 h-11"
          />
        </div>
        <p className="text-xs text-muted-foreground font-medium">{filtered.length} saved roles</p>
      </div>

      {filtered.length === 0 ? (
        <Card className="p-12 text-center border-dashed border-2 border-border">
          <Bookmark className="h-10 w-10 text-muted-foreground mx-auto mb-2" />
          <h3 className="text-lg font-semibold text-foreground">No saved jobs</h3>
          <p className="text-sm text-muted-foreground mb-4">You haven't bookmarked any job postings yet.</p>
          <Button asChild>
            <Link href="/candidate/jobs">Explore Openings</Link>
          </Button>
        </Card>
      ) : (
        <div className="space-y-4">
          {filtered.map((job) => (
            <Card key={job.id} className="border-border bg-card p-6 hover:shadow-md transition-all">
              <CardContent className="p-0 flex flex-col md:flex-row md:items-center justify-between gap-4">
                <div className="flex items-start space-x-4">
                  <Avatar className="h-12 w-12 rounded-lg border border-border">
                    <AvatarImage src={job.logo} alt={job.company} />
                    <AvatarFallback>{job.company.substring(0, 2)}</AvatarFallback>
                  </Avatar>
                  <div className="space-y-1">
                    <span className="text-xs font-semibold text-primary">{job.company}</span>
                    <h3 className="text-lg font-bold text-foreground">{job.title}</h3>
                    <div className="flex flex-wrap items-center gap-3 text-xs text-muted-foreground">
                      <span className="flex items-center gap-1">
                        <MapPin className="h-3.5 w-3.5" /> {job.location}
                      </span>
                      <span className="flex items-center gap-1">
                        <DollarSign className="h-3.5 w-3.5" /> {job.salary}
                      </span>
                      <span className="flex items-center gap-1">
                        <Clock className="h-3.5 w-3.5" /> {job.savedDate}
                      </span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center space-x-2">
                  <Button variant="ghost" size="sm" onClick={() => removeSaved(job.id)} className="text-destructive hover:bg-destructive/10">
                    <Trash2 className="h-4 w-4 mr-1" /> Remove
                  </Button>
                  <Button size="sm" asChild>
                    <Link href="/candidate/jobs">
                      Apply Now <ArrowUpRight className="h-3.5 w-3.5 ml-1" />
                    </Link>
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  )
}
