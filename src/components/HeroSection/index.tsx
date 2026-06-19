import portfolioData from "../../assets/portfolio.json";
import type { PortfolioContent } from "../../types";
import styles from "./index.module.css";

function HeroSection() {
  const { perfil, contato } = portfolioData as PortfolioContent;

  return (
    <section id="inicio" className={`d-flex flex-row flex-wrap overflow-hidden`}>
      <div className={`d-flex col-12 col-md-6 position-relative ${styles.imageBox}`}>
        <img
          className={styles.profileImage}
          src={perfil.foto}
          alt={`Foto de perfil de ${perfil.nome}`}
        />
        <div className={`${styles.gradient}`}></div>
      </div>
      <div
        className={`${styles.content} d-flex flex-column justify-content-center align-items-center text-center col-12 col-md-6 px-3 py-5 pt-sm-3`}
      >
        <h1 className={`${styles.name} mb-1 mb-sm-2`}>{perfil.nome}</h1>
        <h3 className={`${styles.area} text-muted mb-3 mb-sm-4`}>{perfil.titulo}</h3>
        <p className={`${styles.info} mb-3`}>{perfil.resumo}</p>
        <p className={`${styles.info} text-muted small mb-4`}>{perfil.formacaoAtual}</p>
        <div className={`d-flex flex-wrap justify-content-center gap-2`}>
          <a
            href={contato.github}
            target="_blank"
            rel="noopener noreferrer"
            className={`btn btn-primary rounded-5 px-3`}
          >
            <i className="bi bi-github me-2"></i>GitHub
          </a>
          <a
            href={contato.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className={`btn btn-outline-primary rounded-5 px-3`}
          >
            <i className="bi bi-linkedin me-2"></i>LinkedIn
          </a>
          <a
            href={contato.curriculo}
            target="_blank"
            className={`btn btn-outline-secondary rounded-5 px-3`}
          >
            <i className="bi bi-file-earmark-arrow-down me-2"></i>Currículo
          </a>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
