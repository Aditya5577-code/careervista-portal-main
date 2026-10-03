"use client"

import { useState } from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import {
  LayoutDashboard,
  Search,
  Briefcase,
  User,
  MessageSquare,
  Bell,
  Bookmark,
  Settings,
  ChevronLeft,
  ChevronRight,
  Building2,
} from "lucide-react"

const navigation = [
  { name: "Dashboard", href: "/candidate", icon: LayoutDashboard },
  { name: "Find Jobs", href: "/candidate/jobs", icon: Search },
  { name: "My Applications", href: "/candidate/applications", icon: Briefcase },
  { name: "Saved Jobs", href: "/candidate/saved", icon: Bookmark },
  { name: "Companies", href: "/candidate/companies", icon: Building2 },
  { name: "Profile", href: "/candidate/profile", icon: User },
  { name: "Messages", href: "/candidate/messages", icon: MessageSquare },
  { name: "Notifications", href: "/candidate/notifications", icon: Bell },
  { name: "Settings", href: "/candidate/settings", icon: Settings },
]

export function CandidateSidebar() {
  const [collapsed, setCollapsed] = useState(false)
  const pathname = usePathname()

  return (
    <div className={cn("bg-card border-r border-border transition-all duration-300", collapsed ? "w-16" : "w-64")}>
      <div className="flex h-full flex-col">
        {/* Header */}
        <div className="flex items-center justify-between p-4 border-b border-border">
          {!collapsed && (
            <div className="flex items-center space-x-2">
              <Briefcase className="h-6 w-6 text-primary" />
              <span className="font-semibold text-foreground">CareerVista</span>
            </div>
          )}
          <Button variant="ghost" size="sm" onClick={() => setCollapsed(!collapsed)} className="h-8 w-8 p-0">
            {collapsed ? <ChevronRight className="h-4 w-4" /> : <ChevronLeft className="h-4 w-4" />}
          </Button>
        </div>

        {/* User Profile */}
        <div className="p-4 border-b border-border">
          <div className="flex items-center space-x-3">
            <Avatar className="h-10 w-10">
              <AvatarImage src="/professional-woman-diverse.png" />
              <AvatarFallback>SJ</AvatarFallback>
            </Avatar>
            {!collapsed && (
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-foreground truncate">Sarah Johnson</p>
                <p className="text-xs text-muted-foreground truncate">Frontend Developer</p>
                <Badge variant="secondary" className="mt-1 text-xs">
                  85% Complete
                </Badge>
              </div>
            )}
          </div>
        </div>

        {/* Navigation */}
        <nav className="flex-1 p-4 space-y-2">
          {navigation.map((item) => {
            const isActive = pathname === item.href
            return (
              <Link
                key={item.name}
                href={item.href}
                className={cn(
                  "flex items-center space-x-3 px-3 py-2 rounded-lg text-sm font-medium transition-colors",
                  isActive
                    ? "bg-primary text-primary-foreground"
                    : "text-muted-foreground hover:text-foreground hover:bg-muted",
                )}
              >
                <item.icon className="h-5 w-5 flex-shrink-0" />
                {!collapsed && <span>{item.name}</span>}
                {!collapsed && item.name === "Messages" && (
                  <Badge variant="destructive" className="ml-auto text-xs">
                    3
                  </Badge>
                )}
                {!collapsed && item.name === "Notifications" && (
                  <Badge variant="secondary" className="ml-auto text-xs">
                    12
                  </Badge>
                )}
              </Link>
            )
          })}
        </nav>
      </div>
    </div>
  )
}
