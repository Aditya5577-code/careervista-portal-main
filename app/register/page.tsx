"use client"

import { useState } from "react"
import Link from "next/link"
import { useRouter, useSearchParams } from "next/navigation"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Card, CardContent } from "@/components/ui/card"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Checkbox } from "@/components/ui/checkbox"
import { Briefcase, User, Building2, ArrowRight, CheckCircle2, ShieldCheck, Sparkles } from "lucide-react"

export default function RegisterPage() {
  const router = useRouter()
  const searchParams = useSearchParams()
  const initialType = searchParams.get("type") === "employer" ? "employer" : "candidate"

  const [role, setRole] = useState<"candidate" | "employer">(initialType)
  const [fullName, setFullName] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [companyName, setCompanyName] = useState("")
  const [agreeTerms, setAgreeTerms] = useState(false)
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (!agreeTerms) return
    setIsSubmitting(true)
    setTimeout(() => {
      setIsSubmitting(false)
      if (role === "employer") {
        router.push("/employer")
      } else {
        router.push("/candidate")
      }
    }, 1200)
  }

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navigation />

      <main className="flex-1 py-16 flex items-center justify-center">
        <div className="container mx-auto px-4 max-w-lg space-y-6">
          <div className="text-center space-y-2">
            <h1 className="text-3xl font-extrabold text-foreground tracking-tight">Create Your Account</h1>
            <p className="text-sm text-muted-foreground">
              Join thousands of professionals and top employers on CareerVista.
            </p>
          </div>

          <Card className="border-border shadow-xl bg-card">
            <CardContent className="pt-6 space-y-6">
              {/* Role Selection */}
              <div className="space-y-3">
                <Label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                  I am joining as a:
                </Label>
                <div className="grid grid-cols-2 gap-4">
                  <div
                    onClick={() => setRole("candidate")}
                    className={`p-4 rounded-xl border-2 cursor-pointer transition-all text-center space-y-2 ${
                      role === "candidate"
                        ? "border-primary bg-primary/5 text-primary"
                        : "border-border hover:border-border/80 text-muted-foreground"
                    }`}
                  >
                    <User className="h-6 w-6 mx-auto" />
                    <p className="font-bold text-sm">Job Seeker</p>
                    <p className="text-[11px] text-muted-foreground">Looking for my next career move</p>
                  </div>

                  <div
                    onClick={() => setRole("employer")}
                    className={`p-4 rounded-xl border-2 cursor-pointer transition-all text-center space-y-2 ${
                      role === "employer"
                        ? "border-primary bg-primary/5 text-primary"
                        : "border-border hover:border-border/80 text-muted-foreground"
                    }`}
                  >
                    <Building2 className="h-6 w-6 mx-auto" />
                    <p className="font-bold text-sm">Employer</p>
                    <p className="text-[11px] text-muted-foreground">Hiring talent & posting jobs</p>
                  </div>
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="name">{role === "candidate" ? "Full Name" : "Hiring Manager Name"}</Label>
                  <Input
                    id="name"
                    placeholder={role === "candidate" ? "Sarah Johnson" : "Alex Rivera"}
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    required
                    className="h-11"
                  />
                </div>

                {role === "employer" && (
                  <div className="space-y-2">
                    <Label htmlFor="company">Company Name</Label>
                    <Input
                      id="company"
                      placeholder="TechCorp Inc."
                      value={companyName}
                      onChange={(e) => setCompanyName(e.target.value)}
                      required
                      className="h-11"
                    />
                  </div>
                )}

                <div className="space-y-2">
                  <Label htmlFor="reg-email">Work / Personal Email</Label>
                  <Input
                    id="reg-email"
                    type="email"
                    placeholder={role === "candidate" ? "sarah@example.com" : "alex@company.com"}
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                    className="h-11"
                  />
                </div>

                <div className="space-y-2">
                  <Label htmlFor="reg-password">Password (8+ characters)</Label>
                  <Input
                    id="reg-password"
                    type="password"
                    placeholder="••••••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                    minLength={8}
                    className="h-11"
                  />
                </div>

                <div className="flex items-start space-x-2 pt-1">
                  <Checkbox
                    id="terms"
                    checked={agreeTerms}
                    onCheckedChange={(checked) => setAgreeTerms(!!checked)}
                  />
                  <label htmlFor="terms" className="text-xs text-muted-foreground leading-snug cursor-pointer">
                    I agree to the{" "}
                    <Link href="/terms" className="text-primary hover:underline font-medium">
                      Terms of Service
                    </Link>{" "}
                    and{" "}
                    <Link href="/privacy" className="text-primary hover:underline font-medium">
                      Privacy Policy
                    </Link>
                    .
                  </label>
                </div>

                <Button
                  type="submit"
                  disabled={!agreeTerms || isSubmitting}
                  className="w-full h-11 text-base font-semibold gap-2 mt-2"
                >
                  {isSubmitting ? "Creating Account..." : `Register as ${role === "candidate" ? "Candidate" : "Employer"}`}
                  {!isSubmitting && <ArrowRight className="h-4 w-4" />}
                </Button>
              </form>

              <div className="text-center pt-2 border-t border-border">
                <p className="text-xs text-muted-foreground">
                  Already have an account?{" "}
                  <Link href="/login" className="font-semibold text-primary hover:underline">
                    Sign in here
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
