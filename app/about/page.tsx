"use client"

import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import {
  Briefcase,
  Users,
  Building2,
  Award,
  Target,
  Heart,
  Zap,
  ShieldCheck,
  ArrowRight,
  CheckCircle2,
  Sparkles,
} from "lucide-react"

const stats = [
  { label: "Active Job Listings", value: "50,000+", icon: Briefcase },
  { label: "Partner Companies", value: "10,000+", icon: Building2 },
  { label: "Successful Hires", value: "250,000+", icon: Users },
  { label: "Placement Success", value: "98%", icon: Award },
]

const values = [
  {
    icon: Target,
    title: "Precision Matching",
    description: "Using intelligent skill analysis to connect candidates with roles where they excel and thrive.",
  },
  {
    icon: ShieldCheck,
    title: "Trust & Transparency",
    description: "Verified salary ranges, authentic company reviews, and clear candidate application status tracking.",
  },
  {
    icon: Heart,
    title: "Human-Centric Design",
    description: "Putting candidates' growth and recruiters' efficiency at the center of every feature we build.",
  },
  {
    icon: Zap,
    title: "Continuous Innovation",
    description: "Constantly enhancing our platform with modern tools, real-time messaging, and smart insights.",
  },
]

const team = [
  {
    name: "Alex Rivera",
    role: "Co-Founder & CEO",
    bio: "Former VP of Product at TechCorp. Passionate about reforming talent acquisition.",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&auto=format&fit=crop&q=80",
    initials: "AR",
  },
  {
    name: "Dr. Elena Rostova",
    role: "Chief Technology Officer",
    bio: "Ph.D. in Machine Learning. Pioneer in job matching algorithms and NLP candidate profiling.",
    avatar: "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=400&auto=format&fit=crop&q=80",
    initials: "ER",
  },
  {
    name: "Marcus Vance",
    role: "Head of Product & Design",
    bio: "12+ years building user-loved recruitment experiences and modern UI design systems.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&auto=format&fit=crop&q=80",
    initials: "MV",
  },
  {
    name: "Sarah Chen",
    role: "Head of Employer Success",
    bio: "Helped over 1,000 tech companies scale their engineering and product teams globally.",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&auto=format&fit=crop&q=80",
    initials: "SC",
  },
]

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navigation />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="relative py-20 overflow-hidden bg-muted/40 border-b border-border">
          <div className="container mx-auto px-4 max-w-6xl">
            <div className="text-center max-w-3xl mx-auto space-y-6">
              <Badge variant="outline" className="px-4 py-1 border-primary/30 text-primary font-medium">
                <Sparkles className="h-3.5 w-3.5 mr-1.5 inline" /> Our Story & Mission
              </Badge>
              <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight text-foreground">
                Connecting Talent with <span className="text-primary">Extraordinary Opportunities</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground leading-relaxed">
                CareerVista was founded on a simple belief: finding a job should be empowering, transparent, and seamless. We empower professionals to grow their careers and help top organizations build dream teams.
              </p>
              <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
                <Button size="lg" asChild className="gap-2">
                  <Link href="/jobs">
                    Explore Jobs <ArrowRight className="h-4 w-4" />
                  </Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link href="/pricing">For Employers</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Stats Grid */}
        <section className="py-16 container mx-auto px-4 max-w-6xl">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat) => (
              <Card key={stat.label} className="border-border bg-card text-center hover:shadow-md transition-all">
                <CardContent className="pt-6 pb-6 space-y-2">
                  <stat.icon className="h-8 w-8 text-primary mx-auto" />
                  <p className="text-3xl md:text-4xl font-extrabold text-foreground">{stat.value}</p>
                  <p className="text-sm font-medium text-muted-foreground">{stat.label}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* Core Values */}
        <section className="py-16 bg-muted/30 border-y border-border">
          <div className="container mx-auto px-4 max-w-6xl space-y-12">
            <div className="text-center max-w-2xl mx-auto space-y-3">
              <h2 className="text-3xl font-bold text-foreground">Guided by Our Core Values</h2>
              <p className="text-muted-foreground">
                Every feature we release and every partner we onboard aligns with our fundamental principles.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8">
              {values.map((val) => (
                <Card key={val.title} className="border-border bg-card hover:border-primary/50 transition-all">
                  <CardContent className="p-6 flex items-start space-x-4">
                    <div className="p-3 bg-primary/10 rounded-xl text-primary flex-shrink-0">
                      <val.icon className="h-6 w-6" />
                    </div>
                    <div className="space-y-1">
                      <h3 className="text-lg font-semibold text-foreground">{val.title}</h3>
                      <p className="text-sm text-muted-foreground leading-relaxed">{val.description}</p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20 container mx-auto px-4 max-w-6xl space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <h2 className="text-3xl font-bold text-foreground">Meet the Leadership Team</h2>
            <p className="text-muted-foreground">
              A diverse group of technologists, recruiters, and creators dedicated to reshaping the future of work.
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {team.map((member) => (
              <Card key={member.name} className="border-border text-center overflow-hidden hover:shadow-lg transition-all group">
                <CardContent className="p-6 space-y-4">
                  <Avatar className="h-24 w-24 mx-auto border-2 border-primary/20 group-hover:scale-105 transition-transform">
                    <AvatarImage src={member.avatar} alt={member.name} />
                    <AvatarFallback>{member.initials}</AvatarFallback>
                  </Avatar>
                  <div>
                    <h3 className="text-lg font-semibold text-foreground">{member.name}</h3>
                    <p className="text-xs font-medium text-primary">{member.role}</p>
                  </div>
                  <p className="text-xs text-muted-foreground leading-relaxed">{member.bio}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-primary text-primary-foreground">
          <div className="container mx-auto px-4 max-w-4xl text-center space-y-6">
            <h2 className="text-3xl md:text-4xl font-bold">Ready to Start Your Career Journey?</h2>
            <p className="text-primary-foreground/90 max-w-xl mx-auto text-base">
              Join thousands of professionals and companies discovering their next big opportunity today.
            </p>
            <div className="flex justify-center gap-4 pt-2">
              <Button size="lg" variant="secondary" asChild className="font-semibold">
                <Link href="/register">Create Free Account</Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="bg-transparent text-primary-foreground border-primary-foreground/30 hover:bg-primary-foreground/10">
                <Link href="/jobs">Browse Jobs</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  )
}
