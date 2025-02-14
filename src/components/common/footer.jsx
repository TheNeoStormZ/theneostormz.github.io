import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import "./styles/footer.css";

import LanguageContext from "../../LanguageContext";
import translations from "../../data/translations";


const Footer = () => {
	
	const { language } = useContext(LanguageContext);

	const [INFO, setINFO] = useState(translations[language]);

	useEffect(() => {
		setINFO(translations[language]); 
	}, [language]); 

	return (
		<React.Fragment>
			<div className="footer">
				<div className="footer-links">
					<ul className="footer-nav-link-list">
						<li className="footer-nav-link-item">
							<Link to="/">{INFO.nav_bar.home}</Link>
						</li>
						<li className="footer-nav-link-item">
							<Link to="/about">{INFO.nav_bar.about}</Link>
						</li>
						<li className="footer-nav-link-item">
							<Link to="/projects">{INFO.nav_bar.projects}</Link>
						</li>
						<li className="footer-nav-link-item">
							<Link to="/contact">{INFO.nav_bar.contact}</Link>
						</li>
					</ul>
				</div>

				<div className="footer-credits">
					<div className="footer-credits-text">
					{INFO.nav_bar.based_on}
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Footer;
