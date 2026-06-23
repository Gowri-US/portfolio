import AboutSection from "../components/About";
import ContactSection from "../components/Contact";
import EducationSection from "../components/Education";
import ExperienceSection from "../components/Experience";
import Navbar from "../components/Navbar";
import ProfileSection from "../components/Profile";
import ProjectSection from "../components/Projects";
import SkillSection from "../components/Skills";
import ScrollProgressBar from "../components/ScrollProgressBar";

const Home = () => {
  return (
    <div className="min-h-screen bg-black text-white">
      <ScrollProgressBar />
      <Navbar />
      <ProfileSection />
      <AboutSection />
      <EducationSection />
      <SkillSection />
      <ExperienceSection />
      <ProjectSection />
      <ContactSection />
    </div>
  );
};

export default Home;
