import { useEffect } from "react"
import { useTheme } from "../../context/Theme"
import type { ProjectInfo } from "../../types"

interface ProjectProps {
  projeto: ProjectInfo
  className?: string
}

function Project({ projeto, className = "" }: ProjectProps){
  const { theme } = useTheme()

  useEffect(() => {
    document.querySelectorAll<HTMLElement>("div.details-content")
      .forEach((detail) => {
        detail.style.setProperty("--max-height", detail.firstElementChild?.clientHeight + "px")
      })
  })

  return(
    <>
      <article className={`${className} d-flex flex-column position-relative p-3 p-lg-5`}>
        {(theme === "dark" && projeto.imgUrl) && (
          <div className={``} style={{
            background: `url("${projeto.imgUrl[0]}") center no-repeat`,
            backgroundSize: "cover",
            position: "absolute",
            inset: "0",
            zIndex: "-1",
            filter: `blur(60px) brightness(.6)`,
            transform: "scale(1, .7)"
          }}></div>
        )}
        <div className={``}>
          <h3 className={`text-wrap-balance mb-3`}>{projeto.nome}</h3>
          <div className={`d-flex flex-column flex-md-row column-gap-3 column-gap-lg-5`}>

            {projeto.imgUrl && (
              // ser uma area clicavel q mostre a imagem um pouco maior (poder ver a lista de imagens)
              // ter suporte para mais imagens, talvez com um carroussel
              // tela maior que md a imagem ficar na direita
                <div className={`order-md-last align-self-center col-11 col-sm-10 col-md-5 mb-3 mb-md-0`}>
                  <img src={projeto.imgUrl[0]} alt={`Imagem do projeto ${projeto.nome}`}
                    className={`w-100 rounded rounded-4 my-auto`}
                  />
                </div>
            )}

            <div className={`d-flex flex-column w-100`}>
              <p className={`text-justify`}>{projeto.resumo}</p>
              <ul className={`list-unstyled text-muted`}>
                {projeto.tecnologias.map((tec, key) => (
                  <li key={key} className={`list-inline-item`}>{tec}</li>
                ))}
              </ul>

              {projeto.atuacao && (
                <>
                  <details className={`d-flex flex-column row-gap-2`}>
                    <summary>
                      <span>Minha atuação no projeto</span>
                    </summary>
                  </details>
                  <div className={`details-content text-justify mb-3`}>
                    <p className={`p-2 mb-0`}>{projeto.atuacao}</p>                    
                  </div>
                </>
              )}

              <a href={projeto.repo} target="_blank" rel="noopener noreferrer" className={`btn btn-primary fw-semibold rounded-5 align-self-center px-3 py-2 mt-auto`}>
                Repositório<i className="bi bi-box-arrow-up-right ms-2"></i>
              </a>
            </div>
          </div>
        </div>
      </article>
    </>
  )
}

export default Project