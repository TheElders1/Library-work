"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X, Library } from "lucide-react";
import { nav } from "@/lib/config";

export default function Header() {
  const path = usePathname();
  const [open, setOpen] = useState(false);
  return (
    <header className="sticky top-0 z-40 border-b border-slate-200 bg-white/95 backdrop-blur">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-5 py-3">
        <Link href="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <span className="flex h-10 w-10 items-center justify-center rounded bg-navy text-gold" aria-label="Logo placeholder"><Library className="h-5 w-5" /></span>
          <span className="leading-tight"><span className="block font-serif text-lg text-navy">Madonna University Library</span><span className="block text-xs text-slate-500">Okija Campus</span></span>
        </Link>
        <nav className="hidden md:flex gap-1" aria-label="Main">
          {nav.map(n => (
            <Link key={n.href} href={n.href} aria-current={path === n.href ? "page" : undefined}
              className={"rounded px-3 py-2 text-sm font-medium " + (path === n.href ? "bg-navy text-white" : "text-slate-700 hover:text-navy hover:bg-paper")}>{n.label}</Link>
          ))}
        </nav>
        <button className="md:hidden p-2 text-navy" aria-label={open ? "Close menu" : "Open menu"} aria-expanded={open} onClick={() => setOpen(!open)}>
          {open ? <X /> : <Menu />}
        </button>
      </div>
      {open && (
        <nav className="md:hidden border-t border-slate-200 bg-white px-5 py-3" aria-label="Mobile">
          {nav.map(n => <Link key={n.href} href={n.href} onClick={() => setOpen(false)} className="block py-3 text-navy border-b border-slate-100 last:border-0">{n.label}</Link>)}
        </nav>
      )}
    </header>
  );
}
