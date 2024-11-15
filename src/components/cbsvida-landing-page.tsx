'use client'

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { CardContent, Card } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import Image from "next/image"
import Link from "next/link"

export function CbsvidaLandingPage() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [currentLanguage, setCurrentLanguage] = useState("EN")

  const languages = [
    { code: "EN", name: "English" },
    { code: "ES", name: "Español" },
    { code: "PT", name: "Português" },
    { code: "CH", name: "Chinese" },
    { code: "RS", name: "Russian" },
  ]

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <header className="px-4 lg:px-6 h-16 flex items-center justify-between border-b border-gray-200">
        <Link className="flex items-center justify-center" href="#">
          <Image
            src="/placeholder.svg?height=40&width=40"
            alt="CBSVida Logo"
            width={40}
            height={40}
            className="h-10 w-10"
          />
          <span className="ml-2 text-2xl font-bold text-stone-800">CBSVida</span>
        </Link>
        <nav className="hidden md:flex ml-auto gap-4 sm:gap-6">
          <Link className="text-sm font-medium text-stone-600 hover:text-stone-900" href="#approach">
            Our Approach
          </Link>
          <Link className="text-sm font-medium text-stone-600 hover:text-stone-900" href="#programs">
            Programs
          </Link>
          <Link className="text-sm font-medium text-stone-600 hover:text-stone-900" href="#testimonials">
            Testimonials
          </Link>
          <Link className="text-sm font-medium text-stone-600 hover:text-stone-900" href="#contact">
            Contact
          </Link>
        </nav>
        <Sheet open={isMenuOpen} onOpenChange={setIsMenuOpen}>
          <SheetTrigger asChild>
            <Button variant="outline" size="icon" className="md:hidden">
              <svg
                className=" h-6 w-6"
                fill="none"
                height="24"
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                width="24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <line x1="4" x2="20" y1="12" y2="12" />
                <line x1="4" x2="20" y1="6" y2="6" />
                <line x1="4" x2="20" y1="18" y2="18" />
              </svg>
              <span className="sr-only">Toggle menu</span>
            </Button>
          </SheetTrigger>
          <SheetContent side="right">
            <nav className="flex flex-col gap-4">
              <Link className="text-sm font-medium text-stone-600 hover:text-stone-900" href="#approach">
                Our Approach
              </Link>
              <Link className="text-sm font-medium text-stone-600 hover:text-stone-900" href="#programs">
                Programs
              </Link>
              <Link className="text-sm font-medium text-stone-600 hover:text-stone-900" href="#testimonials">
                Testimonials
              </Link>
              <Link className="text-sm font-medium text-stone-600 hover:text-stone-900" href="#contact">
                Contact
              </Link>
            </nav>
          </SheetContent>
        </Sheet>
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline" size="sm">
              {currentLanguage}
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            {languages.map((lang) => (
              <DropdownMenuItem key={lang.code} onSelect={() => setCurrentLanguage(lang.code)}>
                {lang.name}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
      </header>
      <main className="flex-1">
        <section className="w-full py-12 md:py-24 lg:py-32 xl:py-48 bg-gradient-to-r from-blue-50 to-white">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none text-stone-800">
                  Integrated Addiction Treatment
                </h1>
                <p className="mx-auto max-w-[700px] text-stone-600 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
                  Combining modern medicine with Andean and Amazonic healing traditions for dignified, holistic recovery.
                </p>
              </div>
              <div className="space-x-4">
                <Button className="bg-blue-600 text-white hover:bg-blue-700">
                  Schedule Confidential Consultation
                </Button>
                <Button variant="outline" className="text-blue-600 border-blue-600 hover:bg-blue-50">
                  Learn More
                </Button>
              </div>
            </div>
          </div>
        </section>
        <section id="approach" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8 text-stone-800">
              Our Integrated Approach
            </h2>
            <div className="grid gap-6 lg:grid-cols-2 items-center">
              <Image
                src="/placeholder.svg?height=400&width=600"
                alt="Integrated Treatment Approach"
                width={600}
                height={400}
                className="rounded-lg object-cover"
              />
              <div className="space-y-4">
                <h3 className="text-2xl font-bold text-stone-800">Bridging Two Worlds of Healing</h3>
                <p className="text-stone-600">
                  At CBSVida, we combine evidence-based modern medical treatments with respected Andean and Amazonic
                  healing practices. This unique integration offers a comprehensive approach to addiction recovery,
                  addressing both physical and spiritual aspects of healing.
                </p>
                <ul className="space-y-2 text-stone-600">
                  <li className="flex items-center">
                    <svg
                      className=" text-green-600 h-5 w-5 mr-2"
                      fill="none"
                      height="24"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    Evidence-based medical treatments
                  </li>
                  <li className="flex items-center">
                    <svg
                      className=" text-green-600 h-5 w-5 mr-2"
                      fill="none"
                      height="24"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    Traditional Andean and Amazonic healing ceremonies
                  </li>
                  <li className="flex items-center">
                    <svg
                      className=" text-green-600 h-5 w-5 mr-2"
                      fill="none"
                      height="24"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    Psychological and emotional support
                  </li>
                  <li className="flex items-center">
                    <svg
                      className=" text-green-600 h-5 w-5 mr-2"
                      fill="none"
                      height="24"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      viewBox="0 0 24 24"
                      width="24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <polyline points="20 6 9 17 4 12" />
                    </svg>
                    Cultural integration and respect
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section id="programs" className="w-full py-12 md:py-24 lg:py-32 bg-stone-100">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8 text-stone-800">
              Our Treatment Programs
            </h2>
            <Tabs defaultValue="medical" className="w-full max-w-3xl mx-auto">
              <TabsList className="grid w-full grid-cols-2">
                <TabsTrigger value="medical">Modern Medical Care</TabsTrigger>
                <TabsTrigger value="traditional">Traditional Healing</TabsTrigger>
              </TabsList>
              <TabsContent value="medical">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-4 text-stone-800">Evidence-Based Medical Treatment</h3>
                    <ul className="space-y-2 text-stone-600">
                      <li>Medically supervised detoxification</li>
                      <li>Medication-assisted treatment (MAT)</li>
                      <li>Cognitive Behavioral Therapy (CBT)</li>
                      <li>Group and individual counseling</li>
                      <li>Dual diagnosis treatment for co-occurring disorders</li>
                    </ul>
                  </CardContent>
                </Card>
              </TabsContent>
              <TabsContent value="traditional">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="text-xl font-bold mb-4 text-stone-800">Andean and Amazonic Healing Practices</h3>
                    <ul className="space-y-2 text-stone-600">
                      <li>Traditional plant medicine ceremonies (under medical supervision)</li>
                      <li>Energy healing and cleansing rituals</li>
                      <li>Ancestral wisdom teachings</li>
                      <li>Connection with nature and the elements</li>
                      <li>Community healing circles</li>
                    </ul>
                  </CardContent>
                </Card>
              </TabsContent>
            </Tabs>
          </div>
        </section>
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8 text-stone-800">
              Our Commitment to You
            </h2>
            <div className="grid gap-6 lg:grid-cols-3">
              <Card>
                <CardContent className="p-6">
                  <svg
                    className=" h-12 w-12 text-blue-600 mb-4"
                    fill="none"
                    height="24"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                  </svg>
                  <h3 className="text-xl font-bold mb-2 text-stone-800">Dignified Care</h3>
                  <p className="text-stone-600">
                    We treat every individual with respect, compassion, and dignity throughout their recovery journey.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <svg
                    className=" h-12 w-12 text-blue-600 mb-4"
                    fill="none"
                    height="24"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M8.9 8.9 6 6l-3 3 2.9 2.9" />
                    <path d="M6 6s2-2 4-2 3 1 4 2 2 3 2 4-1 3-2 4-3 2-4 2-3-1-4-2-2-3-2-4 1-3 2-4" />
                    <path d="M15.1 15.1 18 18l3-3-2.9-2.9" />
                    <path d="M18 18s-2 2-4 2-3-1-4-2-2-3-2-4 1-3 2-4 3-2 4-2 3 1 4 2 2 3 2 4-1 3-2 4" />
                  </svg>
                  <h3 className="text-xl font-bold mb-2 text-stone-800">Cultural Integration</h3>
                  <p className="text-stone-600">
                    Our approach honors and integrates both modern and traditional healing practices for holistic recovery.
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <svg
                    className=" h-12 w-12 text-blue-600 mb-4"
                    fill="none"
                    height="24"
                    stroke="currentColor"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    width="24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1-2.5-2.5Z" />
                    <path d="M6 2v20" />
                    <path d="M12 13V7" />
                    <path d="M12 18v-2" />
                  </svg>
                  <h3 className="text-xl font-bold mb-2 text-stone-800">Evidence-Based</h3>
                  <p className="text-stone-600">
                    Our treatments are grounded in scientific research and proven medical practices for safe, effective care.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section id="testimonials" className="w-full py-12 md:py-24 lg:py-32 bg-stone-100">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-center mb-8 text-stone-800">
              Recovery Stories
            </h2>
            <div className="grid gap-6 lg:grid-cols-2">
              <Card>
                <CardContent className="p-6">
                  <p className="text-stone-600 mb-4">
                    "CBSVida's unique approach combining modern medicine with our traditional practices helped me reconnect
                    with my roots and find lasting recovery. I'm grateful for their culturally sensitive care."
                  </p>
                  <p className="font-semibold text-stone-800">- Maria L., La Paz</p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6">
                  <p className="text-stone-600 mb-4">
                    "The holistic treatment at CBSVida addressed not just my addiction, but my whole being. The
                    integration of Andean healing traditions made all the difference in my journey to sobriety."
                  </p>
                  <p className="font-semibold text-stone-800">- Carlos R., Santa Cruz</p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
        <section id="contact" className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col items-center space-y-4 text-center">
              <div className="space-y-2">
                <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-stone-800">Contact Us</h2>
                <p className="max-w-[600px] text-stone-600 md:text-xl">
                  Take the first step towards recovery. Reach out to us for more information or to schedule a confidential consultation.
                </p>
              </div>
              <div className="w-full max-w-sm space-y-2">
                <form className="flex flex-col space-y-4">
                  <Input placeholder="Your Name" type="text" />
                  <Input placeholder="Your Email" type="email" />
                  <Textarea placeholder="Your Message" />
                  <Button type="submit" className="bg-blue-600 text-white hover:bg-blue-700">
                    Send Message
                  </Button>
                </form>
              </div>
              <div className="flex flex-col items-center space-y-2 text-stone-600">
                <p>24/7 Confidential Helpline: +591 123 456 789</p>
                <p>Email: info@cbsvida.com</p>
                <p>Address: 123 Healing Street, La Paz, Bolivia</p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="flex flex-col gap-2 sm:flex-row py-6 w-full shrink-0 items-center px-4 md:px-6 border-t border-stone-200">
        <p className="text-xs text-stone-600">© 2024 CBSVida. All rights reserved.</p>
        <nav className="sm:ml-auto flex gap-4 sm:gap-6">
          <Link className="text-xs hover:underline underline-offset-4 text-stone-600" href="#">
            Terms of Service
          </Link>
          <Link className="text-xs hover:underline underline-offset-4 text-stone-600" href="#">
            Privacy Policy
          </Link>
          <Link className="text-xs hover:underline underline-offset-4 text-stone-600" href="#">
            Accessibility
          </Link>
        </nav>
      </footer>
    </div>
  )
}

export default CbsvidaLandingPage;