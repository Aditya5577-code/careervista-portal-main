"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Bell, Briefcase, Calendar, CheckCircle2, MessageSquare, Trash2, Check } from "lucide-react"

const NOTIFS = [
  {
    id: "n-1",
    type: "interview",
    title: "Interview Scheduled with TechCorp",
    desc: "Your technical round has been confirmed for Thursday, Oct 8 at 2:00 PM EST.",
    time: "2 hours ago",
    read: false,
    icon: Calendar,
  },
  {
    id: "n-2",
    type: "application",
    title: "Application Status Update",
    desc: "DataPulse AI has reviewed your application for Full Stack Developer and moved you to Shortlisted.",
    time: "Yesterday",
    read: false,
    icon: CheckCircle2,
  },
  {
    id: "n-3",
    type: "message",
    title: "New Message from Alex Rivera",
    desc: "Alex sent a new message regarding your technical interview details.",
    time: "2 days ago",
    read: true,
    icon: MessageSquare,
  },
]

export default function CandidateNotificationsPage() {
  const [list, setList] = useState(NOTIFS)

  const markAllRead = () => {
    setList((prev) => prev.map((n) => ({ ...n, read: true })))
  }

  const clearAll = () => {
    setList([])
  }

  return (
    <div className="p-6 md:p-8 space-y-6 max-w-4xl">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-extrabold text-foreground tracking-tight">Notification Center</h1>
          <p className="text-xs text-muted-foreground pt-1">
            Stay updated on application status, interview schedules, and recruiter messages.
          </p>
        </div>

        <div className="flex items-center space-x-2">
          <Button variant="outline" size="sm" onClick={markAllRead} className="text-xs gap-1">
            <Check className="h-3.5 w-3.5" /> Mark All Read
          </Button>
          <Button variant="ghost" size="sm" onClick={clearAll} className="text-xs text-destructive hover:bg-destructive/10">
            <Trash2 className="h-3.5 w-3.5" /> Clear All
          </Button>
        </div>
      </div>

      {list.length === 0 ? (
        <Card className="p-12 text-center border-dashed border-2 border-border">
          <Bell className="h-10 w-10 text-muted-foreground mx-auto mb-2" />
          <h3 className="text-lg font-semibold text-foreground">No notifications</h3>
          <p className="text-xs text-muted-foreground">You are all caught up!</p>
        </Card>
      ) : (
        <div className="space-y-3">
          {list.map((n) => (
            <Card
              key={n.id}
              className={`border-border bg-card p-4 transition-all ${
                !n.read ? "border-l-4 border-l-primary bg-primary/5" : ""
              }`}
            >
              <CardContent className="p-0 flex items-start space-x-4">
                <div className="p-2.5 bg-primary/10 rounded-xl text-primary flex-shrink-0">
                  <n.icon className="h-5 w-5" />
                </div>
                <div className="flex-1 space-y-1">
                  <div className="flex items-center justify-between">
                    <h3 className="text-sm font-bold text-foreground">{n.title}</h3>
                    <span className="text-[11px] text-muted-foreground">{n.time}</span>
                  </div>
                  <p className="text-xs text-muted-foreground leading-relaxed">{n.desc}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      )}
    </div>
  )
}
