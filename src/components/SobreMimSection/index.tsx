import portfolioData from "../../assets/portfolio.json"
import type { PortfolioContent } from "../../types"

interface SobreMimSectionProps {
  className?: string
}

function SobreMimSection({ className = "" }: SobreMimSectionProps) {
  const { perfil } = portfolioData as PortfolioContent

  return (
    <section id="sobre-mim" className={`${className} px-3 px-lg-5`}>
      <div className={`row g-4 align-items-start`}>
        <div className={`col-12 col-lg-5`}>
          <p className={`text-uppercase text-primary fw-semibold small mb-2`}>Apresentação</p>
          <h2 className={`fs-1 mb-3`}>Sobre mim</h2>
          <p className={`lead mb-0`}>{perfil.objetivo}</p>
        </div>
        <div className={`col-12 col-lg-7`}>
          {perfil.sobre.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
          <h3 className={`fs-5 mt-4`}>Áreas de interesse</h3>
          <ul className={`list-unstyled d-flex flex-wrap gap-2 mb-0`}>
            {perfil.areasInteresse.map((area) => (
              <li key={area} className={`badge rounded-pill border text-body fw-medium`}>{area}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

export default SobreMimSection
