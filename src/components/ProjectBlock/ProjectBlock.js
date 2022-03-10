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
	const projectImageRef = useRef(null)

	//View port controller
	const { inViewport, enterCount, leaveCount } = useInViewport(
		projectDescriptionRef
	);


	//Classes change variables


	useEffect(() => { }, []);

	let projectImageStyle;
	let projectTitleStyle;
	let projectDescriptionStyle = {
		float: (props.index + 1) % 2 === 0 ? "right" : "left",
	};

	let projectButtonsStyle = {
		float: (props.index + 1) % 2 === 0 ? "right" : "left",
	};

	function animateProjectBlock() {
		console.log(enterCount);
		if (inViewport && enterCount < 2) {


			projectNameRef.current.style.top = "-20px";






			setTimeout(() => {
				projectNameRef.current.style.top = "-12px";
			}, 200);
		}
	}

	animateProjectBlock();

	return (
		<div className={styles.container}>
			<div
				className={styles.projectImage + "  " + ((props.index + 1) % 2 === 0 ? styles.floatDivLeft : styles.floatDivRight)}
				style={{
					backgroundImage: `linear-gradient(
			to bottom,
			rgba(22, 22, 22, 0.268),
			rgba(22, 22, 22, 0.468)
		),
		url(${props.data.imageURL.src})`

				}}
			>
				<div className={styles.mobileOverlay}></div>
			</div>
			<div
				className={styles.projectInfo}
				style={{
					right: (props.index + 1) % 2 === 0 ? "0px" : "55%",
					textAlign: (props.index + 1) % 2 === 0 ? "right" : "left",
				}}
			>
				<div className={styles.projectNameContainer}>
					<div className={styles.projectName} ref={projectNameRef}>
						{props.data.projectName}
					</div>
				</div>
				<div className={styles.technologiesContainer}>
					{props.data.projectTechnologies.map((tech, index) => (
						<TechCard text={tech} index={index} inViewport={inViewport} />
					))}
				</div>
				<div
					className={styles.projectDescription}
					ref={projectDescriptionRef}
					style={projectDescriptionStyle}
				>
					{props.data.description}
				</div>
				<div className={styles.buttonsContainer} style={projectButtonsStyle}>
					<div className={styles.viewSiteButton}>View Site</div>
					<div className={styles.githubButton}>
						Github
						<div className={styles.buttonIcon}>
							<FontAwesomeIcon icon={faGithub} />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProjectBlock;
