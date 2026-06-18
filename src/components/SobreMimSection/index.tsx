
interface SobreMimSectionProps {
  className?: string
}

function SobreMimSection({ className = "" }: SobreMimSectionProps){
  return(
    <>
      <section id="sobre-mim" className={`${className} px-3 px-lg-5`}>
        <h2 className={`text-center fs-1`}>Sobre mim</h2>
        <div className={`py-3`}>
          <p>Eu estou estudando na fatec onde todo semestre faço projetos em grupo, usando a metodologia Scrum, chamados de <span title="Aprendizagem por Projeto Integrador" style={{cursor: "help", textDecorationLine: "underline", textDecorationStyle: "dotted"}}>API</span> onde empresas, em parceria com a fatec, trazem problemas reais para os alunos, que desenvolvem soluções a partir de problemas reais.</p>
          <p>No primeiro semestre aprendi:</p>
          <ul>
            <li>Algoritmos e Lógica de Programação com python</li>
            <li>Dev. Web com HTML, CSS e JavaScript</li>
            <li>Modelagem de Banco de Dados com MySql</li>
            <li>Engenharia de Software</li>
          </ul>
          <p>No segundo semestre aprendi:</p>
          <ul>
            <li>Matemática para Computação</li>
            <li>Estrutura de Dados com Python e um pouco de C</li>
            <li>Técnicas de Programação com TypeScript</li>
            <li>Dev. Web II sobre criação de servidores e api's com node.js/express</li>
            <li>Engenharia de Software II</li>
          </ul>
          <p>Agora no terceiro semestre estou aprendendo:</p>
          <ul>
            <li>Dev. Web III sobre criação de micro serviços com java/spring</li>
            <li>Técnicas de Programação II com TypeScript</li>
            <li>Álgebra Linear</li>
            <li>Banco de Dados Não Relacional</li>
            <li>Gestão Ágil de Projetos de Software</li>
          </ul>
        </div>
        <div className={`py-3`}>
          Aqui está meu <a href="/CurrículoSette.pdf" download={true}>Currículo</a>
        </div>
      </section>
    </>
  )
}

export default SobreMimSection