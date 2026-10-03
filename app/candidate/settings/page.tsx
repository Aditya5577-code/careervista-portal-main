"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Switch } from "@/components/ui/switch"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { CheckCircle2, User, Lock, Bell, ShieldCheck } from "lucide-react"

export default function CandidateSettingsPage() {
  const [savedSuccess, setSavedSuccess] = useState(false)

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault()
    setSavedSuccess(true)
    setTimeout(() => setSavedSuccess(false), 2000)
  }

  return (
    <div className="p-6 md:p-8 space-y-6 max-w-4xl">
      <div>
        <h1 className="text-3xl font-extrabold text-foreground tracking-tight">Account Settings</h1>
        <p className="text-xs text-muted-foreground pt-1">
          Manage your candidate profile details, security, and notification preferences.
        </p>
      </div>

      <Tabs defaultValue="account" className="w-full space-y-6">
        <TabsList className="grid grid-cols-3 w-full max-w-md">
          <TabsTrigger value="account" className="text-xs font-semibold">
            Account Details
          </TabsTrigger>
          <TabsTrigger value="notifications" className="text-xs font-semibold">
            Notifications
          </TabsTrigger>
          <TabsTrigger value="security" className="text-xs font-semibold">
            Security & Privacy
          </TabsTrigger>
        </TabsList>

        <TabsContent value="account">
          <Card className="border-border bg-card">
            <CardHeader>
              <CardTitle className="text-lg font-bold">Personal Account Info</CardTitle>
              <CardDescription className="text-xs">Update your primary contact details.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <form onSubmit={handleSave} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="s-fn">First Name</Label>
                    <Input id="s-fn" defaultValue="Sarah" className="h-11" />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="s-ln">Last Name</Label>
                    <Input id="s-ln" defaultValue="Johnson" className="h-11" />
                  </div>
                </div>

                <div className="space-y-2">
                  <Label htmlFor="s-email">Email Address</Label>
                  <Input id="s-email" type="email" defaultValue="sarah.johnson@example.com" className="h-11" />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="s-phone">Phone Number</Label>
                  <Input id="s-phone" defaultValue="+1 (555) 234-5678" className="h-11" />
                </div>

                {savedSuccess && (
                  <div className="p-3 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 rounded-lg text-xs font-medium flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4" /> Account settings updated successfully!
                  </div>
                )}

                <Button type="submit" className="h-11">
                  Save Account Changes
                </Button>
              </form>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="notifications">
          <Card className="border-border bg-card">
            <CardHeader>
              <CardTitle className="text-lg font-bold">Notification Preferences</CardTitle>
              <CardDescription className="text-xs">Choose when and how we contact you.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-sm font-semibold text-foreground">Email Job Alerts</p>
                  <p className="text-xs text-muted-foreground">Receive weekly customized job recommendations.</p>
                </div>
                <Switch defaultChecked />
              </div>

              <div className="flex items-center justify-between border-t border-border pt-4">
                <div>
                  <p className="text-sm font-semibold text-foreground">Application Status Changes</p>
                  <p className="text-xs text-muted-foreground">Get notified immediately when recruiters update your status.</p>
                </div>
                <Switch defaultChecked />
              </div>

              <div className="flex items-center justify-between border-t border-border pt-4">
                <div>
                  <p className="text-sm font-semibold text-foreground">Direct Recruiter Messages</p>
                  <p className="text-xs text-muted-foreground">Receive instant alerts for new chat messages.</p>
                </div>
                <Switch defaultChecked />
              </div>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="security">
          <Card className="border-border bg-card">
            <CardHeader>
              <CardTitle className="text-lg font-bold">Password & Security</CardTitle>
              <CardDescription className="text-xs">Manage your password and security settings.</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="space-y-2">
                <Label htmlFor="curr-pass">Current Password</Label>
                <Input id="curr-pass" type="password" placeholder="••••••••••••" className="h-11" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="new-pass">New Password</Label>
                <Input id="new-pass" type="password" placeholder="••••••••••••" className="h-11" />
              </div>
              <Button type="button" className="h-11">
                Update Password
              </Button>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
