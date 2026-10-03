import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Checkbox } from "@/components/ui/checkbox"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { ArrowLeft, Check, X, Calendar, MessageSquare, Download, Star, Filter } from "lucide-react"
import Link from "next/link"

export default function BulkActionsPage() {
  const applications = [
    {
      id: 1,
      candidate: {
        name: "Sarah Johnson",
        email: "sarah.johnson@email.com",
        avatar: "/professional-woman-diverse.png",
      },
      position: "Senior Frontend Developer",
      appliedDate: "2024-01-15",
      status: "interview_scheduled",
      rating: 4.5,
      selected: false,
    },
    {
      id: 2,
      candidate: {
        name: "Michael Chen",
        email: "michael.chen@email.com",
        avatar: "/professional-man.png",
      },
      position: "Product Manager",
      appliedDate: "2024-01-10",
      status: "under_review",
      rating: 4.2,
      selected: false,
    },
    {
      id: 3,
      candidate: {
        name: "Emily Davis",
        email: "emily.davis@email.com",
        avatar: "/professional-woman-designer.png",
      },
      position: "UX Designer",
      appliedDate: "2024-01-12",
      status: "shortlisted",
      rating: 4.8,
      selected: false,
    },
    {
      id: 4,
      candidate: {
        name: "David Wilson",
        email: "david.wilson@email.com",
        avatar: "/professional-engineer.png",
      },
      position: "DevOps Engineer",
      appliedDate: "2024-01-08",
      status: "new",
      rating: 4.0,
      selected: false,
    },
  ]

  const bulkActions = [
    {
      id: "move_stage",
      name: "Move to Stage",
      description: "Move selected applications to a specific pipeline stage",
      icon: Check,
      options: [
        { value: "screening", label: "Screening" },
        { value: "interview", label: "Interview" },
        { value: "offer", label: "Offer" },
        { value: "rejected", label: "Rejected" },
      ],
    },
    {
      id: "schedule_interview",
      name: "Schedule Interviews",
      description: "Bulk schedule interviews for selected candidates",
      icon: Calendar,
      options: [],
    },
    {
      id: "send_message",
      name: "Send Message",
      description: "Send a message to multiple candidates at once",
      icon: MessageSquare,
      options: [],
    },
    {
      id: "add_to_talent_pool",
      name: "Add to Talent Pool",
      description: "Add selected candidates to your talent pool",
      icon: Star,
      options: [],
    },
    {
      id: "export_data",
      name: "Export Data",
      description: "Export selected applications to CSV",
      icon: Download,
      options: [
        { value: "basic", label: "Basic Information" },
        { value: "detailed", label: "Detailed Report" },
        { value: "custom", label: "Custom Fields" },
      ],
    },
    {
      id: "send_rejection",
      name: "Send Rejection",
      description: "Send rejection emails to selected candidates",
      icon: X,
      options: [
        { value: "standard", label: "Standard Rejection" },
        { value: "feedback", label: "With Feedback" },
        { value: "future", label: "Keep for Future" },
      ],
    },
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "new":
        return "default"
      case "under_review":
        return "secondary"
      case "shortlisted":
        return "outline"
      case "interview_scheduled":
        return "default"
      case "rejected":
        return "destructive"
      default:
        return "outline"
    }
  }

  const getStatusText = (status: string) => {
    switch (status) {
      case "new":
        return "New"
      case "under_review":
        return "Under Review"
      case "shortlisted":
        return "Shortlisted"
      case "interview_scheduled":
        return "Interview Scheduled"
      case "rejected":
        return "Rejected"
      default:
        return "Applied"
    }
  }

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="sm" asChild>
            <Link href="/employer/applications">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Applications
            </Link>
          </Button>
          <div>
            <h1 className="text-3xl font-bold text-foreground">Bulk Actions</h1>
            <p className="text-muted-foreground">Perform actions on multiple applications at once</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Applications List */}
        <div className="lg:col-span-2 space-y-6">
          {/* Selection Summary */}
          <Card>
            <CardContent className="p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center space-x-4">
                  <Checkbox />
                  <span className="text-sm font-medium">Select All (4 applications)</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Badge variant="secondary">0 selected</Badge>
                  <Button variant="outline" size="sm">
                    <Filter className="mr-2 h-4 w-4" />
                    Filter
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Applications */}
          <div className="space-y-4">
            {applications.map((application) => (
              <Card key={application.id} className="hover:shadow-md transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <Checkbox className="mt-1" />
                    <Avatar className="h-12 w-12">
                      <AvatarImage src={application.candidate.avatar || "/placeholder.svg"} />
                      <AvatarFallback>
                        {application.candidate.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </AvatarFallback>
                    </Avatar>
                    <div className="flex-1">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="font-semibold text-foreground">{application.candidate.name}</h3>
                        <Badge variant={getStatusColor(application.status)}>{getStatusText(application.status)}</Badge>
                      </div>
                      <p className="text-sm text-muted-foreground mb-1">{application.position}</p>
                      <p className="text-sm text-muted-foreground mb-2">{application.candidate.email}</p>
                      <div className="flex items-center justify-between">
                        <span className="text-xs text-muted-foreground">
                          Applied {new Date(application.appliedDate).toLocaleDateString()}
                        </span>
                        <div className="flex items-center space-x-1">
                          <Star className="h-3 w-3 text-yellow-500 fill-current" />
                          <span className="text-sm font-medium">{application.rating}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Load More */}
          <div className="text-center">
            <Button variant="outline">Load More Applications</Button>
          </div>
        </div>

        {/* Bulk Actions Sidebar */}
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Available Actions</CardTitle>
              <CardDescription>Select applications to enable bulk actions</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {bulkActions.map((action) => (
                <div key={action.id} className="border border-border rounded-lg p-4 opacity-50">
                  <div className="flex items-start space-x-3">
                    <action.icon className="h-5 w-5 text-muted-foreground mt-0.5" />
                    <div className="flex-1">
                      <h3 className="font-medium text-foreground mb-1">{action.name}</h3>
                      <p className="text-sm text-muted-foreground mb-3">{action.description}</p>
                      {action.options.length > 0 && (
                        <Select disabled>
                          <SelectTrigger className="w-full">
                            <SelectValue placeholder="Select option" />
                          </SelectTrigger>
                          <SelectContent>
                            {action.options.map((option) => (
                              <SelectItem key={option.value} value={option.value}>
                                {option.label}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      )}
                      <Button size="sm" className="w-full mt-2" disabled>
                        Execute Action
                      </Button>
                    </div>
                  </div>
                </div>
              ))}
            </CardContent>
          </Card>

          {/* Action History */}
          <Card>
            <CardHeader>
              <CardTitle>Recent Bulk Actions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="text-sm">
                <div className="flex items-center justify-between mb-1">
                  <span className="font-medium">Moved to Interview</span>
                  <span className="text-muted-foreground">2 hours ago</span>
                </div>
                <p className="text-muted-foreground">5 applications moved to interview stage</p>
              </div>
              <div className="text-sm">
                <div className="flex items-center justify-between mb-1">
                  <span className="font-medium">Sent Rejection Emails</span>
                  <span className="text-muted-foreground">1 day ago</span>
                </div>
                <p className="text-muted-foreground">12 candidates notified of rejection</p>
              </div>
              <div className="text-sm">
                <div className="flex items-center justify-between mb-1">
                  <span className="font-medium">Exported Data</span>
                  <span className="text-muted-foreground">3 days ago</span>
                </div>
                <p className="text-muted-foreground">25 applications exported to CSV</p>
              </div>
            </CardContent>
          </Card>

          {/* Tips */}
          <Card>
            <CardHeader>
              <CardTitle>Tips</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2 text-sm text-muted-foreground">
              <p>• Use filters to narrow down applications before bulk actions</p>
              <p>• Preview actions before executing to avoid mistakes</p>
              <p>• Bulk rejection emails can be customized with feedback</p>
              <p>• Export data regularly for backup and reporting</p>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
