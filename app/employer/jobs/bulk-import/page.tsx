import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Alert, AlertDescription } from "@/components/ui/alert"
import { Upload, Download, FileText, CheckCircle, XCircle, AlertCircle, ArrowLeft, RefreshCw } from "lucide-react"
import Link from "next/link"

export default function BulkImportPage() {
  const importHistory = [
    {
      id: 1,
      filename: "engineering_jobs_q1.csv",
      date: "2024-01-15",
      status: "completed",
      totalJobs: 12,
      successfulJobs: 11,
      failedJobs: 1,
      errors: ["Row 8: Invalid salary format"],
    },
    {
      id: 2,
      filename: "marketing_positions.csv",
      date: "2024-01-10",
      status: "completed",
      totalJobs: 5,
      successfulJobs: 5,
      failedJobs: 0,
      errors: [],
    },
    {
      id: 3,
      filename: "sales_team_expansion.csv",
      date: "2024-01-05",
      status: "failed",
      totalJobs: 8,
      successfulJobs: 0,
      failedJobs: 8,
      errors: ["Invalid CSV format", "Missing required columns"],
    },
  ]

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "completed":
        return <CheckCircle className="h-4 w-4 text-green-500" />
      case "failed":
        return <XCircle className="h-4 w-4 text-red-500" />
      case "processing":
        return <RefreshCw className="h-4 w-4 text-blue-500 animate-spin" />
      default:
        return <AlertCircle className="h-4 w-4 text-yellow-500" />
    }
  }

  const getStatusColor = (status: string) => {
    switch (status) {
      case "completed":
        return "default"
      case "failed":
        return "destructive"
      case "processing":
        return "secondary"
      default:
        return "outline"
    }
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
            <h1 className="text-3xl font-bold text-foreground">Bulk Import Jobs</h1>
            <p className="text-muted-foreground">Upload multiple job postings at once using CSV files</p>
          </div>
        </div>
      </div>

      <Tabs defaultValue="upload" className="space-y-6">
        <TabsList>
          <TabsTrigger value="upload">Upload CSV</TabsTrigger>
          <TabsTrigger value="template">Download Template</TabsTrigger>
          <TabsTrigger value="history">Import History</TabsTrigger>
        </TabsList>

        <TabsContent value="upload" className="space-y-6">
          {/* Upload Area */}
          <Card>
            <CardHeader>
              <CardTitle>Upload Job CSV File</CardTitle>
              <CardDescription>
                Upload a CSV file containing your job postings. Make sure to follow our template format.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <div className="border-2 border-dashed border-border rounded-lg p-8 text-center">
                <Upload className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                <h3 className="text-lg font-semibold text-foreground mb-2">Drop your CSV file here</h3>
                <p className="text-muted-foreground mb-4">or click to browse and select a file</p>
                <Button>
                  <Upload className="mr-2 h-4 w-4" />
                  Choose File
                </Button>
                <p className="text-xs text-muted-foreground mt-2">
                  Supported format: CSV (max 10MB, up to 100 jobs per file)
                </p>
              </div>
            </CardContent>
          </Card>

          {/* Upload Instructions */}
          <Card>
            <CardHeader>
              <CardTitle>Before You Upload</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <Alert>
                <AlertCircle className="h-4 w-4" />
                <AlertDescription>
                  Make sure your CSV file follows our template format to avoid import errors.
                </AlertDescription>
              </Alert>

              <div className="space-y-3">
                <h4 className="font-medium">Required Columns:</h4>
                <ul className="text-sm text-muted-foreground space-y-1 ml-4">
                  <li>• job_title (required)</li>
                  <li>• department (required)</li>
                  <li>• location (required)</li>
                  <li>• employment_type (Full-time, Part-time, Contract, Internship)</li>
                  <li>• work_type (Remote, Hybrid, On-site)</li>
                  <li>• salary_min (numeric)</li>
                  <li>• salary_max (numeric)</li>
                  <li>• description (required)</li>
                  <li>• requirements (required)</li>
                  <li>• skills (comma-separated)</li>
                  <li>• experience_level (Entry, Mid, Senior, Lead)</li>
                  <li>• application_deadline (YYYY-MM-DD format)</li>
                </ul>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="template" className="space-y-6">
          {/* Template Download */}
          <Card>
            <CardHeader>
              <CardTitle>CSV Template</CardTitle>
              <CardDescription>
                Download our CSV template to ensure your job data is formatted correctly
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="border border-border rounded-lg p-6 text-center">
                  <FileText className="h-12 w-12 text-primary mx-auto mb-4" />
                  <h3 className="font-semibold text-foreground mb-2">Blank Template</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Empty CSV template with all required columns and proper formatting
                  </p>
                  <Button variant="outline" className="w-full bg-transparent">
                    <Download className="mr-2 h-4 w-4" />
                    Download Blank Template
                  </Button>
                </div>

                <div className="border border-border rounded-lg p-6 text-center">
                  <FileText className="h-12 w-12 text-secondary mx-auto mb-4" />
                  <h3 className="font-semibold text-foreground mb-2">Sample Template</h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    Template with sample job data to help you understand the format
                  </p>
                  <Button variant="outline" className="w-full bg-transparent">
                    <Download className="mr-2 h-4 w-4" />
                    Download Sample Template
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Field Descriptions */}
          <Card>
            <CardHeader>
              <CardTitle>Field Descriptions</CardTitle>
              <CardDescription>Detailed explanation of each CSV column</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <div>
                      <h4 className="font-medium text-foreground">job_title</h4>
                      <p className="text-sm text-muted-foreground">
                        The job position title (e.g., "Senior Frontend Developer")
                      </p>
                    </div>
                    <div>
                      <h4 className="font-medium text-foreground">department</h4>
                      <p className="text-sm text-muted-foreground">
                        Department name (Engineering, Product, Design, Marketing, Sales, HR, Finance, Operations)
                      </p>
                    </div>
                    <div>
                      <h4 className="font-medium text-foreground">location</h4>
                      <p className="text-sm text-muted-foreground">
                        Job location (e.g., "San Francisco, CA" or "Remote")
                      </p>
                    </div>
                    <div>
                      <h4 className="font-medium text-foreground">employment_type</h4>
                      <p className="text-sm text-muted-foreground">Full-time, Part-time, Contract, or Internship</p>
                    </div>
                    <div>
                      <h4 className="font-medium text-foreground">work_type</h4>
                      <p className="text-sm text-muted-foreground">Remote, Hybrid, or On-site</p>
                    </div>
                    <div>
                      <h4 className="font-medium text-foreground">salary_min / salary_max</h4>
                      <p className="text-sm text-muted-foreground">
                        Numeric values for salary range (e.g., 120000, 160000)
                      </p>
                    </div>
                  </div>
                  <div className="space-y-3">
                    <div>
                      <h4 className="font-medium text-foreground">description</h4>
                      <p className="text-sm text-muted-foreground">Detailed job description and responsibilities</p>
                    </div>
                    <div>
                      <h4 className="font-medium text-foreground">requirements</h4>
                      <p className="text-sm text-muted-foreground">Job requirements and qualifications</p>
                    </div>
                    <div>
                      <h4 className="font-medium text-foreground">skills</h4>
                      <p className="text-sm text-muted-foreground">
                        Comma-separated list of required skills (e.g., "React, TypeScript, Node.js")
                      </p>
                    </div>
                    <div>
                      <h4 className="font-medium text-foreground">experience_level</h4>
                      <p className="text-sm text-muted-foreground">Entry, Mid, Senior, or Lead</p>
                    </div>
                    <div>
                      <h4 className="font-medium text-foreground">application_deadline</h4>
                      <p className="text-sm text-muted-foreground">Date in YYYY-MM-DD format (e.g., 2024-02-15)</p>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="history" className="space-y-6">
          {/* Import Statistics */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Total Imports</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-primary">25</div>
                <p className="text-xs text-muted-foreground">All time</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Jobs Imported</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-secondary">342</div>
                <p className="text-xs text-muted-foreground">Successfully processed</p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">Success Rate</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold text-accent">94%</div>
                <p className="text-xs text-muted-foreground">Average success rate</p>
              </CardContent>
            </Card>
          </div>

          {/* Import History */}
          <Card>
            <CardHeader>
              <CardTitle>Recent Imports</CardTitle>
              <CardDescription>History of your CSV job imports</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              {importHistory.map((import_) => (
                <div key={import_.id} className="border border-border rounded-lg p-4">
                  <div className="flex items-start justify-between mb-3">
                    <div className="flex items-center space-x-3">
                      {getStatusIcon(import_.status)}
                      <div>
                        <h3 className="font-medium text-foreground">{import_.filename}</h3>
                        <p className="text-sm text-muted-foreground">
                          Imported on {new Date(import_.date).toLocaleDateString()}
                        </p>
                      </div>
                    </div>
                    <Badge variant={getStatusColor(import_.status)}>{import_.status}</Badge>
                  </div>

                  <div className="grid grid-cols-3 gap-4 mb-3">
                    <div className="text-center">
                      <div className="text-lg font-semibold text-foreground">{import_.totalJobs}</div>
                      <div className="text-xs text-muted-foreground">Total Jobs</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-semibold text-green-600">{import_.successfulJobs}</div>
                      <div className="text-xs text-muted-foreground">Successful</div>
                    </div>
                    <div className="text-center">
                      <div className="text-lg font-semibold text-red-600">{import_.failedJobs}</div>
                      <div className="text-xs text-muted-foreground">Failed</div>
                    </div>
                  </div>

                  {import_.totalJobs > 0 && (
                    <div className="mb-3">
                      <Progress value={(import_.successfulJobs / import_.totalJobs) * 100} className="h-2" />
                    </div>
                  )}

                  {import_.errors.length > 0 && (
                    <div className="space-y-1">
                      <h4 className="text-sm font-medium text-foreground">Errors:</h4>
                      {import_.errors.map((error, index) => (
                        <p key={index} className="text-xs text-red-600">
                          • {error}
                        </p>
                      ))}
                    </div>
                  )}
                </div>
              ))}
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
