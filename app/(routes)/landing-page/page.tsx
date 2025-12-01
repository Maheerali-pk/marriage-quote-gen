import { FaqSection } from "./components/faq-section";
import FooterSection from "./components/footer-section";
import GallerySection from "./components/gallery-section";
import HeroSection from "./components/hero-section";
import OurTeamSection from "./components/our-team-section";
import ReviewsSection from "./components/reviews-section";
import SecondSection from "./components/second-section";
import { SocialMediaRecordsSection } from "./components/social-media-records-section";
import { WeddingCountriesSection } from "./components/wedding-countries-section";

export default function LandingPage() {
  return (
    <div className="flex flex-col">
      <HeroSection></HeroSection>
      <SecondSection></SecondSection>
      <ReviewsSection></ReviewsSection>
      <GallerySection />
      <OurTeamSection></OurTeamSection>
      <SocialMediaRecordsSection></SocialMediaRecordsSection>
      <WeddingCountriesSection></WeddingCountriesSection>
      <FaqSection></FaqSection>
      <FooterSection></FooterSection>
    </div>
  );
}
