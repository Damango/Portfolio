import React, { useRef, useEffect, useState } from "react";
import Script from "next/script";
import styles from "./Portfolio.module.css";

import Canvas from "../../src/components/Canvas/Canvas";
import axios from "axios";

import uiLibraryImage from "../../src/media/uilibrarybackground.png";
import pcbuilderImage from "../../src/media/pcbuilderbackground.png";
import valorantTrackerImage from "../../src/media/valoranttrackerbackground.png";

import ProjectBlock from "../../src/components/ProjectBlock/ProjectBlock";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import { faClipboard } from "@fortawesome/free-solid-svg-icons";

import { faKeyboard } from "@fortawesome/free-solid-svg-icons";

const Porfolio = () => {
	const portfolioData = [
		{
			projectName: "UI Library",

			id: "12f56",

			id: "12f56",

			projectTechnologies: ["javascript", "react", "nextjs"],
			imageURL: uiLibraryImage,
			id: "12e56",
			description:
				"A UI Library containing custom React components I have made. Components have interactive previews and documentation for usage and properties.",
		},
		{
			projectName: "Valorant Stat Tracker",
			projectTechnologies: ["javascript", "react"],
			imageURL: valorantTrackerImage,

			id: "11f56",
			id: "11f56",

			description:
				"A newly design PC Part Picker clone where users can select parts to put together a PC and get a rough estimate of what the actual build might cost.",
		},
		{
			projectName: "PC Builder",
			projectTechnologies: ["javascript", "react"],
			imageURL: pcbuilderImage,
			description:
				"A clone of Valorant Stat tracker similair to stat tracking website like op.gg. Containing randomly generated data and displays the match results and a data driven and valuable way.",
		},
		{
			projectName: "Project Manager",
			projectTechnologies: ["javascript"],
			imageURL: pcbuilderImage,
			id: "15f5t",
		},
		{
			projectName: "Project Manager",
			projectTechnologies: ["javascript"],
			imageURL: pcbuilderImage,
			id: "15f5t",
			description:
				"A clone of Valorant Stat tracker similair to stat tracking website like op.gg. Containing randomly generated data and displays the match results and a data driven and valuable way.",
		},
	];

	const [counter, setCounter] = useState(0);

	useEffect(() => {
		setTimeout(() => {
			let lineWidthElements = document.querySelectorAll(
				"." + styles.buttonLineWidth
			);
			let lineHeightElements = document.querySelectorAll(
				"." + styles.buttonLineHeight
			);

			let emailContainerElement = document.querySelector(
				"." + styles.emailContainer
			);

			let jumboLine1 = document.querySelector("." + styles.jumboLine1);
			let jumboLine2 = document.querySelector("." + styles.jumboLine2);

			let lineBall1 = document.querySelector("." + styles.lineBall1);
			let lineBall2 = document.querySelector("." + styles.lineBall2);

			jumboLine1.style.height = "55%";
			jumboLine2.style.height = "85%";

			setTimeout(() => {
				lineBall1.style.width = "30px";
				lineBall1.style.height = "30px";
				lineBall2.style.width = "30px";
				lineBall2.style.height = "30px";
				setTimeout(() => {
					lineBall1.style.width = "25px";
					lineBall1.style.height = "25px";
					lineBall2.style.width = "25px";
					lineBall2.style.height = "25px";
				}, 200);
			}, 300);

			let i;
			for (i = 0; i < lineWidthElements.length; i++) {
				lineWidthElements[i].style.transitionDelay = i / 10 + "s";
				lineHeightElements[i].style.transitionDelay = i / 10 + "s";

				lineWidthElements[i].style.width = "99.9%";
				lineHeightElements[i].style.height = "99.9%";
			}

			setTimeout(() => {
				emailContainerElement.style.opacity = 1;
				emailContainerElement.style.bottom = "-60px";
				setTimeout(() => {
					emailContainerElement.style.bottom = "-80px";
				}, 200);
			}, 500);
		}, 100);
	}, []);

	function openTab(url) {
		window.open(url);
	}

	return (
		<>
			<div className={styles.container}>
				<div className={styles.jumbotronContainer}>
					<div className={styles.animationsContainer}>
						<div className={styles.jumboLine1}>
							<div className={styles.lineBall1}></div>
						</div>
						<div className={styles.jumboLine2}>
							<div className={styles.lineBall2}></div>
						</div>
					</div>
					<div className={styles.jumbotronTextContainer}>
						<div className={styles.nameContainer}>JUSTIN KESSLER</div>
						<div className={styles.subTextContainer}>Software Developer</div>
						<div className={styles.jumbotronButtonsContainer}>
							<button className={styles.jumbotronButton}>
								<span
									className={styles.buttonLineWidth + " " + styles.buttonLine1}
								></span>
								<span
									className={styles.buttonLineHeight + " " + styles.buttonLine2}
								></span>
								<span
									className={styles.buttonLineHeight + " " + styles.buttonLine3}
								></span>
								<span
									className={styles.buttonLineWidth + " " + styles.buttonLine4}
								></span>
								<div className={styles.jumbotronButtonText}>
									<FontAwesomeIcon icon={faKeyboard} /> <p>VIEW PROJECTS</p>
								</div>
							</button>
							<button
								className={styles.jumbotronButton}
								onClick={() => {
									openTab("https://github.com/Damango");
								}}
							>
								<span
									className={styles.buttonLineWidth + " " + styles.buttonLine1}
								></span>
								<span
									className={styles.buttonLineHeight + " " + styles.buttonLine2}
								></span>
								<span
									className={styles.buttonLineHeight + " " + styles.buttonLine3}
								></span>
								<span
									className={styles.buttonLineWidth + " " + styles.buttonLine4}
								></span>
								<div className={styles.jumbotronButtonText}>
									<FontAwesomeIcon icon={faGithub} /> <p>GITHUB</p>
								</div>
							</button>

							<div className={styles.emailContainer}>
								<div className={styles.emailTextContainer}>
									<FontAwesomeIcon icon={faEnvelope} />
									<p>justinkesslerio@protonmail.com</p>
								</div>

								<button className={styles.copyEmailButton}>
									<FontAwesomeIcon icon={faClipboard} />
								</button>
							</div>
						</div>
					</div>
				</div>
				<div className={styles.projectsContainer}>
					{portfolioData.map((project, index) => (
						<ProjectBlock data={project} index={index} key={project.id} />
					))}
				</div>
			</div>
		</>
	);
};

export default Porfolio;
