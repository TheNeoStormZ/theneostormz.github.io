import React from "react";
import { Link } from "react-router-dom";

import "./styles/footer.css";

const Footer = () => {
	return (
		<React.Fragment>
			<div className="footer">
				<div className="footer-links">
					<ul className="footer-nav-link-list">
						<li className="footer-nav-link-item">
							<Link to="/">Inicio</Link>
						</li>
						<li className="footer-nav-link-item">
							<Link to="/about">Acerca de mi</Link>
						</li>
						<li className="footer-nav-link-item">
							<Link to="/projects">Proyectos</Link>
						</li>
						<li className="footer-nav-link-item">
							<Link to="/contact">Contacto</Link>
						</li>
					</ul>
				</div>

				<div className="footer-credits">
					<div className="footer-credits-text">
						Basado en
						© 2023 Tharindu.dev. Todos los derechos reservados.
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Footer;
