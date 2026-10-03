import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { MapPin, Mail, Phone, Calendar, Plus, Edit, Download, Upload, Star, ExternalLink } from "lucide-react"

export default function ProfilePage() {
  const skills = [
    { name: "React", level: 90, endorsed: 12 },
    { name: "TypeScript", level: 85, endorsed: 8 },
    { name: "Next.js", level: 80, endorsed: 6 },
    { name: "JavaScript", level: 95, endorsed: 15 },
    { name: "Tailwind CSS", level: 75, endorsed: 4 },
    { name: "Node.js", level: 70, endorsed: 5 },
  ]

  const experience = [
    {
      title: "Senior Frontend Developer",
      company: "Current Company",
      location: "San Francisco, CA",
      duration: "2022 - Present",
      description: "Leading frontend development for a team of 5 developers, building scalable React applications...",
    },
    {
      title: "Frontend Developer",
      company: "Previous Company",
      location: "Austin, TX",
      duration: "2020 - 2022",
      description:
        "Developed and maintained multiple web applications using React, TypeScript, and modern frontend tools...",
    },
  ]

  const education = [
    {
      degree: "Bachelor of Science in Computer Science",
      school: "University of California, Berkeley",
      duration: "2016 - 2020",
      gpa: "3.8/4.0",
    },
  ]

  const certifications = [
    {
      name: "AWS Certified Developer",
      issuer: "Amazon Web Services",
      date: "2023",
      credentialId: "AWS-123456",
    },
    {
      name: "React Developer Certification",
      issuer: "Meta",
      date: "2022",
      credentialId: "META-789012",
    },
  ]

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">My Profile</h1>
          <p className="text-muted-foreground">Manage your professional profile and preferences</p>
        </div>
        <div className="flex items-center space-x-2">
          <Button variant="outline">
            <Download className="mr-2 h-4 w-4" />
            Download Resume
          </Button>
          <Button>
            <Edit className="mr-2 h-4 w-4" />
            Edit Profile
          </Button>
        </div>
      </div>

      {/* Profile Completion */}
      <Card className="border-primary/20 bg-primary/5">
        <CardContent className="p-6">
          <div className="flex items-center justify-between mb-4">
            <div>
              <h3 className="font-semibold text-foreground">Profile Completion</h3>
              <p className="text-sm text-muted-foreground">85% complete - Add more skills to improve your visibility</p>
            </div>
            <Badge variant="secondary">85%</Badge>
          </div>
          <Progress value={85} className="h-2 mb-4" />
          <div className="flex flex-wrap gap-2">
            <Badge variant="outline" className="text-xs">
              + Add Portfolio
            </Badge>
            <Badge variant="outline" className="text-xs">
              + Add More Skills
            </Badge>
            <Badge variant="outline" className="text-xs">
              + Add Certifications
            </Badge>
          </div>
        </CardContent>
      </Card>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Profile Overview */}
        <div className="lg:col-span-1 space-y-6">
          <Card>
            <CardContent className="p-6 text-center">
              <Avatar className="h-24 w-24 mx-auto mb-4">
                <AvatarImage src="/professional-woman-diverse.png" />
                <AvatarFallback>SJ</AvatarFallback>
              </Avatar>
              <h2 className="text-xl font-bold text-foreground mb-1">Sarah Johnson</h2>
              <p className="text-muted-foreground mb-2">Senior Frontend Developer</p>
              <div className="flex items-center justify-center space-x-1 mb-4">
                <MapPin className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm text-muted-foreground">San Francisco, CA</span>
              </div>
              <div className="flex items-center justify-center space-x-1 mb-4">
                <Star className="h-4 w-4 text-yellow-500 fill-current" />
                <span className="text-sm font-medium">4.8 Profile Rating</span>
              </div>
              <Button variant="outline" size="sm" className="w-full bg-transparent">
                <Upload className="mr-2 h-4 w-4" />
                Update Photo
              </Button>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Contact Information</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex items-center space-x-3">
                <Mail className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm">sarah.johnson@email.com</span>
              </div>
              <div className="flex items-center space-x-3">
                <Phone className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm">+1 (555) 123-4567</span>
              </div>
              <div className="flex items-center space-x-3">
                <ExternalLink className="h-4 w-4 text-muted-foreground" />
                <span className="text-sm">linkedin.com/in/sarahjohnson</span>
              </div>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Job Preferences</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              <div>
                <Label className="text-sm font-medium">Desired Salary</Label>
                <p className="text-sm text-muted-foreground">$120k - $160k</p>
              </div>
              <div>
                <Label className="text-sm font-medium">Work Arrangement</Label>
                <p className="text-sm text-muted-foreground">Remote, Hybrid</p>
              </div>
              <div>
                <Label className="text-sm font-medium">Job Type</Label>
                <p className="text-sm text-muted-foreground">Full-time</p>
              </div>
              <div>
                <Label className="text-sm font-medium">Availability</Label>
                <p className="text-sm text-muted-foreground">Available in 2 weeks</p>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Profile Details */}
        <div className="lg:col-span-2">
          <Tabs defaultValue="overview" className="space-y-6">
            <TabsList className="grid w-full grid-cols-5">
              <TabsTrigger value="overview">Overview</TabsTrigger>
              <TabsTrigger value="experience">Experience</TabsTrigger>
              <TabsTrigger value="education">Education</TabsTrigger>
              <TabsTrigger value="skills">Skills</TabsTrigger>
              <TabsTrigger value="settings">Settings</TabsTrigger>
            </TabsList>

            <TabsContent value="overview" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Professional Summary</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-muted-foreground leading-relaxed">
                    Experienced Senior Frontend Developer with 5+ years of expertise in React, TypeScript, and modern
                    web technologies. Passionate about creating user-friendly interfaces and leading development teams.
                    Proven track record of delivering high-quality applications that serve millions of users. Looking
                    for opportunities to contribute to innovative projects and mentor junior developers.
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between">
                  <CardTitle>Recent Experience</CardTitle>
                  <Button variant="outline" size="sm">
                    <Plus className="mr-2 h-4 w-4" />
                    Add Experience
                  </Button>
                </CardHeader>
                <CardContent className="space-y-4">
                  {experience.slice(0, 2).map((exp, index) => (
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

              <Card>
                <CardHeader className="flex flex-row items-center justify-between">
                  <CardTitle>Top Skills</CardTitle>
                  <Button variant="outline" size="sm">
                    <Plus className="mr-2 h-4 w-4" />
                    Add Skill
                  </Button>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-2 gap-4">
                    {skills.slice(0, 4).map((skill, index) => (
                      <div key={index} className="space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="text-sm font-medium">{skill.name}</span>
                          <span className="text-xs text-muted-foreground">{skill.endorsed} endorsements</span>
                        </div>
                        <Progress value={skill.level} className="h-2" />
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="experience" className="space-y-6">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between">
                  <CardTitle>Work Experience</CardTitle>
                  <Button>
                    <Plus className="mr-2 h-4 w-4" />
                    Add Experience
                  </Button>
                </CardHeader>
                <CardContent className="space-y-6">
                  {experience.map((exp, index) => (
                    <div key={index} className="border border-border rounded-lg p-4">
                      <div className="flex items-start justify-between mb-3">
                        <div>
                          <h3 className="font-semibold text-foreground">{exp.title}</h3>
                          <p className="text-muted-foreground">{exp.company}</p>
                          <div className="flex items-center space-x-4 text-sm text-muted-foreground mt-1">
                            <div className="flex items-center space-x-1">
                              <MapPin className="h-3 w-3" />
                              <span>{exp.location}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <Calendar className="h-3 w-3" />
                              <span>{exp.duration}</span>
                            </div>
                          </div>
                        </div>
                        <Button variant="ghost" size="sm">
                          <Edit className="h-4 w-4" />
                        </Button>
                      </div>
                      <p className="text-sm text-muted-foreground">{exp.description}</p>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="education" className="space-y-6">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between">
                  <CardTitle>Education</CardTitle>
                  <Button>
                    <Plus className="mr-2 h-4 w-4" />
                    Add Education
                  </Button>
                </CardHeader>
                <CardContent className="space-y-4">
                  {education.map((edu, index) => (
                    <div key={index} className="border border-border rounded-lg p-4">
                      <div className="flex items-start justify-between">
                        <div>
                          <h3 className="font-semibold text-foreground">{edu.degree}</h3>
                          <p className="text-muted-foreground">{edu.school}</p>
                          <div className="flex items-center space-x-4 text-sm text-muted-foreground mt-1">
                            <span>{edu.duration}</span>
                            <span>GPA: {edu.gpa}</span>
                          </div>
                        </div>
                        <Button variant="ghost" size="sm">
                          <Edit className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="flex flex-row items-center justify-between">
                  <CardTitle>Certifications</CardTitle>
                  <Button>
                    <Plus className="mr-2 h-4 w-4" />
                    Add Certification
                  </Button>
                </CardHeader>
                <CardContent className="space-y-4">
                  {certifications.map((cert, index) => (
                    <div key={index} className="border border-border rounded-lg p-4">
                      <div className="flex items-start justify-between">
                        <div>
                          <h3 className="font-semibold text-foreground">{cert.name}</h3>
                          <p className="text-muted-foreground">{cert.issuer}</p>
                          <div className="flex items-center space-x-4 text-sm text-muted-foreground mt-1">
                            <span>Issued: {cert.date}</span>
                            <span>ID: {cert.credentialId}</span>
                          </div>
                        </div>
                        <Button variant="ghost" size="sm">
                          <ExternalLink className="h-4 w-4" />
                        </Button>
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="skills" className="space-y-6">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between">
                  <CardTitle>Technical Skills</CardTitle>
                  <Button>
                    <Plus className="mr-2 h-4 w-4" />
                    Add Skill
                  </Button>
                </CardHeader>
                <CardContent className="space-y-4">
                  {skills.map((skill, index) => (
                    <div key={index} className="border border-border rounded-lg p-4">
                      <div className="flex items-center justify-between mb-2">
                        <h3 className="font-medium text-foreground">{skill.name}</h3>
                        <div className="flex items-center space-x-2">
                          <Badge variant="secondary" className="text-xs">
                            {skill.endorsed} endorsements
                          </Badge>
                          <Button variant="ghost" size="sm">
                            <Edit className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                      <div className="space-y-2">
                        <div className="flex items-center justify-between">
                          <span className="text-sm text-muted-foreground">Proficiency</span>
                          <span className="text-sm font-medium">{skill.level}%</span>
                        </div>
                        <Progress value={skill.level} className="h-2" />
                      </div>
                    </div>
                  ))}
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="settings" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Profile Visibility</CardTitle>
                  <CardDescription>Control who can see your profile and contact you</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="visibility">Profile Visibility</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select visibility" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="public">Public - Visible to all employers</SelectItem>
                        <SelectItem value="limited">Limited - Only to employers I apply to</SelectItem>
                        <SelectItem value="private">Private - Not visible to employers</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Job Preferences</CardTitle>
                  <CardDescription>Set your job search preferences and availability</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="salary-min">Minimum Salary</Label>
                      <Input id="salary-min" placeholder="$120,000" />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="salary-max">Maximum Salary</Label>
                      <Input id="salary-max" placeholder="$160,000" />
                    </div>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="job-type">Preferred Job Type</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select job type" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="full-time">Full-time</SelectItem>
                        <SelectItem value="part-time">Part-time</SelectItem>
                        <SelectItem value="contract">Contract</SelectItem>
                        <SelectItem value="freelance">Freelance</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="work-arrangement">Work Arrangement</Label>
                    <Select>
                      <SelectTrigger>
                        <SelectValue placeholder="Select arrangement" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="remote">Remote</SelectItem>
                        <SelectItem value="hybrid">Hybrid</SelectItem>
                        <SelectItem value="onsite">On-site</SelectItem>
                        <SelectItem value="flexible">Flexible</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  )
}
