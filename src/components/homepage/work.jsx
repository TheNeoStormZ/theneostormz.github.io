import React from "react";
import { faBriefcase } from "@fortawesome/free-solid-svg-icons";

import Card from "../common/card";

import INFO from "../../data/user";

import "./styles/work.css";

const work = INFO?.work;

const Works = () => {
	return (
		<div className="work-list">
			<Card
				icon={faBriefcase}
				title="Trabajos"
				body={
					<div className="work-body">
						{work && work.map(
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
