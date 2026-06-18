import type { FormationInfo } from "../../types"

interface FormationProps {
  formation: FormationInfo
}

function Formation({ formation }: FormationProps){
  return(
    <>
      <article className={`px-3 px-lg-5 py-4`}>
        <h3 className={`fs-4`}>{formation.instituicao}</h3>
        <p className={`fw-medium mb-1`}>{formation.curso}</p>
        <p className={`mb-0`}>{formation.dataInicio} - {formation.dataConclusao}</p>
      </article>
    </>
  )
}

export default Formation