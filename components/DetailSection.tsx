import Image from "next/image";
import Link from "next/link";
import type { DetailSection as DetailSectionData } from "@/data/site";

export default function DetailSection({ data }: { data: DetailSectionData }) {
  return (
    <section id="product" className="bg-white px-6 py-14">
      <div className="mx-auto grid max-w-[1200px] items-center gap-10 lg:grid-cols-[.72fr_1.28fr]">
        <div className="mx-auto w-full max-w-[330px]">
          <Image src={data.image} alt={data.imageAlt} width={330} height={330} className="h-auto w-full object-contain" />
        </div>
        <div>
          <h2 className="max-w-[650px] text-[34px] font-semibold leading-[1.18] text-ink sm:text-[40px]">{data.title}</h2>
          <p className="mt-4 max-w-[700px] text-[15px] leading-6 text-muted">{data.description}</p>
          <Link href={data.cta.href} className="mt-6 inline-flex rounded-sm bg-brand px-7 py-3 text-sm text-white hover:bg-[#429645]">{data.cta.label}</Link>
        </div>
      </div>
    </section>
  );
}
