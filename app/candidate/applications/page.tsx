import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Progress } from "@/components/ui/progress"
import { Search, MapPin, Clock, Building2, Calendar, MessageSquare, ExternalLink, Eye, Download } from "lucide-react"

export default function ApplicationsPage() {
  const applications = [
    {
      id: 1,
      company: "TechCorp Inc.",
      position: "Senior Frontend Developer",
      location: "San Francisco, CA",
      appliedDate: "2024-01-15",
      status: "under_review",
      stage: "Application Review",
      progress: 25,
      salary: "$120k - $160k",
      type: "Full-time",
      logo: "/generic-company-logo.png",
      lastUpdate: "2 days ago",
      notes: "Application submitted successfully",
    },
    {
      id: 2,
      company: "StartupXYZ",
      position: "React Developer",
      location: "Remote",
      appliedDate: "2024-01-10",
      status: "interview_scheduled",
      stage: "Technical Interview",
      progress: 75,
      salary: "$100k - $140k",
      type: "Full-time",
      logo: "/generic-company-logo.png",
      lastUpdate: "1 day ago",
      notes: "Interview scheduled for Jan 20th at 2 PM",
    },
    {
      id: 3,
      company: "BigTech Solutions",
      position: "Frontend Engineer",
      location: "New York, NY",
      appliedDate: "2024-01-05",
      status: "rejected",
      stage: "Application Review",
      progress: 100,
      salary: "$110k - $150k",
      type: "Full-time",
      logo: "/generic-company-logo.png",
      lastUpdate: "1 week ago",
      notes: "Position filled by another candidate",
    },
    {
      id: 4,
      company: "InnovateTech",
      position: "Senior React Developer",
      location: "Austin, TX",
      appliedDate: "2024-01-12",
      status: "offer_received",
      stage: "Offer Negotiation",
      progress: 90,
      salary: "$130k - $170k",
      type: "Full-time",
      logo: "/generic-company-logo.png",
      lastUpdate: "3 hours ago",
      notes: "Offer received! Deadline: Jan 25th",
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
      case "offer_received":
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
      case "offer_received":
        return "Offer Received"
      default:
        return "Applied"
    }
  }

  const getProgressColor = (status: string) => {
    switch (status) {
      case "rejected":
        return "bg-destructive"
      case "offer_received":
        return "bg-primary"
      default:
        return "bg-secondary"
    }
  }

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">My Applications</h1>
          <p className="text-muted-foreground">Track the status of your job applications</p>
        </div>
        <div className="flex items-center space-x-2">
          <Button variant="outline">
            <Download className="mr-2 h-4 w-4" />
            Export
          </Button>
        </div>
      </div>

      {/* Application Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Total Applications</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-primary">24</div>
            <p className="text-xs text-muted-foreground">+3 this week</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Under Review</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-secondary">8</div>
            <p className="text-xs text-muted-foreground">33% of total</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Interviews</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-accent">5</div>
            <p className="text-xs text-muted-foreground">21% response rate</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Offers</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-primary">2</div>
            <p className="text-xs text-muted-foreground">8% success rate</p>
          </CardContent>
        </Card>
      </div>

      {/* Filters and Search */}
      <Card>
        <CardContent className="p-6">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <Input placeholder="Search applications..." className="pl-10" />
              </div>
            </div>
            <Select>
              <SelectTrigger className="w-full md:w-48">
                <SelectValue placeholder="Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Status</SelectItem>
                <SelectItem value="under_review">Under Review</SelectItem>
                <SelectItem value="interview_scheduled">Interview Scheduled</SelectItem>
                <SelectItem value="offer_received">Offer Received</SelectItem>
                <SelectItem value="rejected">Not Selected</SelectItem>
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger className="w-full md:w-48">
                <SelectValue placeholder="Date Applied" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Time</SelectItem>
                <SelectItem value="week">This Week</SelectItem>
                <SelectItem value="month">This Month</SelectItem>
                <SelectItem value="quarter">Last 3 Months</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {/* Applications Tabs */}
      <Tabs defaultValue="all" className="space-y-6">
        <TabsList>
          <TabsTrigger value="all">All Applications (24)</TabsTrigger>
          <TabsTrigger value="active">Active (13)</TabsTrigger>
          <TabsTrigger value="interviews">Interviews (5)</TabsTrigger>
          <TabsTrigger value="offers">Offers (2)</TabsTrigger>
          <TabsTrigger value="archived">Archived (4)</TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="space-y-4">
          {applications.map((application) => (
            <Card key={application.id} className="hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start justify-between">
                  <div className="flex items-start space-x-4 flex-1">
                    <img
                      src={application.logo || "/placeholder.svg"}
                      alt={application.company}
                      className="h-12 w-12 rounded-lg object-cover"
                    />

                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-2">
                        <h3 className="text-lg font-semibold text-foreground">{application.position}</h3>
                        <Badge variant={getStatusColor(application.status)}>{getStatusText(application.status)}</Badge>
                      </div>

                      <div className="flex items-center space-x-1 mb-2">
                        <Building2 className="h-4 w-4 text-muted-foreground" />
                        <span className="font-medium text-foreground">{application.company}</span>
                      </div>

                      <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-4">
                        <div className="flex items-center space-x-1">
                          <MapPin className="h-3 w-3" />
                          <span>{application.location}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Clock className="h-3 w-3" />
                          <span>{application.type}</span>
                        </div>
                        <span className="font-medium text-primary">{application.salary}</span>
                        <div className="flex items-center space-x-1">
                          <Calendar className="h-3 w-3" />
                          <span>Applied {new Date(application.appliedDate).toLocaleDateString()}</span>
                        </div>
                      </div>

                      {/* Progress Bar */}
                      <div className="mb-3">
                        <div className="flex items-center justify-between mb-2">
                          <span className="text-sm font-medium text-foreground">{application.stage}</span>
                          <span className="text-sm text-muted-foreground">{application.progress}%</span>
                        </div>
                        <Progress
                          value={application.progress}
                          className={`h-2 ${getProgressColor(application.status)}`}
                        />
                      </div>

                      <div className="flex items-center justify-between">
                        <p className="text-sm text-muted-foreground">{application.notes}</p>
                        <span className="text-xs text-muted-foreground">Updated {application.lastUpdate}</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col items-end space-y-2">
                    <Button variant="outline" size="sm">
                      <Eye className="mr-2 h-4 w-4" />
                      View Job
                    </Button>
                    {application.status === "interview_scheduled" && (
                      <Button size="sm">
                        <Calendar className="mr-2 h-4 w-4" />
                        View Interview
                      </Button>
                    )}
                    {application.status === "offer_received" && (
                      <Button size="sm">
                        <ExternalLink className="mr-2 h-4 w-4" />
                        View Offer
                      </Button>
                    )}
                    <Button variant="ghost" size="sm">
                      <MessageSquare className="mr-2 h-4 w-4" />
                      Message
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </TabsContent>
      </Tabs>

      {/* Application Timeline */}
      <Card>
        <CardHeader>
          <CardTitle>Application Activity</CardTitle>
          <CardDescription>Recent updates on your applications</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="flex items-center space-x-4 p-3 border-l-4 border-primary bg-primary/5 rounded-r">
              <Calendar className="h-5 w-5 text-primary" />
              <div>
                <p className="font-medium">Interview scheduled with StartupXYZ</p>
                <p className="text-sm text-muted-foreground">
                  Technical interview for React Developer position - 1 day ago
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-4 p-3 border-l-4 border-secondary bg-secondary/5 rounded-r">
              <Eye className="h-5 w-5 text-secondary" />
              <div>
                <p className="font-medium">Application viewed by TechCorp Inc.</p>
                <p className="text-sm text-muted-foreground">
                  Your application for Senior Frontend Developer was reviewed - 2 days ago
                </p>
              </div>
            </div>
            <div className="flex items-center space-x-4 p-3 border-l-4 border-accent bg-accent/5 rounded-r">
              <MessageSquare className="h-5 w-5 text-accent" />
              <div>
                <p className="font-medium">Message from InnovateTech recruiter</p>
                <p className="text-sm text-muted-foreground">
                  New message regarding your Senior React Developer application - 3 hours ago
                </p>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
