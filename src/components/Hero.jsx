import React from "react";
import perfil from "../images/perfil.jpg";
import { GoMarkGithub } from "react-icons/go";
import { AiFillLinkedin } from "react-icons/ai";
import "../styles/components/hero.scss";

const Hero = () => {
	return (
		<div className="Hero">
			<div className="Hero__container">
				<figure className="Hero__figure">
					<img src={perfil} alt="perfil" />
				</figure>
				<h2>Hola!</h2>
				<span>
					Mi nombre es Armando cruz y soy un apasionado por el desarrollo web.
				</span>
				<p>
					Tengo 22 años, actualmente estoy estudiando la carrera de ingenieria
					en computación en universidad autónoma metropolitana (UAM-C) y es mi
					objetivo convertirme en desarrollador fullstack dentro del ámbito web.
					<br />
					Mi meta es ayudar a las demás personas mediante el uso de la
					tecnologia creando aplicaciones de alto impacto en la sociedad.
				</p>
				<div className="Hero__social">
					<span className="Hero__social--redes">Mis redes sociales: </span>
					<a href="https://github.com/Armandocres">
						<GoMarkGithub />
					</a>
					<a href="https://www.linkedin.com/in/armandocres/">
						<AiFillLinkedin />
					</a>
				</div>
			</div>
		</div>
	);
};

export default Hero;
