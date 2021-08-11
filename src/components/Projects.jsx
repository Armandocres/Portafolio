import React from "react";
import "../styles/components/projects.scss";

const Projects = ({ name, description, enlace, logo }) => {
	return (
		<div className="Projects">
			<div className="Projects__container">
				<figure className="Projects__figure">
					<img src={logo} alt="logo" />
				</figure>
				<h4 className="Projects__title">{name}</h4>
				<p className="Projects__stats">{description}</p>
				<div className="Projects__enlace">
					<a href={enlace} className="Projects__ancla">
						ver más
					</a>
				</div>
			</div>
		</div>
	);
};

export default Projects;
