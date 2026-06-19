import portfolioData from "../../assets/portfolio.json"
import type { PortfolioContent } from "../../types"

interface SkillsSectionProps {
  className?: string
}

function SkillsSection({ className = "" }: SkillsSectionProps) {
  const { habilidades } = portfolioData as PortfolioContent

  return (
    <section id="habilidades" className={`${className} px-3 px-lg-5`}>
      <div className={`text-center mb-4`}>
        <p className={`text-uppercase text-primary fw-semibold small mb-2`}>Competências</p>
        <h2 className={`fs-1`}>Habilidades</h2>
      </div>

      <div className={`row g-4`}>
        <div className={`col-12 col-lg-8`}>
          <h3 className={`fs-4 mb-3`}>Hard skills</h3>
          <div className={`row row-cols-1 row-cols-md-2 g-3`}>
            {habilidades.tecnicas.map((grupo) => (
              <article className={`col`} key={grupo.grupo}>
                <div className={`border rounded-3 p-3 h-100 bg-body`}>
                  <h4 className={`fs-6 mb-3`}>{grupo.grupo}</h4>
                  <ul className={`list-unstyled d-flex flex-wrap gap-2 mb-0`}>
                    {grupo.itens.map((item) => (
                      <li key={item} className={`badge rounded-pill text-bg-secondary fw-medium`}>{item}</li>
                    ))}
                  </ul>
                </div>
              </article>
            ))}
          </div>
        </div>

        <div className={`col-12 col-lg-4`}>
          <h3 className={`fs-4 mb-3`}>Soft skills</h3>
          <div className={`border rounded-3 p-3 bg-body`}>
            <ul className={`list-unstyled d-flex flex-column gap-2 mb-0`}>
              {habilidades.comportamentais.map((item) => (
                <li key={item}><i className="bi bi-check2-circle text-primary me-2"></i>{item}</li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
}

export default SkillsSection
