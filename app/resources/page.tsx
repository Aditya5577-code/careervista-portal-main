"use client"

import { useState } from "react"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import {
  BookOpen,
  Search,
  Clock,
  ArrowRight,
  FileText,
  Briefcase,
  TrendingUp,
  Award,
  Sparkles,
  Bookmark,
  CheckCircle2,
} from "lucide-react"

const ARTICLES = [
  {
    id: "art-1",
    title: "10 Proven Strategies to Crack System Design Interviews in 2026",
    category: "Interview Prep",
    readTime: "8 min read",
    author: "Elena Rostova",
    date: "Oct 2, 2026",
    image: "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=600&auto=format&fit=crop&q=80",
    summary: "Master load balancing, caching, database sharding, and microservice trade-offs with real-world architectural examples.",
    popular: true,
  },
  {
    id: "art-2",
    title: "How to Build a High-Impact Tech Resume That Gets Past ATS Scanners",
    category: "Resume Guide",
    readTime: "6 min read",
    author: "Marcus Vance",
    date: "Sep 28, 2026",
    image: "https://images.unsplash.com/photo-1586281380349-632531db7ed4?w=600&auto=format&fit=crop&q=80",
    summary: "Learn how to format technical skills, measure metrics-driven accomplishments, and keyword optimize your resume.",
    popular: true,
  },
  {
    id: "art-3",
    title: "Negotiating Tech Compensation: Base, Equity, and Remote Stipends",
    category: "Salary Guide",
    readTime: "10 min read",
    author: "Sarah Chen",
    date: "Sep 22, 2026",
    image: "https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?w=600&auto=format&fit=crop&q=80",
    summary: "Step-by-step negotiation tactics to maximize total compensation packages for mid and senior roles.",
    popular: false,
  },
  {
    id: "art-4",
    title: "Transitioning from Senior Engineer to Engineering Manager",
    category: "Career Growth",
    readTime: "7 min read",
    author: "Alex Rivera",
    date: "Sep 15, 2026",
    image: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=600&auto=format&fit=crop&q=80",
    summary: "Key leadership mindset shifts, 1-on-1 framework techniques, and team alignment principles for new managers.",
    popular: false,
  },
]

export default function ResourcesPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [bookmarkedIds, setBookmarkedIds] = useState<string[]>([])

  const toggleBookmark = (id: string) => {
    setBookmarkedIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    )
  }

  const filteredArticles = ARTICLES.filter((art) =>
    art.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    art.summary.toLowerCase().includes(searchTerm.toLowerCase()) ||
    art.category.toLowerCase().includes(searchTerm.toLowerCase())
  )

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navigation />

      <main className="flex-1 py-10">
        <div className="container mx-auto px-4 max-w-6xl space-y-10">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <Badge variant="outline" className="px-4 py-1 border-primary/30 text-primary font-medium">
              <Sparkles className="h-3.5 w-3.5 mr-1.5 inline" /> Career Development Center
            </Badge>
            <h1 className="text-4xl md:text-5xl font-extrabold text-foreground tracking-tight">
              Resources, Guides & Industry Insights
            </h1>
            <p className="text-lg text-muted-foreground">
              Everything you need to accelerate your tech career, prepare for interviews, and negotiate top-tier offers.
            </p>

            <div className="pt-4 max-w-xl mx-auto relative">
              <Search className="absolute left-4 top-3.5 h-5 w-5 text-muted-foreground" />
              <Input
                placeholder="Search guides, interview tips, salary negotiation..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-12 h-12 rounded-xl text-base shadow-sm"
              />
            </div>
          </div>

          {/* Featured Article Card */}
          <Card className="border-border overflow-hidden bg-card hover:shadow-xl transition-all">
            <div className="grid md:grid-cols-12 gap-0">
              <div className="md:col-span-6 bg-muted relative min-h-[260px]">
                <img
                  src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?w=800&auto=format&fit=crop&q=80"
                  alt="Featured"
                  className="w-full h-full object-cover"
                />
                <Badge className="absolute top-4 left-4 bg-primary text-primary-foreground font-semibold">
                  Featured Guide
                </Badge>
              </div>
              <div className="md:col-span-6 p-6 md:p-8 flex flex-col justify-between space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center space-x-3 text-xs text-muted-foreground">
                    <span className="font-semibold text-primary">Interview Prep</span>
                    <span>•</span>
                    <span className="flex items-center gap-1">
                      <Clock className="h-3.5 w-3.5" /> 8 min read
                    </span>
                  </div>
                  <h2 className="text-2xl font-bold text-foreground hover:text-primary transition-colors cursor-pointer">
                    10 Proven Strategies to Crack System Design Interviews in 2026
                  </h2>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Master load balancing, caching, database sharding, and microservice trade-offs with real-world architectural examples from top engineering teams.
                  </p>
                </div>
                <div className="flex items-center justify-between pt-4 border-t border-border">
                  <div className="flex items-center space-x-2 text-xs font-medium text-foreground">
                    <span>By Dr. Elena Rostova</span>
                  </div>
                  <Button size="sm" className="gap-1">
                    Read Article <ArrowRight className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          </Card>

          {/* Articles Grid */}
          <div className="space-y-6">
            <div className="flex items-center justify-between border-b border-border pb-4">
              <h2 className="text-2xl font-bold text-foreground">All Articles & Guides</h2>
              <p className="text-sm text-muted-foreground">{filteredArticles.length} guides available</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredArticles.map((art) => {
                const isBookmarked = bookmarkedIds.includes(art.id)

                return (
                  <Card key={art.id} className="border-border hover:border-primary/50 transition-all hover:shadow-lg bg-card flex flex-col justify-between overflow-hidden">
                    <div className="space-y-4">
                      <div className="relative h-44 bg-muted overflow-hidden">
                        <img src={art.image} alt={art.title} className="w-full h-full object-cover hover:scale-105 transition-transform duration-300" />
                        <Button
                          variant="secondary"
                          size="sm"
                          onClick={() => toggleBookmark(art.id)}
                          className="absolute top-3 right-3 h-8 w-8 p-0 rounded-full bg-background/80 backdrop-blur-sm"
                        >
                          <Bookmark className={`h-4 w-4 ${isBookmarked ? "fill-primary text-primary" : "text-muted-foreground"}`} />
                        </Button>
                      </div>

                      <CardContent className="space-y-3 p-6 pt-0">
                        <div className="flex items-center justify-between text-xs text-muted-foreground">
                          <Badge variant="outline" className="text-primary font-medium text-[11px]">
                            {art.category}
                          </Badge>
                          <span className="flex items-center gap-1">
                            <Clock className="h-3.5 w-3.5" /> {art.readTime}
                          </span>
                        </div>
                        <h3 className="text-lg font-bold text-foreground leading-snug line-clamp-2 hover:text-primary cursor-pointer transition-colors">
                          {art.title}
                        </h3>
                        <p className="text-xs text-muted-foreground line-clamp-2 leading-relaxed">
                          {art.summary}
                        </p>
                      </CardContent>
                    </div>

                    <div className="p-4 bg-muted/30 border-t border-border flex items-center justify-between text-xs font-medium text-muted-foreground">
                      <span>{art.author}</span>
                      <span className="text-primary hover:underline flex items-center gap-1 cursor-pointer">
                        Read Guide <ArrowRight className="h-3 w-3" />
                      </span>
                    </div>
                  </Card>
                )
              })}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
