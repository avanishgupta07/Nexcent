import Image from "next/image";
import type { SectionIntro } from "@/data/site";

export default function Clients({ data }: { data: SectionIntro }) {
  return <section id="service" className="bg-white px-6 py-11 text-center">
    <div className="mx-auto max-w-[900px]">
      <h2 className="text-[42px] font-semibold leading-tight tracking-[-1px] text-ink">{data.title}</h2>
      <p className="mt-4 text-[18px] leading-7 text-muted">{data.description}</p>
    </div>
    <div className="mx-auto mt-10 max-w-[1200px] overflow-hidden">
      <Image src="/images/client-logos.png" alt="Our clients" width={1350} height={110} className="h-[90px] w-full object-cover object-center" />
    </div>
  </section>;
}
