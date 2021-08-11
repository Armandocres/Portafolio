import React from "react";
import { RiHtml5Fill } from "react-icons/ri";
import { DiNodejs } from "react-icons/di";
import { IoLogoJavascript, IoLogoCss3 } from "react-icons/io";
import { DiReact, DiSass } from "react-icons/di";
import "../styles/components/skill.scss";

const Skills = () => {
	return (
		<div className="Skills">
			<h2>Skills</h2>
			<div className="Skills__icons">
				<div className="Skills__icons--tech">
					<RiHtml5Fill />
					<p className="tecnologies">HTML</p>
				</div>
				<div className="Skills__icons--tech">
					<DiNodejs />
					<p className="tecnologies">NodeJS</p>
				</div>
				<div className="Skills__icons--tech">
					<IoLogoJavascript />
					<p className="tecnologies">JavaScript</p>
				</div>
				<div className="Skills__icons--tech">
					<DiReact />
					<p className="tecnologies">React</p>
				</div>
				<div className="Skills__icons--tech">
					<IoLogoCss3 />
					<p className="tecnologies">CSS</p>
				</div>
				<div className="Skills__icons--tech">
					<DiSass />
					<p className="tecnologies">Sass</p>
				</div>
			</div>
		</div>
	);
};

export default Skills;
