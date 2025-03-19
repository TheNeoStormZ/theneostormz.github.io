import React, { useState, useEffect, useContext } from "react";
import { Helmet } from "react-helmet";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";
import AllProjects from "../components/projects/allProjects";

import SEO from "../data/seo";

import "./styles/projects.css";
import LanguageContext from "../LanguageContext";
import translations from "../data/translations";

import GradientText from "../components/animated/GradientText/GradientText";
import DecryptedText from "../components/animated/DecryptedText/DecryptedText";

const Projects = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);
	const { language } = useContext(LanguageContext);

	const [INFO, setINFO] = useState(translations[language]);

	useEffect(() => {
		setINFO(translations[language]);
	}, [language]);

	const currentSEO = SEO.find((item) => item.page === "projects");

	return (
		<React.Fragment>
			<Helmet>
				<title>{`Projects | ${INFO.main.title}`}</title>
				<meta name="description" content={currentSEO.description} />
				<meta
					name="keywords"
					content={currentSEO.keywords.join(", ")}
				/>
			</Helmet>

			<div className="page-content">
				<NavBar active="projects" />
				<div className="content-wrapper">
					<div className="projects-logo-container">
						<div className="projects-logo">
							<Logo width={46} />
						</div>
					</div>
					<div className="projects-container">
						<div className="title projects-title">
							<GradientText
								colors={[
									"#40ffaa",
									"#4079ff",
									"#40ffaa",
									"#4079ff",
									"#40ffaa",
								]}
								animationSpeed={3}
								showBorder={false}
								className="custom-class"
							>
								{INFO.projects_header.header}
							</GradientText>
						</div>

						<div className="subtitle projects-subtitle">
						<DecryptedText
										text={INFO.projects_header.description}
										speed={120}
										maxIterations={20}
										parentClassName="all-letters"
										encryptedClassName="encrypted"
										animateOn="view"
										revealDirection="center"
									/>	
							
						</div>

						<div className="projects-list">
							<AllProjects />
						</div>
					</div>
					<div className="page-footer">
						<Footer />
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

export default Projects;
