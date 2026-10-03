import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Search, Copy, Edit, Trash2, Plus, Star, Clock, Users } from "lucide-react"
import Link from "next/link"

export default function JobTemplatesPage() {
  const templates = [
    {
      id: 1,
      title: "Senior Frontend Developer",
      department: "Engineering",
      description: "We're looking for a talented Senior Frontend Developer to join our growing engineering team...",
      skills: ["React", "TypeScript", "Next.js", "Tailwind CSS", "JavaScript"],
      experience: "Senior Level",
      salary: "$120k - $160k",
      usageCount: 24,
      lastUsed: "2 days ago",
      isPopular: true,
    },
    {
      id: 2,
      title: "Product Manager",
      department: "Product",
      description: "Seeking an experienced Product Manager to drive product strategy and execution...",
      skills: ["Product Strategy", "Analytics", "User Research", "Agile", "Roadmapping"],
      experience: "Mid to Senior Level",
      salary: "$130k - $170k",
      usageCount: 18,
      lastUsed: "1 week ago",
      isPopular: true,
    },
    {
      id: 3,
      title: "UX Designer",
      department: "Design",
      description: "Join our design team as a UX Designer to create amazing user experiences...",
      skills: ["Figma", "User Research", "Prototyping", "Design Systems", "Usability Testing"],
      experience: "Mid Level",
      salary: "$100k - $140k",
      usageCount: 12,
      lastUsed: "3 days ago",
      isPopular: false,
    },
    {
      id: 4,
      title: "DevOps Engineer",
      department: "Engineering",
      description: "Looking for a DevOps Engineer to help scale our infrastructure and deployment processes...",
      skills: ["AWS", "Docker", "Kubernetes", "CI/CD", "Terraform"],
      experience: "Mid to Senior Level",
      salary: "$110k - $150k",
      usageCount: 8,
      lastUsed: "1 month ago",
      isPopular: false,
    },
    {
      id: 5,
      title: "Marketing Manager",
      department: "Marketing",
      description: "We're seeking a Marketing Manager to lead our digital marketing initiatives...",
      skills: ["Digital Marketing", "SEO", "Content Strategy", "Analytics", "Campaign Management"],
      experience: "Mid Level",
      salary: "$90k - $120k",
      usageCount: 15,
      lastUsed: "5 days ago",
      isPopular: false,
    },
    {
      id: 6,
      title: "Sales Development Representative",
      department: "Sales",
      description: "Join our sales team as an SDR to help drive our revenue growth...",
      skills: ["Sales", "Lead Generation", "CRM", "Communication", "Prospecting"],
      experience: "Entry to Mid Level",
      salary: "$60k - $80k + Commission",
      usageCount: 22,
      lastUsed: "1 day ago",
      isPopular: true,
    },
  ]

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Job Templates</h1>
          <p className="text-muted-foreground">Use pre-built templates to create job postings quickly</p>
        </div>
        <div className="flex items-center space-x-2">
          <Button variant="outline">
            <Plus className="mr-2 h-4 w-4" />
            Create Template
          </Button>
          <Button asChild>
            <Link href="/employer/jobs/new">
              <Plus className="mr-2 h-4 w-4" />
              Post New Job
            </Link>
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
                <Input placeholder="Search templates..." className="pl-10" />
              </div>
            </div>
            <Select>
              <SelectTrigger className="w-full md:w-48">
                <SelectValue placeholder="Department" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Departments</SelectItem>
                <SelectItem value="engineering">Engineering</SelectItem>
                <SelectItem value="product">Product</SelectItem>
                <SelectItem value="design">Design</SelectItem>
                <SelectItem value="marketing">Marketing</SelectItem>
                <SelectItem value="sales">Sales</SelectItem>
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger className="w-full md:w-48">
                <SelectValue placeholder="Experience Level" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Levels</SelectItem>
                <SelectItem value="entry">Entry Level</SelectItem>
                <SelectItem value="mid">Mid Level</SelectItem>
                <SelectItem value="senior">Senior Level</SelectItem>
                <SelectItem value="lead">Lead/Principal</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </CardContent>
      </Card>

      {/* Popular Templates */}
      <div>
        <h2 className="text-xl font-semibold text-foreground mb-4">Popular Templates</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {templates
            .filter((t) => t.isPopular)
            .map((template) => (
              <Card key={template.id} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h3 className="font-semibold text-foreground mb-1">{template.title}</h3>
                      <p className="text-sm text-muted-foreground">{template.department}</p>
                    </div>
                    <div className="flex items-center space-x-1">
                      <Star className="h-4 w-4 text-yellow-500 fill-current" />
                      <Badge variant="secondary" className="text-xs">
                        Popular
                      </Badge>
                    </div>
                  </div>

                  <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{template.description}</p>

                  <div className="space-y-3">
                    <div className="flex flex-wrap gap-1">
                      {template.skills.slice(0, 3).map((skill) => (
                        <Badge key={skill} variant="outline" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                      {template.skills.length > 3 && (
                        <Badge variant="outline" className="text-xs">
                          +{template.skills.length - 3} more
                        </Badge>
                      )}
                    </div>

                    <div className="flex items-center justify-between text-sm text-muted-foreground">
                      <div className="flex items-center space-x-1">
                        <Users className="h-3 w-3" />
                        <span>Used {template.usageCount} times</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="h-3 w-3" />
                        <span>{template.lastUsed}</span>
                      </div>
                    </div>

                    <div className="flex space-x-2">
                      <Button size="sm" className="flex-1" asChild>
                        <Link href={`/employer/jobs/new?template=${template.id}`}>
                          <Copy className="mr-2 h-4 w-4" />
                          Use Template
                        </Link>
                      </Button>
                      <Button variant="outline" size="sm">
                        <Edit className="h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
        </div>
      </div>

      {/* All Templates */}
      <div>
        <h2 className="text-xl font-semibold text-foreground mb-4">All Templates</h2>
        <div className="space-y-4">
          {templates.map((template) => (
            <Card key={template.id} className="hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-2">
                      <h3 className="text-lg font-semibold text-foreground">{template.title}</h3>
                      {template.isPopular && (
                        <Badge variant="secondary" className="flex items-center space-x-1">
                          <Star className="h-3 w-3 fill-current" />
                          <span>Popular</span>
                        </Badge>
                      )}
                    </div>

                    <p className="text-sm text-muted-foreground mb-3">
                      {template.department} • {template.experience}
                    </p>

                    <p className="text-sm text-muted-foreground mb-4 line-clamp-2">{template.description}</p>

                    <div className="flex flex-wrap gap-2 mb-4">
                      {template.skills.slice(0, 5).map((skill) => (
                        <Badge key={skill} variant="secondary" className="text-xs">
                          {skill}
                        </Badge>
                      ))}
                      {template.skills.length > 5 && (
                        <Badge variant="outline" className="text-xs">
                          +{template.skills.length - 5} more
                        </Badge>
                      )}
                    </div>

                    <div className="flex items-center space-x-6 text-sm text-muted-foreground">
                      <div className="flex items-center space-x-1">
                        <Users className="h-4 w-4" />
                        <span>Used {template.usageCount} times</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="h-4 w-4" />
                        <span>Last used {template.lastUsed}</span>
                      </div>
                      <span className="font-medium text-primary">{template.salary}</span>
                    </div>
                  </div>

                  <div className="flex items-center space-x-2">
                    <Button variant="outline" size="sm">
                      <Edit className="mr-2 h-4 w-4" />
                      Edit
                    </Button>
                    <Button size="sm" asChild>
                      <Link href={`/employer/jobs/new?template=${template.id}`}>
                        <Copy className="mr-2 h-4 w-4" />
                        Use Template
                      </Link>
                    </Button>
                    <Button variant="ghost" size="sm">
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Create Custom Template */}
      <Card className="border-dashed border-2 border-border">
        <CardContent className="p-8 text-center">
          <div className="max-w-md mx-auto">
            <Plus className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
            <h3 className="text-lg font-semibold text-foreground mb-2">Create Custom Template</h3>
            <p className="text-muted-foreground mb-4">Build your own job template to save time on future postings</p>
            <Button>
              <Plus className="mr-2 h-4 w-4" />
              Create New Template
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
