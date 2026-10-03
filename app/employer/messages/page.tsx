"use client"

import { useState } from "react"
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Search, Send, Paperclip, Calendar, CheckCheck, User, Briefcase } from "lucide-react"

const RECRUITER_THREADS = [
  {
    id: "rthread-1",
    candidate: "Sarah Johnson",
    jobTitle: "Senior Frontend Engineer",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80",
    lastMsg: "Thank you Alex! I confirmed the Thursday technical interview.",
    time: "10:42 AM",
    messages: [
      { id: "rm1", sender: "Alex Rivera", text: "Hi Sarah, thanks for applying for Senior Frontend Engineer!", time: "10:30 AM", isMe: true },
      { id: "rm2", sender: "Sarah Johnson", text: "Hi Alex! Thank you so much, I am very excited about TechCorp's mission.", time: "10:35 AM", isMe: false },
      { id: "rm3", sender: "Sarah Johnson", text: "Thank you Alex! I confirmed the Thursday technical interview.", time: "10:42 AM", isMe: false },
    ],
  },
  {
    id: "rthread-2",
    candidate: "David Kim",
    jobTitle: "Full Stack Developer",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80",
    lastMsg: "Sounds good, I will send over my updated GitHub repositories.",
    time: "Yesterday",
    messages: [
      { id: "rm10", sender: "David Kim", text: "Sounds good, I will send over my updated GitHub repositories.", time: "Yesterday", isMe: false },
    ],
  },
]

export default function EmployerMessagesPage() {
  const [activeId, setActiveId] = useState("rthread-1")
  const [threads, setThreads] = useState(RECRUITER_THREADS)
  const [inputMsg, setInputMsg] = useState("")

  const active = threads.find((t) => t.id === activeId) || threads[0]

  const handleSend = (e: React.FormEvent) => {
    e.preventDefault()
    if (!inputMsg.trim()) return

    const newM = {
      id: "rm-" + Date.now(),
      sender: "Alex Rivera",
      text: inputMsg,
      time: "Just now",
      isMe: true,
    }

    setThreads((prev) =>
      prev.map((t) =>
        t.id === activeId
          ? { ...t, lastMsg: inputMsg, time: "Just now", messages: [...t.messages, newM] }
          : t
      )
    )

    setInputMsg("")
  }

  return (
    <div className="p-6 md:p-8 h-[calc(100vh-2rem)] flex flex-col space-y-4">
      <div>
        <h1 className="text-2xl font-extrabold text-foreground tracking-tight">Candidate Conversations</h1>
        <p className="text-xs text-muted-foreground pt-0.5">
          Direct messaging portal with active applicants and shortlisted talent.
        </p>
      </div>

      <Card className="border-border bg-card flex-1 flex flex-col md:flex-row overflow-hidden">
        {/* Thread Sidebar */}
        <div className="w-full md:w-80 border-r border-border flex flex-col bg-muted/20">
          <div className="p-3 border-b border-border">
            <div className="relative">
              <Search className="absolute left-3 top-2.5 h-3.5 w-3.5 text-muted-foreground" />
              <Input placeholder="Search candidates..." className="pl-9 h-9 text-xs" />
            </div>
          </div>

          <div className="flex-1 overflow-y-auto divide-y divide-border/50">
            {threads.map((t) => {
              const isActive = t.id === activeId

              return (
                <div
                  key={t.id}
                  onClick={() => setActiveId(t.id)}
                  className={`p-3.5 flex items-start space-x-3 cursor-pointer transition-colors ${
                    isActive ? "bg-primary/10 border-l-4 border-primary" : "hover:bg-muted/50"
                  }`}
                >
                  <Avatar className="h-10 w-10 border border-border">
                    <AvatarImage src={t.avatar} alt={t.candidate} />
                    <AvatarFallback>{t.candidate.substring(0, 2)}</AvatarFallback>
                  </Avatar>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between">
                      <p className="text-xs font-bold text-foreground truncate">{t.candidate}</p>
                      <span className="text-[10px] text-muted-foreground">{t.time}</span>
                    </div>
                    <p className="text-[11px] text-primary truncate font-medium">{t.jobTitle}</p>
                    <p className="text-xs text-muted-foreground truncate pt-1">{t.lastMsg}</p>
                  </div>
                </div>
              )
            })}
          </div>
        </div>

        {/* Chat Window */}
        <div className="flex-1 flex flex-col bg-card">
          <div className="p-4 border-b border-border flex items-center justify-between bg-muted/10">
            <div className="flex items-center space-x-3">
              <Avatar className="h-10 w-10 border border-border">
                <AvatarImage src={active.avatar} alt={active.candidate} />
                <AvatarFallback>{active.candidate.substring(0, 2)}</AvatarFallback>
              </Avatar>
              <div>
                <h3 className="text-sm font-bold text-foreground">{active.candidate}</h3>
                <p className="text-xs text-muted-foreground">Applying for: {active.jobTitle}</p>
              </div>
            </div>

            <Button size="sm" variant="outline" className="text-xs gap-1">
              <Calendar className="h-3.5 w-3.5 text-primary" /> Schedule Interview
            </Button>
          </div>

          <div className="flex-1 p-4 overflow-y-auto space-y-4 bg-muted/10">
            {active.messages.map((m) => (
              <div
                key={m.id}
                className={`flex flex-col max-w-[75%] space-y-1 ${
                  m.isMe ? "ml-auto items-end" : "mr-auto items-start"
                }`}
              >
                <div
                  className={`p-3 rounded-2xl text-xs leading-relaxed ${
                    m.isMe
                      ? "bg-primary text-primary-foreground rounded-tr-none"
                      : "bg-card border border-border text-foreground rounded-tl-none shadow-sm"
                  }`}
                >
                  {m.text}
                </div>
                <div className="flex items-center space-x-1 text-[10px] text-muted-foreground">
                  <span>{m.time}</span>
                  {m.isMe && <CheckCheck className="h-3 w-3 text-primary" />}
                </div>
              </div>
            ))}
          </div>

          <form onSubmit={handleSend} className="p-3 border-t border-border flex items-center space-x-2 bg-card">
            <Button type="button" variant="ghost" size="sm" className="h-9 w-9 p-0 text-muted-foreground">
              <Paperclip className="h-4 w-4" />
            </Button>
            <Input
              placeholder="Type your response to candidate..."
              value={inputMsg}
              onChange={(e) => setInputMsg(e.target.value)}
              className="h-10 text-xs flex-1"
            />
            <Button type="submit" size="sm" className="h-10 px-4 gap-1 text-xs">
              Send <Send className="h-3.5 w-3.5" />
            </Button>
          </form>
        </div>
      </Card>
    </div>
  )
}
