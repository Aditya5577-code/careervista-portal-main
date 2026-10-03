import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { ArrowRight, Users, Briefcase } from "lucide-react"
import Link from "next/link"

export function CTASection() {
  return (
    <section className="py-20 px-4 bg-muted">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Ready to Get Started?</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Join thousands of professionals who have found their dream jobs through CareerVista
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {/* Job Seekers Card */}
          <Card className="border-border hover:shadow-lg transition-shadow">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="h-8 w-8 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">For Job Seekers</h3>
              <p className="text-muted-foreground mb-6">
                Create your profile, upload your resume, and start applying to thousands of job opportunities from top
                companies.
              </p>
              <Button size="lg" className="w-full" asChild>
                <Link href="/register?type=candidate">
                  Find Jobs
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </CardContent>
          </Card>

          {/* Employers Card */}
          <Card className="border-border hover:shadow-lg transition-shadow">
            <CardContent className="p-8 text-center">
              <div className="w-16 h-16 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Briefcase className="h-8 w-8 text-secondary" />
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">For Employers</h3>
              <p className="text-muted-foreground mb-6">
                Post jobs, manage applications, and find the perfect candidates with our comprehensive hiring platform.
              </p>
              <Button size="lg" variant="secondary" className="w-full" asChild>
                <Link href="/register?type=employer">
                  Post Jobs
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  )
}
