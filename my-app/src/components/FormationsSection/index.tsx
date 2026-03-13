import formations from "../../assets/formations.json"
import Formation from "../Formation"

interface FormationSectionProps {
  className?: string
}

function FormationsSection({ className = "" }: FormationSectionProps){
  return(
    <>
      <section id="formacoes" className={`${className}`}>
        <h2 className={`text-center`}>Formações</h2>
        <div className={`article-list d-flex flex-column`}>
          {formations.map((formation, key) => (
            <Formation key={key} formation={formation} />
          ))}
        </div>
      </section>
    </>
  )
}

export default FormationsSection