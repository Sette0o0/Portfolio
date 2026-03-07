import { useId } from "react"
import { useTheme } from "../../context/Theme"
import styles from "./index.module.css"

function ThemeToggle() {
  const { theme, toggleTheme } = useTheme()
  const maskId = useId()

  return(
    <>
      <button
        onClick={toggleTheme}
        aria-label={theme === "dark" ? "Ativar tema claro" : "Ativar tema escuro"}
        aria-pressed={theme === "dark"}
        className={`bg-transparent border-0 rounded-circle ${styles.themeToggle} ${theme == "dark" && styles.dark}`}
      >
        <svg width="30" height="30" viewBox="0 0 24 24" aria-hidden="true" className={`${styles.svg}`}>

          {/* máscara que faz parte do círculo principal sumir */}
          <mask id={maskId}>
            <rect x="0" y="0" width="24" height="24" fill="white"/>
            <circle className={`${styles.moonCut}`} cx="16.5" cy="9.5" r="5" />
          </mask>

          {/* círculo principal do sol e da lua */}
          <circle cx="12" cy="12" r="6" mask={`url(#${maskId})`} fill="currentColor" />

          {/* as linhas ao redor do sol */}
          <g className={`${styles.rays}`} stroke="currentColor" stroke-width="2" stroke-linecap="round">
            <line x1="12" y1="4" x2="12" y2="1" />
            <line x1="17.66" y1="6.34" x2="19.78" y2="4.22" />
            <line x1="20" y1="12" x2="23" y2="12" />
            <line x1="17.66" y1="17.66" x2="19.78" y2="19.78" />
            <line x1="12" y1="20" x2="12" y2="23" />
            <line x1="6.34" y1="17.66" x2="4.22" y2="19.78" />
            <line x1="4" y1="12" x2="1" y2="12" />
            <line x1="6.34" y1="6.34" x2="4.22" y2="4.22" />
          </g>
        </svg>
      </button>
    </>
  )
}

export default ThemeToggle