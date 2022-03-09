import React from "react";
import Script from "next/script";
import styles from "./Portfolio.module.css";
import axios from "axios";

import uiLibraryImage from "../../src/media/uilibrarybackground.png";
import pcbuilderImage from "../../src/media/pcbuilderbackground.png";
import valorantTrackerImage from "../../src/media/valoranttrackerbackground.png";

import hello from "../api";
import DataTest from "../api/DataTest";

import ProjectBlock from "../../src/components/ProjectBlock/ProjectBlock";

const Porfolio = () => {
	function helloTest() {
		axios.get("/api/DataTest").then((res, req) => {
			console.log(res);
		});
	}

	const portfolioData = [
		{
			projectName: "UI Library",
			projectTechnologies: ["javascript", "react", "nextjs"],
			imageURL: uiLibraryImage,
			description:
				"A UI Library containing custom React components I have made. Components have interactive previews and documentation for usage and properties.",
		},
		{
			projectName: "Valorant Stat Tracker",
			projectTechnologies: ["javascript", "react"],
			imageURL: pcbuilderImage,
			description:
				"A newly design PC Part Picker clone where users can select parts to put together a PC and get a rough estimate of what the actual build might cost.",
		},
		{
			projectName: "Project Manager",
			projectTechnologies: ["javascript"],
			imageURL: valorantTrackerImage,
			description:
				"A clone of Valorant Stat tracker similair to stat tracking website like op.gg. Containing randomly generated data and displays the match results and a data driven and valuable way.",
		},
	];

	return (
		<>
			<div className={styles.container}>
				<div className={styles.jumbotronContainer}>
					<div className={styles.jumbotronTextContainer}>
						<div className={styles.nameContainer}>JUSTIN KESSLER</div>
						<div className={styles.subTextContainer}>Software Developer</div>
					</div>
				</div>
				<div className={styles.projectsContainer}>
					{portfolioData.map((project, index) => (
						<ProjectBlock data={project} index={index} />
					))}
				</div>
			</div>
		</>
	);
};

export default Porfolio;
