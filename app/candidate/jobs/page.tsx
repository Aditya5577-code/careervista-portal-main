import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { Slider } from "@/components/ui/slider"
import { Search, Filter, MapPin, Clock, Building2, Bookmark, ExternalLink, Briefcase, DollarSign } from "lucide-react"

export default function JobSearchPage() {
  const jobs = [
    {
      id: 1,
      title: "Senior Frontend Developer",
      company: "TechCorp Inc.",
      location: "San Francisco, CA",
      type: "Full-time",
      salary: "$120k - $160k",
      posted: "2 days ago",
      description: "We're looking for a senior frontend developer to join our growing team...",
      skills: ["React", "TypeScript", "Next.js", "Tailwind CSS"],
      remote: false,
      featured: true,
      logo: "/generic-company-logo.png",
      match: 95,
    },
    {
      id: 2,
      title: "React Developer",
      company: "StartupXYZ",
      location: "Remote",
      type: "Full-time",
      salary: "$100k - $140k",
      posted: "1 day ago",
      description: "Join our remote-first team building the next generation of web applications...",
      skills: ["React", "JavaScript", "Node.js", "GraphQL"],
      remote: true,
      featured: false,
      logo: "/generic-company-logo.png",
      match: 88,
    },
    {
      id: 3,
      title: "Frontend Engineer",
      company: "BigTech Solutions",
      location: "New York, NY",
      type: "Full-time",
      salary: "$110k - $150k",
      posted: "3 days ago",
      description: "Build scalable frontend solutions for millions of users...",
      skills: ["Vue.js", "JavaScript", "CSS", "Webpack"],
      remote: false,
      featured: false,
      logo: "/generic-company-logo.png",
      match: 82,
    },
    {
      id: 4,
      title: "JavaScript Developer",
      company: "WebSolutions",
      location: "Austin, TX",
      type: "Contract",
      salary: "$80k - $120k",
      posted: "1 week ago",
      description: "Contract position for an experienced JavaScript developer...",
      skills: ["JavaScript", "React", "Node.js", "MongoDB"],
      remote: false,
      featured: false,
      logo: "/generic-company-logo.png",
      match: 75,
    },
  ]

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Find Jobs</h1>
          <p className="text-muted-foreground">Discover your next career opportunity</p>
        </div>
        <Button variant="outline">
          <Filter className="mr-2 h-4 w-4" />
          Save Search
        </Button>
      </div>

      {/* Search Bar */}
      <Card>
        <CardContent className="p-6">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
              <Input placeholder="Job title, keywords, or company" className="pl-10" />
            </div>
            <div className="relative">
              <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
              <Input placeholder="City, state, or remote" className="pl-10" />
            </div>
            <Button size="lg" className="w-full">
              <Search className="mr-2 h-5 w-5" />
              Search Jobs
            </Button>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Filters Sidebar */}
        <div className="lg:col-span-1 space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Filters</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              {/* Job Type */}
              <div>
                <h3 className="font-medium mb-3">Job Type</h3>
                <div className="space-y-2">
                  {["Full-time", "Part-time", "Contract", "Freelance", "Internship"].map((type) => (
                    <div key={type} className="flex items-center space-x-2">
                      <Checkbox id={type} />
                      <label htmlFor={type} className="text-sm">
                        {type}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              {/* Experience Level */}
              <div>
                <h3 className="font-medium mb-3">Experience Level</h3>
                <div className="space-y-2">
                  {["Entry Level", "Mid Level", "Senior Level", "Executive"].map((level) => (
                    <div key={level} className="flex items-center space-x-2">
                      <Checkbox id={level} />
                      <label htmlFor={level} className="text-sm">
                        {level}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              {/* Salary Range */}
              <div>
                <h3 className="font-medium mb-3">Salary Range</h3>
                <div className="space-y-4">
                  <Slider defaultValue={[80]} max={200} step={10} className="w-full" />
                  <div className="flex justify-between text-sm text-muted-foreground">
                    <span>$80k</span>
                    <span>$200k+</span>
                  </div>
                </div>
              </div>

              {/* Remote Work */}
              <div>
                <h3 className="font-medium mb-3">Work Arrangement</h3>
                <div className="space-y-2">
                  {["Remote", "Hybrid", "On-site"].map((arrangement) => (
                    <div key={arrangement} className="flex items-center space-x-2">
                      <Checkbox id={arrangement} />
                      <label htmlFor={arrangement} className="text-sm">
                        {arrangement}
                      </label>
                    </div>
                  ))}
                </div>
              </div>

              {/* Company Size */}
              <div>
                <h3 className="font-medium mb-3">Company Size</h3>
                <div className="space-y-2">
                  {["Startup (1-50)", "Small (51-200)", "Medium (201-1000)", "Large (1000+)"].map((size) => (
                    <div key={size} className="flex items-center space-x-2">
                      <Checkbox id={size} />
                      <label htmlFor={size} className="text-sm">
                        {size}
                      </label>
                    </div>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Job Listings */}
        <div className="lg:col-span-3 space-y-6">
          {/* Results Header */}
          <div className="flex items-center justify-between">
            <div>
              <p className="text-muted-foreground">Showing 1,247 jobs</p>
            </div>
            <Select>
              <SelectTrigger className="w-48">
                <SelectValue placeholder="Sort by" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="relevance">Most Relevant</SelectItem>
                <SelectItem value="date">Most Recent</SelectItem>
                <SelectItem value="salary">Highest Salary</SelectItem>
                <SelectItem value="match">Best Match</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Job Cards */}
          <div className="space-y-4">
            {jobs.map((job) => (
              <Card key={job.id} className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between">
                    <div className="flex items-start space-x-4 flex-1">
                      <img
                        src={job.logo || "/placeholder.svg"}
                        alt={job.company}
                        className="h-12 w-12 rounded-lg object-cover"
                      />
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-2">
                          <h3 className="text-lg font-semibold text-foreground hover:text-primary">{job.title}</h3>
                          {job.featured && <Badge variant="secondary">Featured</Badge>}
                          <Badge variant="outline" className="text-xs">
                            {job.match}% match
                          </Badge>
                        </div>

                        <div className="flex items-center space-x-1 mb-2">
                          <Building2 className="h-4 w-4 text-muted-foreground" />
                          <span className="font-medium text-foreground">{job.company}</span>
                        </div>

                        <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-3">
                          <div className="flex items-center space-x-1">
                            <MapPin className="h-3 w-3" />
                            <span>{job.location}</span>
                            {job.remote && (
                              <Badge variant="outline" className="ml-1 text-xs">
                                Remote
                              </Badge>
                            )}
                          </div>
                          <div className="flex items-center space-x-1">
                            <Briefcase className="h-3 w-3" />
                            <span>{job.type}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <DollarSign className="h-3 w-3" />
                            <span className="font-medium text-primary">{job.salary}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Clock className="h-3 w-3" />
                            <span>Posted {job.posted}</span>
                          </div>
                        </div>

                        <p className="text-sm text-muted-foreground mb-3 line-clamp-2">{job.description}</p>

                        <div className="flex flex-wrap gap-2">
                          {job.skills.map((skill) => (
                            <Badge key={skill} variant="secondary" className="text-xs">
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>

                    <div className="flex flex-col items-end space-y-2">
                      <Button variant="ghost" size="sm">
                        <Bookmark className="h-4 w-4" />
                      </Button>
                      <Button size="sm">Apply Now</Button>
                      <Button variant="outline" size="sm">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        View Details
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center">
            <Button variant="outline" size="lg">
              Load More Jobs
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}
