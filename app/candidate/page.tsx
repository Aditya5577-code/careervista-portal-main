import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import {
  Search,
  Briefcase,
  Eye,
  TrendingUp,
  Plus,
  MapPin,
  Clock,
  Building2,
  Star,
  MessageSquare,
  Calendar,
  User,
} from "lucide-react"
import Link from "next/link"

export default function CandidateDashboard() {
  const stats = [
    {
      title: "Applications Sent",
      value: "24",
      change: "+3 this week",
      icon: Briefcase,
      color: "text-primary",
    },
    {
      title: "Profile Views",
      value: "156",
      change: "+12 this week",
      icon: Eye,
      color: "text-secondary",
    },
    {
      title: "Interview Invites",
      value: "5",
      change: "+2 this week",
      icon: Calendar,
      color: "text-accent",
    },
    {
      title: "Response Rate",
      value: "18%",
      change: "+3% this month",
      icon: TrendingUp,
      color: "text-primary",
    },
  ]

  const recentApplications = [
    {
      id: 1,
      company: "TechCorp Inc.",
      position: "Senior Frontend Developer",
      location: "San Francisco, CA",
      appliedDate: "2 days ago",
      status: "under_review",
      logo: "/generic-company-logo.png",
    },
    {
      id: 2,
      company: "StartupXYZ",
      position: "React Developer",
      location: "Remote",
      appliedDate: "1 week ago",
      status: "interview_scheduled",
      logo: "/generic-company-logo.png",
    },
    {
      id: 3,
      company: "BigTech Solutions",
      position: "Frontend Engineer",
      location: "New York, NY",
      appliedDate: "2 weeks ago",
      status: "rejected",
      logo: "/generic-company-logo.png",
    },
  ]

  const recommendedJobs = [
    {
      id: 1,
      title: "Senior React Developer",
      company: "InnovateTech",
      location: "Austin, TX",
      salary: "$120k - $160k",
      type: "Full-time",
      posted: "1 day ago",
      match: 95,
      logo: "/generic-company-logo.png",
    },
    {
      id: 2,
      title: "Frontend Team Lead",
      company: "GrowthCorp",
      location: "Remote",
      salary: "$140k - $180k",
      type: "Full-time",
      posted: "3 days ago",
      match: 88,
      logo: "/generic-company-logo.png",
    },
    {
      id: 3,
      title: "JavaScript Developer",
      company: "WebSolutions",
      location: "Seattle, WA",
      salary: "$100k - $130k",
      type: "Contract",
      posted: "5 days ago",
      match: 82,
      logo: "/generic-company-logo.png",
    },
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "under_review":
        return "secondary"
      case "interview_scheduled":
        return "default"
      case "rejected":
        return "destructive"
      case "offer":
        return "default"
      default:
        return "outline"
    }
  }

  const getStatusText = (status: string) => {
    switch (status) {
      case "under_review":
        return "Under Review"
      case "interview_scheduled":
        return "Interview Scheduled"
      case "rejected":
        return "Not Selected"
      case "offer":
        return "Offer Received"
      default:
        return "Applied"
    }
  }

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Welcome back, Sarah!</h1>
          <p className="text-muted-foreground">Here's your job search progress and new opportunities.</p>
        </div>
        <Button asChild>
          <Link href="/candidate/jobs">
            <Search className="mr-2 h-4 w-4" />
            Find Jobs
          </Link>
        </Button>
      </div>

      {/* Profile Completion */}
      <Card className="border-primary/20 bg-primary/5">
        <CardContent className="p-6">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="font-semibold text-foreground">Complete Your Profile</h3>
              <p className="text-sm text-muted-foreground">85% complete - Add skills to improve job matches</p>
            </div>
            <Button variant="outline" size="sm" asChild>
              <Link href="/candidate/profile">Complete Profile</Link>
            </Button>
          </div>
          <Progress value={85} className="h-2" />
        </CardContent>
      </Card>

      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {stats.map((stat, index) => (
          <Card key={index}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
              <stat.icon className={`h-4 w-4 ${stat.color}`} />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <p className="text-xs text-muted-foreground">{stat.change}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Recent Applications */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <div>
              <CardTitle>Recent Applications</CardTitle>
              <CardDescription>Track the status of your job applications</CardDescription>
            </div>
            <Button variant="outline" size="sm" asChild>
              <Link href="/candidate/applications">View All</Link>
            </Button>
          </CardHeader>
          <CardContent className="space-y-4">
            {recentApplications.map((application) => (
              <div key={application.id} className="flex items-center space-x-4 p-4 border border-border rounded-lg">
                <img
                  src={application.logo || "/placeholder.svg"}
                  alt={application.company}
                  className="h-10 w-10 rounded-lg object-cover"
                />
                <div className="flex-1">
                  <h3 className="font-medium text-foreground">{application.position}</h3>
                  <p className="text-sm text-muted-foreground">{application.company}</p>
                  <div className="flex items-center space-x-2 mt-1">
                    <MapPin className="h-3 w-3 text-muted-foreground" />
                    <span className="text-xs text-muted-foreground">{application.location}</span>
                    <span className="text-xs text-muted-foreground">• Applied {application.appliedDate}</span>
                  </div>
                </div>
                <Badge variant={getStatusColor(application.status)}>{getStatusText(application.status)}</Badge>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Recommended Jobs */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <div>
              <CardTitle>Recommended for You</CardTitle>
              <CardDescription>Jobs that match your skills and preferences</CardDescription>
            </div>
            <Button variant="outline" size="sm" asChild>
              <Link href="/candidate/jobs">View All</Link>
            </Button>
          </CardHeader>
          <CardContent className="space-y-4">
            {recommendedJobs.map((job) => (
              <div key={job.id} className="p-4 border border-border rounded-lg hover:shadow-md transition-shadow">
                <div className="flex items-start justify-between mb-2">
                  <div className="flex items-center space-x-3">
                    <img
                      src={job.logo || "/placeholder.svg"}
                      alt={job.company}
                      className="h-8 w-8 rounded object-cover"
                    />
                    <div>
                      <h3 className="font-medium text-foreground">{job.title}</h3>
                      <p className="text-sm text-muted-foreground">{job.company}</p>
                    </div>
                  </div>
                  <Badge variant="secondary" className="text-xs">
                    {job.match}% match
                  </Badge>
                </div>
                <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-3">
                  <div className="flex items-center space-x-1">
                    <MapPin className="h-3 w-3" />
                    <span>{job.location}</span>
                  </div>
                  <div className="flex items-center space-x-1">
                    <Clock className="h-3 w-3" />
                    <span>{job.type}</span>
                  </div>
                  <span className="text-primary font-medium">{job.salary}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-xs text-muted-foreground">Posted {job.posted}</span>
                  <div className="flex items-center space-x-2">
                    <Button variant="outline" size="sm">
                      <Star className="mr-1 h-3 w-3" />
                      Save
                    </Button>
                    <Button size="sm">Apply Now</Button>
                  </div>
                </div>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <Card>
        <CardHeader>
          <CardTitle>Quick Actions</CardTitle>
          <CardDescription>Common tasks to help you in your job search</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            <Button variant="outline" className="h-20 flex-col space-y-2 bg-transparent" asChild>
              <Link href="/candidate/jobs">
                <Search className="h-6 w-6" />
                <span>Search Jobs</span>
              </Link>
            </Button>
            <Button variant="outline" className="h-20 flex-col space-y-2 bg-transparent" asChild>
              <Link href="/candidate/profile">
                <User className="h-6 w-6" />
                <span>Update Profile</span>
              </Link>
            </Button>
            <Button variant="outline" className="h-20 flex-col space-y-2 bg-transparent" asChild>
              <Link href="/candidate/companies">
                <Building2 className="h-6 w-6" />
                <span>Explore Companies</span>
              </Link>
            </Button>
            <Button variant="outline" className="h-20 flex-col space-y-2 bg-transparent" asChild>
              <Link href="/candidate/messages">
                <MessageSquare className="h-6 w-6" />
                <span>Check Messages</span>
              </Link>
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Job Alerts */}
      <Card>
        <CardHeader>
          <CardTitle>Job Alerts</CardTitle>
          <CardDescription>Stay updated with new opportunities matching your criteria</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="flex items-center justify-between p-4 border border-border rounded-lg">
            <div>
              <h3 className="font-medium text-foreground">Frontend Developer in San Francisco</h3>
              <p className="text-sm text-muted-foreground">
                Get notified about new frontend developer jobs in San Francisco
              </p>
            </div>
            <Badge variant="secondary">Active</Badge>
          </div>
          <div className="mt-4">
            <Button variant="outline" size="sm">
              <Plus className="mr-2 h-4 w-4" />
              Create New Alert
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
