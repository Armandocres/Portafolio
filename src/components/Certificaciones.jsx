import React from "react";
import "../styles/components/certificaciones.scss";

const Certificaciones = ({ img, desc, link, desclink }) => {
	return (
		<div className="Certi">
			<div className="Certi__stats">
				<figure className="Certi__figure">
					<img src={img} alt="certificado ibm" />
				</figure>
				<p>{desc}.</p>
			</div>
			<div className="Certi__links">
				<a href={link}>{desclink}</a>
			</div>
		</div>
	);
};

export default Certificaciones;
