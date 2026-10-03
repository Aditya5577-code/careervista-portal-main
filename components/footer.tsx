import Link from "next/link"
import { Briefcase, Facebook, Twitter, Linkedin, Instagram } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-foreground text-background py-12 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="flex items-center space-x-2 mb-4">
              <Briefcase className="h-8 w-8 text-primary" />
              <span className="text-xl font-bold">CareerVista</span>
            </Link>
            <p className="text-background/80 mb-4 max-w-md">
              Connecting talented professionals with leading employers. Find your dream job or hire the perfect
              candidate with CareerVista.
            </p>
            <div className="flex space-x-4">
              <Link href="#" className="text-background/60 hover:text-background transition-colors">
                <Facebook className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-background/60 hover:text-background transition-colors">
                <Twitter className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-background/60 hover:text-background transition-colors">
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link href="#" className="text-background/60 hover:text-background transition-colors">
                <Instagram className="h-5 w-5" />
              </Link>
            </div>
          </div>

          {/* Job Seekers */}
          <div>
            <h3 className="font-semibold mb-4">Job Seekers</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/jobs" className="text-background/80 hover:text-background transition-colors">
                  Browse Jobs
                </Link>
              </li>
              <li>
                <Link href="/companies" className="text-background/80 hover:text-background transition-colors">
                  Companies
                </Link>
              </li>
              <li>
                <Link href="/salary-guide" className="text-background/80 hover:text-background transition-colors">
                  Salary Guide
                </Link>
              </li>
              <li>
                <Link href="/career-advice" className="text-background/80 hover:text-background transition-colors">
                  Career Advice
                </Link>
              </li>
            </ul>
          </div>

          {/* Employers */}
          <div>
            <h3 className="font-semibold mb-4">Employers</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/post-job" className="text-background/80 hover:text-background transition-colors">
                  Post a Job
                </Link>
              </li>
              <li>
                <Link href="/pricing" className="text-background/80 hover:text-background transition-colors">
                  Pricing
                </Link>
              </li>
              <li>
                <Link href="/talent-search" className="text-background/80 hover:text-background transition-colors">
                  Talent Search
                </Link>
              </li>
              <li>
                <Link href="/hiring-solutions" className="text-background/80 hover:text-background transition-colors">
                  Hiring Solutions
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/20 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-background/60 text-sm">© 2024 CareerVista. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link href="/privacy" className="text-background/60 hover:text-background text-sm transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-background/60 hover:text-background text-sm transition-colors">
              Terms of Service
            </Link>
            <Link href="/contact" className="text-background/60 hover:text-background text-sm transition-colors">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
