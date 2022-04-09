import React, { useEffect, useRef } from "react";
import styles from "./EmailForm.module.css";
import Script from "next/script";

const EmailForm = (props) => {
	const emailFormContainerRef = useRef();
	const inputContainerRef = useRef(null);
	const emailConfirmationRef = useRef(null);

	function closeFormHandler(e) {
		let emailFormElement = emailFormContainerRef;
		if (emailFormElement.current != null) {
			if (e.target != emailFormElement.current) {
				if (e.target.className != styles.formInput) {
					if (e.target.className != styles.submitButton) {
						if (e.target.className != styles.inputHeader) {
							if (e.target.className != styles.inputContainer) {
								emailFormElement.current.style.top = "55%";
								setTimeout(() => {
									emailFormElement.current.style.top = "50%";
									emailFormElement.current.style.opacity = 0;
									setTimeout(() => {
										props.toggleEmailForm();
									}, 300);
								}, 300);

								window.removeEventListener("click", closeFormHandler);
							}
						}
					}
				}
			}
		}

		console.log(typeof e.target.className);
		console.log(emailFormElement.current);
	}

	function testFunction() {
		alert("test");
	}

	useEffect(() => {
		const emailFormElement = emailFormContainerRef.current;
		window.addEventListener("click", closeFormHandler);

		console.log(emailFormElement);
		emailFormElement.style.top = "53%";
		emailFormElement.style.opacity = 1;
		setTimeout(() => {
			emailFormElement.style.top = "50%";
		}, 100);
	}, []);

	function renderSubmitionConfirmation(type) {
		if (type === "success") {
			emailConfirmationRef.current.innerHTML = "Message sent successfully!";
			emailConfirmationRef.current.style.backgroundColor = "rgb(4, 187, 50)";
		} else if ("invalid") {
			emailConfirmationRef.current.style.backgroundColor = "#e74c3c";
			emailConfirmationRef.current.innerHTML = "Invalid Form Validation";
		}
		emailConfirmationRef.current.style.opacity = 1;
		emailConfirmationRef.current.style.top = "20px";
		setTimeout(() => {
			emailConfirmationRef.current.style.top = "0px";
		}, 200);

		setTimeout(() => {
			emailConfirmationRef.current.style.opacity = 0;
			emailConfirmationRef.current.style.top = "-30px";
		}, 1500);
	}

	function sendEmail() {
		let emailInput = document.getElementById(styles.emailInput);
		let nameInput = document.getElementById(styles.nameInput);
		let theMessageInput = document.getElementById(styles.messageInput);

		if (
			emailInput.value.length > 0 &&
			nameInput.value.length > 0 &&
			theMessageInput.value.length > 0
		) {
			renderSubmitionConfirmation("success");
		} else {
			renderSubmitionConfirmation("invalid");
		}
	}

	return (
		<>
			<div className={styles.emailFormContainer} ref={emailFormContainerRef}>
				<button
					className={styles.closeButton}
					onClick={() => {
						props.toggleEmailForm();
					}}
				>
					X
				</button>
				<div className={styles.inputContainer}>
					<span className={styles.inputHeader}>Name</span>
					<input
						placeHolder="Name/Company"
						className={styles.formInput}
						id={styles.nameInput}
					/>
				</div>
				<div className={styles.inputContainer}>
					<span className={styles.inputHeader}>Email</span>
					<input
						placeHolder="You@domain.com"
						className={styles.formInput}
						id={styles.emailInput}
					/>
				</div>
				<div className={styles.inputContainer}>
					<span className={styles.inputHeader}>Message</span>
					<textarea
						className={styles.formInput}
						placeHolder="Message"
						id={styles.messageInput}
					/>
				</div>

				<button className={styles.submitButton} onClick={sendEmail}>
					SUBMIT
				</button>
				<div className={styles.messageConfirmation} ref={emailConfirmationRef}>
					<span>Message Sent!</span>
				</div>
			</div>
		</>
	);
};

export default EmailForm;
