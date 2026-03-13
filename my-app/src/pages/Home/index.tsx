import FormationsSection from "../../components/FormationsSection"
import HeroSection from "../../components/HeroSection"
import ProjectsSection from "../../components/ProjectsSection"

function Home() {
	return (
		<>
			<HeroSection />
			<hr className={`w-75 mx-auto d-sm-none`} />
			<ProjectsSection className={`py-3`}/>
			<hr className={`w-75 mx-auto`} />
			<FormationsSection className={`py-3`} />
		</>
	)
}

export default Home