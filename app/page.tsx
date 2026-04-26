import { Hero } from "@/components/sections/hero";
import { BenefitsSection } from "@/components/sections/benefits-section";
import { FeaturedCourses } from "@/components/sections/featured-courses";
import { CommunitySection } from "@/components/sections/community-section";
import { TopicsSection } from "@/components/sections/topics-section";

export default function HomePage() {
  return (
    <main>
      <Hero />
      <BenefitsSection />
      <FeaturedCourses />
      <CommunitySection />
      <TopicsSection />
    </main>
  );
}
