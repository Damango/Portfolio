import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";

import Portfolio from "./Portfolio/Portfolio";

export default function Home() {
	return (
		<div className={styles.container}>
			<Head>
				<title>Justin Kessler Portfolio</title>
				<meta name="description" content="J.K Portfolio Website" />
				<link rel="icon" href="/favicon.ico" />
				<link rel="preconnect" href="https://fonts.googleapis.com"></link>
				<link
					rel="preconnect"
					href="https://fonts.gstatic.com"
					crossOrigin
				></link>
				<link
					href="https://fonts.googleapis.com/css2?family=Cabin:wght@400;500;600;700&family=Cairo:wght@400;500;600;700;800;900&family=Inter:wght@300;400;500;600;700&family=Open+Sans:wght@300;400;500;600&family=Poppins:wght@300;400;500;600&family=Source+Sans+Pro:wght@300;400;600;700&display=swap"
					rel="stylesheet"
				></link>
			</Head>

			<Portfolio key="portfolio_root" />
		</div>
	);
}
