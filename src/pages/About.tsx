import { AboutHero } from '../components/About/AboutHero';
import CompanyOverview from '../components/About/CompanyOverview';
import TeamSection from '../components/About/TeamSection';
import TradeFairs from '../components/About/TradeFairs';
import WorkingWithUs from '../components/About/WorkingWithUs';

export default function About() {
  return (
    <div className="about-page">
      <AboutHero />
      <CompanyOverview />
      <TeamSection />
      <TradeFairs />
      <WorkingWithUs />
    </div>
  );
}
