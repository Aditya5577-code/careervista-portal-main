"use client"

import { useState } from "react"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Checkbox } from "@/components/ui/checkbox"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogFooter } from "@/components/ui/dialog"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  Search,
  MapPin,
  Briefcase,
  DollarSign,
  Clock,
  Filter,
  Bookmark,
  Building2,
  CheckCircle2,
  ArrowUpRight,
  Sparkles,
  X,
} from "lucide-react"

const MOCK_JOBS = [
  {
    id: "job-1",
    title: "Senior Frontend Engineer (React / Next.js)",
    company: "TechCorp Inc.",
    logo: "https://images.unsplash.com/photo-1549923746-c502d488b3ea?w=100&auto=format&fit=crop&q=80",
    location: "San Francisco, CA (Remote)",
    type: "Full-time",
    experience: "Senior",
    salary: "$140,000 - $180,000",
    posted: "2 days ago",
    category: "Engineering",
    tags: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
    description: "We are seeking an experienced Senior Frontend Engineer to lead our core web portal team. You will build high-performance React components, optimize Next.js server components, and shape front-end architecture.",
    requirements: [
      "5+ years of experience with React and TypeScript",
      "Deep understanding of Next.js App Router and server performance",
      "Experience with Tailwind CSS and modern UI libraries",
      "Strong track record of delivering user-focused Web applications",
    ],
    benefits: ["Health, Dental, Vision 100%", "Flexible Work Hours", "$2,000 Annual Learning Budget", "401(k) 5% Match"],
  },
  {
    id: "job-2",
    title: "Full Stack Developer",
    company: "DataPulse AI",
    logo: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=100&auto=format&fit=crop&q=80",
    location: "New York, NY (Hybrid)",
    type: "Full-time",
    experience: "Mid-Level",
    salary: "$120,000 - $150,000",
    posted: "1 day ago",
    category: "Engineering",
    tags: ["Node.js", "React", "PostgreSQL", "GraphQL"],
    description: "Join DataPulse AI to build scalable analytics tools used by Fortune 500 companies. You will work across Node.js backend services and React interfaces.",
    requirements: [
      "3+ years of full stack web development experience",
      "Proficiency with Node.js, Express/Nest.js, and SQL databases",
      "Experience with modern frontend frameworks",
      "Familiarity with Cloud infrastructure (AWS / GCP)",
    ],
    benefits: ["Unlimited PTO", "Hybrid Flexibility (2 days in office)", "Equity Grants"],
  },
  {
    id: "job-3",
    title: "Lead Product Designer (UI/UX)",
    company: "CreativeFlow",
    logo: "https://images.unsplash.com/photo-1572021335469-31706a17aaef?w=100&auto=format&fit=crop&q=80",
    location: "Austin, TX (Remote)",
    type: "Full-time",
    experience: "Lead",
    salary: "$150,000 - $190,000",
    posted: "3 days ago",
    category: "Design",
    tags: ["Figma", "UI/UX", "Design Systems", "Prototyping"],
    description: "CreativeFlow is looking for a Lead Product Designer to own end-to-end user experience across desktop and mobile applications.",
    requirements: [
      "6+ years of UX/UI design experience for SaaS products",
      "Mastery of Figma, wireframing, and interactive prototyping",
      "Proven experience establishing accessibility-first design systems",
    ],
    benefits: ["Remote First Policy", "Top tier Mac setup", "Wellness stipends"],
  },
  {
    id: "job-4",
    title: "DevOps / Infrastructure Engineer",
    company: "CloudScale Systems",
    logo: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=100&auto=format&fit=crop&q=80",
    location: "Seattle, WA (Remote)",
    type: "Full-time",
    experience: "Mid-Level",
    salary: "$130,000 - $165,000",
    posted: "Just now",
    category: "DevOps",
    tags: ["Kubernetes", "AWS", "Terraform", "CI/CD"],
    description: "Help scale our cloud infrastructure to support over 10M daily API calls with zero downtime.",
    requirements: [
      "Experience managing AWS container environments with EKS/Kubernetes",
      "Strong Infrastructure as Code skills using Terraform",
      "Hands-on expertise with GitHub Actions / GitLab CI",
    ],
    benefits: ["Competitive Salary & Bonus", "Home Office Allowance", "Health Insurance"],
  },
  {
    id: "job-5",
    title: "AI Product Manager",
    company: "DataPulse AI",
    logo: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=100&auto=format&fit=crop&q=80",
    location: "New York, NY (Remote)",
    type: "Full-time",
    experience: "Senior",
    salary: "$160,000 - $210,000",
    posted: "4 days ago",
    category: "Product",
    tags: ["AI/ML", "Product Strategy", "Agile", "User Research"],
    description: "Drive the vision and roadmap for next-generation generative AI enterprise tools.",
    requirements: [
      "4+ years of Product Management experience in AI or SaaS",
      "Ability to translate complex technical capabilities into intuitive user features",
      "Strong analytical mindset and metrics-driven execution",
    ],
    benefits: ["Generous Equity", "Comprehensive Health Care", "Annual Team Retreats"],
  },
]

