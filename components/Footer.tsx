import Link from "next/link";
import type { FooterColumn } from "../data/site";

function BrandMark() {
  return <svg aria-hidden="true" viewBox="0 0 42 32" className="h-8 w-[42px]">
    <path fill="#4CAF50" d="M2 3h12L8 14H0L2 3Z" /><path fill="#4CAF50" d="M17 3h10l-5 9H12l5-9Z" /><path fill="#fff" d="m31 3 9 9h-9l-5-9h5Z" />
    <path fill="#4CAF50" d="m2 17 7-1 6 11H4L2 17Z" /><path fill="#4CAF50" d="m19 16 6 1-5 10h-9l8-11Z" /><path fill="#fff" d="m30 17 9-1-2 10h-9l2-9Z" />
  </svg>;
}

type FooterData = { copyright: string[]; columns: FooterColumn[]; newsletterPlaceholder: string };

export default function Footer({ data }: { data: FooterData }) {
  return <footer className="bg-[#263238] px-6 py-16 text-white">
    <div className="mx-auto grid max-w-[1250px] gap-12 lg:grid-cols-[1.3fr_.7fr_.7fr_1fr]">
      <div>
        <div className="flex items-center gap-2.5"><BrandMark /><span className="text-[34px] font-bold tracking-[-1.5px]">Nexcent</span></div>
        <div className="mt-10 space-y-2 text-[16px]">{data.copyright.map((line) => <p key={line}>{line}</p>)}</div>
        <div className="mt-10 flex gap-4">{["◎", "◉", "♥", "▶"].map((icon, i) => <span key={i} className="flex h-9 w-9 items-center justify-center rounded-full bg-[#3c4b52] text-lg">{icon}</span>)}</div>
      </div>
      {data.columns.map((column) => <div key={column.title}>
        <h3 className="text-[22px] font-semibold">{column.title}</h3>
        <nav className="mt-7 space-y-4">{column.links.map((link) => <Link key={link.label} href={link.href} className="block text-[16px] hover:text-brand">{link.label}</Link>)}</nav>
      </div>)}
      <div>
        <h3 className="text-[22px] font-semibold">Stay up to date</h3>
        <form className="mt-7 flex overflow-hidden rounded-lg bg-[#4b5960]">
          <input type="email" aria-label={data.newsletterPlaceholder} placeholder={data.newsletterPlaceholder} className="min-w-0 flex-1 bg-transparent px-4 py-3 text-white outline-none placeholder:text-[#d8dde0]" />
          <button type="submit" aria-label="Subscribe" className="px-4 text-2xl">⌁</button>
        </form>
      </div>
    </div>
  </footer>;
}
