import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import {
  Search,
  Filter,
  MoreHorizontal,
  Eye,
  MessageSquare,
  Calendar,
  Download,
  Star,
  X,
  Check,
  Clock,
  MapPin,
  Briefcase,
} from "lucide-react"

export default function ApplicationsPage() {
  const applications = [
    {
      id: 1,
      name: "Sarah Johnson",
      email: "sarah.johnson@email.com",
      position: "Senior Frontend Developer",
      appliedDate: "2 hours ago",
      status: "new",
      rating: 4.5,
      location: "San Francisco, CA",
      experience: "5+ years",
      avatar: "/professional-woman-diverse.png",
      resumeUrl: "#",
      coverLetter: true,
    },
    {
      id: 2,
      name: "Michael Chen",
      email: "michael.chen@email.com",
      position: "Product Manager",
      appliedDate: "4 hours ago",
      status: "reviewing",
      rating: 4.2,
      location: "Remote",
      experience: "7+ years",
      avatar: "/professional-man.png",
      resumeUrl: "#",
      coverLetter: true,
    },
    {
      id: 3,
      name: "Emily Davis",
      email: "emily.davis@email.com",
      position: "UX Designer",
      appliedDate: "1 day ago",
      status: "shortlisted",
      rating: 4.8,
      location: "New York, NY",
      experience: "4+ years",
      avatar: "/professional-woman-designer.png",
      resumeUrl: "#",
      coverLetter: false,
    },
    {
      id: 4,
      name: "David Wilson",
      email: "david.wilson@email.com",
      position: "DevOps Engineer",
      appliedDate: "2 days ago",
      status: "interview",
      rating: 4.0,
      location: "Austin, TX",
      experience: "6+ years",
      avatar: "/professional-engineer.png",
      resumeUrl: "#",
      coverLetter: true,
    },
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "new":
        return "default"
      case "reviewing":
        return "secondary"
      case "shortlisted":
        return "outline"
      case "interview":
        return "default"
      case "rejected":
        return "destructive"
      default:
        return "outline"
    }
  }

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "new":
        return <Clock className="h-3 w-3" />
      case "reviewing":
        return <Eye className="h-3 w-3" />
      case "shortlisted":
        return <Star className="h-3 w-3" />
      case "interview":
        return <Calendar className="h-3 w-3" />
      case "rejected":
        return <X className="h-3 w-3" />
      default:
        return null
    }
  }

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Applications</h1>
          <p className="text-muted-foreground">Manage and review candidate applications</p>
        </div>
        <div className="flex items-center space-x-2">
          <Button variant="outline">
            <Download className="mr-2 h-4 w-4" />
            Export
          </Button>
          <Button variant="outline">
            <Filter className="mr-2 h-4 w-4" />
            Bulk Actions
          </Button>
        </div>
      </div>

      {/* Filters and Search */}
      <Card>
        <CardContent className="p-6">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <Input placeholder="Search candidates..." className="pl-10" />
              </div>
            </div>
            <Select>
              <SelectTrigger className="w-full md:w-48">
                <SelectValue placeholder="Job Position" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Positions</SelectItem>
                <SelectItem value="frontend">Frontend Developer</SelectItem>
                <SelectItem value="product">Product Manager</SelectItem>
                <SelectItem value="design">UX Designer</SelectItem>
                <SelectItem value="devops">DevOps Engineer</SelectItem>
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger className="w-full md:w-48">
                <SelectValue placeholder="Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Status</SelectItem>
                <SelectItem value="new">New</SelectItem>
                <SelectItem value="reviewing">Reviewing</SelectItem>
                <SelectItem value="shortlisted">Shortlisted</SelectItem>
                <SelectItem value="interview">Interview</SelectItem>
                <SelectItem value="rejected">Rejected</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {/* Applications Tabs */}
      <Tabs defaultValue="all" className="space-y-6">
        <TabsList>
          <TabsTrigger value="all">All Applications (4)</TabsTrigger>
          <TabsTrigger value="new">New (1)</TabsTrigger>
          <TabsTrigger value="reviewing">Reviewing (1)</TabsTrigger>
          <TabsTrigger value="shortlisted">Shortlisted (1)</TabsTrigger>
          <TabsTrigger value="interview">Interview (1)</TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="space-y-4">
          {applications.map((application) => (
            <Card key={application.id} className="hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start justify-between">
                  <div className="flex items-start space-x-4 flex-1">
                    <Avatar className="h-12 w-12">
                      <AvatarImage src={application.avatar || "/placeholder.svg"} />
                      <AvatarFallback>
                        {application.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>

                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-2">
                        <h3 className="text-lg font-semibold text-foreground">{application.name}</h3>
                        <Badge variant={getStatusColor(application.status)} className="flex items-center space-x-1">
                          {getStatusIcon(application.status)}
                          <span>{application.status}</span>
                        </Badge>
                      </div>

                      <p className="text-sm text-muted-foreground mb-2">{application.email}</p>

                      <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-3">
                        <div className="flex items-center space-x-1">
                          <Briefcase className="h-3 w-3" />
                          <span>{application.position}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <MapPin className="h-3 w-3" />
                          <span>{application.location}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Clock className="h-3 w-3" />
                          <span>{application.experience}</span>
                        </div>
                        <span>Applied {application.appliedDate}</span>
                      </div>

                      <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-1">
                          <Star className="h-4 w-4 text-yellow-500 fill-current" />
                          <span className="text-sm font-medium">{application.rating}</span>
                        </div>
                        {application.coverLetter && (
                          <Badge variant="outline" className="text-xs">
                            Cover Letter
                          </Badge>
                        )}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-2">
                    <Button variant="outline" size="sm">
                      <Eye className="mr-2 h-4 w-4" />
                      View Resume
                    </Button>
                    <Button variant="outline" size="sm">
                      <MessageSquare className="mr-2 h-4 w-4" />
                      Message
                    </Button>
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" size="sm">
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuItem>
                          <Check className="mr-2 h-4 w-4" />
                          Move to Shortlist
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <Calendar className="mr-2 h-4 w-4" />
                          Schedule Interview
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <Download className="mr-2 h-4 w-4" />
                          Download Resume
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                          <Star className="mr-2 h-4 w-4" />
                          Add to Talent Pool
                        </DropdownMenuItem>
                        <DropdownMenuItem className="text-destructive">
                          <X className="mr-2 h-4 w-4" />
                          Reject Application
                        </DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </TabsContent>
      </Tabs>

      {/* Pipeline Summary */}
      <div className="grid grid-cols-1 md:grid-cols-5 gap-4">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">New Applications</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-primary">24</div>
            <p className="text-xs text-muted-foreground">+6 this week</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Under Review</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-secondary">18</div>
            <p className="text-xs text-muted-foreground">-2 this week</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Shortlisted</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-accent">12</div>
            <p className="text-xs text-muted-foreground">+3 this week</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Interviews</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-primary">8</div>
            <p className="text-xs text-muted-foreground">+1 this week</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Offers Sent</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-secondary">3</div>
            <p className="text-xs text-muted-foreground">+1 this week</p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
