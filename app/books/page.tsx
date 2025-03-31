"use client"

import Link from "next/link"
import Image from "next/image"
import { ChevronRight, Menu, X } from "lucide-react"
import { useState } from "react"

function MobileNav() {
  const [open, setOpen] = useState(false)

  return (
    <div className="md:hidden">
      <button
        onClick={() => setOpen(!open)}
        className="inline-flex h-10 w-10 items-center justify-center rounded-md bg-primary text-primary-foreground p-2.5 transition-all hover:bg-primary/90"
        aria-label="Toggle Menu"
      >
        {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
      </button>

      {open && (
        <div 
          style={{ backgroundColor: "#2563eb" }} // Explicit blue color
          className="fixed inset-0 top-16 z-[100] border-t animate-in slide-in-from-left duration-300 h-[100vh] w-full"
        >
          <div className="container py-8">
            <div className="grid gap-8 py-6">
              <div className="border-l-4 border-primary-foreground pl-6">
                <Link
                  href="/"
                  className="flex items-center gap-3 text-lg font-medium transition-colors hover:text-primary-foreground/80"
                  onClick={() => setOpen(false)}
                >
                  Home
                </Link>
              </div>
              <div className="border-l-4 border-primary-foreground/90 pl-6">
                <Link
                  href="/about"
                  className="flex items-center gap-3 text-lg font-medium transition-colors hover:text-primary-foreground/80"
                  onClick={() => setOpen(false)}
                >
                  About Us
                </Link>
              </div>
              <div className="border-l-4 border-primary-foreground/80 pl-6">
                <Link
                  href="/books"
                  className="flex items-center gap-3 text-lg font-medium transition-colors hover:text-primary-foreground/80"
                  onClick={() => setOpen(false)}
                >
                  Books
                </Link>
              </div>
              <div className="border-l-4 border-primary-foreground/70 pl-6">
                <Link
                  href="/proposal"
                  className="flex items-center gap-3 text-lg font-medium transition-colors hover:text-primary-foreground/80"
                  onClick={() => setOpen(false)}
                >
                  Book Proposal
                </Link>
              </div>
              <div className="border-l-4 border-primary-foreground/60 pl-6">
                <Link
                  href="/publishers"
                  className="flex items-center gap-3 text-lg font-medium transition-colors hover:text-primary-foreground/80"
                  onClick={() => setOpen(false)}
                >
                  Publishers
                </Link>
              </div>
              <div className="border-l-4 border-primary-foreground/50 pl-6">
                <Link
                  href="/subjects"
                  className="flex items-center gap-3 text-lg font-medium transition-colors hover:text-primary-foreground/80"
                  onClick={() => setOpen(false)}
                >
                  Subjects
                </Link>
              </div>
            </div>

            <div className="mt-12 flex justify-center">
              <Link
                href="/#contact"
                className="inline-flex h-12 items-center justify-center rounded-md bg-background px-8 text-base font-medium text-primary shadow transition-colors hover:bg-background/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
                onClick={() => setOpen(false)}
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <Link href="/">
              <Image
                src="/fulllogo-removebg.png"
                alt="Millennium Enterprises Logo"
                width={120}
                height={40}
                className="object-contain h-20 w-auto"
              />
            </Link>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link href="/" className="text-sm font-medium transition-colors hover:text-primary">
              Home
            </Link>
            <Link href="/about" className="text-sm font-medium transition-colors hover:text-primary">
              About Us
            </Link>
            <Link href="/books" className="text-sm font-medium transition-colors hover:text-primary">
              Books
            </Link>
            <Link href="/proposal" className="text-sm font-medium transition-colors hover:text-primary">
              Book Proposal
            </Link>
            <Link href="/publishers" className="text-sm font-medium transition-colors hover:text-primary">
              Publishers
            </Link>
            <Link href="/subjects" className="text-sm font-medium transition-colors hover:text-primary">
              Subjects
            </Link>
          </nav>
          <div className="flex items-center gap-4">
            <MobileNav />
            <Link
              href="/#contact"
              className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow transition-colors hover:bg-primary/90 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring"
            >
              Enquiry
            </Link>
          </div>
        </div>
      </header>
      <main className="flex-1">
        <section className="container py-8 md:py-12">
            <h1 className="text-3xl font-bold tracking-tight mb-6 text-center">Featured Books</h1>


          <div className="space-y-8">
            {/* Book Item 1 */}
            <div className="flex flex-col md:flex-row gap-6 border rounded-lg p-4 hover:shadow-md transition-shadow">
              <div className="w-full md:w-48 flex-shrink-0">
                <Image
                  src="/book1.png?height=300&width=200"
                  alt="The 5 AM Club"
                  width={200}
                  height={300}
                  className="object-cover w-full h-auto rounded-md"
                />
              </div>
              <div className="flex-1 space-y-3">
                <h2 className="text-xl font-bold">L&T Body Of Knowledge - Case Studies Volume 2
                </h2>
                <p className="text-muted-foreground">
                  by{" "}
                  <div className="text-primary"> Prof. Rajiv Nehru, Dr. Debopam Roy, Dr.Aviraj Bajpai, Dr. Dharmendra Trivedi </div>
                </p>

                <a href="https://www.amazon.com/dp/B07JZHCZ9Y" target="_blank" rel="noopener noreferrer" className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-sm inline-block hover:bg-yellow-200 transition-colors">Buy On Amazon</a>

                <p className="text-sm text-muted-foreground">
                Larsen & Toubro is an Indian multinational engaged in EPC Projects, Hi-Tech Manufacturing and
Services. It operates in over 50 countries worldwide.
A strong, customer–focused approach and the constant quest for top-class quality have enabled
L&T to attain and sustain leadership in its major lines of business for over eight decades.
L&T addresses critical needs in core, high-impact sectors of the economy - Hydrocarbon,
Infrastructure, Power, Process Industries, and Defence – and its integrated capabilities span the
entire spectrum of design-to-deliver. 
                </p>
              </div>
            </div>

            {/* Book Item 2 */}
            <div className="flex flex-col md:flex-row gap-6 border rounded-lg p-4 hover:shadow-md transition-shadow">
              <div className="w-full md:w-48 flex-shrink-0">
                <Image
                  src="/book2.png?height=300&width=200"
                  alt="Money Smart in Your 20s & 30s"
                  width={200}
                  height={300}
                  className="object-cover w-full h-auto rounded-md"
                />
              </div>
              <div className="flex-1 space-y-3">
                <h2 className="text-xl font-bold">
                Intelligent Forencis - Innovations and Applications
                </h2>
                <p className="text-muted-foreground">
                  by{" "}
                  <div className="text-primary ">
                  Dr. Nilakshi Jain & Maj. Vineet Kumar
                  </div>
                </p>

                <a href="https://www.amazon.com/dp/B07JZHCZ9Y" target="_blank" rel="noopener noreferrer" className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-sm inline-block hover:bg-yellow-200 transition-colors">Buy On Amazon</a>

                <p className="text-sm text-muted-foreground">
                  Unveiling the Future of Forensics with Al and Machine Learning! With the rise of sophisticated cybercrimes, traditional forensic techniques are no longer sufficient. Intelligent Forensics: Innovation and Application provides a groundbreaking exploration into Al-driven forensic investigations. Whether you are a student, an investigator, or a cybersecurity expert, this book equips you with the knowledge and tools to master intelligent forensics.Inside, you'll find: Foundational principles of digital forensics and Al integration. • Real-world case studies on cybercrime investigations. Advanced forensic tools and ML. algorithms. • Ethical and legal considerations in Al-driven forensic investigations. Hands-on exercises to build practical expertise. Career pathways in the field of digital forensics. Stay ahead in the ever-evolving world of cybersecurity with this essential guide to intelligent forensics! </p>
              </div>
            </div>

            {/* Book Item 3 */}
            <div className="flex flex-col md:flex-row gap-6 border rounded-lg p-4 hover:shadow-md transition-shadow">
              <div className="w-full md:w-48 flex-shrink-0">
                <Image
                  src="/book3.png?height=300&width=200"
                  alt="Dopamine Detox"
                  width={200}
                  height={300}
                  className="object-cover w-full h-auto rounded-md"
                />
              </div>
              <div className="flex-1 space-y-3">
                <h2 className="text-xl font-bold">
                Project Management for Profitable Growth
                </h2>
                <p className="text-muted-foreground">
                  by{" "}
                  <div className="text-primary ">
                  By Prof. Rajiv Nehru, Dr. Hiren Maniar, Dr. Ravindra Shrivastava, Dr. Dharmendra Trivedi
                  </div>
                </p>

                <a href="https://www.amazon.com/dp/B07JZHCZ9Y" target="_blank" rel="noopener noreferrer" className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-sm inline-block hover:bg-yellow-200 transition-colors">Buy On Amazon</a>

                <p className="text-sm text-muted-foreground">
                Larsen & Toubro is an Indian multinational engaged in EPC Projects, Hi-Tech Manufacturing and Services. It operates in over 50 countries worldwide. A strong, customer–focused approach and the constant quest for top-class quality have enabled L&T to attain and sustain leadership in its major lines of business for over eight decades. L&T addresses critical needs in core, high-impact sectors of the economy - Hydrocarbon, Infrastructure, Power, Process Industries, and Defence – and its integrated capabilities span the entire spectrum of design-to-deliver.
                </p>
              </div>
            </div>

              {/* Book Item 4 */}
              <div className="flex flex-col md:flex-row gap-6 border rounded-lg p-4 hover:shadow-md transition-shadow">
              <div className="w-full md:w-48 flex-shrink-0">
                <Image
                  src="/coming.jpg?height=300&width=200"
                  alt="The 5 AM Club"
                  width={200}
                  height={300}
                  className="object-cover w-full h-auto rounded-md"
                />
              </div>
              <div className="flex-1 space-y-3">
                <h2 className="text-xl font-bold">Proceeding of Technology Conclave -IX (2024) - Industrial Process Automation</h2>
                <p className="text-muted-foreground">
                  by{" "}
                  <div className="text-primary ">
                  Mr.Nishad Mehta, Mr. Rajnikant Ghodasara, Mrs.Shobha Arun
                  </div>
                </p>

                <a href="https://www.amazon.com/dp/B07JZHCZ9Y" target="_blank" rel="noopener noreferrer" className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-sm inline-block hover:bg-yellow-200 transition-colors">Buy On Amazon</a>
                

                <p className="text-sm text-muted-foreground">
                Industrial Process Automation presents a comprehensive collection of research papers, case studies, and innovative solutions focused on the advancements in industrial automation. This volume highlights cutting-edge technologies and methodologies that are reshaping industrial processes, enhancing efficiency, and improving productivity. It serves as a valuable resource for engineers, researchers, and industry professionals seeking insights into the latest trends in automation, AI-driven control systems, and process optimization. The conclave's proceedings reflect the collaboration between academia and industry to drive innovation in the rapidly evolving field of industrial process automation.
                </p>
              </div>
            </div>

  {/* Book Item 5 */}
  {/* <div className="flex flex-col md:flex-row gap-6 border rounded-lg p-4 hover:shadow-md transition-shadow">
              <div className="w-full md:w-48 flex-shrink-0">
                <Image
                  src="/placeholder.svg?height=300&width=200"
                  alt="The 5 AM Club"
                  width={200}
                  height={300}
                  className="object-cover w-full h-auto rounded-md"
                />
              </div>
              <div className="flex-1 space-y-3">
                <h2 className="text-xl font-bold">The 5 AM Club – Own Your Morning. Elevate Your Life</h2>
                <p className="text-muted-foreground">
                  by{" "}
                  <Link href="#" className="text-primary hover:underline">
                    Robin Sharma
                  </Link>
                </p>

                <a href="https://www.amazon.com/dp/B07JZHCZ9Y" target="_blank" rel="noopener noreferrer" className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-sm inline-block hover:bg-yellow-200 transition-colors">Buy On Amazon</a>


                <p className="text-sm text-muted-foreground">
                  Introducing the Acme Prism T-Shirt, a perfect blend of style and comfort for the modern individual.
                  This tee is crafted with a meticulous composition of 60% combed ringspun cotton and 40% polyester
                  jersey, ensuring a soft and breathable fabric that feels gentle against the skin.
                </p>
              </div>
            </div> */}


          </div>


        </section>
      </main>

      <footer className="w-full border-t bg-background py-6 md:py-8">
        <div className="container flex flex-col items-center justify-center gap-4 px-4 md:px-6 md:flex-row md:justify-between">
          <div className="flex items-center gap-2">
            <Link href="/">
              <Image
                src="/fulllogo-removebg.png"
                alt="Millennium Enterprises Logo"
                width={150}
                height={40}
                className="object-contain"
              />
            </Link>
          </div>
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Millennium Enterprises. All rights reserved.
          </p>
          <div className="flex gap-4">
            {/* <Link href="#" className="text-sm font-medium hover:underline underline-offset-4">
              Privacy Policy
            </Link> */}
            <Link href="/about" className="text-sm font-medium hover:underline underline-offset-4">
              Terms of Service
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

