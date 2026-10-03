"use client"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Sparkles, Briefcase, MapPin, DollarSign, CheckCircle2, ArrowRight } from "lucide-react"

export default function PostJobPage() {
  const router = useRouter()
  const [jobTitle, setJobTitle] = useState("")
  const [category, setCategory] = useState("engineering")
  const [jobType, setJobType] = useState("Full-time")
  const [location, setLocation] = useState("")
  const [minSalary, setMinSalary] = useState("120000")
  const [maxSalary, setMaxSalary] = useState("160000")
  const [description, setDescription] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [isSuccess, setIsSuccess] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    setTimeout(() => {
      setIsSubmitting(false)
      setIsSuccess(true)
      setTimeout(() => {
        router.push("/employer/jobs")
      }, 1500)
    }, 1000)
  }

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navigation />

      <main className="flex-1 py-12">
        <div className="container mx-auto px-4 max-w-3xl space-y-8">
          <div className="text-center space-y-2">
            <h1 className="text-3xl font-extrabold text-foreground tracking-tight">Post a New Job Opening</h1>
            <p className="text-sm text-muted-foreground">
              Reach over 250,000 qualified tech candidates in minutes.
            </p>
          </div>

          <Card className="border-border shadow-xl bg-card">
            <CardContent className="p-6 md:p-8 space-y-6">
              {isSuccess ? (
                <div className="py-12 text-center space-y-4">
                  <div className="p-4 bg-emerald-500/10 text-emerald-500 rounded-full w-fit mx-auto">
                    <CheckCircle2 className="h-12 w-12" />
                  </div>
                  <h2 className="text-2xl font-bold text-foreground">Job Posted Successfully!</h2>
                  <p className="text-sm text-muted-foreground">
                    Redirecting you to your Employer Jobs dashboard...
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="post-title">Job Title</Label>
                    <Input
                      id="post-title"
                      placeholder="e.g. Senior Frontend Engineer (React/Next.js)"
                      value={jobTitle}
                      onChange={(e) => setJobTitle(e.target.value)}
                      required
                      className="h-11"
                    />
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label>Category</Label>
                      <Select value={category} onValueChange={setCategory}>
                        <SelectTrigger className="h-11">
                          <SelectValue placeholder="Select Category" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="engineering">Software Engineering</SelectItem>
                          <SelectItem value="design">UI/UX Design</SelectItem>
                          <SelectItem value="product">Product Management</SelectItem>
                          <SelectItem value="devops">DevOps & Cloud</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="space-y-2">
                      <Label>Job Type</Label>
                      <Select value={jobType} onValueChange={setJobType}>
                        <SelectTrigger className="h-11">
                          <SelectValue placeholder="Select Type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="Full-time">Full-time</SelectItem>
                          <SelectItem value="Part-time">Part-time</SelectItem>
                          <SelectItem value="Contract">Contract</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="post-location">Location / Remote Policy</Label>
                    <Input
                      id="post-location"
                      placeholder="e.g. San Francisco, CA (Remote Allowed)"
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                      required
                      className="h-11"
                    />
                  </div>

                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="min-sal">Min Annual Salary ($)</Label>
                      <Input
                        id="min-sal"
                        type="number"
                        value={minSalary}
                        onChange={(e) => setMinSalary(e.target.value)}
                        required
                        className="h-11"
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="max-sal">Max Annual Salary ($)</Label>
                      <Input
                        id="max-sal"
                        type="number"
                        value={maxSalary}
                        onChange={(e) => setMaxSalary(e.target.value)}
                        required
                        className="h-11"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="post-desc">Job Description & Key Requirements</Label>
                    <Textarea
                      id="post-desc"
                      placeholder="Describe role responsibilities, required skills, and team culture..."
                      value={description}
                      onChange={(e) => setDescription(e.target.value)}
                      required
                      rows={6}
                    />
                  </div>

                  <Button type="submit" disabled={isSubmitting} className="w-full h-12 text-base font-semibold gap-2">
                    {isSubmitting ? "Publishing Job..." : "Publish Job Opening"}
                    {!isSubmitting && <ArrowRight className="h-4 w-4" />}
                  </Button>
                </form>
              )}
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  )
}
