"use client"

import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { CreditCard, Download, CheckCircle2, Zap, ArrowRight } from "lucide-react"

export default function EmployerBillingPage() {
  return (
    <div className="p-6 md:p-8 space-y-6 max-w-5xl">
      <div>
        <h1 className="text-3xl font-extrabold text-foreground tracking-tight">Billing & Subscriptions</h1>
        <p className="text-xs text-muted-foreground pt-1">
          Manage your active employer plan, payment methods, and invoice downloads.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        <Card className="border-2 border-primary bg-card md:col-span-2 p-6 space-y-4 relative overflow-hidden">
          <Badge className="bg-primary text-primary-foreground text-[10px] w-fit">Active Subscription</Badge>

          <div className="flex items-center justify-between">
            <div>
              <h2 className="text-2xl font-extrabold text-foreground">Growth Plan</h2>
              <p className="text-xs text-muted-foreground pt-0.5">$239 / month (Billed Annually)</p>
            </div>
            <p className="text-xs text-emerald-500 font-semibold flex items-center gap-1">
              <CheckCircle2 className="h-4 w-4" /> Renews Oct 2027
            </p>
          </div>

          <div className="space-y-2 pt-2 border-t border-border text-xs text-muted-foreground">
            <p className="flex items-center justify-between">
              <span>Active Job Credits</span>
              <span className="font-bold text-foreground">8 / 10 Used</span>
            </p>
            <p className="flex items-center justify-between">
              <span>AI Candidate Matches</span>
              <span className="font-bold text-foreground">Unlimited</span>
            </p>
          </div>

          <div className="flex gap-2 pt-2">
            <Button size="sm" variant="outline" className="text-xs">
              Change Plan
            </Button>
            <Button size="sm" variant="ghost" className="text-xs text-destructive hover:bg-destructive/10">
              Cancel Subscription
            </Button>
          </div>
        </Card>

        <Card className="border-border bg-card p-6 space-y-4">
          <h3 className="text-sm font-bold text-foreground flex items-center gap-2">
            <CreditCard className="h-4 w-4 text-primary" /> Payment Method
          </h3>

          <div className="p-3 bg-muted/40 rounded-lg border border-border space-y-1 text-xs">
            <p className="font-semibold text-foreground">Visa ending in •••• 4242</p>
            <p className="text-muted-foreground">Expires 09/2028</p>
          </div>

          <Button variant="outline" size="sm" className="w-full text-xs">
            Update Payment Method
          </Button>
        </Card>
      </div>

      {/* Invoice History Table */}
      <Card className="border-border bg-card">
        <CardHeader>
          <CardTitle className="text-base font-bold">Invoice History</CardTitle>
          <CardDescription className="text-xs">Download past billing statements and receipts</CardDescription>
        </CardHeader>
        <CardContent className="p-0">
          <div className="divide-y divide-border text-xs">
            <div className="p-4 flex items-center justify-between">
              <div>
                <p className="font-bold text-foreground">Invoice #INV-2026-004</p>
                <p className="text-muted-foreground">Oct 1, 2026 • Growth Plan (Annual)</p>
              </div>
              <div className="flex items-center space-x-3">
                <span className="font-bold text-foreground">$2,868.00</span>
                <Button variant="ghost" size="sm" className="h-8 text-xs gap-1">
                  <Download className="h-3.5 w-3.5" /> PDF
                </Button>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
