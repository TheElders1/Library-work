import Link from "next/link";
import { ArrowRight, BookOpen, Database, Landmark, Archive } from "lucide-react";
import { ButtonLink, DbCard, Icon, Section } from "@/components/ui";
import { databases, serviceGroups, VISION, UNIVERSITY_URL, REPOSITORY_URL } from "@/lib/config";

const quick = [
  { t: "Library Services", d: "Lending, reference, indexing and more.", href: "/services", I: BookOpen },
  { t: "Academic Databases", d: "Search journals, books and research.", href: "/databases", I: Database },
  { t: "Library Profile", d: "Our vision and mission.", href: "/library-profile", I: Landmark },
  { t: "Institutional Repository", d: "University journals and publications.", href: REPOSITORY_URL, I: Archive, ext: true },
];
const preview = ["Lending and Circulation", "Reference and Information Services", "Current Awareness and Information Dissemination", "Indexing and Abstracting", "Digital Searching", "Printing Services"];
const iconFor = (n: string) => serviceGroups.flatMap(g => g.items).find(i => n.startsWith(i.name.split(" ")[0]))?.icon ?? "BookOpen";

export default function Home() {
  return (<>
    <section className="spines bg-navy text-white">
      <div className="hero-rise mx-auto max-w-6xl px-5 py-24 md:py-32">
        <h1 className="font-serif text-4xl leading-tight md:text-6xl max-w-3xl">Welcome to Madonna University Library</h1>
        <p className="mt-5 max-w-2xl text-lg text-white/80">Discover knowledge, explore scholarly resources and access information that inspires academic excellence.</p>
        <div className="mt-8 flex flex-wrap gap-3">
          <ButtonLink href="/services">Explore Library Services</ButtonLink>
          <ButtonLink href="/databases" variant="ghost">Access Academic Databases</ButtonLink>
        </div>
        <p className="mt-10 text-sm text-white/50">Library photograph to be added: place an image at /public/hero.jpg.</p>
      </div>
    </section>

    <Section>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        {quick.map(({ t, d, href, I, ext }) => {
          const body = (<><I className="h-7 w-7 text-gold" aria-hidden /><h2 className="mt-4 font-serif text-xl text-navy">{t}</h2><p className="mt-1 text-slate-600">{d}</p></>);
          const cls = "block rounded-md border border-slate-200 p-6 hover:border-gold transition-colors";
          return ext ? <a key={t} href={href} target="_blank" rel="noopener noreferrer" className={cls}>{body}</a> : <Link key={t} href={href} className={cls}>{body}</Link>;
        })}
      </div>
    </Section>

    <Section title="About the Library" tone="paper">
      <p className="max-w-3xl font-serif text-xl leading-relaxed text-slate-700">Madonna University Library, Okija, supports the university community with physical and digital resources, research assistance and access to scholarly databases.</p>
      <Link href="/about" className="mt-6 inline-flex items-center gap-2 font-medium text-navy underline underline-offset-4">Read more about us <ArrowRight className="h-4 w-4" aria-hidden /></Link>
    </Section>

    <Section title="Featured academic databases">
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{databases.map(d => <DbCard key={d.name} db={d} />)}</div>
    </Section>

    <Section title="Library services" tone="paper">
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {preview.map(p => (
          <Link key={p} href="/services" className="flex items-center gap-4 rounded-md bg-white p-5 border border-slate-200 hover:border-gold transition-colors">
            <Icon name={iconFor(p)} className="h-6 w-6 shrink-0 text-gold" /><span className="font-medium text-navy">{p}</span>
          </Link>))}
      </div>
    </Section>

    <section className="bg-navy text-white">
      <div className="mx-auto grid max-w-6xl gap-8 px-5 py-14 md:grid-cols-2">
        <div><h2 className="font-serif text-3xl">University identity</h2>
          <p className="mt-4 text-white/80">Our anthem, mission and vision reflect the formation of the total person.</p>
          <div className="mt-6 flex flex-wrap gap-3"><ButtonLink href="/about">About Us</ButtonLink><ButtonLink href={UNIVERSITY_URL} variant="ghost" external>Madonna University website</ButtonLink></div></div>
        <blockquote className="border-l-2 border-gold pl-5 font-serif text-lg leading-relaxed text-white/90">{VISION}</blockquote>
      </div>
    </section>
  </>);
}
