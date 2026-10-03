"use client"

import { useState } from "react"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Card, CardContent } from "@/components/ui/card"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Mail, Phone, MapPin, CheckCircle2, Send, MessageSquare } from "lucide-react"

export default function ContactPage() {
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    setSubmitted(true)
  }

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navigation />

      <main className="flex-1 py-16">
        <div className="container mx-auto px-4 max-w-5xl space-y-12">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <h1 className="text-4xl font-extrabold text-foreground tracking-tight">Contact Our Support & Sales Team</h1>
            <p className="text-muted-foreground">
              Have questions about our job portal, pricing plans, or candidate tools? We're here to help.
            </p>
          </div>

          <div className="grid md:grid-cols-12 gap-8">
            <div className="md:col-span-5 space-y-6">
              <Card className="border-border bg-card p-6 space-y-4">
                <div className="flex items-center space-x-3 text-primary">
                  <Mail className="h-5 w-5" />
                  <span className="font-semibold text-foreground text-sm">Email Us</span>
                </div>
                <p className="text-xs text-muted-foreground">support@careervista.com</p>
                <p className="text-xs text-muted-foreground">sales@careervista.com</p>
              </Card>

              <Card className="border-border bg-card p-6 space-y-4">
                <div className="flex items-center space-x-3 text-primary">
                  <MapPin className="h-5 w-5" />
                  <span className="font-semibold text-foreground text-sm">Headquarters</span>
                </div>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  500 Howard Street, Suite 400<br />
                  San Francisco, CA 94105
                </p>
              </Card>

              <Card className="border-border bg-card p-6 space-y-4">
                <div className="flex items-center space-x-3 text-primary">
                  <Phone className="h-5 w-5" />
                  <span className="font-semibold text-foreground text-sm">Phone Hotline</span>
                </div>
                <p className="text-xs text-muted-foreground">+1 (800) 555-CAREER (Mon-Fri 9am-6pm PST)</p>
              </Card>
            </div>

            <div className="md:col-span-7">
              <Card className="border-border bg-card p-6 md:p-8">
                <CardContent className="p-0 space-y-6">
                  {submitted ? (
                    <div className="py-12 text-center space-y-4">
                      <CheckCircle2 className="h-12 w-12 text-emerald-500 mx-auto" />
                      <h3 className="text-2xl font-bold text-foreground">Message Sent!</h3>
                      <p className="text-xs text-muted-foreground">
                        Thank you for reaching out. A team member will respond within 2 business hours.
                      </p>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-4">
                      <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="c-name">Your Name</Label>
                          <Input id="c-name" placeholder="Alex Johnson" required className="h-11" />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="c-email">Email Address</Label>
                          <Input id="c-email" type="email" placeholder="alex@example.com" required className="h-11" />
                        </div>
                      </div>

                      <div className="space-y-2">
                        <Label>Reason for Contact</Label>
                        <Select defaultValue="support">
                          <SelectTrigger className="h-11">
                            <SelectValue placeholder="Select topic" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="support">Candidate Support</SelectItem>
                            <SelectItem value="sales">Employer Sales & Pricing</SelectItem>
                            <SelectItem value="feedback">Product Feedback</SelectItem>
                            <SelectItem value="other">General Inquiry</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="c-msg">Message</Label>
                        <Textarea id="c-msg" placeholder="How can we assist you?" required rows={5} />
                      </div>

                      <Button type="submit" className="w-full h-11 text-base font-semibold gap-2">
                        Send Message <Send className="h-4 w-4" />
                      </Button>
                    </form>
                  )}
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
