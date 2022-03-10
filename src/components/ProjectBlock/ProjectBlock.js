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
	let projectInfoClasses = () => {

		if (props.index % 2 === 0 || props.index % 2 === Infinity) {
			return (styles.projectInfo + " " + styles.DivLeft)
		}
		else {
			return (styles.projectInfo + " " + styles.DivRight)
		}

	}



	let projectImageClasses;





	let projectNameClasses = () => {
		if (props.index % 2 === 0 || props.index % 2 === Infinity) {
			return (styles.projectName + " " + styles.textAlignLeft)
		}
		else {

			return (styles.projectName + " " + styles.textAlignRight)
		}
	}








	let techContainerClasses = () => {
		if (props.index % 2 === 0 || props.index % 2 === Infinity) {
			return (styles.technologiesContainer)
		}
		else {

			return (styles.technologiesContainer + " " + styles.flexDirectionReverse)
		}
	}




	let projectDescriptionClasses = () => {
		if (props.index % 2 === 0 || props.index % 2 === Infinity) {
			return (styles.projectDescription + " " + styles.textAlignLeft)
		}
		else {

			return (styles.projectDescription + " " + styles.textAlignRight)
		}
	}

	let projectButtonsStyle = {
		float: (props.index + 1) % 2 === 0 ? "right" : "left",
	};



	let projectImageClass;









	function animateProjectBlock() {
		console.log(enterCount);
		if (inViewport && enterCount < 2) {


			projectNameRef.current.style.top = "-20px";




			projectImageRef.current.classList.add(styles.imageAnimation)







			setTimeout(() => {
				projectNameRef.current.style.top = "-12px";
			}, 200);
		}
	}

	animateProjectBlock();

	return (
		<div className={styles.container}>
			<div
				className={styles.projectImage + "  " + ((props.index + 1) % 2 === 0 ? styles.DivLeft : styles.DivRight)}
				style={{
					backgroundImage: `linear-gradient(
			to bottom,
			rgba(22, 22, 22, 0.268),
			rgba(22, 22, 22, 0.468)
		),
		url(${props.data.imageURL.src})`

				}}
				ref={projectImageRef}
			>
				<div className={styles.mobileOverlay}></div>
			</div>
			<div
				className={projectInfoClasses()}

			>
				<div className={styles.projectNameContainer}>
					<div className={projectNameClasses()} ref={projectNameRef}>
						{props.data.projectName}
					</div>
				</div>
				<div className={techContainerClasses()}>
					{props.data.projectTechnologies.map((tech, index) => (
						<TechCard text={tech} index={index} inViewport={inViewport} key={tech} />
					))}
				</div>
				<div
					className={projectDescriptionClasses()}
					ref={projectDescriptionRef}

				>
					{props.data.description}
				</div>
				<div className={styles.buttonsContainer} style={projectButtonsStyle}>
					<div className={styles.viewSiteButton}>View Site</div>
					<div className={styles.githubButton}>
						Github
						<div className={styles.buttonIcon}>
							<FontAwesomeIcon icon={faGithub} key={'github'} />
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default ProjectBlock;
