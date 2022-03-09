import React, { useEffect, useRef, useState } from "react";
import styles from "./TechCard.module.css";

const TechCard = (props) => {
	const techCardContainerRef = useRef(null);

	let techBlockStyles = [styles.javascript, styles.react, styles.nextjs];

	const [view, setView] = useState(styles.techCardContainer);

	useEffect(() => {
		/*setTimeout(() => {
			setView(styles.techCardTest);
		}, props.index * 100 + 400);*/
	}, []);

	function animateFunction() {
		if (props.inViewport) {
			setTimeout(() => {
				setView(styles.techCardOpen);
			}, props.index * 100 + 400);
		}
	}

	animateFunction();

	return (
		<div
			className={view + " " + techBlockStyles[props.index]}
			ref={techCardContainerRef}
		>
			{props.text.toUpperCase()}
		</div>
	);
};

export default TechCard;
