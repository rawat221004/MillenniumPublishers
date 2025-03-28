import Link from "next/link"
import Image from "next/image"

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
        <section className="w-full py-12 md:py-24 lg:py-32">
          <div className="container px-4 md:px-6">
            <div className="space-y-6 text-left">
              <h1 className="text-3xl font-serif tracking-tight sm:text-4xl md:text-5xl">About Us</h1>
              <p className="text-lg leading-relaxed text-muted-foreground">
                Welcome to Millennium Enterprises – your trusted partner in the world of books. Based in Mumbai, India,
                we pride ourselves on being a dynamic force in both book distribution and publishing. Our comprehensive
                approach bridges the gap between world-class publications and the readers, students, professionals, and
                institutions that depend on them.
              </p>
              <h2 className="text-2xl font-medium">Distribution</h2>
              <p className="text-lg leading-relaxed text-muted-foreground">
                Our distribution network is designed to ensure that quality literature reaches you swiftly and
                efficiently. As experienced booksellers and distributors, we supply an extensive range of printed and
                electronic books, covering textbooks, reference materials, and professional titles across diverse
                subjects. We maintain strong relationships with a multitude of renowned publishers and are proud to
                serve prominent universities and libraries throughout India. Our commitment to prompt service, proactive
                communication on new arrivals, and real-time order tracking ensures that every transaction is smooth and
                satisfactory.
              </p>
              <h2 className="text-2xl font-medium">Publishing</h2>
              <p className="text-lg leading-relaxed text-muted-foreground">
                Founded in 2024, our publishing division is dedicated to producing high-quality, accessible books
                tailored to the needs of readers, students, faculty, researchers, and professionals. At Millennium
                Enterprises, our publishing philosophy revolves around quality, affordability, and flexibility. We offer
                a variety of formats to suit every reader's preference and provide a streamlined online submission
                process that guarantees timely publication. Our titles are distributed widely through leading book
                distributors and are also available on major online platforms, including Amazon, ensuring global reach.
              </p>
              <h2 className="text-2xl font-medium">Our Vision and Commitment</h2>
              <p className="text-lg leading-relaxed text-muted-foreground">
                At Millennium Enterprises, we are driven by a passion for knowledge and a commitment to excellence. We
                continuously innovate and adapt to the evolving landscape of the literary world, integrating the latest
                technology and trends to enhance our services. Our goal is not only to distribute and publish books but
                also to foster a culture of learning and intellectual growth. We are dedicated to supporting educational
                institutions and individual readers alike by providing access to a vast repository of world-class
                literature.
              </p>
              <p className="text-lg leading-relaxed text-muted-foreground">
                By choosing Millennium Enterprises, you are partnering with a company that values quality, efficiency,
                and customer satisfaction above all. We look forward to connecting you with the best books from around
                the world and contributing to your academic, professional, and personal success.
              </p>
              <p className="text-lg leading-relaxed text-muted-foreground">
                Thank you for choosing Millennium Enterprises – where every book is a doorway to a new world of
                possibilities.
              </p>
            </div>
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

