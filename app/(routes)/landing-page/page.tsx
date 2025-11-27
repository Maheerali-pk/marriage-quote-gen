import FooterSection from "./components/footer-section";
import GallerySection from "./components/gallery-section";
import HeroSection from "./components/hero-section";
import ReviewsSection from "./components/reviews-section";
import SecondSection from "./components/second-section";

export default function LandingPage() {
  return (
    <div className="flex flex-col">
      <HeroSection></HeroSection>
      <SecondSection></SecondSection>
      <ReviewsSection></ReviewsSection>
      <GallerySection />
      <FooterSection></FooterSection>
    </div>
  );
}
