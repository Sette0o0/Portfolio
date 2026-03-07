import ThemeToggle from "../ThemeToggle"

function Header() {
	return (
		<>
			<header className="d-flex align-items-center p-3">
				<nav className={`me-auto`}>
					<ul className={`d-flex flex-row list-unstyled column-gap-3 m-0`}>
						<li>Início</li>
						<li>Projetos</li>
						<li>Sobre Mim</li>
					</ul>
				</nav>
				<ThemeToggle />
			</header>
		</>
	)
}

export default Header