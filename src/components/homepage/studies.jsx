import React from "react";
import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import "./styles/studies.css";

const Studies = () => {
	return (
		<div className="studies">
			<Card
				icon={faGraduationCap}
				title="Estudios"
				body={
					<div className="studies-body">
												<div className="study">
							<img
								src="./kschool-logo.png"
								alt="kschool"
								className="study-image"
							/>
							<div className="study-title">Máster Hácking Ético</div>
							<div className="study-subtitle">
							KSchool
							</div>
							<div className="study-duration">Noviembre 2023 - Julio 2024</div>
						</div>
						<div className="study">
							<img
								src="./us-logo.png"
								alt="us"
								className="study-image"
							/>
							<div className="study-title">Ingeniería Informatica - Ingeniería del Software</div>
							<div className="study-subtitle">
							Universidad de Sevilla
							</div>
							<div className="study-duration">Septiembre 2019 - Julio 2023</div>
						</div>
					</div>
				}
			/>
		</div>
	);
};

export default Studies;
