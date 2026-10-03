import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import {
  Calendar,
  Clock,
  Video,
  MapPin,
  Plus,
  Search,
  Filter,
  Users,
  MessageSquare,
  Edit,
  Trash2,
  ExternalLink,
} from "lucide-react"

export default function InterviewsPage() {
  const interviews = [
    {
      id: 1,
      candidate: {
        name: "Sarah Johnson",
        email: "sarah.johnson@email.com",
        avatar: "/professional-woman-diverse.png",
      },
      position: "Senior Frontend Developer",
      type: "Technical Interview",
      date: "2024-01-25",
      time: "10:00 AM",
      duration: "60 minutes",
      location: "Conference Room A",
      interviewer: "John Smith",
      status: "scheduled",
      meetingLink: "https://meet.google.com/abc-defg-hij",
    },
    {
      id: 2,
      candidate: {
        name: "Michael Chen",
        email: "michael.chen@email.com",
        avatar: "/professional-man.png",
      },
      position: "Product Manager",
      type: "Phone Screen",
      date: "2024-01-24",
      time: "2:00 PM",
      duration: "30 minutes",
      location: "Remote",
      interviewer: "Jane Doe",
      status: "completed",
      meetingLink: "https://zoom.us/j/123456789",
    },
    {
      id: 3,
      candidate: {
        name: "Emily Davis",
        email: "emily.davis@email.com",
        avatar: "/professional-woman-designer.png",
      },
      position: "UX Designer",
      type: "Portfolio Review",
      date: "2024-01-26",
      time: "3:30 PM",
      duration: "45 minutes",
      location: "Design Studio",
      interviewer: "Alex Wilson",
      status: "scheduled",
      meetingLink: null,
    },
    {
      id: 4,
      candidate: {
        name: "David Wilson",
        email: "david.wilson@email.com",
        avatar: "/professional-engineer.png",
      },
      position: "DevOps Engineer",
      type: "Final Interview",
      date: "2024-01-23",
      time: "11:00 AM",
      duration: "90 minutes",
      location: "Conference Room B",
      interviewer: "Sarah Miller",
      status: "cancelled",
      meetingLink: null,
    },
  ]

  const upcomingInterviews = interviews.filter((i) => i.status === "scheduled")
  const completedInterviews = interviews.filter((i) => i.status === "completed")
  const cancelledInterviews = interviews.filter((i) => i.status === "cancelled")

  const getStatusColor = (status: string) => {
    switch (status) {
      case "scheduled":
        return "default"
      case "completed":
        return "secondary"
      case "cancelled":
        return "destructive"
      default:
        return "outline"
    }
  }

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "Phone Screen":
        return <MessageSquare className="h-4 w-4" />
      case "Technical Interview":
        return <Users className="h-4 w-4" />
      case "Portfolio Review":
        return <ExternalLink className="h-4 w-4" />
      case "Final Interview":
        return <Users className="h-4 w-4" />
      default:
        return <Calendar className="h-4 w-4" />
    }
  }

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Interviews</h1>
          <p className="text-muted-foreground">Manage and schedule candidate interviews</p>
        </div>
        <Button>
          <Plus className="mr-2 h-4 w-4" />
          Schedule Interview
        </Button>
      </div>

      {/* Interview Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Today's Interviews</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-primary">3</div>
            <p className="text-xs text-muted-foreground">2 scheduled, 1 completed</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">This Week</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-secondary">12</div>
            <p className="text-xs text-muted-foreground">8 scheduled, 4 completed</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Completion Rate</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-accent">92%</div>
            <p className="text-xs text-muted-foreground">This month</p>
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="pb-2">
            <CardTitle className="text-sm font-medium">Avg Duration</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold text-primary">52min</div>
            <p className="text-xs text-muted-foreground">Across all interviews</p>
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
                <Input placeholder="Search interviews..." className="pl-10" />
              </div>
            </div>
            <Select>
              <SelectTrigger className="w-full md:w-48">
                <SelectValue placeholder="Interview Type" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Types</SelectItem>
                <SelectItem value="phone">Phone Screen</SelectItem>
                <SelectItem value="technical">Technical Interview</SelectItem>
                <SelectItem value="portfolio">Portfolio Review</SelectItem>
                <SelectItem value="final">Final Interview</SelectItem>
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger className="w-full md:w-48">
                <SelectValue placeholder="Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Status</SelectItem>
                <SelectItem value="scheduled">Scheduled</SelectItem>
                <SelectItem value="completed">Completed</SelectItem>
                <SelectItem value="cancelled">Cancelled</SelectItem>
              </SelectContent>
            </Select>
            <Button variant="outline">
              <Filter className="mr-2 h-4 w-4" />
              More Filters
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Interviews Tabs */}
      <Tabs defaultValue="upcoming" className="space-y-6">
        <TabsList>
          <TabsTrigger value="upcoming">Upcoming ({upcomingInterviews.length})</TabsTrigger>
          <TabsTrigger value="completed">Completed ({completedInterviews.length})</TabsTrigger>
          <TabsTrigger value="cancelled">Cancelled ({cancelledInterviews.length})</TabsTrigger>
          <TabsTrigger value="all">All Interviews ({interviews.length})</TabsTrigger>
        </TabsList>

        <TabsContent value="upcoming" className="space-y-4">
          {upcomingInterviews.map((interview) => (
            <Card key={interview.id} className="hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start justify-between">
                  <div className="flex items-start space-x-4 flex-1">
                    <Avatar className="h-12 w-12">
                      <AvatarImage src={interview.candidate.avatar || "/placeholder.svg"} />
                      <AvatarFallback>
                        {interview.candidate.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>

                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-2">
                        <h3 className="text-lg font-semibold text-foreground">{interview.candidate.name}</h3>
                        <Badge variant={getStatusColor(interview.status)}>{interview.status}</Badge>
                      </div>

                      <p className="text-sm text-muted-foreground mb-1">{interview.position}</p>
                      <p className="text-sm text-muted-foreground mb-3">{interview.candidate.email}</p>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center space-x-2">
                          {getTypeIcon(interview.type)}
                          <span>{interview.type}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Calendar className="h-4 w-4" />
                          <span>{new Date(interview.date).toLocaleDateString()}</span>
                        </div>
                        <div className="flex items-center space-x-2">
                          <Clock className="h-4 w-4" />
                          <span>
                            {interview.time} ({interview.duration})
                          </span>
                        </div>
                        <div className="flex items-center space-x-2">
                          {interview.meetingLink ? <Video className="h-4 w-4" /> : <MapPin className="h-4 w-4" />}
                          <span>{interview.location}</span>
                        </div>
                      </div>

                      <div className="mt-3">
                        <span className="text-sm text-muted-foreground">Interviewer: </span>
                        <span className="text-sm font-medium">{interview.interviewer}</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col items-end space-y-2">
                    {interview.meetingLink && (
                      <Button size="sm">
                        <Video className="mr-2 h-4 w-4" />
                        Join Meeting
                      </Button>
                    )}
                    <Button variant="outline" size="sm">
                      <Edit className="mr-2 h-4 w-4" />
                      Edit
                    </Button>
                    <Button variant="outline" size="sm">
                      <MessageSquare className="mr-2 h-4 w-4" />
                      Message
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </TabsContent>

        <TabsContent value="completed" className="space-y-4">
          {completedInterviews.map((interview) => (
            <Card key={interview.id} className="hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start justify-between">
                  <div className="flex items-start space-x-4 flex-1">
                    <Avatar className="h-12 w-12">
                      <AvatarImage src={interview.candidate.avatar || "/placeholder.svg"} />
                      <AvatarFallback>
                        {interview.candidate.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>

                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-2">
                        <h3 className="text-lg font-semibold text-foreground">{interview.candidate.name}</h3>
                        <Badge variant={getStatusColor(interview.status)}>{interview.status}</Badge>
                      </div>

                      <p className="text-sm text-muted-foreground mb-1">{interview.position}</p>
                      <p className="text-sm text-muted-foreground mb-3">{interview.type}</p>

                      <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                        <div className="flex items-center space-x-1">
                          <Calendar className="h-3 w-3" />
                          <span>{new Date(interview.date).toLocaleDateString()}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Clock className="h-3 w-3" />
                          <span>{interview.time}</span>
                        </div>
                        <span>Interviewer: {interview.interviewer}</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-2">
                    <Button variant="outline" size="sm">
                      View Feedback
                    </Button>
                    <Button variant="outline" size="sm">
                      <MessageSquare className="mr-2 h-4 w-4" />
                      Message
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </TabsContent>

        <TabsContent value="cancelled" className="space-y-4">
          {cancelledInterviews.map((interview) => (
            <Card key={interview.id} className="hover:shadow-md transition-shadow opacity-75">
              <CardContent className="p-6">
                <div className="flex items-start justify-between">
                  <div className="flex items-start space-x-4 flex-1">
                    <Avatar className="h-12 w-12">
                      <AvatarImage src={interview.candidate.avatar || "/placeholder.svg"} />
                      <AvatarFallback>
                        {interview.candidate.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>

                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-2">
                        <h3 className="text-lg font-semibold text-foreground">{interview.candidate.name}</h3>
                        <Badge variant={getStatusColor(interview.status)}>{interview.status}</Badge>
                      </div>

                      <p className="text-sm text-muted-foreground mb-1">{interview.position}</p>
                      <p className="text-sm text-muted-foreground mb-3">{interview.type}</p>

                      <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                        <div className="flex items-center space-x-1">
                          <Calendar className="h-3 w-3" />
                          <span>{new Date(interview.date).toLocaleDateString()}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Clock className="h-3 w-3" />
                          <span>{interview.time}</span>
                        </div>
                        <span>Interviewer: {interview.interviewer}</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-2">
                    <Button variant="outline" size="sm">
                      Reschedule
                    </Button>
                    <Button variant="ghost" size="sm">
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </TabsContent>

        <TabsContent value="all" className="space-y-4">
          {interviews.map((interview) => (
            <Card key={interview.id} className="hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start justify-between">
                  <div className="flex items-start space-x-4 flex-1">
                    <Avatar className="h-12 w-12">
                      <AvatarImage src={interview.candidate.avatar || "/placeholder.svg"} />
                      <AvatarFallback>
                        {interview.candidate.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>

                    <div className="flex-1">
                      <div className="flex items-center space-x-2 mb-2">
                        <h3 className="text-lg font-semibold text-foreground">{interview.candidate.name}</h3>
                        <Badge variant={getStatusColor(interview.status)}>{interview.status}</Badge>
                      </div>

                      <p className="text-sm text-muted-foreground mb-1">{interview.position}</p>
                      <p className="text-sm text-muted-foreground mb-3">{interview.type}</p>

                      <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                        <div className="flex items-center space-x-1">
                          <Calendar className="h-3 w-3" />
                          <span>{new Date(interview.date).toLocaleDateString()}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Clock className="h-3 w-3" />
                          <span>{interview.time}</span>
                        </div>
                        <span>Interviewer: {interview.interviewer}</span>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center space-x-2">
                    {interview.status === "scheduled" && interview.meetingLink && (
                      <Button size="sm">
                        <Video className="mr-2 h-4 w-4" />
                        Join Meeting
                      </Button>
                    )}
                    <Button variant="outline" size="sm">
                      <Edit className="mr-2 h-4 w-4" />
                      Edit
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </TabsContent>
      </Tabs>
    </div>
  )
}
