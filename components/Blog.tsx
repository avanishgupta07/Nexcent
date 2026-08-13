import Image from "next/image";
import Link from "next/link";
import type { BlogCard, SectionIntro } from "@/data/site";

export default function Blog({ intro, cards }: { intro: SectionIntro; cards: BlogCard[] }) {
  return (
    <section id="blog" className="bg-white px-6 py-14">
      <div className="mx-auto max-w-[1100px] text-center">
        <h2 className="text-[30px] font-semibold text-ink">{intro.title}</h2>
        <p className="mx-auto mt-2 max-w-[800px] text-[13px] leading-5 text-muted">{intro.description}</p>
      </div>
      <div className="mx-auto mt-9 grid max-w-[1100px] gap-7 md:grid-cols-3">
        {cards.map((card) => (
          <article key={card.title} className="relative overflow-hidden rounded-md">
            <Image src={card.image} alt="" width={360} height={220} className="h-[180px] w-full object-cover" />
            <div className="relative mx-3 -mt-8 rounded-md bg-[#F5F7F9] px-4 py-5 text-center shadow-md">
              <h3 className="text-[15px] font-medium leading-5 text-[#596269]">{card.title}</h3>
              <Link href={card.href} className="mt-4 inline-block text-sm font-medium text-brand">{card.cta} →</Link>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
