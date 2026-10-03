"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Checkbox } from "@/components/ui/checkbox"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Progress } from "@/components/ui/progress"
import { Separator } from "@/components/ui/separator"
import {
  ArrowLeft,
  ArrowRight,
  Save,
  Eye,
  Send,
  Copy,
  Calendar,
  Upload,
  Plus,
  X,
  MapPin,
  DollarSign,
  Briefcase,
} from "lucide-react"
import Link from "next/link"

export default function NewJobPage() {
  const [currentStep, setCurrentStep] = useState(1)
  const [jobData, setJobData] = useState({
    title: "",
    department: "",
    location: "",
    workType: "",
    employmentType: "",
    salaryMin: "",
    salaryMax: "",
    description: "",
    requirements: "",
    benefits: "",
    skills: [],
    experience: "",
    education: "",
    applicationDeadline: "",
    startDate: "",
    isRemote: false,
    isUrgent: false,
    isFeatured: false,
  })

  const steps = [
    { id: 1, title: "Basic Information", description: "Job title, department, and location" },
    { id: 2, title: "Job Details", description: "Description, requirements, and qualifications" },
    { id: 3, title: "Compensation", description: "Salary, benefits, and perks" },
    { id: 4, title: "Application Settings", description: "Deadlines and application process" },
    { id: 5, title: "Review & Publish", description: "Preview and publish your job" },
  ]

  const jobTemplates = [
    {
      id: 1,
      title: "Frontend Developer",
      department: "Engineering",
      description: "We're looking for a talented Frontend Developer to join our team...",
      skills: ["React", "JavaScript", "CSS", "HTML"],
    },
    {
      id: 2,
      title: "Product Manager",
      department: "Product",
      description: "Seeking an experienced Product Manager to drive product strategy...",
      skills: ["Product Strategy", "Analytics", "User Research", "Agile"],
    },
    {
      id: 3,
      title: "UX Designer",
      department: "Design",
      description: "Join our design team as a UX Designer to create amazing user experiences...",
      skills: ["Figma", "User Research", "Prototyping", "Design Systems"],
    },
  ]

  const progressPercentage = (currentStep / steps.length) * 100

  const nextStep = () => {
    if (currentStep < steps.length) {
      setCurrentStep(currentStep + 1)
    }
  }

  const prevStep = () => {
    if (currentStep > 1) {
      setCurrentStep(currentStep - 1)
    }
  }

  const handleInputChange = (field: string, value: any) => {
    setJobData((prev) => ({ ...prev, [field]: value }))
  }

  const addSkill = (skill: string) => {
    if (skill && !jobData.skills.includes(skill)) {
      setJobData((prev) => ({ ...prev, skills: [...prev.skills, skill] }))
    }
  }

  const removeSkill = (skill: string) => {
    setJobData((prev) => ({ ...prev, skills: prev.skills.filter((s) => s !== skill) }))
  }

  const useTemplate = (template: any) => {
    setJobData((prev) => ({
      ...prev,
      title: template.title,
      department: template.department,
      description: template.description,
      skills: template.skills,
    }))
  }

  const handleTemplateClick = (template: any) => {
    useTemplate(template)
  }

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div className="flex items-center space-x-4">
          <Button variant="ghost" size="sm" asChild>
            <Link href="/employer/jobs">
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Jobs
            </Link>
          </Button>
          <div>
            <h1 className="text-3xl font-bold text-foreground">Post New Job</h1>
            <p className="text-muted-foreground">Create a new job posting to attract top talent</p>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <Button variant="outline">
            <Save className="mr-2 h-4 w-4" />
            Save Draft
          </Button>
          <Button variant="outline">
            <Eye className="mr-2 h-4 w-4" />
            Preview
          </Button>
        </div>
      </div>

      {/* Progress Bar */}
      <Card>
        <CardContent className="p-6">
          <div className="flex items-center justify-between mb-4">
            <span className="text-sm font-medium">
              Step {currentStep} of {steps.length}
            </span>
            <span className="text-sm text-muted-foreground">{Math.round(progressPercentage)}% Complete</span>
          </div>
          <Progress value={progressPercentage} className="h-2 mb-4" />
          <div className="flex justify-between">
            {steps.map((step) => (
              <div key={step.id} className="flex flex-col items-center text-center max-w-32">
                <div
                  className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium mb-2 ${
                    step.id <= currentStep ? "bg-primary text-primary-foreground" : "bg-muted text-muted-foreground"
                  }`}
                >
                  {step.id}
                </div>
                <div className="text-xs font-medium">{step.title}</div>
                <div className="text-xs text-muted-foreground">{step.description}</div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Job Templates (Step 1 only) */}
      {currentStep === 1 && (
        <Card>
          <CardHeader>
            <CardTitle>Quick Start with Templates</CardTitle>
            <CardDescription>Choose a template to get started quickly, or create from scratch</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {jobTemplates.map((template) => (
                <div
                  key={template.id}
                  className="border border-border rounded-lg p-4 hover:shadow-md transition-shadow cursor-pointer"
                  onClick={() => handleTemplateClick(template)}
                >
                  <h3 className="font-semibold text-foreground mb-2">{template.title}</h3>
                  <p className="text-sm text-muted-foreground mb-3">{template.department}</p>
                  <div className="flex flex-wrap gap-1 mb-3">
                    {template.skills.slice(0, 3).map((skill) => (
                      <Badge key={skill} variant="secondary" className="text-xs">
                        {skill}
                      </Badge>
                    ))}
                  </div>
                  <Button variant="outline" size="sm" className="w-full bg-transparent">
                    <Copy className="mr-2 h-4 w-4" />
                    Use Template
                  </Button>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      {/* Form Steps */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2">
          {/* Step 1: Basic Information */}
          {currentStep === 1 && (
            <Card>
              <CardHeader>
                <CardTitle>Basic Information</CardTitle>
                <CardDescription>Start with the essential details about your job opening</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="title">Job Title *</Label>
                    <Input
                      id="title"
                      placeholder="e.g. Senior Frontend Developer"
                      value={jobData.title}
                      onChange={(e) => handleInputChange("title", e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="department">Department *</Label>
                    <Select
                      value={jobData.department}
                      onValueChange={(value) => handleInputChange("department", value)}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select department" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="engineering">Engineering</SelectItem>
                        <SelectItem value="product">Product</SelectItem>
                        <SelectItem value="design">Design</SelectItem>
                        <SelectItem value="marketing">Marketing</SelectItem>
                        <SelectItem value="sales">Sales</SelectItem>
                        <SelectItem value="hr">Human Resources</SelectItem>
                        <SelectItem value="finance">Finance</SelectItem>
                        <SelectItem value="operations">Operations</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="location">Location *</Label>
                    <Input
                      id="location"
                      placeholder="e.g. San Francisco, CA"
                      value={jobData.location}
                      onChange={(e) => handleInputChange("location", e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label>Work Type *</Label>
                    <RadioGroup
                      value={jobData.workType}
                      onValueChange={(value) => handleInputChange("workType", value)}
                    >
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="onsite" id="onsite" />
                        <Label htmlFor="onsite">On-site</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="remote" id="remote" />
                        <Label htmlFor="remote">Remote</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="hybrid" id="hybrid" />
                        <Label htmlFor="hybrid">Hybrid</Label>
                      </div>
                    </RadioGroup>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label>Employment Type *</Label>
                  <RadioGroup
                    value={jobData.employmentType}
                    onValueChange={(value) => handleInputChange("employmentType", value)}
                  >
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="full-time" id="full-time" />
                        <Label htmlFor="full-time">Full-time</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="part-time" id="part-time" />
                        <Label htmlFor="part-time">Part-time</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="contract" id="contract" />
                        <Label htmlFor="contract">Contract</Label>
                      </div>
                      <div className="flex items-center space-x-2">
                        <RadioGroupItem value="internship" id="internship" />
                        <Label htmlFor="internship">Internship</Label>
                      </div>
                    </div>
                  </RadioGroup>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Step 2: Job Details */}
          {currentStep === 2 && (
            <Card>
              <CardHeader>
                <CardTitle>Job Details</CardTitle>
                <CardDescription>Provide detailed information about the role and requirements</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="space-y-2">
                  <Label htmlFor="description">Job Description *</Label>
                  <Textarea
                    id="description"
                    placeholder="Describe the role, responsibilities, and what makes this opportunity exciting..."
                    className="min-h-32"
                    value={jobData.description}
                    onChange={(e) => handleInputChange("description", e.target.value)}
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="requirements">Requirements *</Label>
                  <Textarea
                    id="requirements"
                    placeholder="List the required skills, experience, and qualifications..."
                    className="min-h-24"
                    value={jobData.requirements}
                    onChange={(e) => handleInputChange("requirements", e.target.value)}
                  />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="experience">Experience Level</Label>
                    <Select
                      value={jobData.experience}
                      onValueChange={(value) => handleInputChange("experience", value)}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Select experience level" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="entry">Entry Level (0-2 years)</SelectItem>
                        <SelectItem value="mid">Mid Level (3-5 years)</SelectItem>
                        <SelectItem value="senior">Senior Level (6-10 years)</SelectItem>
                        <SelectItem value="lead">Lead/Principal (10+ years)</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="education">Education</Label>
                    <Select value={jobData.education} onValueChange={(value) => handleInputChange("education", value)}>
                      <SelectTrigger>
                        <SelectValue placeholder="Select education requirement" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="none">No specific requirement</SelectItem>
                        <SelectItem value="high-school">High School</SelectItem>
                        <SelectItem value="associate">Associate Degree</SelectItem>
                        <SelectItem value="bachelor">Bachelor's Degree</SelectItem>
                        <SelectItem value="master">Master's Degree</SelectItem>
                        <SelectItem value="phd">PhD</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>

                <div className="space-y-2">
                  <Label>Required Skills</Label>
                  <div className="flex flex-wrap gap-2 mb-2">
                    {jobData.skills.map((skill) => (
                      <Badge key={skill} variant="secondary" className="flex items-center space-x-1">
                        <span>{skill}</span>
                        <X className="h-3 w-3 cursor-pointer" onClick={() => removeSkill(skill)} />
                      </Badge>
                    ))}
                  </div>
                  <div className="flex space-x-2">
                    <Input
                      placeholder="Add a skill and press Enter"
                      onKeyPress={(e) => {
                        if (e.key === "Enter") {
                          addSkill(e.currentTarget.value)
                          e.currentTarget.value = ""
                        }
                      }}
                    />
                    <Button variant="outline" size="sm">
                      <Plus className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Step 3: Compensation */}
          {currentStep === 3 && (
            <Card>
              <CardHeader>
                <CardTitle>Compensation & Benefits</CardTitle>
                <CardDescription>Define salary range and benefits package</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="salary-min">Minimum Salary</Label>
                    <Input
                      id="salary-min"
                      placeholder="e.g. 120000"
                      value={jobData.salaryMin}
                      onChange={(e) => handleInputChange("salaryMin", e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="salary-max">Maximum Salary</Label>
                    <Input
                      id="salary-max"
                      placeholder="e.g. 160000"
                      value={jobData.salaryMax}
                      onChange={(e) => handleInputChange("salaryMax", e.target.value)}
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="benefits">Benefits & Perks</Label>
                  <Textarea
                    id="benefits"
                    placeholder="Describe the benefits, perks, and compensation package..."
                    className="min-h-24"
                    value={jobData.benefits}
                    onChange={(e) => handleInputChange("benefits", e.target.value)}
                  />
                </div>
              </CardContent>
            </Card>
          )}

          {/* Step 4: Application Settings */}
          {currentStep === 4 && (
            <Card>
              <CardHeader>
                <CardTitle>Application Settings</CardTitle>
                <CardDescription>Configure application deadlines and process</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="deadline">Application Deadline</Label>
                    <Input
                      id="deadline"
                      type="date"
                      value={jobData.applicationDeadline}
                      onChange={(e) => handleInputChange("applicationDeadline", e.target.value)}
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="start-date">Expected Start Date</Label>
                    <Input
                      id="start-date"
                      type="date"
                      value={jobData.startDate}
                      onChange={(e) => handleInputChange("startDate", e.target.value)}
                    />
                  </div>
                </div>

                <Separator />

                <div className="space-y-4">
                  <h3 className="font-medium">Job Posting Options</h3>
                  <div className="space-y-3">
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="urgent"
                        checked={jobData.isUrgent}
                        onCheckedChange={(checked) => handleInputChange("isUrgent", checked)}
                      />
                      <Label htmlFor="urgent">Mark as Urgent Hiring</Label>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Checkbox
                        id="featured"
                        checked={jobData.isFeatured}
                        onCheckedChange={(checked) => handleInputChange("isFeatured", checked)}
                      />
                      <Label htmlFor="featured">Feature this job posting (+$99)</Label>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          )}

          {/* Step 5: Review & Publish */}
          {currentStep === 5 && (
            <Card>
              <CardHeader>
                <CardTitle>Review & Publish</CardTitle>
                <CardDescription>Review your job posting before publishing</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="border border-border rounded-lg p-6 space-y-4">
                  <div className="flex items-start justify-between">
                    <div>
                      <h2 className="text-xl font-bold text-foreground">{jobData.title || "Job Title"}</h2>
                      <p className="text-muted-foreground">TechCorp Inc. • {jobData.location || "Location"}</p>
                    </div>
                    <div className="flex space-x-2">
                      {jobData.isUrgent && <Badge variant="destructive">Urgent</Badge>}
                      {jobData.isFeatured && <Badge variant="secondary">Featured</Badge>}
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-4 text-sm text-muted-foreground">
                    <div className="flex items-center space-x-1">
                      <MapPin className="h-4 w-4" />
                      <span>{jobData.workType || "Work Type"}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Briefcase className="h-4 w-4" />
                      <span>{jobData.employmentType || "Employment Type"}</span>
                    </div>
                    <div className="flex items-center space-x-1">
                      <DollarSign className="h-4 w-4" />
                      <span>
                        ${jobData.salaryMin || "Min"} - ${jobData.salaryMax || "Max"}
                      </span>
                    </div>
                  </div>

                  <div className="space-y-3">
                    <div>
                      <h3 className="font-semibold mb-2">Job Description</h3>
                      <p className="text-sm text-muted-foreground">
                        {jobData.description || "Job description will appear here..."}
                      </p>
                    </div>

                    <div>
                      <h3 className="font-semibold mb-2">Requirements</h3>
                      <p className="text-sm text-muted-foreground">
                        {jobData.requirements || "Requirements will appear here..."}
                      </p>
                    </div>

                    {jobData.skills.length > 0 && (
                      <div>
                        <h3 className="font-semibold mb-2">Required Skills</h3>
                        <div className="flex flex-wrap gap-2">
                          {jobData.skills.map((skill) => (
                            <Badge key={skill} variant="secondary">
                              {skill}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    )}
                  </div>
                </div>

                <div className="flex space-x-4">
                  <Button className="flex-1">
                    <Send className="mr-2 h-4 w-4" />
                    Publish Job Now
                  </Button>
                  <Button variant="outline">
                    <Calendar className="mr-2 h-4 w-4" />
                    Schedule for Later
                  </Button>
                </div>
              </CardContent>
            </Card>
          )}
        </div>

        {/* Sidebar */}
        <div className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Job Posting Tips</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3 text-sm">
              {currentStep === 1 && (
                <>
                  <p>• Use clear, specific job titles that candidates search for</p>
                  <p>• Choose the most relevant department for better categorization</p>
                  <p>• Be specific about location or remote work options</p>
                </>
              )}
              {currentStep === 2 && (
                <>
                  <p>• Write a compelling job description that sells the opportunity</p>
                  <p>• Be specific about requirements but avoid being too restrictive</p>
                  <p>• Include 5-8 relevant skills for better matching</p>
                </>
              )}
              {currentStep === 3 && (
                <>
                  <p>• Competitive salary ranges get 3x more applications</p>
                  <p>• Highlight unique benefits and company perks</p>
                  <p>• Consider total compensation, not just base salary</p>
                </>
              )}
              {currentStep === 4 && (
                <>
                  <p>• Set realistic application deadlines (2-4 weeks recommended)</p>
                  <p>• Featured jobs get 5x more visibility</p>
                  <p>• Urgent hiring helps attract immediate candidates</p>
                </>
              )}
              {currentStep === 5 && (
                <>
                  <p>• Review all details carefully before publishing</p>
                  <p>• You can edit the job after publishing</p>
                  <p>• Jobs are live immediately after publishing</p>
                </>
              )}
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Bulk Import</CardTitle>
              <CardDescription>Upload multiple jobs at once</CardDescription>
            </CardHeader>
            <CardContent>
              <Button variant="outline" className="w-full bg-transparent">
                <Upload className="mr-2 h-4 w-4" />
                Import from CSV
              </Button>
              <p className="text-xs text-muted-foreground mt-2">Download our CSV template to get started</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-lg">Need Help?</CardTitle>
            </CardHeader>
            <CardContent className="space-y-2">
              <Button variant="outline" size="sm" className="w-full bg-transparent">
                View Posting Guide
              </Button>
              <Button variant="outline" size="sm" className="w-full bg-transparent">
                Contact Support
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Navigation */}
      <Card>
        <CardContent className="p-4">
          <div className="flex items-center justify-between">
            <Button variant="outline" onClick={prevStep} disabled={currentStep === 1}>
              <ArrowLeft className="mr-2 h-4 w-4" />
              Previous
            </Button>
            <div className="flex items-center space-x-2">
              <Button variant="outline">
                <Save className="mr-2 h-4 w-4" />
                Save Draft
              </Button>
              {currentStep < steps.length ? (
                <Button onClick={nextStep}>
                  Next
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              ) : (
                <Button>
                  <Send className="mr-2 h-4 w-4" />
                  Publish Job
                </Button>
              )}
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
