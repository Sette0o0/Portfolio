import { useEffect } from "react"
import { useTheme } from "../../context/Theme"
import type { ProjectInfo } from "../../types"

interface ProjectProps {
  projeto: ProjectInfo
  className?: string
}

function Project({ projeto, className = "" }: ProjectProps) {
  const { theme } = useTheme()
  const image = projeto.imagens?.[0]

  useEffect(() => {
    document.querySelectorAll<HTMLElement>("div.details-content")
      .forEach((detail) => {
        detail.style.setProperty("--max-height", detail.firstElementChild?.clientHeight + "px")
      })
  })

  return (
    <article className={`${className} d-flex flex-column position-relative px-3 px-lg-5 py-5`}>
      {(theme === "dark" && image) && (
        <div style={{
          background: `url("${image}") center no-repeat`,
          backgroundSize: "cover",
          position: "absolute",
          inset: "0",
          zIndex: "-1",
          filter: `blur(60px) brightness(.5)`,
          transform: "scale(1, .7)"
        }}></div>
      )}
      <div>
        <h3 className={`text-wrap-balance mb-3`}>{projeto.nome}</h3>
        <div className={`d-flex flex-column flex-md-row column-gap-3 column-gap-lg-5`}>
          {image && (
            <div className={`order-md-last align-self-center col-11 col-sm-10 col-md-5 mb-3 mb-md-0`}>
              <img src={image} alt={`Imagem do projeto ${projeto.nome}`}
                className={`w-100 rounded-3 my-auto shadow-sm`}
              />
            </div>
          )}

          <div className={`d-flex flex-column w-100`}>
            <p className={`text-justify`}>{projeto.descricao}</p>
            <ul className={`list-unstyled d-flex flex-wrap gap-2 mb-3`}>
              {projeto.tecnologias.map((tec) => (
                <li key={tec} className={`badge rounded-pill text-bg-secondary fw-medium`}>{tec}</li>
              ))}
            </ul>

            <div className={`row row-cols-1 row-cols-lg-2 g-3 mb-3`}>
              <div className={`col`}>
                <h4 className={`fs-6 mb-1`}>Problema</h4>
                <p className={`text-muted mb-0`}>{projeto.problema}</p>
              </div>
              <div className={`col`}>
                <h4 className={`fs-6 mb-1`}>Objetivo</h4>
                <p className={`text-muted mb-0`}>{projeto.objetivo}</p>
              </div>
              <div className={`col`}>
                <h4 className={`fs-6 mb-1`}>Solução</h4>
                <p className={`text-muted mb-0`}>{projeto.solucao}</p>
              </div>
              <div className={`col`}>
                <h4 className={`fs-6 mb-1`}>Resultados</h4>
                <p className={`text-muted mb-0`}>{projeto.resultados}</p>
              </div>
            </div>

            <details className={`d-flex flex-column row-gap-2`}>
              <summary>
                <span>Metodologia e desafios técnicos</span>
              </summary>
            </details>
            <div className={`details-content text-justify mb-3`}>
              <div className={`p-2`}>
                {projeto.atuacao && <p className={`mb-2`}><strong>Atuação:</strong> {projeto.atuacao}</p>}
                <p className={`mb-2`}><strong>Metodologia:</strong> {projeto.metodologia}</p>
                <p className={`mb-0`}><strong>Desafios:</strong> {projeto.desafios}</p>
              </div>
            </div>

            <div className={`d-flex flex-wrap gap-2 mt-auto`}>
              <a href={projeto.repo} target="_blank" rel="noopener noreferrer" className={`btn btn-primary fw-semibold rounded-5 px-3 py-2`}>
                Repositório<i className="bi bi-box-arrow-up-right ms-2"></i>
              </a>
              {projeto.demo && (
                <a href={projeto.demo} target="_blank" rel="noopener noreferrer" className={`btn btn-outline-primary fw-semibold rounded-5 px-3 py-2`}>
                  Demonstração<i className="bi bi-display ms-2"></i>
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </article>
  )
}

export default Project
