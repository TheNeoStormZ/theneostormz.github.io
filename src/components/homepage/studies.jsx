import React, { useState, useEffect, useContext } from "react";
import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import "./styles/studies.css";

import LanguageContext from "../../LanguageContext";
import translations from "../../data/translations";



const Studies = () => {

	const { language } = useContext(LanguageContext);

	const [INFO, setINFO] = useState(translations[language]);


		useEffect(() => {
			setINFO(translations[language]); 
		}, [language]); 


	return (
		<div className="studies">
			<Card
				icon={faGraduationCap}
				title={INFO.card_headers.studies}
				body={
					<div className="studies-body">
						{INFO.studies && INFO.studies.map(
							(study,id) => (
								<div className="study">
							<img
								height={30}
								src={study.logo}
								alt={`${id}-study`}
								className="study-image"
							/>
							<div className="study-title">{study.title}</div>
							<div className="study-subtitle">
							{study.institution}
							</div>
							<div className="study-duration">{study.timeframe}</div>
						</div>
							)
						)}
					</div>
				}
			/>
		</div>
	);
};

export default Studies;
