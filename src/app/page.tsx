import { HeroSection } from "@/components/home/HeroSection";
import { RecognitionSection } from "@/components/home/RecognitionSection";
import { FrontsSection } from "@/components/home/FrontsSection";
import { MethodSection } from "@/components/home/MethodSection";
import { SolutionsSection } from "@/components/home/SolutionsSection";
import { ComplexitySection } from "@/components/home/ComplexitySection";
import { IdentitySection } from "@/components/home/IdentitySection";
import { FinalCTASection } from "@/components/home/FinalCTASection";
import { organizationSchema, websiteSchema } from "@/lib/structured-data";

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema()) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema()) }}
      />
      <HeroSection />
      <RecognitionSection />
      <FrontsSection />
      <MethodSection />
      <SolutionsSection />
      <ComplexitySection />
      <IdentitySection />
      <FinalCTASection />
    </>
  );
}
