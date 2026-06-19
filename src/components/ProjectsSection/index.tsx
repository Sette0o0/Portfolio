import portfolioData from "../../assets/portfolio.json"
import type { PortfolioContent } from "../../types"
import Project from "../Project"

interface ProjectsSectionProps {
  className?: string
}

function ProjectsSection({ className = "" }: ProjectsSectionProps) {
  const { projetos } = portfolioData as PortfolioContent

  return (
    <section id="projetos" className={`${className}`}>
      <div className={`text-center px-3`}>
        <h2 className={`fs-1`}>Projetos</h2>
      </div>
      <div className={`article-list d-flex flex-column`}>
        {projetos.map((projeto) => (
          <Project key={projeto.nome} projeto={projeto} />
        ))}
      </div>
    </section>
  )
}

export default ProjectsSection
