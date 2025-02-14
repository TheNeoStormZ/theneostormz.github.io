import React, { useState, useEffect, useContext } from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import "./styles/work.css";


import LanguageContext from "../../LanguageContext";
import translations from "../../data/translations";


const Works = () => {
	
	const { language } = useContext(LanguageContext);

	const [INFO, setINFO] = useState(translations[language]);


		useEffect(() => {
			setINFO(translations[language]); 
		}, [language]); 

	return (
		<div className="work-list">
			<Card
				icon={faBriefcase}
				title={INFO.card_headers.works}
				body={
					<div className="work-body">
						{INFO.work && INFO.work.map(
							(work,id) => (
							<div className="work" onClick={() => window.open(work.url, '_blank')}>
							<img
								height={30}
								src={work.logo}
								alt={`${id}-study`}
								className="work-image"
							/>
							<div className="work-title">{work.title}</div>
							<div className="work-subtitle">
							{work.description}
							</div>
							<div className="work-duration" style={{paddingLeft: 45}}>{work.timeframe}</div>
						</div>
							)
						)}
					</div>
				}
			/>
		</div>
	);
};

export default Works;
