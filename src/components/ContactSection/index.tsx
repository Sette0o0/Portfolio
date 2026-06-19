import portfolioData from "../../assets/portfolio.json"
import type { PortfolioContent } from "../../types"

interface ContactSectionProps {
  className?: string
}

function ContactSection({ className = "" }: ContactSectionProps) {
  const { contato } = portfolioData as PortfolioContent

  return (
    <section id="contato" className={`${className} px-3 px-lg-5`}>
      <div className={`text-center mb-4`}>
        <p className={`text-uppercase text-primary fw-semibold small mb-2`}>Contato profissional</p>
        <h2 className={`fs-1`}>Contato</h2>
      </div>
      <div className={`d-flex flex-wrap justify-content-center gap-3`}>
        <a href={`mailto:${contato.email}`} className={`btn btn-outline-primary rounded-5 px-3 fw-semibold`}>
          <i className="bi bi-envelope me-2"></i>{contato.email}
        </a>
        <a href={contato.linkedin} target="_blank" rel="noopener noreferrer" className={`btn btn-outline-primary rounded-5 px-3 fw-semibold`}>
          <i className="bi bi-linkedin me-2"></i>LinkedIn
        </a>
        <a href={contato.github} target="_blank" rel="noopener noreferrer" className={`btn btn-outline-primary rounded-5 px-3 fw-semibold`}>
          <i className="bi bi-github me-2"></i>GitHub
        </a>
      </div>
    </section>
  )
}

export default ContactSection
