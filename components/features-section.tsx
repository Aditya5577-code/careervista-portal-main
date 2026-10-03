import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Briefcase, Users, Building2, Search, MessageSquare, BarChart3 } from "lucide-react"

export function FeaturesSection() {
  const features = [
    {
      icon: Search,
      title: "Smart Job Search",
      description:
        "Advanced filters and AI-powered recommendations to find the perfect job match for your skills and preferences.",
    },
    {
      icon: Briefcase,
      title: "Easy Applications",
      description: "One-click apply with your saved profile. Track all your applications in one convenient dashboard.",
    },
    {
      icon: Building2,
      title: "Company Insights",
      description: "Get detailed company profiles, culture insights, and employee reviews to make informed decisions.",
    },
    {
      icon: Users,
      title: "Talent Matching",
      description: "Our AI connects you with employers looking for your specific skills and experience level.",
    },
    {
      icon: MessageSquare,
      title: "Direct Communication",
      description: "Chat directly with recruiters and hiring managers through our secure messaging platform.",
    },
    {
      icon: BarChart3,
      title: "Career Analytics",
      description: "Track your job search progress and get insights on how to improve your application success rate.",
    },
  ]

  return (
    <section className="py-20 px-4 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">Why Choose CareerVista?</h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We provide the tools and connections you need to accelerate your career growth
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card key={index} className="border-border hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                  <feature.icon className="h-6 w-6 text-primary" />
                </div>
                <CardTitle className="text-xl">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base">{feature.description}</CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
