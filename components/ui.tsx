import Link from "next/link";
import * as Icons from "lucide-react";
import { ExternalLink } from "lucide-react";

export function Icon({ name, className }: { name: string; className?: string }) {
  const C = (Icons as unknown as Record<string, React.ComponentType<{ className?: string }>>)[name] ?? Icons.BookOpen;
  return <C className={className} />;
}
export function PageHero({ title, intro }: { title: string; intro: string }) {
  return (
    <section className="spines bg-navy text-white">
      <div className="mx-auto max-w-6xl px-5 py-16 md:py-20">
        <h1 className="font-serif text-4xl md:text-5xl max-w-3xl leading-tight">{title}</h1>
        <p className="mt-4 max-w-2xl text-lg text-white/80">{intro}</p>
      </div>
    </section>
  );
}
export function Section({ title, children, tone = "white" }: { title?: string; children: React.ReactNode; tone?: "white" | "paper" }) {
  return (
    <section className={tone === "paper" ? "bg-paper" : "bg-white"}>
      <div className="mx-auto max-w-6xl px-5 py-14">
        {title && <h2 className="font-serif text-3xl text-navy mb-8">{title}</h2>}
        {children}
      </div>
    </section>
  );
}
export function DbCard({ db }: { db: { abbr: string; name: string; desc: string; url: string } }) {
  return (
    <article className="flex flex-col rounded-md border border-slate-200 bg-white p-6 hover:border-gold transition-colors">
      <div className="mb-4 flex h-14 w-14 items-center justify-center rounded bg-navy font-serif text-sm font-bold text-gold-soft" aria-hidden>{db.abbr}</div>
      <h3 className="font-serif text-xl text-navy">{db.name}</h3>
      <p className="mt-2 flex-1 text-slate-600">{db.desc}</p>
      <a href={db.url} target="_blank" rel="noopener noreferrer"
        className="mt-5 inline-flex items-center gap-2 self-start rounded bg-navy px-4 py-2 text-sm font-medium text-white hover:bg-navy-700">
        Access Database <ExternalLink className="h-4 w-4" aria-hidden />
      </a>
    </article>
  );
}
export function ButtonLink({ href, children, variant = "gold", external }: { href: string; children: React.ReactNode; variant?: "gold" | "ghost"; external?: boolean }) {
  const cls = "inline-flex items-center gap-2 rounded px-5 py-3 font-medium transition-colors " +
    (variant === "gold" ? "bg-gold text-navy hover:bg-gold-soft" : "border border-white/40 text-white hover:bg-white/10");
  return external
    ? <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>{children}</a>
    : <Link href={href} className={cls}>{children}</Link>;
}
