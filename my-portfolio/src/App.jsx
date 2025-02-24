import './App.css'
import AboutMeMain from './components/aboutMeSection/AboutMeMain';
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
    <SubSkills />
  </main>
}

export default App;
