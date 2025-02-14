import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import "./styles/navBar.css";

import LanguageContext from "../../LanguageContext";
import translations from "../../data/translations";

const NavBar = (props) => {
	const { active } = props;

	const { language } = useContext(LanguageContext);

	const [INFO, setINFO] = useState(translations[language]);

	useEffect(() => {
		setINFO(translations[language]); 
	}, [language]); 

	return (
		<React.Fragment>
			<div className="nav-container">
				<nav className="navbar">
					<div className="nav-background">
						<ul className="nav-list">
							<li
								className={
									active === "home"
										? "nav-item active"
										: "nav-item"
								}
							>
								<Link to="/">{INFO.nav_bar.home}</Link>
							</li>
							<li
								className={
									active === "about"
										? "nav-item active"
										: "nav-item"
								}
							>
								<Link to="/about">{INFO.nav_bar.about}</Link>
							</li>
							<li
								className={
									active === "projects"
										? "nav-item active"
										: "nav-item"
								}
							>
								<Link to="/projects">{INFO.nav_bar.projects}</Link>
							</li>
							<li
								className={
									active === "contact"
										? "nav-item active"
										: "nav-item"
								}
							>
								<Link to="/contact">{INFO.nav_bar.contact}</Link>
							</li>
						</ul>
					</div>
				</nav>
			</div>
		</React.Fragment>
	);
};

export default NavBar;
