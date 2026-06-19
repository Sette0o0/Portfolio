import AcademicSection from "../../components/AcademicSection"
import ContactSection from "../../components/ContactSection"
import FormationsSection from "../../components/FormationsSection"
import HeroSection from "../../components/HeroSection"
import ProjectsSection from "../../components/ProjectsSection"
import SkillsSection from "../../components/SkillsSection"
import SobreMimSection from "../../components/SobreMimSection"

function Divider() {
  return <hr className={`w-75 my-0 mx-auto`} />
}

function Home() {
  return (
    <>
      <HeroSection />
      <Divider />
      <SobreMimSection className={`py-5`} />
      <Divider />
      <FormationsSection className={`py-5`} />
      <Divider />
      <ProjectsSection className={`py-5`} />
      <Divider />
      <SkillsSection className={`py-5`} />
      <Divider />
      <AcademicSection className={`py-5`} />
      <Divider />
      <ContactSection className={`py-5`} />
    </>
  )
}

export default Home
