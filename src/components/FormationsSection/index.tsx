import portfolioData from "../../assets/portfolio.json"
import type { PortfolioContent } from "../../types"
import Formation from "../Formation"

interface FormationSectionProps {
  className?: string
}

function FormationsSection({ className = "" }: FormationSectionProps) {
  const { formacoes, cursosComplementares, contato } = portfolioData as PortfolioContent

  return (
    <section id="curriculo" className={`${className} px-3 px-lg-5`}>
      <div className={`text-center mb-4`}>
        <h2 className={`fs-1`}>Currículo</h2>
      </div>

      <div className={`row g-4`}>
        <div className={`col-12 col-lg-7`}>
          <h3 className={`fs-4 mb-3`}>Formação acadêmica</h3>
          <div className={`row row-cols-1 g-3`}>
            {formacoes.map((formation) => (
              <div className={`col`} key={`${formation.instituicao}-${formation.curso}`}>
                <Formation formation={formation} />
              </div>
            ))}
          </div>
        </div>

        <div className={`col-12 col-lg-5`}>
          <h3 className={`fs-4 mb-3`}>Cursos complementares</h3>
          <div className={`d-flex flex-column gap-3`}>
            {cursosComplementares.map((curso) => (
              <article className={`border rounded-3 p-3 bg-body`} key={`${curso.nome}-${curso.ano}`}>
                <h4 className={`fs-6 mb-1`}>{curso.nome}</h4>
                <p className={`text-muted mb-2`}>{curso.instituicao} - {curso.ano}</p>
                {curso.link && (
                  <a href={curso.link} target="_blank" rel="noopener noreferrer" className={`fw-semibold`}>
                    Ver certificado<i className="bi bi-box-arrow-up-right ms-2"></i>
                  </a>
                )}
              </article>
            ))}
          </div>
          <a href={contato.curriculo} download className={`btn btn-outline-primary rounded-5 fw-semibold mt-4`}>
            Baixar currículo em PDF<i className="bi bi-file-earmark-arrow-down ms-2"></i>
          </a>
        </div>
      </div>
    </section>
  )
}

export default FormationsSection
