import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Briefcase, Users, Eye, TrendingUp, Plus, MoreHorizontal, MapPin, Clock, Building2 } from "lucide-react"
import Link from "next/link"

export default function EmployerDashboard() {
  const stats = [
    {
      title: "Active Jobs",
      value: "12",
      change: "+2 this week",
      icon: Briefcase,
      color: "text-primary",
    },
    {
      title: "Total Applications",
      value: "248",
      change: "+18 this week",
      icon: Users,
      color: "text-secondary",
    },
    {
      title: "Profile Views",
      value: "1,429",
      change: "+12% this month",
      icon: Eye,
      color: "text-accent",
    },
    {
      title: "Hire Rate",
      value: "8.5%",
      change: "+2.1% this month",
      icon: TrendingUp,
      color: "text-primary",
    },
  ]

  const recentJobs = [
    {
      id: 1,
      title: "Senior Frontend Developer",
      location: "San Francisco, CA",
      type: "Full-time",
      posted: "2 days ago",
      applications: 24,
      views: 156,
      status: "active",
    },
    {
      id: 2,
      title: "Product Manager",
      location: "Remote",
      type: "Full-time",
      posted: "1 week ago",
      applications: 18,
      views: 89,
      status: "active",
    },
    {
      id: 3,
      title: "UX Designer",
      location: "New York, NY",
      type: "Contract",
      posted: "3 days ago",
      applications: 12,
      views: 67,
      status: "paused",
    },
  ]

  const recentApplications = [
    {
      id: 1,
      name: "Sarah Johnson",
      position: "Senior Frontend Developer",
      appliedDate: "2 hours ago",
      status: "new",
      avatar: "/professional-woman-diverse.png",
    },
    {
      id: 2,
      name: "Michael Chen",
      position: "Product Manager",
      appliedDate: "4 hours ago",
      status: "reviewing",
      avatar: "/professional-man.png",
    },
    {
      id: 3,
      name: "Emily Davis",
      position: "UX Designer",
      appliedDate: "1 day ago",
      status: "shortlisted",
      avatar: "/professional-woman-designer.png",
    },
  ]

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Dashboard</h1>
          <p className="text-muted-foreground">Welcome back! Here's what's happening with your jobs.</p>
        </div>
        <Button asChild>
          <Link href="/employer/jobs/new">
            <Plus className="mr-2 h-4 w-4" />
            Post New Job
          </Link>
        </Button>
      </div>

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
        {/* Recent Jobs */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <div>
              <CardTitle>Recent Jobs</CardTitle>
              <CardDescription>Your latest job postings and their performance</CardDescription>
            </div>
            <Button variant="outline" size="sm" asChild>
              <Link href="/employer/jobs">View All</Link>
            </Button>
          </CardHeader>
          <CardContent className="space-y-4">
            {recentJobs.map((job) => (
              <div key={job.id} className="flex items-center justify-between p-4 border border-border rounded-lg">
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-2">
                    <h3 className="font-medium text-foreground">{job.title}</h3>
                    <Badge variant={job.status === "active" ? "default" : "secondary"}>{job.status}</Badge>
                  </div>
                  <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                    <div className="flex items-center space-x-1">
                      <MapPin className="h-3 w-3" />
                      <span>{job.location}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Clock className="h-3 w-3" />
                      <span>{job.posted}</span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4 mt-2 text-sm">
                    <span className="text-primary">{job.applications} applications</span>
                    <span className="text-muted-foreground">{job.views} views</span>
                  </div>
                </div>
                <Button variant="ghost" size="sm">
                  <MoreHorizontal className="h-4 w-4" />
                </Button>
              </div>
            ))}
          </CardContent>
        </Card>

        {/* Recent Applications */}
        <Card>
          <CardHeader className="flex flex-row items-center justify-between">
            <div>
              <CardTitle>Recent Applications</CardTitle>
              <CardDescription>Latest candidates who applied to your jobs</CardDescription>
            </div>
            <Button variant="outline" size="sm" asChild>
              <Link href="/employer/applications">View All</Link>
            </Button>
          </CardHeader>
          <CardContent className="space-y-4">
            {recentApplications.map((application) => (
              <div key={application.id} className="flex items-center space-x-4 p-4 border border-border rounded-lg">
                <img
                  src={application.avatar || "/placeholder.svg"}
                  alt={application.name}
                  className="h-10 w-10 rounded-full object-cover"
                />
                <div className="flex-1">
                  <h3 className="font-medium text-foreground">{application.name}</h3>
                  <p className="text-sm text-muted-foreground">{application.position}</p>
                  <p className="text-xs text-muted-foreground">{application.appliedDate}</p>
                </div>
                <Badge
                  variant={
                    application.status === "new"
                      ? "default"
                      : application.status === "shortlisted"
                        ? "secondary"
                        : "outline"
                  }
                >
                  {application.status}
                </Badge>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <Card>
        <CardHeader>
          <CardTitle>Quick Actions</CardTitle>
          <CardDescription>Common tasks to help you manage your hiring process</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <Button variant="outline" className="h-20 flex-col space-y-2 bg-transparent" asChild>
              <Link href="/employer/jobs/new">
                <Plus className="h-6 w-6" />
                <span>Post New Job</span>
              </Link>
            </Button>
            <Button variant="outline" className="h-20 flex-col space-y-2 bg-transparent" asChild>
              <Link href="/employer/applications">
                <Users className="h-6 w-6" />
                <span>Review Applications</span>
              </Link>
            </Button>
            <Button variant="outline" className="h-20 flex-col space-y-2 bg-transparent" asChild>
              <Link href="/employer/company">
                <Building2 className="h-6 w-6" />
                <span>Update Company Profile</span>
              </Link>
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Hiring Pipeline Overview */}
      <Card>
        <CardHeader>
          <CardTitle>Hiring Pipeline</CardTitle>
          <CardDescription>Overview of candidates in your hiring process</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <span className="text-sm font-medium">Applied (248)</span>
              <span className="text-sm text-muted-foreground">100%</span>
            </div>
            <Progress value={100} className="h-2" />

            <div className="flex items-center justify-between">
              <span className="text-sm font-medium">Screening (89)</span>
              <span className="text-sm text-muted-foreground">36%</span>
            </div>
            <Progress value={36} className="h-2" />

            <div className="flex items-center justify-between">
              <span className="text-sm font-medium">Interview (24)</span>
              <span className="text-sm text-muted-foreground">10%</span>
            </div>
            <Progress value={10} className="h-2" />

            <div className="flex items-center justify-between">
              <span className="text-sm font-medium">Offer (8)</span>
              <span className="text-sm text-muted-foreground">3%</span>
            </div>
            <Progress value={3} className="h-2" />
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
