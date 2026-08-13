import type { AudienceCard, SectionIntro } from "../data/site";

type Props = { intro: SectionIntro; cards: AudienceCard[] };

function Icon({ type }: { type: string }) {
  const common = "h-10 w-10 text-[#1B5E20]";
  if (type === "building") {
    return <svg className={common} viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M7 42h34M11 42V18h15v24M26 42V8h11v34M15 23h6M15 29h6M15 35h6M30 15h4M30 21h4M30 27h4M30 33h4" /></svg>;
  }
  if (type === "hands") {
    return <svg className={common} viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.8"><path d="M24 38c-2-7-9-5-12-11-2-4 2-6 5-3l5 4M24 38c2-7 9-5 12-11 2-4-2-6-5-3l-5 4M18 28l-4-8c-1-3 3-4 5-2l5 7M30 28l4-8c1-3-3-4-5-2l-5 7M24 22V10c0-3 4-3 4 0v10" /></svg>;
  }
  return <svg className={common} viewBox="0 0 48 48" fill="none" stroke="currentColor" strokeWidth="1.8"><circle cx="15" cy="16" r="5"/><circle cx="33" cy="16" r="5"/><circle cx="24" cy="12" r="5"/><path d="M5 36c0-6 5-10 10-10s10 4 10 10M23 36c0-6 5-10 10-10s10 4 10 10M14 25c2-4 6-6 10-6s8 2 10 6" /></svg>;
}

export default function Audience({ intro, cards }: Props) {
  return (
    <section id="feature" className="bg-white px-6 py-20">
      <div className="mx-auto max-w-[1200px]">
        <div className="mx-auto max-w-[700px] text-center">
          <h2 className="text-[40px] font-semibold leading-[1.18] tracking-[-1px] text-ink sm:text-[44px]">{intro.title}</h2>
          <p className="mt-4 text-[18px] text-muted">{intro.description}</p>
        </div>
        <div className="mt-10 grid gap-8 lg:grid-cols-3">
          {cards.map((card) => (
            <article key={card.title} className="min-h-[292px] rounded-lg border border-[#edf0f2] bg-white px-8 py-7 text-center shadow-[0_2px_5px_rgba(0,0,0,.06)]">
              <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-lg bg-[#E8F5E9]"><Icon type={card.icon} /></div>
              <h3 className="mt-6 text-[31px] font-semibold leading-[1.2] text-ink">{card.title}</h3>
              <p className="mt-3 text-[17px] leading-6 text-muted">{card.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
