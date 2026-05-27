import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Channels from "@/components/Channels";
import Stats from "@/components/Stats";
import TargetAudience from "@/components/TargetAudience";
import Solutions from "@/components/Solutions";
import AIRoles from "@/components/AIRoles";
import AgentTypes from "@/components/AgentTypes";
import HowItWorks from "@/components/HowItWorks";
import Integrations from "@/components/Integrations";
import CaseStudy from "@/components/CaseStudy";
import Testimonials from "@/components/Testimonials";
import Pricing from "@/components/Pricing";
import FAQ from "@/components/FAQ";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <Hero />
        <Channels />
        <Stats />
        <TargetAudience />
        <Solutions />
        <AIRoles />
        <AgentTypes />
        <HowItWorks />
        <Integrations />
        <CaseStudy />
        <Testimonials />
        <Pricing />
        <FAQ />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
