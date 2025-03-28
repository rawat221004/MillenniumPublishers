import Link from "next/link"
import Image from "next/image"
import { ChevronRight } from "lucide-react"

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
                <h2 className="text-xl font-bold">The 5 AM Club – Own Your Morning. Elevate Your Life</h2>
                <p className="text-muted-foreground">
                  by{" "}
                  <Link href="#" className="text-primary hover:underline">
                    Robin Sharma
                  </Link>
                </p>

                <div className="bg-yellow-100 text-yellow-800 px-2 py-1 rounded text-sm inline-block">Buy On Amazon</div>

                <p className="text-sm text-muted-foreground">
                  Introducing the Acme Prism T-Shirt, a perfect blend of style and comfort for the modern individual.
                  This tee is crafted with a meticulous composition of 60% combed ringspun cotton and 40% polyester
                  jersey, ensuring a soft and breathable fabric that feels gentle against the skin.
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
                  Money Smart in Your 20s & 30s - Beginners' Handbook for Financial Fitness in India
                </h2>
                <p className="text-muted-foreground">
                  by{" "}
                  <Link href="#" className="text-primary hover:underline">
                    Zebra Learn
                  </Link>
                </p>

                <div className="bg-green-100 text-green-800 px-2 py-1 rounded text-sm inline-block">Buy On Amazon</div>

                <p className="text-sm text-muted-foreground">
                  A comprehensive guide to managing your finances in your early adult years. This book covers investing,
                  mutual funds, tax planning, retirement planning, insurances, stocks and more to help you achieve
                  financial independence.
                </p>
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
                  Dopamine Detox: A Short Guide to Remove Distractions and Get Your Brain to Do Hard Things
                </h2>
                <p className="text-muted-foreground">
                  by{" "}
                  <Link href="#" className="text-primary hover:underline">
                    Thibaut Meurisse
                  </Link>
                </p>

                <div className="bg-purple-100 text-purple-800 px-2 py-1 rounded text-sm inline-block">Productivity</div>

                <p className="text-sm text-muted-foreground">
                  Learn how to break free from distractions and addictive behaviors by understanding how dopamine
                  affects your brain. This practical guide provides strategies to increase focus, productivity and
                  accomplish difficult tasks.
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
                <h2 className="text-xl font-bold">The 5 AM Club – Own Your Morning. Elevate Your Life</h2>
                <p className="text-muted-foreground">
                  by{" "}
                  <Link href="#" className="text-primary hover:underline">
                    Robin Sharma
                  </Link>
                </p>

                <div className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm inline-block">Buy On Amazon
                </div>

                <p className="text-sm text-muted-foreground">
                  Introducing the Acme Prism T-Shirt, a perfect blend of style and comfort for the modern individual.
                  This tee is crafted with a meticulous composition of 60% combed ringspun cotton and 40% polyester
                  jersey, ensuring a soft and breathable fabric that feels gentle against the skin.
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

                <div className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm inline-block">Buy On Amazon
</div>

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

