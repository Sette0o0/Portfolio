import MinhaFoto from "../../assets/RafaelSetteFoto.jpg"
// compactar a imagem depois

import styles from "./index.module.css"

function HeroSection(){
  return(
    <>
      <section id="inicio" className={`d-flex flex-row flex-wrap overflow-hidden`}>
        <div className={`d-flex col-12 col-sm-6 position-relative`}>
          <img className={`w-100`} src={MinhaFoto} alt="Foto de perfil de Rafael Sette" />
          <div className={`${styles.gradient}`}></div>
        </div>
        <div className={`${styles.content} d-flex flex-column justify-content-center align-items-center text-center col-12 col-sm-6 px-3 py-5 pt-sm-3`}>
          <h1 className={`${styles.name} mb-1 mb-sm-2`}>Rafael <span className={`${styles.sette}`}>Sette</span> de Araujo</h1>
          <h3 className={`${styles.area} text-muted mb-4 mb-sm-5`}>Desenvolvedor Web</h3>
          <p className={`${styles.info} m-0`}>Desenvolvo aplicações web com React e TypeScript, além de estruturar APIs e servidores com Node.js e Express.</p>
        </div>
      </section>
    </>
  )
}

export default HeroSection