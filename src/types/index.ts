export interface ProjectInfo {
  nome: string
  descricao: string
  problema: string
  objetivo: string
  solucao: string
  metodologia: string
  desafios: string
  resultados: string
  imagens?: string[]
  atuacao?: string
  softskills?: string
  tecnologias: string[]
  repo: string
  demo?: string
}

export interface FormationInfo {
  instituicao: string
  curso: string
  dataInicio: string
  dataConclusao: string
  status?: string
}

export interface LinkableInfo {
  nome?: string
  titulo?: string
  instituicao?: string
  tipo?: string
  ano: string
  resumo?: string
  descricao?: string
  link?: string
  arquivo?: string
}

export interface SkillGroup {
  grupo: string
  itens: string[]
}

export interface PortfolioContent {
  perfil: {
    nome: string
    nomeCurto: string
    foto: string
    formacaoAtual: string
    titulo: string
    objetivo: string
    areasInteresse: string[]
    resumo: string
    sobre: string[]
  }
  contato: {
    email: string
    linkedin: string
    github: string
    curriculo: string
  }
  formacoes: FormationInfo[]
  cursosComplementares: LinkableInfo[]
  projetos: ProjectInfo[]
  habilidades: {
    tecnicas: SkillGroup[]
    comportamentais: string[]
  }
  documentosAcademicos: LinkableInfo[]
  certificados: LinkableInfo[]
  eventos: LinkableInfo[]
}
