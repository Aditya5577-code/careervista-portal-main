import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Search, MapPin } from "lucide-react"

export function HeroSection() {
  return (
    <section className="bg-gradient-to-br from-background to-muted py-20 px-4">
      <div className="max-w-7xl mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6 text-balance">
          Find Your Dream Job with <span className="text-primary">CareerVista</span>
        </h1>
        <p className="text-xl text-muted-foreground mb-8 max-w-3xl mx-auto text-pretty">
          Connect with top employers, discover exciting opportunities, and take the next step in your career journey.
          Your perfect job is just a search away.
        </p>

        {/* Job Search Form */}
        <div className="max-w-4xl mx-auto bg-card rounded-lg shadow-lg p-6 mb-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
              <Input placeholder="Job title, keywords, or company" className="pl-10" />
            </div>
            <div className="relative">
              <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-muted-foreground h-5 w-5" />
              <Input placeholder="City, state, or remote" className="pl-10" />
            </div>
            <Button size="lg" className="w-full">
              <Search className="mr-2 h-5 w-5" />
              Search Jobs
            </Button>
          </div>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">50,000+</div>
            <div className="text-muted-foreground">Active Jobs</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">10,000+</div>
            <div className="text-muted-foreground">Companies</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-bold text-primary mb-2">1M+</div>
            <div className="text-muted-foreground">Job Seekers</div>
          </div>
        </div>
      </div>
    </section>
  )
}
