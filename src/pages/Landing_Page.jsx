import HeroSection from "../components/LandingHeroSection";
import LandingSection from "../components/LandingSection1";
import LandingSection2 from '../components/LandingSection2'
import LandingSection3 from '../components/LandingSection3'
import SectionFooter from '../components/SectionFooter'

function Landing_Page() {
  return (
    <>
      <HeroSection />
      <LandingSection />
      <LandingSection2/>
      <LandingSection3/>
      <SectionFooter/>
    </>
  );
}

export default Landing_Page;
