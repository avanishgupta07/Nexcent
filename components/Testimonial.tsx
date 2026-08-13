import Image from "next/image";

type TestimonialData = {
  quote: string;
  name: string;
  organization: string;
  image: string;
  logosImage: string;
};

export default function Testimonial({ data }: { data: TestimonialData }) {
  return (
    <section id="testimonial" className="bg-page px-6 py-10">
      <div className="mx-auto grid max-w-[1200px] items-center gap-9 lg:grid-cols-[180px_1fr]">
        <Image src={data.image} alt="Testimonial" width={150} height={150} className="mx-auto h-[150px] w-[150px] rounded-sm object-cover shadow-sm" />
        <div>
          <p className="text-[16px] leading-6 text-muted">{data.quote}</p>
          <p className="mt-3 font-semibold text-brand">{data.name}</p>
          <p className="mt-1 text-xs text-[#89939b]">{data.organization}</p>
          <div className="mt-5 overflow-hidden"><Image src={data.logosImage} alt="Client logos" width={1000} height={90} className="h-[55px] w-full object-cover object-center" /></div>
        </div>
      </div>
    </section>
  );
}
