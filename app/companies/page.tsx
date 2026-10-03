"use client"

import { useState } from "react"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  Building2,
  MapPin,
  Users,
  Search,
  Star,
  ExternalLink,
  Briefcase,
  Sparkles,
  Check,
  Plus,
} from "lucide-react"

const MOCK_COMPANIES = [
  {
    id: "techcorp",
    name: "TechCorp Inc.",
    logo: "https://images.unsplash.com/photo-1549923746-c502d488b3ea?w=120&auto=format&fit=crop&q=80",
    industry: "SaaS / Cloud Software",
    location: "San Francisco, CA",
    size: "500-1,000 employees",
    rating: 4.8,
    reviewsCount: 340,
    openJobs: 12,
    techStack: ["React", "TypeScript", "Go", "AWS"],
    description: "Building next-generation cloud productivity software powering over 100,000 businesses worldwide.",
    featured: true,
  },
  {
    id: "datapulse",
    name: "DataPulse AI",
    logo: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=120&auto=format&fit=crop&q=80",
    industry: "Artificial Intelligence",
    location: "New York, NY",
    size: "100-250 employees",
    rating: 4.9,
    reviewsCount: 180,
    openJobs: 8,
    techStack: ["Python", "PyTorch", "Node.js", "React"],
    description: "Pioneering enterprise artificial intelligence and automated decision systems for Fortune 500 companies.",
    featured: true,
  },
  {
    id: "creativeflow",
    name: "CreativeFlow",
    logo: "https://images.unsplash.com/photo-1572021335469-31706a17aaef?w=120&auto=format&fit=crop&q=80",
    industry: "Design & Media",
    location: "Austin, TX",
    size: "50-100 employees",
    rating: 4.7,
    reviewsCount: 95,
    openJobs: 5,
    techStack: ["Figma", "Next.js", "Tailwind CSS"],
    description: "Empowering visual creators and product teams with collaborative design asset platforms.",
    featured: false,
  },
  {
    id: "cloudscale",
    name: "CloudScale Systems",
    logo: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=120&auto=format&fit=crop&q=80",
    industry: "DevOps & Infrastructure",
    location: "Seattle, WA",
    size: "250-500 employees",
    rating: 4.6,
    reviewsCount: 210,
    openJobs: 14,
    techStack: ["Kubernetes", "Terraform", "Rust", "GCP"],
    description: "High-performance infrastructure automation platforms built for multi-cloud resiliency.",
    featured: true,
  },
  {
    id: "fintechpulse",
    name: "FinPulse Global",
    logo: "https://images.unsplash.com/photo-1559526324-4b87b5e36e44?w=120&auto=format&fit=crop&q=80",
    industry: "Fintech",
    location: "Boston, MA",
    size: "1,000+ employees",
    rating: 4.5,
    reviewsCount: 520,
    openJobs: 19,
    techStack: ["Java", "Spring Boot", "React", "Kafka"],
    description: "Next-gen banking APIs and global payment infrastructure enabling seamless cross-border transactions.",
    featured: false,
  },
]

