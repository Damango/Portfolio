import React, { useState, useEffect, useRef } from "react";
import styles from "./EmailPopUp.module.css";

const EmailPopUp = (props) => {
	const emailPopUpRef = useRef();
	useEffect(() => {
		let popUpElementContainer = emailPopUpRef.current;
		popUpElementContainer.style.top = "200%";
		popUpElementContainer.style.opacity = 1;
		setTimeout(() => {
			popUpElementContainer.style.top = "150%";

			setTimeout(() => {
				popUpElementContainer.style.opacity = 0;
				popUpElementContainer.style.top = "200%";
				setTimeout(() => {
					props.toggleEmailPopUp();
				}, 1000);
			}, 800);
		}, 150);
	}, []);
	return (
		<div className={styles.emailPopUpContainer} ref={emailPopUpRef}>
			Email Copied
		</div>
	);
};

export default EmailPopUp;
