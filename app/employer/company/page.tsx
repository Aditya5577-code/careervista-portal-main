"use client"

import { useState } from "react"
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Badge } from "@/components/ui/badge"
import { Building2, MapPin, Globe, CheckCircle2, Upload, Plus, Trash2 } from "lucide-react"

export default function EmployerCompanyProfilePage() {
  const [companyName, setCompanyName] = useState("TechCorp Inc.")
  const [website, setWebsite] = useState("https://techcorp.example.com")
  const [location, setLocation] = useState("San Francisco, CA")
  const [industry, setIndustry] = useState("SaaS / Cloud Software")
  const [description, setDescription] = useState(
    "TechCorp is a leading enterprise software provider building cloud productivity platforms that serve over 100,000 teams globally."
  )
  const [perks, setPerks] = useState([
    "100% Remote-First Culture",
    "Comprehensive Health, Dental & Vision",
    "$2,500 Annual Education Stipend",
    "401(k) 5% Matching",
  ])
  const [newPerk, setNewPerk] = useState("")
  const [savedSuccess, setSavedSuccess] = useState(false)

  const handleAddPerk = () => {
    if (newPerk.trim()) {
      setPerks((prev) => [...prev, newPerk.trim()])
      setNewPerk("")
    }
  }

  const handleRemovePerk = (idx: number) => {
    setPerks((prev) => prev.filter((_, i) => i !== idx))
  }

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault()
    setSavedSuccess(true)
    setTimeout(() => setSavedSuccess(false), 2000)
  }

  return (
    <div className="p-6 md:p-8 space-y-6 max-w-5xl">
      <div>
        <h1 className="text-3xl font-extrabold text-foreground tracking-tight">Company Branding Profile</h1>
        <p className="text-xs text-muted-foreground pt-1">
          Customize how your company appears to prospective candidates across job listings and search.
        </p>
      </div>

      <Card className="border-border bg-card">
        <CardContent className="p-6 space-y-6">
          <form onSubmit={handleSave} className="space-y-6">
            <div className="flex items-center space-x-6 p-4 bg-muted/30 rounded-xl border border-border">
              <Avatar className="h-20 w-20 rounded-xl border-2 border-primary/20">
                <AvatarImage src="https://images.unsplash.com/photo-1549923746-c502d488b3ea?w=200&auto=format&fit=crop&q=80" />
                <AvatarFallback>TC</AvatarFallback>
              </Avatar>
              <div className="space-y-1">
                <Button type="button" variant="outline" size="sm" className="gap-1.5 text-xs">
                  <Upload className="h-3.5 w-3.5" /> Upload New Logo
                </Button>
                <p className="text-[11px] text-muted-foreground">PNG, JPG, or SVG up to 2MB. 500x500px recommended.</p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="c-name">Company Name</Label>
                <Input id="c-name" value={companyName} onChange={(e) => setCompanyName(e.target.value)} required className="h-11" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="c-web">Website URL</Label>
                <Input id="c-web" value={website} onChange={(e) => setWebsite(e.target.value)} required className="h-11" />
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="c-loc">Headquarters Location</Label>
                <Input id="c-loc" value={location} onChange={(e) => setLocation(e.target.value)} required className="h-11" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="c-ind">Industry</Label>
                <Input id="c-ind" value={industry} onChange={(e) => setIndustry(e.target.value)} required className="h-11" />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="c-desc">About Company</Label>
              <Textarea id="c-desc" value={description} onChange={(e) => setDescription(e.target.value)} rows={4} className="text-sm" />
            </div>

            <div className="space-y-3">
              <Label>Culture & Benefits</Label>
              <div className="flex gap-2">
                <Input
                  placeholder="Add perk (e.g. Flexible Working Hours)..."
                  value={newPerk}
                  onChange={(e) => setNewPerk(e.target.value)}
                  className="h-10 text-xs"
                />
                <Button type="button" onClick={handleAddPerk} size="sm" className="gap-1 text-xs">
                  <Plus className="h-3.5 w-3.5" /> Add
                </Button>
              </div>

              <div className="flex flex-wrap gap-2 pt-1">
                {perks.map((p, idx) => (
                  <Badge key={idx} variant="secondary" className="px-3 py-1.5 text-xs gap-2">
                    {p}
                    <button type="button" onClick={() => handleRemovePerk(idx)} className="text-muted-foreground hover:text-destructive">
                      <Trash2 className="h-3 w-3" />
                    </button>
                  </Badge>
                ))}
              </div>
            </div>

            {savedSuccess && (
              <div className="p-3 bg-emerald-500/10 text-emerald-600 dark:text-emerald-400 rounded-lg text-xs font-medium flex items-center gap-2">
                <CheckCircle2 className="h-4 w-4" /> Company profile changes saved!
              </div>
            )}

            <Button type="submit" className="h-11 text-sm font-semibold">
              Save Profile Changes
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  )
}
