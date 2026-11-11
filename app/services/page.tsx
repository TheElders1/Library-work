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
            <article key={s.name} className="rounded-md border border-slate-200 bg-white p-6">
              <Icon name={s.icon} className="h-7 w-7 text-gold" />
              <h3 className="mt-4 font-serif text-xl text-navy">{s.name}</h3>
              <p className="mt-2 text-slate-600">{s.desc}</p>
            </article>))}
        </div>
      </Section>))}
  </>);
}
