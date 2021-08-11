import React from "react";
import menu from "../images/bx-menu.svg";
import "../styles/components/nav.scss";

const Nav = () => {
	return (
		<nav className="nav">
			<div className="nav__container">
				<h1 className="nav__logo">ArmandoCres</h1>
				<label htmlFor="menu" className="nav__label">
					<img src={menu} alt="menu hamburgesa" className="nav__img" />
				</label>
				<input type="checkbox" id="menu" className="nav__input" />

				<div className="nav__menu">
					<a href="/#inicio" className="nav__item">
						Inicio
					</a>
					<a href="/#Projects" className="nav__item">
						Proyectos
					</a>
					<a href="/#footers" className="nav__item">
						Contacto
					</a>
				</div>
			</div>
		</nav>
	);
};

export default Nav;
