import Link from "next/link";

export default function CtaBanner({ title, button }: { title: string; button: { label: string; href: string } }) {
  return (
    <section id="faq" className="bg-page px-6 py-20 text-center">
      <h2 className="mx-auto max-w-[900px] text-[48px] font-semibold leading-[1.1] tracking-[-1px] text-[#263238] sm:text-[68px]">{title}</h2>
      <Link href={button.href} className="mt-10 inline-flex items-center gap-2 rounded-md bg-brand px-9 py-4 text-[18px] font-medium text-white hover:bg-[#429645]">{button.label} <span aria-hidden="true">→</span></Link>
    </section>
  );
}
