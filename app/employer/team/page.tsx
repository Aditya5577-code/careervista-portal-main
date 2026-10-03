"use client"

import { useState } from "react"
import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Badge } from "@/components/ui/badge"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { UserPlus, Mail, Shield, Trash2, CheckCircle2 } from "lucide-react"

const TEAM_MEMBERS = [
  {
    id: "tm-1",
    name: "Alex Rivera",
    email: "alex@techcorp.com",
    role: "Admin",
    avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80",
    status: "Active",
  },
  {
    id: "tm-2",
    name: "Marcus Vance",
    email: "marcus@techcorp.com",
    role: "Recruiter",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80",
    status: "Active",
  },
  {
    id: "tm-3",
    name: "Sarah Chen",
    email: "sarah.c@techcorp.com",
    role: "Hiring Manager",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=100&auto=format&fit=crop&q=80",
    status: "Pending Invite",
  },
]

export default function EmployerTeamPage() {
  const [members, setMembers] = useState(TEAM_MEMBERS)
  const [modalOpen, setModalOpen] = useState(false)
  const [inviteEmail, setInviteEmail] = useState("")
  const [inviteRole, setInviteRole] = useState("Recruiter")

  const handleInvite = (e: React.FormEvent) => {
    e.preventDefault()
    if (!inviteEmail.trim()) return

    const newM = {
      id: "tm-" + Date.now(),
      name: inviteEmail.split("@")[0],
      email: inviteEmail,
      role: inviteRole,
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&auto=format&fit=crop&q=80",
      status: "Pending Invite",
    }

    setMembers((prev) => [...prev, newM])
    setInviteEmail("")
    setModalOpen(false)
  }

  const removeMember = (id: string) => {
    setMembers((prev) => prev.filter((m) => m.id !== id))
  }

  return (
    <div className="p-6 md:p-8 space-y-6 max-w-5xl">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-extrabold text-foreground tracking-tight">Team & Permissions</h1>
          <p className="text-xs text-muted-foreground pt-1">
            Invite recruiters and hiring managers to collaborate on job postings and applications.
          </p>
        </div>

        <Button onClick={() => setModalOpen(true)} className="gap-2 text-xs font-semibold">
          <UserPlus className="h-4 w-4" /> Invite Member
        </Button>
      </div>

      <div className="space-y-3">
        {members.map((m) => (
          <Card key={m.id} className="border-border bg-card p-4 hover:shadow-sm transition-all">
            <CardContent className="p-0 flex items-center justify-between">
              <div className="flex items-center space-x-4">
                <Avatar className="h-10 w-10 border border-border">
                  <AvatarImage src={m.avatar} alt={m.name} />
                  <AvatarFallback>{m.name.substring(0, 2)}</AvatarFallback>
                </Avatar>
                <div>
                  <div className="flex items-center space-x-2">
                    <p className="text-sm font-bold text-foreground">{m.name}</p>
                    <Badge variant={m.role === "Admin" ? "default" : "outline"} className="text-[10px] px-1.5 py-0">
                      {m.role}
                    </Badge>
                  </div>
                  <p className="text-xs text-muted-foreground">{m.email}</p>
                </div>
              </div>

              <div className="flex items-center space-x-3">
                <Badge
                  variant="secondary"
                  className={
                    m.status === "Active"
                      ? "bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 text-[10px]"
                      : "text-[10px]"
                  }
                >
                  {m.status}
                </Badge>
                {m.role !== "Admin" && (
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => removeMember(m.id)}
                    className="h-8 w-8 p-0 text-muted-foreground hover:text-destructive"
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                )}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {modalOpen && (
        <Dialog open={modalOpen} onOpenChange={setModalOpen}>
          <DialogContent className="max-w-md">
            <DialogHeader>
              <DialogTitle className="text-lg font-bold">Invite Team Member</DialogTitle>
            </DialogHeader>

            <form onSubmit={handleInvite} className="space-y-4 my-2">
              <div className="space-y-2">
                <Label htmlFor="inv-email">Work Email</Label>
                <Input
                  id="inv-email"
                  type="email"
                  placeholder="colleague@techcorp.com"
                  value={inviteEmail}
                  onChange={(e) => setInviteEmail(e.target.value)}
                  required
                  className="h-11"
                />
              </div>

              <div className="space-y-2">
                <Label>Role Permissions</Label>
                <Select value={inviteRole} onValueChange={setInviteRole}>
                  <SelectTrigger className="h-11">
                    <SelectValue placeholder="Select role" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Recruiter">Recruiter (Can post jobs & message candidates)</SelectItem>
                    <SelectItem value="Hiring Manager">Hiring Manager (Can review assigned candidates)</SelectItem>
                    <SelectItem value="Admin">Admin (Full billing & team access)</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <DialogFooter className="pt-2">
                <Button type="button" variant="outline" onClick={() => setModalOpen(false)}>
                  Cancel
                </Button>
                <Button type="submit">Send Invitation</Button>
              </DialogFooter>
            </form>
          </DialogContent>
        </Dialog>
      )}
    </div>
  )
}
