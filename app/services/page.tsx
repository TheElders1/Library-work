import type { Metadata } from "next";
import { Icon, PageHero, Section } from "@/components/ui";
import { serviceGroups } from "@/lib/config";
export const metadata: Metadata = { title: "Services", description: "Library services at Madonna University Library, Okija." };

export default function Services() {
  return (<>
    <PageHero title="Library services" intro="Every service the library provides, grouped by purpose." />
    {serviceGroups.map((g, i) => (
      <Section key={g.title} title={g.title} tone={i % 2 ? "paper" : "white"}>
        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {g.items.map(s => (
            <article key={s.name} className="card p-7">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-navy"><Icon name={s.icon} className="h-6 w-6 text-gold-soft" /></span>
              <h3 className="mt-4 font-serif text-xl text-navy">{s.name}</h3>
              <p className="mt-2 leading-relaxed text-slate-700">{s.desc}</p>
            </article>))}
        </div>
      </Section>))}
  </>);
}
