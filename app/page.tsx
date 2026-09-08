import { Hero } from "@/components/Hero";
import { ServicesMarquee } from "@/components/ServicesMarquee";
import { CategoryPillars } from "@/components/CategoryPillars";
import { Features } from "@/components/Features";
import { ProductCatalog } from "@/components/ProductCatalog";
import { MexicoShipping } from "@/components/MexicoShipping";
import { Team } from "@/components/Team";
import { Stats } from "@/components/Stats";
import { CTASection } from "@/components/CTASection";

export default function HomePage() {
  return (
    <>
      <Hero />
      <ServicesMarquee />
      <CategoryPillars />
      <Features />
      <ProductCatalog />
      <MexicoShipping />
      <Team />
      <Stats />
      <CTASection />
    </>
  );
}
