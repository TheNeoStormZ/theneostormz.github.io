import React, { useState, useEffect, useContext } from "react";
import { Helmet } from "react-helmet";

import NavBar from "../components/common/navBar";
import Footer from "../components/common/footer";
import Logo from "../components/common/logo";
import Socials from "../components/about/socials";

import SEO from "../data/seo";

import "./styles/contact.css";
import MailtoLink from "../components/mailto.tsx";

import LanguageContext from "../LanguageContext";
import translations from "../data/translations";

import GlitchText from "../components/animated/GlitchText/GlitchText.jsx";

const Contact = () => {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	const { language } = useContext(LanguageContext);

	const [INFO, setINFO] = useState(translations[language]);

	useEffect(() => {
		setINFO(translations[language]);
	}, [language]);

	const currentSEO = SEO.find((item) => item.page === "contact");

	return (
		<React.Fragment>
			<Helmet>
				<title>{`Contact | ${INFO.main.title}`}</title>
				<meta name="description" content={currentSEO.description} />
				<meta
					name="keywords"
					content={currentSEO.keywords.join(", ")}
				/>
			</Helmet>

			<div className="page-content">
				<NavBar active="contact" />
				<div className="content-wrapper">
					<div className="contact-logo-container">
						<div className="contact-logo">
							<Logo width={46} />
						</div>
					</div>

					<div className="contact-container">
						<div className="title contact-title">
							<GlitchText
								speed={1}
								enableShadows={true}
								enableOnHover={false}
								className="custom-class"
							>
								{INFO.contact_header.header}
							</GlitchText>
						</div>

						<div className="subtitle contact-subtitle">
							{INFO.contact_header.line_one}
							&nbsp; <MailtoLink />
						</div>
						<div className="subtitle contact-subtitle">
							{INFO.contact_header.line_two}
						</div>
					</div>

					<div className="socials-container">
						<div className="contact-socials">
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

export default Contact;
