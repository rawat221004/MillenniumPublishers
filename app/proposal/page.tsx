"use client"

import Link from "next/link"
import Image from "next/image"
import LocationDropdowns from "./LocationDropdowns"
import { Menu, X } from "lucide-react"
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
              <div className="border-l-4 border-primary-foreground/70 pl-6">
                <Link
                  href="/books"
                  className="flex items-center gap-3 text-lg font-medium transition-colors hover:text-primary-foreground/80"
                  onClick={() => setOpen(false)}
                >
                  Books
                </Link>
              </div>
              <div className="border-l-4 border-primary-foreground/60 pl-6">
                <Link
                  href="/subjects"
                  className="flex items-center gap-3 text-lg font-medium transition-colors hover:text-primary-foreground/80"
                  onClick={() => setOpen(false)}
                >
                  Subjects
                </Link>
              </div>
              <div className="border-l-4 border-primary-foreground/50 pl-6">
                <Link
                  href="/publishers"
                  className="flex items-center gap-3 text-lg font-medium transition-colors hover:text-primary-foreground/80"
                  onClick={() => setOpen(false)}
                >
                  Publishers
                </Link>
              </div>
              <div className="border-l-4 border-primary-foreground/40 pl-6">
                <Link
                  href="/proposal"
                  className="flex items-center gap-3 text-lg font-medium transition-colors hover:text-primary-foreground/80"
                  onClick={() => setOpen(false)}
                >
                  Book Proposal
                </Link>
              </div>
              <div className="border-l-4 border-primary-foreground/30 pl-6">
                <Link
                  href="/about"
                  className="flex items-center gap-3 text-lg font-medium transition-colors hover:text-primary-foreground/80"
                  onClick={() => setOpen(false)}
                >
                  AboutUs
                </Link>
              </div>
            </div>

            <div className="mt-12 flex justify-center">
              <Link
                href="#contact"
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
            <Link href="/books" className="text-sm font-medium transition-colors hover:text-primary">
              Books
            </Link>
            <Link href="/subjects" className="text-sm font-medium transition-colors hover:text-primary">
              Subjects
            </Link>
            <Link href="/publishers" className="text-sm font-medium transition-colors hover:text-primary">
              Publishers
            </Link>
            <Link href="/proposal" className="text-sm font-medium transition-colors hover:text-primary">
              Book Proposal
            </Link>
            <Link href="/about" className="text-sm font-medium transition-colors hover:text-primary">
              AboutUs
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
        <div className="container py-8 px-4 md:px-6">
          <h1 className="text-3xl font-bold mb-6 text-center">Book Proposal Form</h1>

          <form className="space-y-6 max-w-4xl mx-auto">
            {/* Title Section */}
            <div className="border rounded-md overflow-hidden">
              <div className="bg-blue-800 text-white p-2 font-medium">Title</div>
              <div className="p-4">
                <div className="space-y-2">
                  <label htmlFor="proposedTitle" className="text-sm">
                    Proposed Title*
                  </label>
                  <input type="text" id="proposedTitle" className="w-full border rounded-md p-2" required />
                </div>
              </div>
            </div>

            {/* Status of Manuscript */}
            <div className="border rounded-md overflow-hidden">
              <div className="bg-blue-800 text-white p-2 font-medium">Status of Manuscript</div>
              <div className="p-4">
                <div className="flex flex-wrap gap-6">
                  <label className="flex items-center gap-2">
                    <input type="radio" name="status" value="planning" />
                    Planning to write
                  </label>
                  <label className="flex items-center gap-2">
                    <input type="radio" name="status" value="completed" />
                    Completed
                  </label>
                  <label className="flex items-center gap-2">
                    <input type="radio" name="status" value="partiallyCompleted" />
                    Partially Completed
                  </label>
                </div>
              </div>
            </div>

            {/* Author Information */}
            <div className="border rounded-md overflow-hidden">
              <div className="bg-blue-800 text-white p-2 font-medium">
                Name of Author(s) / Editor(s) with Affiliation
              </div>
              <div className="p-4 space-y-4">
                <div className="space-y-2">
                  <label htmlFor="name" className="text-sm">
                    Name*
                  </label>
                  <input type="text" id="name" className="w-full border rounded-md p-2" required />
                </div>

                <div className="space-y-2">
                  <label htmlFor="address" className="text-sm">
                    Corresponding Address*
                  </label>
                  <input type="text" id="address" className="w-full border rounded-md p-2" required />
                </div>

                {/* Location Dropdowns Component */}
                <LocationDropdowns />

                <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="pinCode" className="text-sm">
                      Pin Code*
                    </label>
                    <input type="text" id="pinCode" className="w-full border rounded-md p-2" required />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="contactNo" className="text-sm">
                      Contact No*
                    </label>
                    <input type="tel" id="contactNo" className="w-full border rounded-md p-2" required />
                  </div>
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm">
                      E-mail*
                    </label>
                    <input type="email" id="email" className="w-full border rounded-md p-2" required />
                  </div>
                </div>
              </div>
            </div>

            {/* CV Upload */}
            <div className="border rounded-md overflow-hidden">
              <div className="bg-blue-800 text-white p-2 font-medium">
                Please attach your CV and list of publications, if any
              </div>
              <div className="p-4">
                <input
                  type="file"
                  className="block w-full text-sm text-slate-500
                    file:mr-4 file:py-2 file:px-4
                    file:rounded-md file:border-0
                    file:text-sm file:font-semibold
                    file:bg-primary file:text-primary-foreground
                    hover:file:bg-primary/90"
                />
                <p className="text-xs text-gray-500 mt-1">( Only DOC, DOCX, RTF or PDF file can be uploaded )*</p>
              </div>
            </div>

            {/* Book Description */}
            <div className="border rounded-md overflow-hidden">
              <div className="p-4 space-y-4">
                <div className="space-y-2">
                  <label htmlFor="description" className="text-sm font-medium">
                    Description:
                  </label>
                  <p className="text-xs text-gray-600">
                    The Aims of the Book, Its Scope, Approach, Special Features and Merits. In case of New Edition,
                    provide the differences from the previous Edition and Reason(s) for the Revision.
                  </p>
                  <textarea id="description" className="w-full border rounded-md p-2 min-h-[100px]"></textarea>
                </div>
              </div>
            </div>

            {/* Remaining form elements */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="topics" className="text-sm font-medium">
                  Topics to be covered?*
                </label>
                <textarea id="topics" className="w-full border rounded-md p-2 min-h-[100px]" required></textarea>
              </div>
              <div className="space-y-2">
                <label htmlFor="shelving" className="text-sm font-medium">
                  Shelving / Subjects*
                </label>
                <textarea id="shelving" className="w-full border rounded-md p-2 min-h-[100px]" required></textarea>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="targetReadership" className="text-sm font-medium">
                  Target Readership*
                </label>
                <textarea
                  id="targetReadership"
                  className="w-full border rounded-md p-2 min-h-[100px]"
                  required
                ></textarea>
              </div>
              <div className="space-y-2">
                <label htmlFor="whyInterest" className="text-sm font-medium">
                  Why would it interest the target readership?*
                </label>
                <textarea id="whyInterest" className="w-full border rounded-md p-2 min-h-[100px]" required></textarea>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="competingTitles" className="text-sm font-medium">
                  List of competing titles*
                </label>
                <textarea
                  id="competingTitles"
                  className="w-full border rounded-md p-2 min-h-[100px]"
                  required
                ></textarea>
              </div>
              <div className="space-y-2">
                <label htmlFor="betterThan" className="text-sm font-medium">
                  How would your book be better than the competing titles?*
                </label>
                <textarea id="betterThan" className="w-full border rounded-md p-2 min-h-[100px]" required></textarea>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="international" className="text-sm font-medium">
                  Will it sell internationally and why?*
                </label>
                <textarea id="international" className="w-full border rounded-md p-2 min-h-[100px]" required></textarea>
              </div>
              <div className="space-y-2">
                <label htmlFor="size" className="text-sm font-medium">
                  Size (Approx. Extent of Manuscript)*
                </label>
                <textarea id="size" className="w-full border rounded-md p-2 min-h-[100px]" required></textarea>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="format" className="text-sm font-medium">
                  Suggested Format / Size*
                </label>
                <textarea id="format" className="w-full border rounded-md p-2 min-h-[100px]" required></textarea>
              </div>
              <div className="space-y-2">
                <label htmlFor="printRun" className="text-sm font-medium">
                  Print Run*
                </label>
                <textarea id="printRun" className="w-full border rounded-md p-2 min-h-[100px]" required></textarea>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label htmlFor="royalty" className="text-sm font-medium">
                  Division of Royalty if Joint Authors*
                </label>
                <textarea id="royalty" className="w-full border rounded-md p-2 min-h-[100px]" required></textarea>
              </div>
              <div className="space-y-2">
                <label htmlFor="requirements" className="text-sm font-medium">
                  Any Other Requirements?*
                </label>
                <textarea id="requirements" className="w-full border rounded-md p-2 min-h-[100px]" required></textarea>
              </div>
            </div>

            <div className="space-y-2">
              <label htmlFor="price" className="text-sm font-medium">
                Suggested Published Price*
              </label>
              <input type="text" id="price" className="w-full border rounded-md p-2" required />
            </div>

            {/* Illustrations */}
            <div className="space-y-2">
              <label className="text-sm font-medium">No. of Illustrations</label>
              <div className="flex flex-wrap gap-6">
                <label className="flex items-center gap-2">
                  <input type="checkbox" name="illustrations" value="bwLine" />
                  B/W Line
                </label>
                <label className="flex items-center gap-2">
                  <input type="checkbox" name="illustrations" value="bwPhotos" />
                  B/W Photos
                </label>
                <label className="flex items-center gap-2">
                  <input type="checkbox" name="illustrations" value="coloredPhotos" />
                  Colored Photos / Illustrations
                </label>
              </div>
            </div>

            {/* Suggested Type */}
            <div className="space-y-2">
              <label className="text-sm font-medium">Suggested Type</label>
              <div className="flex flex-wrap gap-6">
                <label className="flex items-center gap-2">
                  <input type="radio" name="suggestedType" value="hardbound" />
                  Hardbound
                </label>
                <label className="flex items-center gap-2">
                  <input type="radio" name="suggestedType" value="paperback" />
                  Paperback
                </label>
              </div>
            </div>

            {/* Binding Style */}
            <div className="space-y-2">
              <label className="text-sm font-medium">Binding Style</label>
              <div className="flex flex-wrap gap-6">
                <label className="flex items-center gap-2">
                  <input type="checkbox" name="bindingStyle" value="jacket" />
                  Jacket
                </label>
                <label className="flex items-center gap-2">
                  <input type="checkbox" name="bindingStyle" value="hbPaster" />
                  H/B Paster
                </label>
                <label className="flex items-center gap-2">
                  <input type="checkbox" name="bindingStyle" value="paperback" />
                  Paperback
                </label>
              </div>
            </div>

            {/* reCAPTCHA */}
            <div className="flex items-center justify-start">
              <div className="g-recaptcha" data-sitekey="your-recaptcha-site-key"></div>
            </div>

            {/* Submit Button */}
            <div>
              <button
                type="submit"
                className="bg-blue-800 text-white px-8 py-3 rounded-md font-medium hover:bg-blue-700 transition-colors"
              >
                SUBMIT
              </button>
            </div>
          </form>
        </div>
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
            <Link href="/about" className="text-sm font-medium hover:underline underline-offset-4">
              Terms of Service
            </Link>
          </div>
        </div>
      </footer>
    </div>
  )
}

