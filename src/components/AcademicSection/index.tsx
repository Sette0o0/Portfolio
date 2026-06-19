import portfolioData from "../../assets/portfolio.json"
import type { LinkableInfo, PortfolioContent } from "../../types"

interface AcademicSectionProps {
  className?: string
}

interface CollectionProps {
  title: string
  icon: string
  items: LinkableInfo[]
}

function getItemTitle(item: LinkableInfo) {
  return item.titulo ?? item.nome ?? item.tipo ?? "Item acadêmico"
}

function getItemLink(item: LinkableInfo) {
  return item.link || item.arquivo
}

function Collection({ title, icon, items }: CollectionProps) {
  return (
    <div>
      <h3 className={`fs-4 mb-3`}><i className={`bi ${icon} text-primary me-2`}></i>{title}</h3>
      <div className={`row row-cols-1 g-3`}>
        {items.length ? items.map((item) => {
          const link = getItemLink(item)

          return (
            <article className={`col`} key={`${getItemTitle(item)}-${item.ano}`}>
              <div className={`border rounded-3 p-3 h-100 bg-body`}>
                <div className={`d-flex flex-wrap justify-content-between gap-2 mb-2`}>
                  <h4 className={`fs-6 mb-0`}>{getItemTitle(item)}</h4>
                  <span className={`badge border text-body`}>{item.ano}</span>
                </div>
                {(item.instituicao || item.tipo) && (
                  <p className={`text-muted mb-2`}>{item.instituicao ?? item.tipo}</p>
                )}
                {(item.resumo || item.descricao) && (
                  <p className={`mb-0`}>{item.resumo ?? item.descricao}</p>
                )}
                {link && (
                  <a href={link} target="_blank" rel="noopener noreferrer" className={`d-inline-flex fw-semibold mt-3`}>
                    Acessar<i className="bi bi-box-arrow-up-right ms-2"></i>
                  </a>
                )}
              </div>
            </article>
          )
        }) : (
          <div>
            Sem {title}
          </div>
        )}
      </div>
    </div>
  )
}

function AcademicSection({ className = "" }: AcademicSectionProps) {
  const { documentosAcademicos, certificados, eventos } = portfolioData as PortfolioContent

  return (
    <section id="academico" className={`${className} px-3 px-lg-5`}>
      <div className={`text-center mb-4`}>
        <h2 className={`fs-1`}>Documentos, certificados e eventos</h2>
      </div>
      <div className={`row g-4`}>
        <div className={`col-12 col-lg-4`}>
          <Collection title="Trabalhos acadêmicos" icon="bi-journal-text" items={documentosAcademicos} />
        </div>
        <div className={`col-12 col-lg-4`}>
          <Collection title="Certificados" icon="bi-award" items={certificados} />
        </div>
        <div className={`col-12 col-lg-4`}>
          <Collection title="Eventos" icon="bi-calendar-event" items={eventos} />
        </div>
      </div>
    </section>
  )
}

export default AcademicSection
