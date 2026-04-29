import { Navbar } from "@/widgets/navbar";
import { Footer } from "@/widgets/footer";
import { HeroSection } from "./HeroSection";
import { OurStorySection } from "./OurStorySection";
import { ProgramSection } from "./ProgramSection";
import { TravelSection } from "./TravelSection";
import { ContactSection } from "./ContactSection";

export function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <OurStorySection />
        <ProgramSection />
        <TravelSection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
