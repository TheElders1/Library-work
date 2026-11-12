import Link from "next/link";
import { nav, databases, UNIVERSITY_URL, REPOSITORY_URL } from "@/lib/config";

export default function Footer() {
  const h = "font-serif text-gold-soft text-lg mb-3";
  const a = "block py-1 text-white/75 hover:text-white";
  return (
    <footer className="bg-navy text-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 py-14 md:grid-cols-4">
        <div>{/* eslint-disable-next-line @next/next/no-img-element */}
          <img src="/logo.jpg" alt="Madonna University crest" width={72} height={72} className="mb-4 h-[72px] w-[72px] rounded-full bg-white object-cover ring-2 ring-gold" />
          <p className="font-serif text-xl">Madonna University Library</p><p className="mt-2 text-white/70">Okija Campus, Nigeria. Digital Library Portal.</p></div>
        <div><p className={h}>Quick navigation</p>{nav.map(n => <Link key={n.href} href={n.href} className={a}>{n.label}</Link>)}</div>
        <div><p className={h}>Academic databases</p>{databases.map(d => <a key={d.name} href={d.url} target="_blank" rel="noopener noreferrer" className={a}>{d.name.split(" (")[0]}</a>)}</div>
        <div><p className={h}>University</p>
          <a href={UNIVERSITY_URL} target="_blank" rel="noopener noreferrer" className={a}>Madonna University website</a>
          <a href={REPOSITORY_URL} target="_blank" rel="noopener noreferrer" className={a}>Institutional repository</a></div>
      </div>
      <div className="border-t border-white/15 py-5 text-center text-sm text-white/60">© {new Date().getFullYear()} Madonna University Library, Okija. All rights reserved.</div>
    </footer>
  );
}
