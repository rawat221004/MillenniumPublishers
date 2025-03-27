import Link from "next/link"
import Image from "next/image"

export default function About() {
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
                className="object-contain h-16 w-auto"
              />
            </Link>
          </div>
          <nav className="hidden md:flex gap-6">
            <Link href="/" className="text-sm font-medium hover:text-primary">Home</Link>
            <Link href="/books" className="text-sm font-medium hover:text-primary">Books</Link>
            <Link href="/subjects" className="text-sm font-medium hover:text-primary">Subjects</Link>
            <Link href="/publishers" className="text-sm font-medium hover:text-primary">Publishers</Link>
            <Link href="/proposal" className="text-sm font-medium hover:text-primary">Book Proposal</Link>
            <Link href="/about" className="text-sm font-medium hover:text-primary">About Us</Link>
          </nav>
          <Link
            href="#contact"
            className="inline-flex h-9 items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground shadow hover:bg-primary/90"
          >
            Enquiry
          </Link>
        </div>
      </header>
      <main className="flex-1">
        <section className="py-16">
          <div className="container px-4 md:px-6 text-center">
            <h1 className="text-4xl font-serif tracking-tight mb-6">About Us</h1>
            <p className="text-lg leading-relaxed text-muted-foreground mb-8">
              Welcome to Millennium Enterprises – your trusted partner in the world of books. Based in Mumbai, India, we pride ourselves on being a dynamic force in both book distribution and publishing. Our comprehensive approach bridges the gap between world-class publications and the readers, students, professionals, and institutions that depend on them.
            </p>
            <h2 className="text-2xl font-medium mb-4">Distribution</h2>
            <p className="text-lg leading-relaxed text-muted-foreground mb-8">
              Our distribution network ensures quality literature reaches you swiftly and efficiently. We supply an extensive range of printed and electronic books, covering textbooks, reference materials, and professional titles across diverse subjects. We maintain strong relationships with renowned publishers and serve prominent universities and libraries throughout India.
            </p>
            <h2 className="text-2xl font-medium mb-4">Publishing</h2>
            <p className="text-lg leading-relaxed text-muted-foreground mb-8">
              Founded in 2024, our publishing division produces high-quality, accessible books tailored to the needs of readers, students, faculty, researchers, and professionals. Our titles are distributed widely through leading book distributors and are available on major online platforms, including Amazon.
            </p>
            <h2 className="text-2xl font-medium mb-4">Our Vision and Commitment</h2>
            <p className="text-lg leading-relaxed text-muted-foreground">
              At Millennium Enterprises, we are driven by a passion for knowledge and a commitment to excellence. We aim to foster a culture of learning and intellectual growth by providing access to a vast repository of world-class literature. Thank you for choosing Millennium Enterprises – where every book is a doorway to a new world of possibilities.
            </p>
          </div>
        </section>
        <section id="contact" className="py-16">
          <div className="container px-4 md:px-6 text-center">
            <h2 className="text-3xl font-serif tracking-tight mb-6">Connect With Us</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Have questions or interested in our publications? We'd love to hear from you.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-medium mb-4">Contact Information</h3>
                <p className="text-muted-foreground mb-2"><strong>Email:</strong> millenniumbookss@gmail.com</p>
                <p className="text-muted-foreground mb-2"><strong>Phone:</strong> +91-9819828188 / +91-8657502418</p>
                <p className="text-muted-foreground"><strong>Address:</strong> C/5-C, Mangaldas Wadi, Opp Temple, Naaz Cinema Compound 393, Lamington Road, Mumbai - 400 004</p>
              </div>
              <div>
                <form className="space-y-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium mb-1">Name</label>
                    <input
                      id="name"
                      className="w-full rounded-md border px-3 py-2 text-sm"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
                    <input
                      id="email"
                      type="email"
                      className="w-full rounded-md border px-3 py-2 text-sm"
                      placeholder="Your email"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-1">Message</label>
                    <textarea
                      id="message"
                      className="w-full rounded-md border px-3 py-2 text-sm"
                      placeholder="Your message"
                      rows={4}
                    ></textarea>
                  </div>
                  <button className="w-full rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground hover:bg-primary/90">
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <footer className="border-t bg-background py-6">
        <div className="container flex flex-col md:flex-row justify-between items-center gap-4 px-4">
          <Link href="/">
            <Image 
              src="/fulllogo-removebg.png" 
              alt="Millennium Enterprises Logo" 
              width={150} 
              height={40} 
              className="object-contain"
            />
          </Link>
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} Millennium Enterprises. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link href="#" className="text-sm font-medium hover:underline">Privacy Policy</Link>
            <Link href="#" className="text-sm font-medium hover:underline">Terms of Service</Link>
          </div>
        </div>
      </footer>
    </div>
  )
}
