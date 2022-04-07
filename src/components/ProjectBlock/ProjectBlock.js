import React, { useEffect, useRef } from "react";

import TechCard from "../TechCard/TechCard";
import { useInViewport } from "react-in-viewport";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
//import {faGithub}from "@fortawesome//free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import styles from "../ProjectBlock/ProjectBlock.module.css";

const ProjectBlock = (props) => {
	//References to animated elements
	const projectDescriptionRef = useRef(null);
	const projectNameRef = useRef(null);
	const projectImageRef = useRef(null);
	const projectInfoRef = useRef(null);
	const techContainerRef = useRef(null);

	const viewSiteButtonRef = useRef(null);
	const githubButtonRef = useRef(null);

	//View port controller
	const { inViewport, enterCount, leaveCount } = useInViewport(
		projectDescriptionRef
	);

	//Classes change variables

	useEffect(() => {
		alignProjectBlock();
		console.log("url");
	}, []);

	let projectButtonsStyle = {
		float: (props.index + 1) % 2 === 0 ? "right" : "left",
	};

	// USE THIS FUNCTION ON MOUNT / UseEFFECT
	function alignProjectBlock() {
		if (props.index % 2 === 0 || props.index % 2 === Infinity) {
			projectInfoRef.current.classList.add(styles.DivLeft);
			projectImageRef.current.classList.add(styles.DivRight);
			projectNameRef.current.classList.add(styles.textAlignLeft);
			projectDescriptionRef.current.classList.add(styles.textAlignLeft);
		} else {
			projectImageRef.current.classList.add(styles.DivLeft);
			projectInfoRef.current.classList.add(styles.DivRight);
			projectNameRef.current.classList.add(styles.textAlignRight);
			techContainerRef.current.classList.add(styles.flexDirectionReverse);
			projectDescriptionRef.current.classList.add(styles.textAlignRight);
		}
	}

	function animateProjectBlock() {
		console.log(enterCount);
		if (inViewport && enterCount < 2) {
			projectNameRef.current.style.top = "-20px";
			projectImageRef.current.classList.add(styles.imageAnimation);
			projectDescriptionRef.current.classList.add(
				styles.projectDescriptionAnimation
			);
			viewSiteButtonRef.current.classList.add(styles.buttonAnimation);
			githubButtonRef.current.classList.add(styles.buttonAnimation);

			setTimeout(() => {
				projectNameRef.current.style.top = "-12px";
			}, 200);
		}
	}

	function openTab() {
		window.open(props.data.webURL);
	}

	return (
		<div className={styles.container}>
			{animateProjectBlock()}
			<div
				className={styles.projectImage}
				style={{
					backgroundImage: `linear-gradient(
			to bottom,
			rgba(22, 22, 22, 0.268),
			rgba(22, 22, 22, 0.468)
		),
		url(${props.data.imageURL.src})`,
				}}
				ref={projectImageRef}
			>
				<div className={styles.mobileOverlay}></div>
			</div>
			<div className={styles.projectInfo} ref={projectInfoRef}>
				<div className={styles.projectNameContainer}>
					<div className={styles.projectName} ref={projectNameRef}>
						{props.data.projectName}
					</div>
				</div>
				<div className={styles.technologiesContainer} ref={techContainerRef}>
					{props.data.projectTechnologies.map((tech, index) => (
						<TechCard
							text={tech}
							index={index}
							inViewport={inViewport}
							key={tech}
						/>
					))}
				</div>
				<div className={styles.projectDescription} ref={projectDescriptionRef}>
					{props.data.description}
				</div>
				<div className={styles.buttonsContainer} style={projectButtonsStyle}>
					<button
						className={styles.viewSiteButton}
						ref={viewSiteButtonRef}
						onClick={openTab}
					>
						View Site
					</button>
					<button className={styles.githubButton} ref={githubButtonRef}>
						Github
						<div className={styles.buttonIcon}>
							<FontAwesomeIcon icon={faGithub} key={"github"} />
						</div>
					</button>
				</div>
			</div>
		</div>
	);
};

export default ProjectBlock;
