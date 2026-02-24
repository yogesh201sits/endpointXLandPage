import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import SocialProof from "@/components/SocialProof";
import ProblemSection from "@/components/ProblemSection";
import SolutionSection from "@/components/SolutionSection";
import HowItWorks from "@/components/HowItWorks";
import FeaturesSection from "@/components/FeaturesSection";
import AudienceSection from "@/components/AudienceSection";
import ComparisonSection from "@/components/ComparisonSection";
import SecuritySection from "@/components/SecuritySection";
import CTASection from "@/components/CTASection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <HeroSection />
        <SocialProof />
        <ProblemSection />
        <SolutionSection />
        <HowItWorks />
        <FeaturesSection />
        <AudienceSection />
        <ComparisonSection />
        <SecuritySection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
