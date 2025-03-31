"use client"
import Link from "next/link"
import Image from "next/image"
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

const publishersData = [
  "t&f/psychology press",
  "5m publishing",
  "a & j",
  "a k peters",
  "aakar books",
  "aaos",
  "abbeville press",
  "academic press",
  "actar",
  "adams media",
  "adarsh books",
  "addison wesley",
  "addison wesley longman",
  "addison wesley publishing company",
  "affiliated east west",
  "agri-biovet press",
  "aitbs",
  "aitbs publishers,india",
  "akademie verlage",
  "akreative",
  "aladdin",
  "alfred music",
  "allied publisher",
  "amacom",
  "aman publications",
  "ambra verlag",
  "amer psychiatric pub",
  "american academy of pediatrics",
  "american bar association",
  "american chemical society",
  "american mathematical society",
  "american psychiatric publishing, inc.",
  "ams",
  "amsterdam university press",
  "anamaya",
  "anchor",
  "ane books",
  "angus wilde pub.",
  "annual reviews",
  "anthem press",
  "apa publishing",
  "aph publishing",
  "apha",
  "apogee books",
  "apress",
  "archiworld",
  "arcler press",
  "arihant publications",
  "arnold / routledge",
  "artech house",
  "artech house/michigan press",
  "artis",
  "ashgate",
  "asian books",
  "asm",
  "asm press",
  "aspen publishers",
  "asq quality press",
  "astral publisher",
  "atlantic",
  "auerbach publications",
  "aurisreference",
  "auteur publishing",
  "authorhouse",
  "ava",
  "avid reader press",
  "award publications",
  "awwa",
  "back bay books",
  "bailliere tindall",
  "baker books",
  "barbour books",
  "barrons",
  "barrons educational series inc.",
  "basic health publications",
  "bedford/st. martins",
  "benbella books",
  "berkley hardcover",
  "berrett-koehler pub",
  "biohealthcare publishing",
  "birkhauser",
  "black dog publisher",
  "blackwell publishing",
  "bloomsbury",
  "bloomsbury/abc clio",
  "bloomsbury/continuum",
  "bloomsbury/greenwood",
  "bloomsbury/libraries unlimited inc",
  "bna books",
  "bodleian libraries",
  "book selection centre",
  "books & projects",
  "booqs publisher",
  "bpb publications",
  "bramble co",
  "bridgeway books",
  "brill academic pub",
  "brillion publishing",
  "britannica",
  "broadcast interview",
  "broccoli books",
  "bsp",
  "burleigh dodds",
  "burleight dodds",
  "business expert press",
  "butterworth-heinemann",
  "button books",
  "c hurst & co publishers",
  "c&t publishing",
  "cabi",
  "cambridge archive editions",
  "cambridge india",
  "cambridge university press",
  "cartwheel",
  "cassell",
  "cbs",
  "cbs publishing",
  "ccba publisher",
  "cengage",
  "cengage india",
  "cengage learning",
  "cenve1",
  "channel view",
  "charles river media",
  "charotar publishing",
  "chelsea house publications",
  "chicago",
  "churchill livingstone",
  "clanrye international",
  "clever fox",
  "cold spring harbor laboratory press",
  "collins",
  "columbia university press",
  "concept publishing co.",
  "corwin press",
  "course technology",
  "course technology ptr",
  "crc /mbs",
  "crc press",
  "cshl press",
  "csiro publishing",
  "d. c. heath",
  "daniele tosi guido perrone",
  "daya publishing house",
  "de gruyter",
  "degruyter",
  "dekker",
  "delacorte press",
  "demaos medical",
  "demos health",
  "design media publishing ltd.",
  "deutscher kunstverlag",
  "dev publishers",
  "dhanpat rai & co. (p) ltd.",
  "discovery publishing house",
  "dk pub",
  "dna press",
  "dom publishers",
  "dom-publishers",
  "dorling kindersley",
  "dover",
  "dover publications",
  "dreamtech press",
  "dunedin",
  "ediciones universal",
  "edinberg university press",
  "edinburgh",
  "edward arnold",
  "edward elgar publishing",
  "elsevier",
  "elsevier india",
  "elsevier medical",
  "elsevier/chandos",
  "elsevier/churchill livingstone",
  "elsevier/gulf publishing",
  "elsevier/mosby",
  "elsevier/saunders",
  "elsevier/william andrew",
  "encyclopaedia britannica",
  "esri press",
  "eswar press",
  "ewp",
  "excel book",
  "f.a. davis company",
  "facet publishing",
  "fairchild",
  "farrar, straus and giroux (byr)",
  "fingerprint publishing",
  "flame tree publishing",
  "forgotten books",
  "freeman",
  "freeman macmillan",
  "full marks pvt. ltd",
  "g.k. publications",
  "gale cengage learning",
  "gallaudet university press",
  "gardners books",
  "george braziller inc.",
  "georgetown university press",
  "gestalten verlag",
  "gingko press",
  "gk publisher",
  "globe law and business",
  "gower",
  "gower pub co",
  "goyal publication",
  "green leaf publication",
  "greenleaf / t&f",
  "gsdp",
  "guilford press",
  "h.f.ullmann publishing",
  "hachette india",
  "hall & stott publishing ltd",
  "han admiraal and antonia cornaro",
  "harper collins",
  "harperteen",
  "harpertorch",
  "harvard business review press",
  "harvard business school press",
  "harvard university press",
  "health administration press",
  "heinle",
  "heritage publishers",
  "hindustan",
  "hindustan book agency",
  "hodder publisher",
  "holt, rinehart and winston",
  "houghton mifflin harcourt",
  "how",
  "hp hamilton limited",
  "human kinetics",
  "humana press",
  "i-mersion llc",
  "i. k. international",
  "i.k. international",
  "iacm",
  "ice publishing",
  "idea",
  "idea group publishing",
  "ieee",
  "ieee press/ wiley",
  "iet publishing",
  "ignacio llamas-garro, marcos tavares de melo, jung-mu kim",
  "images pub.",
  "imb publishing",
  "imperial college press",
  "in easy steps limited",
  "indra pub. house",
  "industrial press",
  "industrial press,",
  "infinity books",
  "infosci",
  "intech",
  "invincible publishers",
  "irwin",
  "island press",
  "istros books",
  "italian socity of chemistry",
  "ivan r. dee",
  "jaico publishing house",
  "jain brothers",
  "james currey",
  "jbl/lww",
  "john bale sons & danielsson ltd",
  "john banjamins",
  "john wiley",
  "johns hopkins",
  "jones & bartlett",
  "jossey-bass",
  "jtart publishing",
  "judy piatkus",
  "kalyani publishers",
  "kap/ springer",
  "kaplan",
  "kaplan publishing",
  "kendall hunt publishing",
  "kessinger publishing",
  "khanna book publishing",
  "khanna publisher",
  "khanna publishing",
  "kluwer academic press",
  "kluwer academic press/springer",
  "kluwer law internatio",
  "kluwer law international",
  "knowledge partners",
  "kogan page",
  "korospress",
  "kruger brentt",
  "kushal publications & distributors",
  "lap lambert academic publishing",
  "lars müller publishers",
  "laxmi publications",
  "levant books",
  "lexi comp",
  "lexisne",
  "link international",
  "links",
  "lippincott williams & wilkins",
  "listlab",
  "little brown books for young readers",
  "liverpool university press",
  "london publishing partnership",
  "longman",
  "lund humphries",
  "luster",
  "lww",
  "lynne rienner pub",
  "lyons press",
  "maa",
  "macmillan",
  "manchester university press",
  "manhattan prep publishing",
  "manjul",
  "maple press",
  "marcel dekker",
  "marvel pub",
  "mayur pub.",
  "mc graw hill",
  "mc graw hill india",
  "meditech",
  "medtec",
  "medtech",
  "mehul",
  "merck & co",
  "metalocus",
  "meteor books",
  "metrobooks",
  "microsoft press",
  "milady",
  "mit press",
  "mittal publications",
  "momentum press",
  "morton publishing",
  "mtg pub.",
  "multilingual matters",
  "mysterious press",
  "n y research press",
  "na",
  "nai publishers",
  "narendra publishing house",
  "narosa",
  "nelson engineering",
  "nelson thornes ltd",
  "new age",
  "new central book agency",
  "new society publishers",
  "newnes",
  "nipa",
  "niyogi books",
  "nolo",
  "norton",
  "norton & company",
  "notion press",
  "nottingham university press",
  "nova publishers",
  "nova science",
  "nph",
  "oclc pub.",
  "onyx path publishing",
  "open university press",
  "orient blackswan",
  "outernet publishing",
  "oxford",
  "oxford & ibh",
  "oxford india",
  "oxford university press",
  "packt publishing",
  "palgrave",
  "palgrave india",
  "palgrave macmillan",
  "panima",
  "papadakis",
  "paragon books",
  "pealagic publishing",
  "pearson",
  "pearson india",
  "peepal tree press ltd",
  "peer information",
  "penguin",
  "penguin books india",
  "pergamon/ elsevier",
  "peter lang",
  "phaidon press",
  "pharma book syndicate",
  "pharma med press",
  "pharmaceutical press",
  "pharmamed press",
  "phi",
  "picador",
  "pinnacle learning",
  "planning shop",
  "plenum",
  "plural publishing",
  "pogue press",
  "polity/wiley",
  "potter craft",
  "practical inspiration publishing",
  "praeger",
  "praeger publishers",
  "pragun publications",
  "prashant book agency",
  "pree press",
  "prentice hall",
  "prentice-hall",
  "prestel",
  "price stern sloan",
  "princeton press",
  "princeton pub.",
  "princeton univ press",
  "princeton university press",
  "prinston",
  "priroda",
  "productivity press",
  "professional books publisher",
  "prometheus books",
  "publication division",
  "puffin",
  "pws pub",
  "que publishing",
  "quercus",
  "rand corporation",
  "randall",
  "rawat publication",
  "rcog press",
  "read star",
  "reader's digest",
  "red globe press",
  "redcliffe",
  "republic of texas",
  "revell",
  "river publishers",
  "rizzoli publisher",
  "rockport",
  "rodale",
  "rosen publishing",
  "routledge",
  "routledge/mbs",
  "rowman & littlefield",
  "rowman & littlefield publishers",
  "royal botanic garden edinburgh",
  "royal horticultural society",
  "royal society of chemistry",
  "royal society of medicine",
  "rsc",
  "s chand",
  "s k kataria & sons",
  "s.k. kataria & sons",
  "sage india",
  "sage publishing",
  "samuel french",
  "sarat book distributors",
  "satish serial publishing house",
  "sbs publishers",
  "schiffer publishing ltd.",
  "science publishers, inc.",
  "scientific publishers",
  "scion publishing",
  "scitech publishing",
  "scolar pr",
  "scribe us",
  "segment book",
  "servet",
  "simon & schuster",
  "sinauer",
  "sip",
  "skill academy",
  "smps publisher",
  "south-western",
  "south-western college pub/thomson learning",
  "southern book star (supp)",
  "spds",
  "springer",
  "springer /mbs",
  "springer india",
  "springer/a press",
  "springer/aip",
  "springer/amacom",
  "springer/apress",
  "springer/birkhauser",
  "srpinger",
  "ss books",
  "ssph",
  "st james press",
  "st. martins griffin",
  "standard publishing",
  "standford university press",
  "stanford university press",
  "stationery office",
  "sterling press",
  "stewart, tabori and chang",
  "studiam press",
  "studium pres (india) pvt. ltd.",
  "studium press",
  "studium press (india) pvt ltd",
  "studium press (india) pvt. ltd.",
  "studium press india",
  "studium press india pvt ltd",
  "surahee publications",
  "surya infotainment products",
  "syngress",
  "syngress press",
  "t&f",
  "t&f india",
  "t&f/",
  "t&f/ balkema",
  "t&f/ greenleaf",
  "t&f/ sdc",
  "t&f/ sdc publications",
  "t&f/arnold",
  "t&f/asm press",
  "t&f/balkemna",
  "t&f/crc",
  "t&f/crc press",
  "t&f/dekker",
  "t&f/earthscan",
  "t&f/erlbaum",
  "t&f/facet pub",
  "t&f/focal press",
  "t&f/garland",
  "t&f/greenleaf pub",
  "t&f/guilford",
  "t&f/india",
  "t&f/informa",
  "t&f/jenny stanford publishing",
  "t&f/marcel dekkar",
  "t&f/pan stanford",
  "t&f/pan stanford publishing",
  "t&f/pearson",
  "t&f/psychology press",
  "t&f/river publishers",
  "t&f/routledge",
  "t&f/sdc",
  "t&f/sdc publications",
  "t&f/stata press",
  "tarascon",
  "taschen",
  "taschen press",
  "tbh/yes dee",
  "tbs",
  "ten speed press",
  "teri press",
  "textbook media press",
  "thames and hudson",
  "the book line",
  "the royal horticultural society",
  "the university of north carolina press",
  "the world bank",
  "thieme",
  "thieme india original",
  "thieme medical publishing",
  "thomas nelson",
  "thomas telford",
  "thomas telford press",
  "thomson",
  "thomson learning",
  "thomson west",
  "thomson/sweet & maxwell ltd",
  "thorogood",
  "timber press",
  "tmh",
  "tongji university press co., ltd",
  "touchstone press",
  "transaction publishers",
  "trinity press",
  "tsinghua university press",
  "ukaaz publications",
  "universities press",
  "university of california press",
  "university of chicago press",
  "university of illinois press",
  "university of nebraska press",
  "university science",
  "unknown",
  "upkar prakashan",
  "vanguard press",
  "verso",
  "vidya skill",
  "vikas publishing",
  "viking adult",
  "virgo publisher",
  "viva",
  "viva/scion",
  "vs publisher",
  "w w norton & company",
  "wageningen press",
  "walden pond press",
  "watermark press",
  "waveland press",
  "weiser books",
  "wessex books",
  "westview press",
  "whittel publisher",
  "whittles publishing",
  "wiley",
  "wiley india",
  "wiley/ ieee press",
  "wiley/ieee press",
  "william andrew",
  "william morrow paperbacks",
  "wolters kluwer",
  "woodhead publishing",
  "wordware",
  "world and pictures",
  "world book",
  "world scientific",
  "world scientific india",
  "world scientific pub co inc",
  "world scientific publishing co",
  "worth publisher",
  "worth publishers",
  "write&print",
  "yale university press",
  "yearbook",
  "yesdee",
  "yogoda satsanga society of india",
  "zeshan qureshi",
]

export default function PublishersPage() {
  const itemsPerRow = 4
  const rows = []
  for (let i = 0; i < publishersData.length; i += itemsPerRow) {
    rows.push(publishersData.slice(i, i + itemsPerRow))
  }

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
        <div className="container py-8">
          <h1 className="text-3xl font-bold mb-6">Publishers</h1>
          <div className="table-container overflow-x-auto">
            <table className="w-full border-collapse">
              <tbody>
                {rows.map((row, rowIndex) => (
                  <tr key={rowIndex} className={rowIndex % 2 === 0 ? "bg-[#e6f0ff]" : "bg-[#d9e6ff]"}>
                    {row.map((publisher, colIndex) => (
                      <td key={colIndex} className="border border-[#b3d1ff] p-2 text-xs md:text-sm">
                        {publisher.toUpperCase()}
                      </td>
                    ))}
                    {/* Fill empty cells if row is not complete */}
                    {row.length < itemsPerRow &&
                      Array(itemsPerRow - row.length)
                        .fill()
                        .map((_, i) => <td key={`empty-${i}`} className="border border-[#b3d1ff] p-2"></td>)}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
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

