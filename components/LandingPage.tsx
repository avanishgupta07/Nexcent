import {
  audience,
  audienceCards,
  blogCards,
  blogIntro,
  clients,
  ctaBanner,
  detailSections,
  footer,
  hero,
  testimonial,
} from "../data/site";

import Audience from "./Audience";
import Blog from "./Blog";
import Clients from "./Clients";
import CtaBanner from "./CtaBanner";
import DetailSection from "./DetailSection";
import Footer from "./Footer";
import Header from "./Header";
import Hero from "./Hero";
import Testimonial from "./Testimonial";

export default function LandingPage() {
  return (
    <>
      <Header />

      <main>
        <Hero data={hero} />

        <Clients data={clients} />

        <Audience
          intro={audience}
          cards={audienceCards}
        />

        {detailSections.map((section) => (
          <DetailSection
            key={section.title}
            data={section}
          />
        ))}

        <Testimonial data={testimonial} />

        <Blog
          intro={blogIntro}
          cards={blogCards}
        />

        <CtaBanner
          title={ctaBanner.title}
          button={ctaBanner.button}
        />
      </main>

      <Footer data={footer} />
    </>
  );
}