import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu"
import {
  Plus,
  Search,
  Filter,
  MoreHorizontal,
  Eye,
  Users,
  Calendar,
  MapPin,
  Clock,
  Edit,
  Pause,
  Play,
  Trash2,
  Copy,
  BarChart3,
} from "lucide-react"
import Link from "next/link"

export default function JobsPage() {
  const jobs = [
    {
      id: 1,
      title: "Senior Frontend Developer",
      department: "Engineering",
      location: "San Francisco, CA",
      type: "Full-time",
      salary: "$120k - $160k",
      posted: "2 days ago",
      expires: "28 days left",
      applications: 24,
      views: 156,
      status: "active",
      featured: true,
    },
    {
      id: 2,
      title: "Product Manager",
      department: "Product",
      location: "Remote",
      type: "Full-time",
      salary: "$130k - $170k",
      posted: "1 week ago",
      expires: "21 days left",
      applications: 18,
      views: 89,
      status: "active",
      featured: false,
    },
    {
      id: 3,
      title: "UX Designer",
      department: "Design",
      location: "New York, NY",
      type: "Contract",
      salary: "$80k - $100k",
      posted: "3 days ago",
      expires: "25 days left",
      applications: 12,
      views: 67,
      status: "paused",
      featured: false,
    },
    {
      id: 4,
      title: "DevOps Engineer",
      department: "Engineering",
      location: "Austin, TX",
      type: "Full-time",
      salary: "$110k - $140k",
      posted: "5 days ago",
      expires: "23 days left",
      applications: 8,
      views: 45,
      status: "draft",
      featured: false,
    },
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "active":
        return "default"
      case "paused":
        return "secondary"
      case "draft":
        return "outline"
      case "expired":
        return "destructive"
      default:
        return "outline"
    }
  }

  return (
    <div className="p-6 space-y-6">
      {/* Header */}
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-foreground">Job Management</h1>
          <p className="text-muted-foreground">Manage your job postings and track their performance</p>
        </div>
        <Button asChild>
          <Link href="/employer/jobs/new">
            <Plus className="mr-2 h-4 w-4" />
            Post New Job
          </Link>
        </Button>
      </div>

      {/* Filters and Search */}
      <Card>
        <CardContent className="p-6">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1">
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-4 w-4" />
                <Input placeholder="Search jobs..." className="pl-10" />
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
              </SelectContent>
            </Select>
            <Select>
              <SelectTrigger className="w-full md:w-48">
                <SelectValue placeholder="Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Status</SelectItem>
                <SelectItem value="active">Active</SelectItem>
                <SelectItem value="paused">Paused</SelectItem>
                <SelectItem value="draft">Draft</SelectItem>
                <SelectItem value="expired">Expired</SelectItem>
              </SelectContent>
            </Select>
            <Button variant="outline">
              <Filter className="mr-2 h-4 w-4" />
              More Filters
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* Jobs Tabs */}
      <Tabs defaultValue="all" className="space-y-6">
        <TabsList>
          <TabsTrigger value="all">All Jobs (4)</TabsTrigger>
          <TabsTrigger value="active">Active (2)</TabsTrigger>
          <TabsTrigger value="paused">Paused (1)</TabsTrigger>
          <TabsTrigger value="draft">Draft (1)</TabsTrigger>
        </TabsList>

        <TabsContent value="all" className="space-y-4">
          {jobs.map((job) => (
            <Card key={job.id} className="hover:shadow-md transition-shadow">
              <CardContent className="p-6">
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-2">
                      <h3 className="text-lg font-semibold text-foreground">{job.title}</h3>
                      <Badge variant={getStatusColor(job.status)}>{job.status}</Badge>
                      {job.featured && <Badge variant="secondary">Featured</Badge>}
                    </div>

                    <div className="flex flex-wrap items-center gap-4 text-sm text-muted-foreground mb-4">
                      <div className="flex items-center space-x-1">
                        <MapPin className="h-3 w-3" />
                        <span>{job.location}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Clock className="h-3 w-3" />
                        <span>{job.type}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Calendar className="h-3 w-3" />
                        <span>Posted {job.posted}</span>
                      </div>
                      <span className="text-primary font-medium">{job.salary}</span>
                    </div>

                    <div className="flex items-center space-x-6 text-sm">
                      <div className="flex items-center space-x-1">
                        <Users className="h-4 w-4 text-primary" />
                        <span className="font-medium">{job.applications}</span>
                        <span className="text-muted-foreground">applications</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Eye className="h-4 w-4 text-secondary" />
                        <span className="font-medium">{job.views}</span>
                        <span className="text-muted-foreground">views</span>
                      </div>
                      <div className="text-muted-foreground">{job.expires}</div>
                    </div>
                  </div>

                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button variant="ghost" size="sm">
                        <MoreHorizontal className="h-4 w-4" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      <DropdownMenuItem>
                        <Eye className="mr-2 h-4 w-4" />
                        View Job
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Edit className="mr-2 h-4 w-4" />
                        Edit Job
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <Copy className="mr-2 h-4 w-4" />
                        Duplicate Job
                      </DropdownMenuItem>
                      <DropdownMenuItem>
                        <BarChart3 className="mr-2 h-4 w-4" />
                        View Analytics
                      </DropdownMenuItem>
                      {job.status === "active" ? (
                        <DropdownMenuItem>
                          <Pause className="mr-2 h-4 w-4" />
                          Pause Job
                        </DropdownMenuItem>
                      ) : (
                        <DropdownMenuItem>
                          <Play className="mr-2 h-4 w-4" />
                          Activate Job
                        </DropdownMenuItem>
                      )}
                      <DropdownMenuItem className="text-destructive">
                        <Trash2 className="mr-2 h-4 w-4" />
                        Delete Job
                      </DropdownMenuItem>
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </CardContent>
            </Card>
          ))}
        </TabsContent>

        <TabsContent value="active">{/* Active jobs content */}</TabsContent>

        <TabsContent value="paused">{/* Paused jobs content */}</TabsContent>

        <TabsContent value="draft">{/* Draft jobs content */}</TabsContent>
      </Tabs>

      {/* Bulk Actions */}
      <Card>
        <CardContent className="p-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <span className="text-sm text-muted-foreground">Bulk Actions:</span>
              <Button variant="outline" size="sm">
                Activate Selected
              </Button>
              <Button variant="outline" size="sm">
                Pause Selected
              </Button>
              <Button variant="outline" size="sm">
                Export Data
              </Button>
            </div>
            <div className="text-sm text-muted-foreground">Showing 4 of 4 jobs</div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