export default function CompaniesPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [selectedIndustry, setSelectedIndustry] = useState("all")
  const [followedIds, setFollowedIds] = useState<string[]>([])

  const toggleFollow = (id: string) => {
    setFollowedIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    )
  }

  const filteredCompanies = MOCK_COMPANIES.filter((comp) => {
    const matchesSearch =
      comp.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      comp.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      comp.location.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesIndustry =
      selectedIndustry === "all" || comp.industry.toLowerCase().includes(selectedIndustry.toLowerCase())
    return matchesSearch && matchesIndustry
  })

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navigation />

      <main className="flex-1 py-10">
        <div className="container mx-auto px-4 max-w-7xl space-y-8">
          {/* Header */}
          <div className="bg-card border border-border rounded-2xl p-6 md:p-8 space-y-6 shadow-sm">
            <div className="space-y-2">
              <Badge variant="outline" className="px-3 py-1 font-medium border-primary/30 text-primary">
                <Sparkles className="h-3.5 w-3.5 mr-1 inline" /> Discover Top Employers
              </Badge>
              <h1 className="text-3xl md:text-4xl font-extrabold text-foreground tracking-tight">
                Top Companies Hiring Tech Talent
              </h1>
              <p className="text-muted-foreground text-base">
                Explore tech stack insights, company cultures, employee ratings, and active open positions.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
              <div className="md:col-span-8 relative">
                <Search className="absolute left-3.5 top-3.5 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search company name, tech stack, or location..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 h-11"
                />
              </div>
              <div className="md:col-span-4">
                <Select value={selectedIndustry} onValueChange={setSelectedIndustry}>
                  <SelectTrigger className="h-11">
                    <SelectValue placeholder="Industry Filter" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Industries</SelectItem>
                    <SelectItem value="saas">SaaS / Cloud</SelectItem>
                    <SelectItem value="artificial intelligence">Artificial Intelligence</SelectItem>
                    <SelectItem value="devops">DevOps & Infra</SelectItem>
                    <SelectItem value="fintech">Fintech</SelectItem>
                    <SelectItem value="design">Design & Media</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>

          {/* Companies Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCompanies.map((company) => {
              const isFollowed = followedIds.includes(company.id)

              return (
                <Card
                  key={company.id}
                  className="border-border hover:border-primary/50 transition-all hover:shadow-lg bg-card flex flex-col justify-between"
                >
                  <CardContent className="p-6 space-y-4">
                    <div className="flex items-start justify-between">
                      <Avatar className="h-14 w-14 rounded-xl border border-border">
                        <AvatarImage src={company.logo} alt={company.name} />
                        <AvatarFallback>{company.name.substring(0, 2)}</AvatarFallback>
                      </Avatar>

                      <Button
                        variant={isFollowed ? "secondary" : "outline"}
                        size="sm"
                        onClick={() => toggleFollow(company.id)}
                        className="gap-1.5 text-xs font-medium"
                      >
                        {isFollowed ? (
                          <>
                            <Check className="h-3.5 w-3.5 text-primary" /> Following
                          </>
                        ) : (
                          <>
                            <Plus className="h-3.5 w-3.5" /> Follow
                          </>
                        )}
                      </Button>
                    </div>

                    <div>
                      <div className="flex items-center space-x-2">
                        <h3 className="text-xl font-bold text-foreground">{company.name}</h3>
                        {company.featured && (
                          <Badge variant="default" className="text-[10px] px-1.5 py-0.5">
                            Top Employer
                          </Badge>
                        )}
                      </div>
                      <p className="text-xs font-medium text-primary mt-0.5">{company.industry}</p>
                    </div>

                    <p className="text-sm text-muted-foreground line-clamp-2 leading-relaxed">
                      {company.description}
                    </p>

                    <div className="space-y-1.5 text-xs text-muted-foreground pt-2 border-t border-border">
                      <div className="flex items-center justify-between">
                        <span className="flex items-center gap-1">
                          <MapPin className="h-3.5 w-3.5" /> {company.location}
                        </span>
                        <span className="flex items-center gap-1">
                          <Users className="h-3.5 w-3.5" /> {company.size}
                        </span>
                      </div>
                      <div className="flex items-center space-x-1 pt-1">
                        <Star className="h-3.5 w-3.5 fill-amber-400 text-amber-400" />
                        <span className="font-bold text-foreground">{company.rating}</span>
                        <span className="text-muted-foreground">({company.reviewsCount} reviews)</span>
                      </div>
                    </div>

                    <div className="flex flex-wrap gap-1.5 pt-2">
                      {company.techStack.map((tech) => (
                        <Badge key={tech} variant="outline" className="text-[11px] font-normal">
                          {tech}
                        </Badge>
                      ))}
                    </div>
                  </CardContent>

                  <div className="p-4 bg-muted/40 border-t border-border flex items-center justify-between">
                    <span className="text-xs font-semibold text-foreground flex items-center gap-1.5">
                      <Briefcase className="h-3.5 w-3.5 text-primary" /> {company.openJobs} Open Positions
                    </span>
                    <Button size="sm" variant="outline" asChild className="text-xs gap-1">
                      <Link href="/jobs">
                        View Jobs <ExternalLink className="h-3 w-3" />
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
