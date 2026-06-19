import type { FormationInfo } from "../../types"

interface FormationProps {
  formation: FormationInfo
}

function Formation({ formation }: FormationProps) {
  return (
    <article className={`border rounded-3 p-3 h-100 bg-body`}>
      <div className={`d-flex flex-wrap justify-content-between gap-2 mb-2`}>
        <h3 className={`fs-5 mb-0`}>{formation.instituicao}</h3>
        {formation.status && (
          <span className={`badge text-bg-primary align-self-start`}>{formation.status}</span>
        )}
      </div>
      <p className={`fw-medium mb-1`}>{formation.curso}</p>
      <p className={`text-muted mb-0`}>{formation.dataInicio} - {formation.dataConclusao}</p>
    </article>
  )
}

export default Formation
