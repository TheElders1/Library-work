import { ButtonLink } from "@/components/ui";
export default function NotFound() {
  return <div className="mx-auto max-w-xl px-5 py-24 text-center"><h1 className="font-serif text-4xl text-navy">Page not found</h1>
    <p className="mt-3 text-slate-600">The page you requested does not exist. Return to the home page to continue.</p>
    <div className="mt-6 [&_a]:bg-navy [&_a]:text-white"><ButtonLink href="/">Back to Home</ButtonLink></div></div>;
}
