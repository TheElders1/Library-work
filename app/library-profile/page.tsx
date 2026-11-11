import type { Metadata } from "next";
import { ButtonLink, PageHero, Section } from "@/components/ui";
import { MISSION_INTRO, VISION, missions, REPOSITORY_URL, UNIVERSITY_URL } from "@/lib/config";
export const metadata: Metadata = { title: "Library Profile", description: "Vision and mission of Madonna University Library, plus the institutional repository." };

export default function Profile() {
  return (<>
    <PageHero title="Library profile" intro="Our vision, our mission and the university's publications." />
    <Section title="Library vision"><blockquote className="max-w-3xl border-l-2 border-gold pl-5 font-serif text-xl leading-relaxed text-navy">{VISION}</blockquote></Section>
    <Section title="Library mission" tone="paper">
      <p className="mb-8 max-w-3xl font-serif text-lg">{MISSION_INTRO}</p>
      <ol className="grid gap-5 md:grid-cols-2">
        {missions.map((m, i) => (
          <li key={m.title} className="rounded-md border border-slate-200 bg-white p-6">
            <span className="font-serif text-3xl text-gold">{i + 1}</span>
            <h3 className="mt-2 font-serif text-xl text-navy">{m.title}</h3>
            <p className="mt-2 text-slate-600">{m.text}</p>
          </li>))}
      </ol>
    </Section>
    <Section title="Institutional repository and university">
      <div className="flex flex-wrap gap-3 [&_a]:bg-navy [&_a]:text-white">
        <ButtonLink href={REPOSITORY_URL} external>Madonna University Journals and Publications</ButtonLink>
        <ButtonLink href={UNIVERSITY_URL} external>Official university website</ButtonLink>
      </div>
    </Section>
  </>);
}