export default function PublicJobsPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [locationTerm, setLocationTerm] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("all")
  const [selectedJobType, setSelectedJobType] = useState<string[]>([])
  const [savedJobIds, setSavedJobIds] = useState<string[]>([])
  const [activeJobModal, setActiveJobModal] = useState<typeof MOCK_JOBS[0] | null>(null)
  const [appliedJobIds, setAppliedJobIds] = useState<string[]>([])
  const [applySuccessMessage, setApplySuccessMessage] = useState(false)

  const toggleJobType = (type: string) => {
    setSelectedJobType((prev) =>
      prev.includes(type) ? prev.filter((t) => t !== type) : [...prev, type]
    )
  }

  const toggleSaveJob = (id: string) => {
    setSavedJobIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    )
  }

  const handleApply = (id: string) => {
    if (!appliedJobIds.includes(id)) {
      setAppliedJobIds((prev) => [...prev, id])
    }
    setApplySuccessMessage(true)
    setTimeout(() => {
      setApplySuccessMessage(false)
      setActiveJobModal(null)
    }, 1800)
  }

  const filteredJobs = MOCK_JOBS.filter((job) => {
    const matchesSearch =
      job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.company.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.tags.some((t) => t.toLowerCase().includes(searchTerm.toLowerCase()))
    const matchesLocation =
      !locationTerm || job.location.toLowerCase().includes(locationTerm.toLowerCase())
    const matchesCategory =
      selectedCategory === "all" || job.category.toLowerCase() === selectedCategory.toLowerCase()
    const matchesJobType =
      selectedJobType.length === 0 || selectedJobType.includes(job.type)
    return matchesSearch && matchesLocation && matchesCategory && matchesJobType
  })

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navigation />

      <main className="flex-1 py-10">
        <div className="container mx-auto px-4 max-w-7xl space-y-8">
          {/* Header & Search Bar */}
          <div className="bg-card border border-border rounded-2xl p-6 md:p-8 shadow-sm space-y-6">
            <div className="space-y-2">
              <Badge variant="secondary" className="px-3 py-1 font-medium">
                <Sparkles className="h-3.5 w-3.5 mr-1 text-primary inline" /> Explore {MOCK_JOBS.length}+ Verified Openings
              </Badge>
              <h1 className="text-3xl md:text-4xl font-extrabold text-foreground tracking-tight">
                Find Your Next Career Move
              </h1>
              <p className="text-muted-foreground text-base">
                Browse tech, design, product, and leadership positions at top-tier companies.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-12 gap-4">
              <div className="md:col-span-5 relative">
                <Search className="absolute left-3.5 top-3.5 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Job title, keywords, or skills..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="pl-10 h-11"
                />
              </div>
              <div className="md:col-span-4 relative">
                <MapPin className="absolute left-3.5 top-3.5 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Location or 'Remote'..."
                  value={locationTerm}
                  onChange={(e) => setLocationTerm(e.target.value)}
                  className="pl-10 h-11"
                />
              </div>
              <div className="md:col-span-3">
                <Select value={selectedCategory} onValueChange={setSelectedCategory}>
                  <SelectTrigger className="h-11">
                    <SelectValue placeholder="All Categories" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="all">All Categories</SelectItem>
                    <SelectItem value="engineering">Engineering</SelectItem>
                    <SelectItem value="design">Design</SelectItem>
                    <SelectItem value="product">Product</SelectItem>
                    <SelectItem value="devops">DevOps</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </div>

          {/* Main Layout: Filters + List */}
          <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
            {/* Sidebar Filters */}
            <div className="space-y-6 bg-card border border-border rounded-xl p-6 h-fit">
              <div className="flex items-center justify-between border-b border-border pb-4">
                <h3 className="font-semibold text-foreground flex items-center gap-2">
                  <Filter className="h-4 w-4 text-primary" /> Filters
                </h3>
                {(searchTerm || locationTerm || selectedCategory !== "all" || selectedJobType.length > 0) && (
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => {
                      setSearchTerm("")
                      setLocationTerm("")
                      setSelectedCategory("all")
                      setSelectedJobType([])
                    }}
                    className="text-xs text-muted-foreground hover:text-foreground h-auto p-0"
                  >
                    Reset All
                  </Button>
                )}
              </div>

              {/* Job Type Filter */}
              <div className="space-y-3">
                <p className="text-sm font-medium text-foreground">Job Type</p>
                {["Full-time", "Part-time", "Contract", "Remote"].map((type) => (
                  <div key={type} className="flex items-center space-x-2">
                    <Checkbox
                      id={`type-${type}`}
                      checked={selectedJobType.includes(type)}
                      onCheckedChange={() => toggleJobType(type)}
                    />
                    <label htmlFor={`type-${type}`} className="text-sm text-muted-foreground cursor-pointer">
                      {type}
                    </label>
                  </div>
                ))}
              </div>

              {/* Experience Level */}
              <div className="space-y-3 pt-4 border-t border-border">
                <p className="text-sm font-medium text-foreground">Experience Level</p>
                {["Entry Level", "Mid-Level", "Senior", "Lead / Executive"].map((lvl) => (
                  <div key={lvl} className="flex items-center space-x-2">
                    <Checkbox id={`lvl-${lvl}`} />
                    <label htmlFor={`lvl-${lvl}`} className="text-sm text-muted-foreground cursor-pointer">
                      {lvl}
                    </label>
                  </div>
                ))}
              </div>
            </div>

            {/* Job Listings */}
            <div className="lg:col-span-3 space-y-4">
              <div className="flex items-center justify-between">
                <p className="text-sm text-muted-foreground">
                  Showing <span className="font-semibold text-foreground">{filteredJobs.length}</span> open positions
                </p>
                <Select defaultValue="latest">
                  <SelectTrigger className="w-44 h-9 text-xs">
                    <SelectValue placeholder="Sort by" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="latest">Most Recent</SelectItem>
                    <SelectItem value="salary-high">Highest Salary</SelectItem>
                    <SelectItem value="relevance">Relevance</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              {filteredJobs.length === 0 ? (
                <Card className="p-12 text-center border-dashed border-2 border-border">
                  <div className="space-y-3">
                    <Briefcase className="h-10 w-10 text-muted-foreground mx-auto" />
                    <h3 className="text-lg font-semibold text-foreground">No jobs found</h3>
                    <p className="text-sm text-muted-foreground">
                      Try adjusting your search criteria or clearing filters.
                    </p>
                  </div>
                </Card>
              ) : (
                filteredJobs.map((job) => {
                  const isSaved = savedJobIds.includes(job.id)
                  const isApplied = appliedJobIds.includes(job.id)

                  return (
                    <Card
                      key={job.id}
                      className="border-border hover:border-primary/50 transition-all hover:shadow-md bg-card"
                    >
                      <CardContent className="p-6 space-y-4">
                        <div className="flex items-start justify-between gap-4">
                          <div className="flex items-start space-x-4">
                            <Avatar className="h-12 w-12 rounded-lg border border-border">
                              <AvatarImage src={job.logo} alt={job.company} />
                              <AvatarFallback>{job.company.substring(0, 2)}</AvatarFallback>
                            </Avatar>
                            <div className="space-y-1">
                              <div className="flex items-center space-x-2">
                                <span className="text-xs font-semibold text-primary">{job.company}</span>
                                <Badge variant="secondary" className="text-[10px] px-1.5 py-0.5">
                                  {job.type}
                                </Badge>
                              </div>
                              <h3
                                onClick={() => setActiveJobModal(job)}
                                className="text-lg font-bold text-foreground hover:text-primary cursor-pointer transition-colors"
                              >
                                {job.title}
                              </h3>
                              <div className="flex flex-wrap items-center gap-3 text-xs text-muted-foreground pt-1">
                                <span className="flex items-center gap-1">
                                  <MapPin className="h-3.5 w-3.5 text-muted-foreground" /> {job.location}
                                </span>
                                <span className="flex items-center gap-1">
                                  <DollarSign className="h-3.5 w-3.5 text-muted-foreground" /> {job.salary}
                                </span>
                                <span className="flex items-center gap-1">
                                  <Clock className="h-3.5 w-3.5 text-muted-foreground" /> {job.posted}
                                </span>
                              </div>
                            </div>
                          </div>

                          <Button
                            variant="ghost"
                            size="sm"
                            onClick={() => toggleSaveJob(job.id)}
                            className={isSaved ? "text-primary" : "text-muted-foreground"}
                          >
                            <Bookmark className={`h-5 w-5 ${isSaved ? "fill-primary" : ""}`} />
                          </Button>
                        </div>

                        <p className="text-sm text-muted-foreground line-clamp-2 leading-relaxed">
                          {job.description}
                        </p>

                        <div className="flex flex-wrap items-center justify-between gap-4 pt-2 border-t border-border">
                          <div className="flex flex-wrap gap-1.5">
                            {job.tags.map((tag) => (
                              <Badge key={tag} variant="outline" className="text-xs font-normal">
                                {tag}
                              </Badge>
                            ))}
                          </div>
                          <div className="flex items-center space-x-2">
                            <Button
                              variant="outline"
                              size="sm"
                              onClick={() => setActiveJobModal(job)}
                            >
                              View Details
                            </Button>
                            <Button
                              size="sm"
                              disabled={isApplied}
                              onClick={() => handleApply(job.id)}
                            >
                              {isApplied ? "Applied" : "Quick Apply"}
                            </Button>
                          </div>
                        </div>
                      </CardContent>
                    </Card>
                  )
                })
              )}
            </div>
          </div>
        </div>
      </main>

      {/* Detailed Job Modal */}
      {activeJobModal && (
        <Dialog open={!!activeJobModal} onOpenChange={() => setActiveJobModal(null)}>
          <DialogContent className="max-w-3xl max-h-[90vh] overflow-y-auto">
            <DialogHeader>
              <div className="flex items-center space-x-4 mb-2">
                <Avatar className="h-14 w-14 rounded-lg border border-border">
                  <AvatarImage src={activeJobModal.logo} alt={activeJobModal.company} />
                  <AvatarFallback>{activeJobModal.company.substring(0, 2)}</AvatarFallback>
                </Avatar>
                <div>
                  <DialogTitle className="text-xl font-bold">{activeJobModal.title}</DialogTitle>
                  <DialogDescription className="text-sm font-medium text-primary">
                    {activeJobModal.company} • {activeJobModal.location}
                  </DialogDescription>
                </div>
              </div>
            </DialogHeader>

            <div className="space-y-6 my-4">
              <div className="flex flex-wrap gap-4 p-4 bg-muted/40 rounded-xl text-sm">
                <div>
                  <p className="text-xs text-muted-foreground">Salary</p>
                  <p className="font-semibold text-foreground">{activeJobModal.salary}</p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Job Type</p>
                  <p className="font-semibold text-foreground">{activeJobModal.type}</p>
                </div>
                <div>
                  <p className="text-xs text-muted-foreground">Experience</p>
                  <p className="font-semibold text-foreground">{activeJobModal.experience}</p>
                </div>
              </div>

              <div className="space-y-2">
                <h4 className="font-semibold text-foreground">About the Role</h4>
                <p className="text-sm text-muted-foreground leading-relaxed">{activeJobModal.description}</p>
              </div>

              <div className="space-y-2">
                <h4 className="font-semibold text-foreground">Key Requirements</h4>
                <ul className="space-y-1.5 text-sm text-muted-foreground">
                  {activeJobModal.requirements.map((req, idx) => (
                    <li key={idx} className="flex items-start gap-2">
                      <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                      <span>{req}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-2">
                <h4 className="font-semibold text-foreground">Perks & Benefits</h4>
                <div className="flex flex-wrap gap-2">
                  {activeJobModal.benefits.map((b, idx) => (
                    <Badge key={idx} variant="secondary" className="px-3 py-1 text-xs">
                      {b}
                    </Badge>
                  ))}
                </div>
              </div>

              {applySuccessMessage && (
                <div className="p-4 bg-emerald-500/10 border border-emerald-500/30 text-emerald-600 dark:text-emerald-400 rounded-lg text-sm text-center font-medium flex items-center justify-center gap-2">
                  <CheckCircle2 className="h-5 w-5" /> Application submitted successfully!
                </div>
              )}
            </div>

            <DialogFooter className="gap-2">
              <Button variant="outline" onClick={() => setActiveJobModal(null)}>
                Close
              </Button>
              <Button
                disabled={appliedJobIds.includes(activeJobModal.id)}
                onClick={() => handleApply(activeJobModal.id)}
              >
                {appliedJobIds.includes(activeJobModal.id) ? "Application Submitted" : "Submit Application"}
              </Button>
            </DialogFooter>
          </DialogContent>
        </Dialog>
      )}

      <Footer />
    </div>
  )
}
