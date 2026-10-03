"use client"

import { useState } from "react"
import Link from "next/link"
import { Navigation } from "@/components/navigation"
import { Footer } from "@/components/footer"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from "@/components/ui/accordion"
import { CheckCircle2, Sparkles, Building2, Zap, ShieldCheck, ArrowRight } from "lucide-react"

export default function PricingPage() {
  const [annualBilling, setAnnualBilling] = useState(true)

  const plans = [
    {
      name: "Starter",
      description: "Ideal for growing startups posting 1-3 urgent engineering or design roles.",
      price: annualBilling ? "$79" : "$99",
      period: "/month",
      popular: false,
      features: [
        "3 Active Job Postings",
        "30 Days Listing Duration",
        "Basic Candidate Screening",
        "Standard Applicant Dashboard",
        "Email Support",
      ],
      cta: "Get Started",
      href: "/register?type=employer",
    },
    {
      name: "Growth",
      description: "Designed for scaling tech teams looking for continuous hiring & AI matching.",
      price: annualBilling ? "$239" : "$299",
      period: "/month",
      popular: true,
      features: [
        "10 Active Job Postings",
        "Featured Badges on Search Results",
        "AI Candidate Skill Matching",
        "Direct Candidate Messaging Hub",
        "Bulk Application Export",
        "Priority 24/7 Support",
      ],
      cta: "Start Free Trial",
      href: "/register?type=employer",
    },
    {
      name: "Enterprise",
      description: "Custom ATS integrations, dedicated account management, and unlimited postings.",
      price: "Custom",
      period: "",
      popular: false,
      features: [
        "Unlimited Active Job Listings",
        "Custom ATS Sync (Greenhouse, Lever)",
        "Dedicated Talent Acquisition Manager",
        "Branded Company Hub Page",
        "Custom SLA & Security Reviews",
      ],
      cta: "Contact Sales",
      href: "/contact",
    },
  ]

  return (
    <div className="min-h-screen bg-background flex flex-col">
      <Navigation />

      <main className="flex-1 py-16">
        <div className="container mx-auto px-4 max-w-6xl space-y-12">
          {/* Header */}
          <div className="text-center max-w-3xl mx-auto space-y-4">
            <Badge variant="outline" className="px-4 py-1 border-primary/30 text-primary font-medium">
              <Sparkles className="h-3.5 w-3.5 mr-1.5 inline" /> Transparent Employer Pricing
            </Badge>
            <h1 className="text-4xl md:text-5xl font-extrabold text-foreground tracking-tight">
              Hire Top Tech Talent, Faster
            </h1>
            <p className="text-lg text-muted-foreground">
              Simple, transparent plans designed for companies of all sizes. No hidden setup fees.
            </p>

            {/* Monthly / Annual Toggle */}
            <div className="flex items-center justify-center space-x-4 pt-4">
              <span className={`text-sm font-semibold ${!annualBilling ? "text-foreground" : "text-muted-foreground"}`}>
                Monthly Billing
              </span>
              <button
                type="button"
                onClick={() => setAnnualBilling(!annualBilling)}
                className="relative inline-flex h-7 w-14 flex-shrink-0 cursor-pointer rounded-full border-2 border-transparent bg-muted transition-colors duration-200 ease-in-out focus:outline-none"
              >
                <span
                  className={`pointer-events-none inline-block h-6 w-6 transform rounded-full bg-primary shadow ring-0 transition duration-200 ease-in-out ${
                    annualBilling ? "translate-x-7" : "translate-x-0"
                  }`}
                />
              </button>
              <span className={`text-sm font-semibold ${annualBilling ? "text-foreground" : "text-muted-foreground"}`}>
                Annual Billing <Badge className="ml-1 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 border-0">Save 20%</Badge>
              </span>
            </div>
          </div>

          {/* Pricing Grid */}
          <div className="grid md:grid-cols-3 gap-8 items-stretch">
            {plans.map((plan) => (
              <Card
                key={plan.name}
                className={`border-border bg-card flex flex-col justify-between relative transition-all ${
                  plan.popular ? "border-2 border-primary shadow-xl scale-105 z-10" : "hover:shadow-lg"
                }`}
              >
                {plan.popular && (
                  <Badge className="absolute -top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground font-bold px-4 py-1">
                    Most Popular Choice
                  </Badge>
                )}

                <CardHeader className="space-y-3 p-6">
                  <CardTitle className="text-2xl font-bold">{plan.name}</CardTitle>
                  <CardDescription className="text-xs leading-relaxed min-h-[36px]">
                    {plan.description}
                  </CardDescription>
                  <div className="pt-2">
                    <span className="text-4xl font-extrabold text-foreground">{plan.price}</span>
                    <span className="text-sm font-medium text-muted-foreground">{plan.period}</span>
                  </div>
                </CardHeader>

                <CardContent className="p-6 pt-0 space-y-4 flex-1">
                  <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">Plan Highlights:</p>
                  <ul className="space-y-2.5 text-sm text-foreground">
                    {plan.features.map((feat, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <CheckCircle2 className="h-4 w-4 text-primary flex-shrink-0 mt-0.5" />
                        <span className="text-xs">{feat}</span>
                      </li>
                    ))}
                  </ul>
                </CardContent>

                <CardFooter className="p-6 pt-0">
                  <Button
                    asChild
                    variant={plan.popular ? "default" : "outline"}
                    className="w-full h-11 text-sm font-semibold gap-2"
                  >
                    <Link href={plan.href}>
                      {plan.cta} <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>

          {/* FAQ Accordion */}
          <div className="max-w-3xl mx-auto pt-10 space-y-6">
            <div className="text-center space-y-2">
              <h2 className="text-2xl font-bold text-foreground">Frequently Asked Questions</h2>
              <p className="text-sm text-muted-foreground">Got questions about our plans? We've got answers.</p>
            </div>

            <Accordion type="single" collapsible className="w-full border border-border rounded-xl p-4 bg-card">
              <AccordionItem value="faq-1">
                <AccordionTrigger className="text-sm font-semibold">Can I upgrade or downgrade my plan anytime?</AccordionTrigger>
                <AccordionContent className="text-xs text-muted-foreground leading-relaxed">
                  Yes! You can upgrade your subscription plan at any time from your Employer Billing dashboard. Plan changes take effect immediately with prorated credits.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="faq-2">
                <AccordionTrigger className="text-sm font-semibold">How does AI candidate matching work?</AccordionTrigger>
                <AccordionContent className="text-xs text-muted-foreground leading-relaxed">
                  Our algorithm analyzes candidates' technical skills, experience metrics, project portfolios, and location preferences to match them against your job requirements automatically.
                </AccordionContent>
              </AccordionItem>

              <AccordionItem value="faq-3">
                <AccordionTrigger className="text-sm font-semibold">Do you support custom ATS integrations?</AccordionTrigger>
                <AccordionContent className="text-xs text-muted-foreground leading-relaxed">
                  Yes, our Enterprise tier supports bi-directional synchronization with popular ATS platforms including Greenhouse, Lever, Workday, and Ashby.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
