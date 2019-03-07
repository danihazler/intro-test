import React, { Component } from "react";

import Logo from "../Logo";
import arm from "./arm.png";

import "./Home.css";

class Home extends Component {
	state = {
		showIntro: false,
		showTimer: false,
		showBtn: false
	};

	componentDidMount() {
		setTimeout(this.logoScaleOut, 2000);
	}

	logoScaleOut = () => {
		const logo = document.querySelector(".home .brave-logo");
		logo.classList.add("scale-in-out");
	};

	render() {
		const { showIntro, showBtn, showTimer } = this.state;
		let intro,
			timer,
			buttonBegin = null;

		if (showIntro) {
			return (intro = (
				<div className="intro-anime">
					<svg
						id="clipping"
						xmlns="http://www.w3.org/2000/svg"
						width="650"
						height="526"
					>
						<clipPath id="clipping-path">
							<path
								d="M550 160c82.756 49.47 118.474 149.237 88 235-27.088 76.234-102.261 129.268-188 129L0 526V0h549z"
								fill="none"
								stroke="red"
								strokeWidth="2"
							/>
						</clipPath>
					</svg>
					<div id="for-clipping">
						<div id="black-hole" className="flex">
							<div className="intro-text flex f-col">
								<div className="brave-enough">
									<h2>
										Brav<span className="a1">e</span>
										<br />
										<span className="a1">e</span>nough?
									</h2>
								</div>
								<div className="have-you-got">
									<p>Have you got what it takes for our</p>
									<p> intership programme?</p>
								</div>
							</div>
							<img id="arm" src={arm} alt="arm" />
						</div>
					</div>
				</div>
			));
		}

		if (showTimer) {
			return (timer = (
				<div id="timer" className="futura">
					<span id="hours">20</span>
					<span className="in-out">:</span>
					<span id="mins">20</span>
					<span className="in-out">:</span>
					<span id="secs">00</span>
				</div>
			));
		}

		if (showBtn) {
			return (buttonBegin = (
				<div className="begin">
					<div className="pulse-btn clean flex">
						<a href="./">Begin</a>
					</div>
					<div className="pulse-outer" />
				</div>
			));
		}

		return (
			<main className="side-wrapper home">
				<div className="flex" id="loader">
					<Logo color="dark" />
					{intro}
					{timer}
					{buttonBegin}
				</div>
			</main>
		);
	}
}

export default Home;
