
import projetos from "../../assets/projetos.json"
import Project from "../Project"

interface ProjectsSectionProps {
  className?: string
}

function ProjectsSection({ className = "" }: ProjectsSectionProps){
  return(
    <>
      <section className={`${className}`}>
        <h2 className={`text-center fs-1`}>Projetos</h2>
        <div className={`d-flex flex-column`}>
          {projetos.map((projeto, key) => (
            <Project key={key} projeto={projeto} />
          ))}
        </div>
      </section>
    </>
  )
}

export default ProjectsSection