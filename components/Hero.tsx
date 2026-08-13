import Image from "next/image";
import Link from "next/link";
import type { HeroData } from "@/data/site";

type HeroProps = {
  data: HeroData;
};

export default function Hero({ data }: HeroProps) {
  return (
    <section id="home" className="bg-page">
      <div className="mx-auto grid min-h-[674px] max-w-[1298px] items-center gap-8 px-6 pb-7 pt-10 lg:grid-cols-[1.05fr_.95fr] lg:gap-3 xl:px-0">
        <div className="max-w-[760px]">
          <h1 className="text-[56px] font-semibold leading-[1.18] tracking-[-2px] text-ink sm:text-[64px] lg:text-[72px]">
            {data.title}
            <span className="block text-brand">{data.highlight}</span>
          </h1>

          <p className="mt-6 max-w-[670px] text-[18px] leading-7 text-muted">
            {data.description}
          </p>

          <Link
            href={data.cta.href}
            className="mt-10 inline-flex h-[60px] items-center rounded-md bg-brand px-9 text-[18px] font-medium text-white transition hover:bg-[#429645]"
          >
            {data.cta.label}
          </Link>
        </div>

        <div className="relative mx-auto w-full max-w-[510px] lg:justify-self-end">
          <Image
            src={data.image}
            alt={data.imageAlt}
            width={490}
            height={500}
            priority
            className="h-auto w-full object-contain"
          />
        </div>
      </div>

      <div className="flex items-center justify-center gap-2 pb-5" aria-label="Carousel pagination">
        <span className="h-3 w-3 rounded-full bg-brand" />
        <span className="h-3 w-3 rounded-full bg-[#C8E6C9]" />
        <span className="h-3 w-3 rounded-full bg-[#C8E6C9]" />
      </div>
    </section>
  );
}
