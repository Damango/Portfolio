import React, { useRef, useEffect, useState } from "react";
import Script from "next/script";
import styles from "./Portfolio.module.css";

import axios from "axios";

import uiLibraryImage from "../../src/media/uilibrarybackground.png";
import pcbuilderImage from "../../src/media/pcbuilderbackground.png";
import valorantTrackerImage from "../../src/media/valoranttrackerbackground.png";

//Components Imports
import EmailPopUp from "../../src/components/EmailPopUp/EmailPopUp";
import ProjectBlock from "../../src/components/ProjectBlock/ProjectBlock";
import EmailForm from "../../src/components/EmailForm/EmailForm";

//Icon Imports

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

			projectTechnologies: ["javascript", "react", "nextjs"],
			imageURL: uiLibraryImage,
			webURL: "https://condescending-nobel-1601c9.netlify.app/",
			id: "12e56",
			description:
				"A UI Library containing custom React components I have made. Components have interactive previews and documentation for usage and properties.",
		},
		{
			projectName: "Valorant Stat Tracker",
			projectTechnologies: ["javascript", "react"],
			imageURL: valorantTrackerImage,

			id: "11f56",
			webURL: "https://silly-varahamihira-e8e082.netlify.app/",

			description:
				"A newly design PC Part Picker clone where users can select parts to put together a PC and get a rough estimate of what the actual build might cost.",
		},
		{
			projectName: "PC Builder",
			projectTechnologies: ["javascript", "react"],
			imageURL: pcbuilderImage,
			webURL: "https://hopeful-gates-9cc444.netlify.app/",
			description:
				"A clone of Valorant Stat tracker similair to stat tracking website like op.gg. Containing randomly generated data and displays the match results and a data driven and valuable way.",
		},
		{
			projectName: "Project Manager",
			projectTechnologies: ["javascript"],
			imageURL: pcbuilderImage,
			webURL: "https://determined-northcutt-13b391.netlify.app/",
			id: "15f5t",
			description:
				"A clone of Valorant Stat tracker similair to stat tracking website like op.gg. Containing randomly generated data and displays the match results and a data driven and valuable way.",
		},
	];

	const [emailPopUp, setEmailPopUp] = useState(false);
	const [emailForm, setEmailForm] = useState(false);

	useEffect(() => {
		setTimeout(() => {
			let nameElement = document.querySelector("." + styles.nameContainer);
			let subTextElement = document.querySelector(
				"." + styles.subTextContainer
			);
			let lineWidthElements = document.querySelectorAll(
				"." + styles.buttonLineWidth
			);
			let lineHeightElements = document.querySelectorAll(
				"." + styles.buttonLineHeight
			);

			let emailContainerElement = document.querySelector(
				"." + styles.emailContainer
			);

			nameElement.style.top = "20px";
			subTextElement.style.top = "30px";
			nameElement.style.opacity = 1;
			subTextElement.style.opacity = 1;

			let i;
			for (i = 0; i < lineWidthElements.length; i++) {
				lineWidthElements[i].style.transitionDelay = i / 10 + "s";
				lineHeightElements[i].style.transitionDelay = i / 10 + "s";

				lineWidthElements[i].style.width = "99.9%";
				lineHeightElements[i].style.height = "99.9%";
			}

			setTimeout(() => {
				nameElement.style.top = "0px";
				subTextElement.style.top = "0px";
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

	function renderEmailPopUp() {
		if (emailPopUp) {
			return (
				<EmailPopUp
					toggleEmailPopUp={toggleEmailPopUp}
					emailPopUp={emailPopUp}
				/>
			);
		}
	}

	function toggleEmailPopUp() {
		if (emailPopUp) {
			setEmailPopUp(false);
		} else {
			setEmailPopUp(true);
		}

		navigator.clipboard.writeText("justinkesslerio@protonmail.com");
	}

	function renderEmailForm() {
		if (emailForm) {
			return (
				<EmailForm toggleEmailForm={toggleEmailForm} emailForm={emailForm} />
			);
		}
	}

	function toggleEmailForm() {
		if (emailForm) {
			setEmailForm(false);
		} else {
			setEmailForm(true);
		}
	}

	return (
		<>
			<div className={styles.container}>
				{emailForm && <EmailForm toggleEmailForm={toggleEmailForm} />}

				<div className={styles.jumbotronContainer}>
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

							<div
								className={styles.emailContainer}
								onClick={() => {
									toggleEmailForm();
								}}
							>
								<div className={styles.emailTextContainer}>
									<FontAwesomeIcon icon={faEnvelope} />
									<p>justinkesslerio@protonmail.com</p>
								</div>

								<button
									className={styles.copyEmailButton}
									onClick={toggleEmailPopUp}
								>
									<FontAwesomeIcon icon={faClipboard} />
								</button>
								{renderEmailPopUp()}
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
