"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { CheckCircle2, Shield, Bell, Cpu } from "lucide-react"

export default function EmployerSettingsPage() {
  const [savedSuccess, setSavedSuccess] = useState(false)

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault()
    setSavedSuccess(true)
    setTimeout(() => setSavedSuccess(false), 2000)
  }

  return (
    <div className="p-6 md:p-8 space-y-6 max-w-4xl">
      <div>
        <h1 className="text-3xl font-extrabold text-foreground tracking-tight">Employer Settings</h1>
        <p className="text-xs text-muted-foreground pt-1">
          Configure ATS integrations, team notifications, and security options.
        </p>
      </div>

      <Tabs defaultValue="integrations" className="w-full space-y-6">
        <TabsList className="grid grid-cols-3 w-full max-w-md">
          <TabsTrigger value="integrations" className="text-xs font-semibold">
            ATS Integrations
          </TabsTrigger>
          <TabsTrigger value="notifications" className="text-xs font-semibold">
            Notifications
          </TabsTrigger>
          <TabsTrigger value="security" className="text-xs font-semibold">
            Security & API
          </TabsTrigger>
        </TabsList>

        <TabsContent value="integrations">
          <Card className="border-border bg-card">
            <CardHeader>
              <CardTitle className="text-lg font-bold">ATS & HR System Sync</CardTitle>
              <CardDescription className="text-xs">Connect CareerVista to your Applicant Tracking System.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between p-4 bg-muted/30 rounded-xl border border-border">
                <div>
                  <p className="text-sm font-bold text-foreground">Greenhouse Integration</p>
                  <p className="text-xs text-muted-foreground">Sync candidates and jobs bi-directionally.</p>
                </div>
                <Switch defaultChecked />
              </div>

              <div className="flex items-center justify-between p-4 bg-muted/30 rounded-xl border border-border">
                <div>
                  <p className="text-sm font-bold text-foreground">Lever Integration</p>
                  <p className="text-xs text-muted-foreground">Import applications directly to Lever pipelines.</p>
                </div>
                <Switch />
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="notifications">
          <Card className="border-border bg-card">
            <CardHeader>
              <CardTitle className="text-lg font-bold">Recruiter Email Alerts</CardTitle>
              <CardDescription className="text-xs">Control notification frequency for new applicants.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-semibold text-foreground">Instant New Applicant Alerts</p>
                  <p className="text-xs text-muted-foreground">Receive email as soon as a candidate applies.</p>
                </div>
                <Switch defaultChecked />
              </div>

              <div className="flex items-center justify-between border-t border-border pt-4">
                <div>
                  <p className="text-sm font-semibold text-foreground">Daily Applicant Summary Digest</p>
                  <p className="text-xs text-muted-foreground">Receive a 9 AM daily rollup of all applications.</p>
                </div>
                <Switch defaultChecked />
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="security">
          <Card className="border-border bg-card">
            <CardHeader>
              <CardTitle className="text-lg font-bold">API Keys & Security</CardTitle>
              <CardDescription className="text-xs">Manage workspace API access tokens.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="api-key">Production API Key</Label>
                <Input id="api-key" readOnly value="cv_live_983f40a1b2c3d4e5f6789" className="h-11 font-mono text-xs" />
              </div>
              <Button type="button" variant="outline" className="text-xs">
                Regenerate API Key
              </Button>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
