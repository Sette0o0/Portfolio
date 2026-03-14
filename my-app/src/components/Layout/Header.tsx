import { useEffect, useRef } from "react"
import ThemeToggle from "../ThemeToggle"
import { Collapse } from "bootstrap"

function Header() {
	const navbarRef = useRef<HTMLDivElement | null>(null)

	useEffect(() => {
		const header = document.querySelector("header.navbar")
		if (!header) return

		const headerHeight = header.clientHeight
		
		const sections = document.querySelectorAll("section")
		
		sections.forEach((section) => {
			(section as HTMLElement).style.scrollMarginTop = `${headerHeight}px`
		});
	}, [])

	function closeNavbar() {
		if (!navbarRef.current) return

		const collapse = Collapse.getOrCreateInstance(navbarRef.current)
		collapse.hide()
	}

	function toggleNavbar() {
		if (!navbarRef.current) return

		const collapse = Collapse.getOrCreateInstance(navbarRef.current)
		collapse.toggle()
	}
	
	function waitForScrollEnd(callback: () => void) {
		let scrollTimeout: number

		function onScroll() {
			clearTimeout(scrollTimeout)

			scrollTimeout = window.setTimeout(() => {
				window.removeEventListener("scroll", onScroll)
				callback()
			}, 120)
		}

		window.addEventListener("scroll", onScroll)
	}

	function handleNavClick(id: string) {
		const section = document.getElementById(id)

		section?.scrollIntoView({
			behavior: "smooth"
		})

		waitForScrollEnd(closeNavbar)
	}

	return (
		<>
			<header className="navbar navbar-expand-sm bg-body-secondary sticky-top">
				<nav className={`container-fluid`}>
					<p className={`navbar-brand fw-medium mb-0`}>Rafael Sette</p>
					<button className="navbar-toggler" type="button" onClick={toggleNavbar} aria-controls="navbarContent" aria-expanded="false" aria-label="Toggle navigation">
						<span className="navbar-toggler-icon"></span>
					</button>
					<div ref={navbarRef} id="navbarContent" className={`collapse navbar-collapse`}>
						<ul className={`navbar-nav w-100`}>
							<li>
								<a
									className="nav-link"
									onClick={() => handleNavClick("inicio")}
								>
									Início
								</a>
							</li>

							<li>
								<a
									className="nav-link"
									onClick={() => handleNavClick("projetos")}
								>
									Projetos
								</a>
							</li>

							<li>
								<a
									className="nav-link"
									onClick={() => handleNavClick("formacoes")}
								>
									Formações
								</a>
							</li>
							<li className={`p-1 pb-2 p-sm-0 ms-sm-auto`}>
								<ThemeToggle className={`p-1`} />
							</li>
						</ul>
					</div>
				</nav>
			</header>
		</>
	)
}

export default Header