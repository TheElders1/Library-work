import type { Metadata } from "next";
import { Music } from "lucide-react";
import { ButtonLink, PageHero, Section } from "@/components/ui";
import { MISSION_INTRO, VISION, UNIVERSITY_URL } from "@/lib/config";
export const metadata: Metadata = { title: "About Us", description: "About Madonna University Library, Okija: identity, anthem, mission and vision." };

export default function About() {
  return (<>
    <PageHero title="About Madonna University Library, Okija" intro="The library of Madonna University, serving students, lecturers, researchers and visitors." />
    <Section title="Introduction">
      <p className="max-w-3xl font-serif text-lg leading-relaxed">Madonna University Library supports the university&apos;s commitment to academic and spiritual growth by providing physical and digital resources, information services and access to electronic scholarly databases.</p>
    </Section>
    <Section title="Our identity and values" tone="paper">
      <p className="max-w-3xl font-serif text-lg leading-relaxed">{MISSION_INTRO} See the full statement on the Library Profile page.</p>
    </Section>
    <Section title="Our anthem">
      <div className="flex items-start gap-4 rounded-md border border-dashed border-gold p-6">
        <Music className="h-6 w-6 shrink-0 text-gold" aria-hidden />
        <p className="text-slate-600">The official university anthem (lyrics or audio) will appear here once supplied by the university.</p>
      </div>
    </Section>
    <Section title="Our vision" tone="paper"><blockquote className="max-w-3xl border-l-2 border-gold pl-5 font-serif text-xl leading-relaxed text-navy">{VISION}</blockquote></Section>
    <Section><div className="[&_a]:bg-navy [&_a]:text-white"><ButtonLink href={UNIVERSITY_URL} external>Visit the Madonna University website</ButtonLink></div></Section>
  </>);
}
