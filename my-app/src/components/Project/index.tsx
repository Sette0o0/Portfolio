import type { ProjectInfo } from "../../types"

interface ProjectProps {
  projeto: ProjectInfo
  className?: string
}

function Project({ projeto, className = "" }: ProjectProps){
  return(
    <>
      <article className={`${className} d-flex flex-column px-3 px-lg-5`}>
        <h3 className={`mb-4`}>{projeto.nome}</h3>
        <div className={`d-flex flex-column flex-md-row column-gap-3 column-gap-lg-5`}>

          {projeto.imgUrl && (
            // ser uma area clicavel q mostre a imagem um pouco maior (poder ver a lista de imagens)
            // ter suporte para mais imagens, talvez com um carroussel
            // tela maior que md a imagem ficar na direita
              <div className={`order-md-last align-self-center col-11 col-sm-10 col-md-5 mb-3 mb-md-0`}>
                <img src={projeto.imgUrl} alt={`Imagem do projeto ${projeto.nome}`}
                  className={`w-100 rounded rounded-4 my-auto`}
                />
              </div>
          )}

          <div className={`d-flex flex-column w-100`}>
            <p className={`text-justify`}>{projeto.resumo}</p>
            <ul className={`list-unstyled text-muted`}>
              {projeto.tecnologias.map((tec) => (
                <li className={`list-inline-item`}>{tec}</li>
              ))}
            </ul>

            {projeto.atuacao && (
              <details>
                <summary>Minha atuação</summary>
                <p>{projeto.atuacao}</p>
              </details>
            )}

            <a href={projeto.repo} target="_blank" rel="noopener noreferrer" className={`btn btn-primary fw-semibold rounded-5 align-self-center px-3 py-2 mt-auto`}>
              Repositório<i className="bi bi-box-arrow-up-right ms-2"></i>
            </a>
          </div>
        </div>
      </article>
      {/* <article className={`d-flex flex-column h-100 bg-body-tertiary rounded-4 p-3 row-gap-2`}>
        <div>
          <h3 className={`text-center mb-3`}>{projeto.nome}</h3>
        </div>
        <div className={`d-flex flex-column h-100 column-gap-3`}>
          {projeto.imgUrl && (
            // ser uma area clicavel q mostre a imagem um pouco maior (poder ver a lista de imagens)
            // ter suporte para mais imagens, talvez com um carroussel
            // tela maior que md a imagem ficar na direita
            <img src={projeto.imgUrl} alt={`Imagem do projeto ${projeto.nome}`}
              className={`align-self-center rounded rounded-4 col-8 col-sm-7 col-lg-8 mb-3 mb-md-4`}
            />
          )}
          <div className={`d-flex flex-column w-100`}>
            <p className={`text-justify`}>{projeto.resumo}</p>
            <ul className={`list-unstyled text-muted`}>
              {projeto.tecnologias.map((tec) => (
                <li className={`list-inline-item`}>{tec}</li>
              ))}
            </ul>

            {projeto.atuacao && (
              <details>
                <summary>Minha atuação</summary>
                <p>{projeto.atuacao}</p>
              </details>
            )}
            <a href={projeto.repo} target="_blank" className={`btn btn-primary fw-semibold rounded-5 align-self-center px-3 py-2 mt-auto`}>Repositório <i className="bi bi-box-arrow-up-right"></i></a>
          </div>
        </div>
      </article> */}
    </>
  )
}

export default Project