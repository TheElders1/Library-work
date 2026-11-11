import type { Metadata } from "next";
import { DbCard, PageHero, Section } from "@/components/ui";
import { databases } from "@/lib/config";
export const metadata: Metadata = { title: "Databases", description: "Academic research databases: Research4Life, EBSCOhost, ProQuest, AJOL, JSTOR and DOAJ." };

export default function Databases() {
  return (<>
    <PageHero title="Academic databases" intro="Electronic scholarly resources, journals, publications and research materials." />
    <Section>
      <p className="mb-8 max-w-3xl text-slate-600">Each button opens the database website in a new tab. Some resources may require institutional authentication; use the access details provided by the library.</p>
      <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3">{databases.map(d => <DbCard key={d.name} db={d} />)}</div>
    </Section>
  </>);
}
