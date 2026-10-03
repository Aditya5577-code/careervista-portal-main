"use client"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Tabs, TabsList, TabsTrigger, TabsContent } from "@/components/ui/tabs"
import { Checkbox } from "@/components/ui/checkbox"
import { Briefcase, Eye, EyeOff, Lock, Mail, ArrowRight, ShieldCheck, Sparkles } from "lucide-react"

export default function LoginPage() {
  const router = useRouter()
  const [activeRole, setActiveRole] = useState<"candidate" | "employer">("candidate")
  const [showPassword, setShowPassword] = useState(false)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [isLoading, setIsLoading] = useState(false)

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault()
    setIsLoading(true)
    setTimeout(() => {
      setIsLoading(false)
      if (activeRole === "employer") {
        router.push("/employer")
      } else {
        router.push("/candidate")
      }
    }, 1000)
  }

  const fillDemoCandidate = () => {
    setEmail("sarah.johnson@example.com")
    setPassword("demoPassword123!")
    setActiveRole("candidate")
  }

  const fillDemoEmployer = () => {
    setEmail("recruiter@techcorp.com")
    setPassword("employerDemo123!")
    setActiveRole("employer")
  }

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navigation />

      <main className="flex-1 py-16 flex items-center justify-center">
        <div className="container mx-auto px-4 max-w-md space-y-6">
          <div className="text-center space-y-2">
            <div className="inline-flex items-center space-x-2 p-2 bg-primary/10 rounded-full text-primary mb-2">
              <Briefcase className="h-5 w-5" />
            </div>
            <h1 className="text-3xl font-extrabold text-foreground tracking-tight">Welcome Back</h1>
            <p className="text-sm text-muted-foreground">Sign in to your CareerVista account to continue.</p>
          </div>

          <Card className="border-border shadow-xl bg-card">
            <CardContent className="pt-6 space-y-6">
              <Tabs
                defaultValue="candidate"
                value={activeRole}
                onValueChange={(val) => setActiveRole(val as "candidate" | "employer")}
                className="w-full"
              >
                <TabsList className="grid grid-cols-2 w-full mb-6">
                  <TabsTrigger value="candidate" className="font-semibold text-xs md:text-sm">
                    Job Candidate
                  </TabsTrigger>
                  <TabsTrigger value="employer" className="font-semibold text-xs md:text-sm">
                    Employer / Recruiter
                  </TabsTrigger>
                </TabsList>

                <form onSubmit={handleLogin} className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="email">Email Address</Label>
                    <div className="relative">
                      <Mail className="absolute left-3.5 top-3.5 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="email"
                        type="email"
                        placeholder={activeRole === "candidate" ? "sarah@example.com" : "recruiter@company.com"}
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                        className="pl-10 h-11"
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <Label htmlFor="password">Password</Label>
                      <a href="#" className="text-xs font-semibold text-primary hover:underline">
                        Forgot Password?
                      </a>
                    </div>
                    <div className="relative">
                      <Lock className="absolute left-3.5 top-3.5 h-4 w-4 text-muted-foreground" />
                      <Input
                        id="password"
                        type={showPassword ? "text" : "password"}
                        placeholder="••••••••••••"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                        className="pl-10 pr-10 h-11"
                      />
                      <button
                        type="button"
                        onClick={() => setShowPassword(!showPassword)}
                        className="absolute right-3.5 top-3.5 text-muted-foreground hover:text-foreground"
                      >
                        {showPassword ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                      </button>
                    </div>
                  </div>

                  <div className="flex items-center space-x-2 pt-1">
                    <Checkbox id="remember" defaultChecked />
                    <label htmlFor="remember" className="text-xs text-muted-foreground cursor-pointer">
                      Remember me for 30 days
                    </label>
                  </div>

                  <Button type="submit" className="w-full h-11 text-base font-semibold gap-2" disabled={isLoading}>
                    {isLoading ? "Signing in..." : `Sign In as ${activeRole === "candidate" ? "Candidate" : "Employer"}`}
                    {!isLoading && <ArrowRight className="h-4 w-4" />}
                  </Button>
                </form>
              </Tabs>

              {/* Demo Login Shortcuts */}
              <div className="p-3 bg-muted/40 rounded-xl border border-border space-y-2 text-center">
                <p className="text-xs font-medium text-muted-foreground flex items-center justify-center gap-1">
                  <Sparkles className="h-3.5 w-3.5 text-primary" /> Quick Demo Login:
                </p>
                <div className="flex gap-2 justify-center">
                  <Button type="button" variant="outline" size="sm" onClick={fillDemoCandidate} className="text-xs">
                    Demo Candidate
                  </Button>
                  <Button type="button" variant="outline" size="sm" onClick={fillDemoEmployer} className="text-xs">
                    Demo Employer
                  </Button>
                </div>
              </div>

              <div className="text-center pt-2 border-t border-border">
                <p className="text-xs text-muted-foreground">
                  Don't have an account yet?{" "}
                  <Link href="/register" className="font-semibold text-primary hover:underline">
                    Create free account
                  </Link>
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </main>

      <Footer />
    </div>
  )
}
