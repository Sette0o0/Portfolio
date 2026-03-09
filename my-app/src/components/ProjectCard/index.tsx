
type ProjectInfo = {
  nome: string
  imgUrl?: string
  resumo: string
  detalhes: string
  repo: string
}

interface ProjectCardProps {
  projeto: ProjectInfo
}

function ProjectCard({ projeto }: ProjectCardProps){
  return(
    <>
      <article className={`d-flex flex-column bg-body-tertiary rounded-4 p-3 row-gap-2`}>
        <h3 className={`text-center mb-3`}>{projeto.nome}</h3>
        {projeto.imgUrl && (
          // ser uma area clicavel q mostre a imagem um pouco maior (poder ver a lista de imagens)
          // ter suporte para mais imagens, talvez com um carroussel
          // tela maior que md a imagem ficar na direita
          <img src={projeto.imgUrl} alt={`Imagem do projeto ${projeto.nome}`} />
        )}
        <div className={`d-flex flex-column`}>
          <p>{projeto.resumo}</p>
          <details>
            <summary>Detalhes</summary>
            <p>{projeto.detalhes}</p>
          </details>
          <a href={projeto.repo} target="_blank" className={`text-decoration-none text-white fw-semibold bg-primary rounded-5 align-self-center px-3 py-2`}>Repositório <i className="bi bi-box-arrow-up-right"></i></a>
        </div>
      </article>
    </>
  )
}

export default ProjectCard