import React, { useState, useEffect, useContext } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import {
	faGithub,
	faLinkedin,
} from "@fortawesome/free-brands-svg-icons";


import "./styles/socials.css";

import LanguageContext from "../../LanguageContext";
import translations from "../../data/translations";


const Socials = () => {
	const { language } = useContext(LanguageContext);

	const [INFO, setINFO] = useState(translations[language]);

	useEffect(() => {
		setINFO(translations[language]); 
	}, [language]); 

	return (
		<div className="socials">


			<div className="social">
				<a href={INFO.socials.github} target="_blank" rel="noreferrer">
					<div className="social-icon">
						<FontAwesomeIcon
							icon={faGithub}
							className="social-icon"
						/>
					</div>
					<div className="social-text">{INFO.socials_content.github}</div>
				</a>
			</div>

			<div className="social">
				<a
					href={INFO.socials.linkedin}
					target="_blank"
					rel="noreferrer"
				>
					<div className="social-icon">
						<FontAwesomeIcon
							icon={faLinkedin}
							className="social-icon"
						/>
					</div>
					<div className="social-text">{INFO.socials_content.linkedin}</div>
				</a>
			</div>


			<div className="email">
				<div className="email-wrapper">
					<a
						href={`mailto:${INFO.main.email}`}
						target="_blank"
						rel="noreferrer"
					>
						<div className="social-icon">
							<FontAwesomeIcon icon={faEnvelope} />
						</div>

						<div className="social-text">{INFO.main.email}</div>
					</a>
				</div>
			</div>
		</div>
	);
};

export default Socials;
