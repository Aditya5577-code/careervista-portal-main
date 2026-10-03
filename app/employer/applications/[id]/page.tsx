import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Separator } from "@/components/ui/separator"
import { Progress } from "@/components/ui/progress"
import { Textarea } from "@/components/ui/textarea"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import {
  ArrowLeft,
  Download,
  Eye,
  MessageSquare,
  Calendar,
  Star,
  MapPin,
  Mail,
  Phone,
  Linkedin,
  Github,
  ExternalLink,
  Clock,
  Briefcase,
  GraduationCap,
  Award,
  MoreHorizontal,
  Check,
  X,
  User,
  FileText,
  Send,
} from "lucide-react"
import Link from "next/link"

export default function ApplicationDetailPage({ params }: { params: { id: string } }) {
  const application = {
    id: params.id,
    candidate: {
      name: "Sarah Johnson",
      email: "sarah.johnson@email.com",
      phone: "+1 (555) 123-4567",
      location: "San Francisco, CA",
      avatar: "/professional-woman-diverse.png",
      linkedin: "linkedin.com/in/sarahjohnson",
      github: "github.com/sarahjohnson",
      portfolio: "sarahjohnson.dev",
    },
    job: {
      title: "Senior Frontend Developer",
      department: "Engineering",
      location: "San Francisco, CA",
    },
    application: {
      appliedDate: "2024-01-15",
      status: "interview_scheduled",
      stage: "Technical Interview",
      progress: 75,
      rating: 4.5,
      source: "Company Website",
      coverLetter: true,
      resumeUrl: "#",
    },
    experience: [
      {
        title: "Senior Frontend Developer",
        company: "Current Company",
        location: "San Francisco, CA",
        duration: "2022 - Present",
        description:
          "Leading frontend development for a team of 5 developers, building scalable React applications serving 1M+ users.",
      },
      {
        title: "Frontend Developer",
        company: "Previous Company",
        location: "Austin, TX",
        duration: "2020 - 2022",
        description:
          "Developed and maintained multiple web applications using React, TypeScript, and modern frontend tools.",
      },
    ],
    education: [
      {
        degree: "Bachelor of Science in Computer Science",
        school: "University of California, Berkeley",
        duration: "2016 - 2020",
        gpa: "3.8/4.0",
      },
    ],
    skills: [
      { name: "React", level: 90 },
      { name: "TypeScript", level: 85 },
      { name: "JavaScript", level: 95 },
      { name: "Next.js", level: 80 },
      { name: "Node.js", level: 70 },
      { name: "CSS/SCSS", level: 85 },
    ],
    timeline: [
      {
        date: "2024-01-15",
        action: "Application Submitted",
        description: "Candidate applied for Senior Frontend Developer position",
        type: "application",
      },
      {
        date: "2024-01-16",
        action: "Application Reviewed",
        description: "Initial screening completed by HR team",
        type: "review",
      },
      {
        date: "2024-01-18",
        action: "Phone Screen Scheduled",
        description: "Phone screening scheduled for Jan 20th at 2 PM",
        type: "interview",
      },
      {
        date: "2024-01-20",
        action: "Phone Screen Completed",
        description: "Positive feedback from phone screening",
        type: "interview",
      },
      {
        date: "2024-01-22",
        action: "Technical Interview Scheduled",
        description: "Technical interview scheduled for Jan 25th at 10 AM",
        type: "interview",
      },
    ],
    notes: [
      {
        id: 1,
        author: "John Smith",
        date: "2024-01-20",
        content: "Great communication skills during phone screen. Strong technical background in React and TypeScript.",
        type: "interview",
      },
      {
        id: 2,
        author: "Jane Doe",
        date: "2024-01-16",
        content:
          "Resume shows excellent progression and relevant experience. Portfolio demonstrates strong frontend skills.",
        type: "review",
      },
    ],
  }

  const pipelineStages = [
    { id: "applied", name: "Applied", progress: 25 },
    { id: "screening", name: "Screening", progress: 50 },
    { id: "interview", name: "Interview", progress: 75 },
    { id: "offer", name: "Offer", progress: 100 },
  ]

  const getTimelineIcon = (type: string) => {
    switch (type) {
      case "application":
        return <FileText className="h-4 w-4" />
      case "review":
        return <Eye className="h-4 w-4" />
      case "interview":
        return <Calendar className="h-4 w-4" />
      case "offer":
        return <Check className="h-4 w-4" />
      default:
        return <Clock className="h-4 w-4" />
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
            <h1 className="text-3xl font-bold text-foreground">{application.candidate.name}</h1>
            <p className="text-muted-foreground">Application for {application.job.title}</p>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <Button variant="outline">
            <Download className="mr-2 h-4 w-4" />
            Download Resume
          </Button>
          <Button variant="outline">
            <MessageSquare className="mr-2 h-4 w-4" />
            Send Message
          </Button>
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline">
                <MoreHorizontal className="h-4 w-4" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem>
                <Calendar className="mr-2 h-4 w-4" />
                Schedule Interview
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Star className="mr-2 h-4 w-4" />
                Add to Talent Pool
              </DropdownMenuItem>
              <DropdownMenuItem>
                <Check className="mr-2 h-4 w-4" />
                Move to Next Stage
              </DropdownMenuItem>
              <DropdownMenuItem className="text-destructive">
                <X className="mr-2 h-4 w-4" />
                Reject Application
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Main Content */}
        <div className="lg:col-span-2 space-y-6">
          {/* Candidate Overview */}
          <Card>
            <CardContent className="p-6">
              <div className="flex items-start space-x-4">
                <Avatar className="h-16 w-16">
                  <AvatarImage src={application.candidate.avatar || "/placeholder.svg"} />
                  <AvatarFallback>
                    {application.candidate.name
                      .split(" ")
                      .map((n) => n[0])
                      .join("")}
                  </AvatarFallback>
                </Avatar>
                <div className="flex-1">
                  <div className="flex items-center space-x-2 mb-2">
                    <h2 className="text-xl font-bold text-foreground">{application.candidate.name}</h2>
                    <div className="flex items-center space-x-1">
                      <Star className="h-4 w-4 text-yellow-500 fill-current" />
                      <span className="text-sm font-medium">{application.application.rating}</span>
                    </div>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center space-x-2">
                      <Mail className="h-4 w-4" />
                      <span>{application.candidate.email}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Phone className="h-4 w-4" />
                      <span>{application.candidate.phone}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <MapPin className="h-4 w-4" />
                      <span>{application.candidate.location}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Calendar className="h-4 w-4" />
                      <span>Applied {new Date(application.application.appliedDate).toLocaleDateString()}</span>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4 mt-3">
                    <a
                      href={`https://${application.candidate.linkedin}`}
                      className="flex items-center space-x-1 text-sm text-primary hover:underline"
                    >
                      <Linkedin className="h-4 w-4" />
                      <span>LinkedIn</span>
                    </a>
                    <a
                      href={`https://${application.candidate.github}`}
                      className="flex items-center space-x-1 text-sm text-primary hover:underline"
                    >
                      <Github className="h-4 w-4" />
                      <span>GitHub</span>
                    </a>
                    <a
                      href={`https://${application.candidate.portfolio}`}
                      className="flex items-center space-x-1 text-sm text-primary hover:underline"
                    >
                      <ExternalLink className="h-4 w-4" />
                      <span>Portfolio</span>
                    </a>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Candidate Details Tabs */}
          <Tabs defaultValue="resume" className="space-y-6">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="resume">Resume</TabsTrigger>
              <TabsTrigger value="cover-letter">Cover Letter</TabsTrigger>
              <TabsTrigger value="timeline">Timeline</TabsTrigger>
              <TabsTrigger value="notes">Notes</TabsTrigger>
            </TabsList>

            <TabsContent value="resume" className="space-y-6">
              {/* Experience */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Briefcase className="h-5 w-5" />
                    <span>Work Experience</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {application.experience.map((exp, index) => (
                    <div key={index} className="border-l-2 border-primary pl-4">
                      <h3 className="font-semibold text-foreground">{exp.title}</h3>
                      <p className="text-sm text-muted-foreground">
                        {exp.company} • {exp.location}
                      </p>
                      <p className="text-sm text-muted-foreground mb-2">{exp.duration}</p>
                      <p className="text-sm text-muted-foreground">{exp.description}</p>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Education */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <GraduationCap className="h-5 w-5" />
                    <span>Education</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {application.education.map((edu, index) => (
                    <div key={index} className="border-l-2 border-secondary pl-4">
                      <h3 className="font-semibold text-foreground">{edu.degree}</h3>
                      <p className="text-sm text-muted-foreground">{edu.school}</p>
                      <p className="text-sm text-muted-foreground">
                        {edu.duration} • GPA: {edu.gpa}
                      </p>
                    </div>
                  ))}
                </CardContent>
              </Card>

              {/* Skills */}
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2">
                    <Award className="h-5 w-5" />
                    <span>Skills</span>
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  {application.skills.map((skill, index) => (
                    <div key={index} className="space-y-2">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium">{skill.name}</span>
                        <span className="text-sm text-muted-foreground">{skill.level}%</span>
                      </div>
                      <Progress value={skill.level} className="h-2" />
                    </div>
                  ))}
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="cover-letter">
              <Card>
                <CardHeader>
                  <CardTitle>Cover Letter</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="prose prose-sm max-w-none">
                    <p className="text-muted-foreground leading-relaxed">Dear Hiring Manager,</p>
                    <p className="text-muted-foreground leading-relaxed">
                      I am writing to express my strong interest in the Senior Frontend Developer position at TechCorp
                      Inc. With over 5 years of experience in frontend development and a proven track record of building
                      scalable React applications, I am excited about the opportunity to contribute to your team.
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      In my current role at Current Company, I have led a team of 5 developers in building applications
                      that serve over 1 million users. My expertise in React, TypeScript, and modern frontend
                      technologies aligns perfectly with your requirements. I have successfully implemented performance
                      optimizations that improved load times by 40% and led the migration to a micro-frontend
                      architecture.
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      I am particularly drawn to TechCorp's commitment to innovation and user experience. Your recent
                      product launches demonstrate a focus on cutting-edge technology that I would love to be part of. I
                      believe my experience in building user-centric applications and my passion for clean, maintainable
                      code would make me a valuable addition to your team.
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      Thank you for considering my application. I look forward to discussing how my skills and
                      experience can contribute to TechCorp's continued success.
                    </p>
                    <p className="text-muted-foreground leading-relaxed">
                      Best regards,
                      <br />
                      Sarah Johnson
                    </p>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="timeline">
              <Card>
                <CardHeader>
                  <CardTitle>Application Timeline</CardTitle>
                  <CardDescription>Track the progress of this application</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {application.timeline.map((event, index) => (
                      <div key={index} className="flex items-start space-x-4">
                        <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center">
                          {getTimelineIcon(event.type)}
                        </div>
                        <div className="flex-1">
                          <div className="flex items-center justify-between">
                            <h3 className="font-medium text-foreground">{event.action}</h3>
                            <span className="text-sm text-muted-foreground">
                              {new Date(event.date).toLocaleDateString()}
                            </span>
                          </div>
                          <p className="text-sm text-muted-foreground">{event.description}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="notes">
              <div className="space-y-6">
                {/* Add Note */}
                <Card>
                  <CardHeader>
                    <CardTitle>Add Note</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-2">
                      <Label htmlFor="note-type">Note Type</Label>
                      <Select>
                        <SelectTrigger>
                          <SelectValue placeholder="Select note type" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="general">General</SelectItem>
                          <SelectItem value="interview">Interview Feedback</SelectItem>
                          <SelectItem value="review">Application Review</SelectItem>
                          <SelectItem value="reference">Reference Check</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="note-content">Note</Label>
                      <Textarea
                        id="note-content"
                        placeholder="Add your notes about this candidate..."
                        className="min-h-24"
                      />
                    </div>
                    <Button>
                      <Send className="mr-2 h-4 w-4" />
                      Add Note
                    </Button>
                  </CardContent>
                </Card>

                {/* Existing Notes */}
                <Card>
                  <CardHeader>
                    <CardTitle>Notes & Feedback</CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    {application.notes.map((note) => (
                      <div key={note.id} className="border border-border rounded-lg p-4">
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center space-x-2">
                            <User className="h-4 w-4 text-muted-foreground" />
                            <span className="font-medium text-foreground">{note.author}</span>
                            <Badge variant="outline" className="text-xs">
                              {note.type}
                            </Badge>
                          </div>
                          <span className="text-sm text-muted-foreground">
                            {new Date(note.date).toLocaleDateString()}
                          </span>
                        </div>
                        <p className="text-sm text-muted-foreground">{note.content}</p>
                      </div>
                    ))}
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
          </Tabs>
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          {/* Application Status */}
          <Card>
            <CardHeader>
              <CardTitle>Application Status</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm font-medium">Current Stage</span>
                <Badge variant="default">{application.application.stage}</Badge>
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">Progress</span>
                  <span className="text-sm font-medium">{application.application.progress}%</span>
                </div>
                <Progress value={application.application.progress} className="h-2" />
              </div>
              <div className="space-y-2">
                {pipelineStages.map((stage) => (
                  <div key={stage.id} className="flex items-center space-x-2">
                    <div
                      className={`w-3 h-3 rounded-full ${
                        stage.progress <= application.application.progress ? "bg-primary" : "bg-muted"
                      }`}
                    />
                    <span
                      className={`text-sm ${
                        stage.progress <= application.application.progress ? "text-foreground" : "text-muted-foreground"
                      }`}
                    >
                      {stage.name}
                    </span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          {/* Quick Actions */}
          <Card>
            <CardHeader>
              <CardTitle>Quick Actions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <Button className="w-full">
                <Calendar className="mr-2 h-4 w-4" />
                Schedule Interview
              </Button>
              <Button variant="outline" className="w-full bg-transparent">
                <MessageSquare className="mr-2 h-4 w-4" />
                Send Message
              </Button>
              <Button variant="outline" className="w-full bg-transparent">
                <Check className="mr-2 h-4 w-4" />
                Move to Next Stage
              </Button>
              <Separator />
              <Button variant="outline" className="w-full bg-transparent">
                <Star className="mr-2 h-4 w-4" />
                Add to Talent Pool
              </Button>
              <Button variant="destructive" className="w-full">
                <X className="mr-2 h-4 w-4" />
                Reject Application
              </Button>
            </CardContent>
          </Card>

          {/* Application Details */}
          <Card>
            <CardHeader>
              <CardTitle>Application Details</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm">
              <div className="flex justify-between">
                <span className="text-muted-foreground">Source:</span>
                <span className="font-medium">{application.application.source}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Applied:</span>
                <span className="font-medium">
                  {new Date(application.application.appliedDate).toLocaleDateString()}
                </span>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Rating:</span>
                <div className="flex items-center space-x-1">
                  <Star className="h-3 w-3 text-yellow-500 fill-current" />
                  <span className="font-medium">{application.application.rating}</span>
                </div>
              </div>
              <div className="flex justify-between">
                <span className="text-muted-foreground">Cover Letter:</span>
                <span className="font-medium">{application.application.coverLetter ? "Yes" : "No"}</span>
              </div>
            </CardContent>
          </Card>

          {/* Job Details */}
          <Card>
            <CardHeader>
              <CardTitle>Job Details</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm">
              <div>
                <span className="text-muted-foreground">Position:</span>
                <p className="font-medium">{application.job.title}</p>
              </div>
              <div>
                <span className="text-muted-foreground">Department:</span>
                <p className="font-medium">{application.job.department}</p>
              </div>
              <div>
                <span className="text-muted-foreground">Location:</span>
                <p className="font-medium">{application.job.location}</p>
              </div>
              <Button variant="outline" size="sm" className="w-full mt-3 bg-transparent">
                <Eye className="mr-2 h-4 w-4" />
                View Job Posting
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  )
}
