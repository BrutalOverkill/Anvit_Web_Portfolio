import './App.css'
import AboutMeMain from './components/aboutMeSection/AboutMeMain';
import ContactMeMain from './components/contactMeSection/ContactMeMain';
import ExperienceMain from './components/experienceSection/ExperienceMain';
import HelperSection from './components/HelperSection';
import { HeroGradient } from './components/heroSection/HeroGradient';
import { HeroMain } from './components/heroSection/HeroMain';
import NavbarMain from './components/navbar/NavbarMain'
import SkillsMain from './components/skillsSection/SkillsMain';
import SubSkills from './components/skillsSection/SubSkills';
import SubHeroMain from './components/subHeroSection/SubHeroSection';

function App() {
  return <main className="font-body text-white relative overflow-hidden">
    <NavbarMain/>
    <HeroMain/>
    <HeroGradient/>
    <SubHeroMain/>
    <AboutMeMain/>
    <HelperSection/>
    <SkillsMain/>
    <SubSkills/>
    <ExperienceMain/>
    <ContactMeMain/>
  </main>
}

export default App;
