import ProjectCard from "../ProjectCard"

interface ProjectsSectionProps {
  className?: string
}

const projeto = {
  nome: "Plataforma de Gestão de blabla blá",
  resumo: "bbbbbbbbbbbbb",
  detalhes: "ccccccccccc",
  repo: "dddddd"
}

function ProjectsSection({ className = "" }: ProjectsSectionProps){
  return(
    <>
      <section className={`${className}`}>
        <h2 className={`text-center mb-4`}>Projetos</h2>
        <div className={`d-flex flex-column gap-3 px-3`}>
          <ProjectCard projeto={projeto} />
          <ProjectCard projeto={projeto} />
          <ProjectCard projeto={projeto} />
        </div>
      </section>
    </>
  )
}

export default ProjectsSection