import React from "react";
import { faGraduationCap } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import INFO from "../../data/user";

import "./styles/studies.css";

const studies = INFO?.studies;

const Studies = () => {
	return (
		<div className="studies">
			<Card
				icon={faGraduationCap}
				title="Estudios"
				body={
					<div className="studies-body">
						{studies && studies.map(
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
