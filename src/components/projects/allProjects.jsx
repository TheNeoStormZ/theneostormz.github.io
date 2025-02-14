import React, { useState, useEffect, useContext } from "react";
import Project from "./project";

import "./styles/allProjects.css";

import LanguageContext from "../../LanguageContext";
import translations from "../../data/translations";


const AllProjects = () => {
	const { language } = useContext(LanguageContext);

	const [INFO, setINFO] = useState(translations[language]);

	useEffect(() => {
		setINFO(translations[language]); 
	}, [language]); 

	return (
		<div className="all-projects-container">
			{INFO.projects.map((project, index) => (
				<div className="all-projects-project" key={index}>
					<Project
						logo={project.logo}
						title={project.title}
						description={project.description}
						linkText={project.linkText}
						link={project.link}
					/>
				</div>
			))}
		</div>
	);
};

export default AllProjects;
