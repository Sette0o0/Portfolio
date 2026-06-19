import portfolioData from "../../assets/portfolio.json"
import type { PortfolioContent } from "../../types"

function Footer() {
  const { perfil, contato } = portfolioData as PortfolioContent

  return (
    <footer className={`d-flex flex-column align-items-center bg-body-secondary text-center gap-2 px-3 py-4`}>
      <span>Feito por: {perfil.nome}</span>
      <div className={`d-flex gap-3`}>
        <a href={contato.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub">
          <i className="bi bi-github"></i>
        </a>
        <a href={contato.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
          <i className="bi bi-linkedin"></i>
        </a>
        <a href={`mailto:${contato.email}`} aria-label="E-mail">
          <i className="bi bi-envelope"></i>
        </a>
      </div>
    </footer>
  )
}

export default Footer
