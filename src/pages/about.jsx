import React, { useState, useEffect, useContext } from "react";
import { Helmet } from "react-helmet";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";
import Socials from "../components/about/socials";

import Studies from "../components/homepage/studies";

import SEO from "../data/seo";

import "./styles/about.css";
import Works from "../components/homepage/work";

import LanguageContext from "../LanguageContext";
import translations from "../data/translations";

import BlurText from "../components/animated/BlurText/BlurText";
import DecryptedText from "../components/animated/DecryptedText/DecryptedText";

const About = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const { language } = useContext(LanguageContext);

	const [INFO, setINFO] = useState(translations[language]);

	useEffect(() => {
		setINFO(translations[language]);
	}, [language]);

	const currentSEO = SEO.find((item) => item.page === "about");

	return (
		<React.Fragment>
			<Helmet>
				<title>{`About | ${INFO.main.title}`}</title>
				<meta name="description" content={currentSEO.description} />
				<meta
					name="keywords"
					content={currentSEO.keywords.join(", ")}
				/>
			</Helmet>

			<div className="page-content">
				<NavBar active="about" />
				<div className="content-wrapper">
					<div className="about-logo-container">
						<div className="about-logo">
							<Logo width={46} />
						</div>
					</div>

					<div className="about-container">
						<div className="about-main">
							<div className="about-right-side">
								<div className="title about-title">
									<BlurText
										text={INFO.about.title}
										delay={150}
										animateBy="words"
										direction="top"
										className="text-2xl mb-8"
									/>
								</div>

								<div className="subtitle about-subtitle">
								<DecryptedText
										text={INFO.about.description}
										speed={120}
										maxIterations={20}
										parentClassName="all-letters"
										encryptedClassName="encrypted"
										animateOn="view"
										revealDirection="center"
									/>	
								</div>

								<div className="homepage-work">
									<Works />
								</div>

								<div className="homepage-studies">
									<Studies />
								</div>
							</div>

							<div className="about-left-side">
								<div className="about-image-container">
									<div className="about-image-wrapper">
										<img
											src="about.jpg"
											alt="about"
											className="about-image"
										/>
									</div>
								</div>

								<div className="about-socials">
									<Socials />
								</div>
							</div>
						</div>
						<div className="about-socials-mobile">
							<Socials />
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

export default About;
