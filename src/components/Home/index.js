import React, { Component } from "react";
import { CSSTransition } from "react-transition-group";

import Logo from "../Logo";
import arm from "./arm.png";

import "./Home.css";
import "./HomeQueries.css";

class Home extends Component {
	render() {
		return (
			<main className="side-wrapper home">
				<CSSTransition in={true} appear={true} timeout={1000} classNames="logo">
					<Logo color="dark" />
				</CSSTransition>
				<div className="intro-anime">
					<svg
						id="clipping"
						xmlns="http://www.w3.org/2000/svg"
						width="320"
						height="526"
					>
						<clipPath id="clipping-path">
							<path
								d="M550 160c82.756 49.47 118.474 149.237 88 235-27.088 76.234-102.261 129.268-188 129L0 526V0h549z"
								fill="none"
								stroke="none"
							/>
						</clipPath>
					</svg>
					<div id="for-clipping">
						<CSSTransition
							in={true}
							appear={true}
							timeout={900}
							classNames="blackhole"
						>
							<div id="black-hole" className="flex">
								<div className="intro-text flex f-col">
									<div className="brave-enough">
										<CSSTransition
											in={true}
											appear={true}
											timeout={1200}
											classNames="p-brave"
										>
											<p className="clean">
												Brav<span className="a1">e</span>
											</p>
										</CSSTransition>
										<CSSTransition
											in={true}
											appear={true}
											timeout={1300}
											classNames="p-enough"
										>
											<p className="clean">
												<span className="a1">e</span>nough
												<span className="a1">?</span>
											</p>
										</CSSTransition>
									</div>
									<div className="have-you-got">
										<CSSTransition
											in={true}
											appear={true}
											timeout={1400}
											classNames="p-have"
										>
											<p>Have you got what it takes for our</p>
										</CSSTransition>
										<CSSTransition
											in={true}
											appear={true}
											timeout={1400}
											classNames="p-intership"
										>
											<p>intership programme?</p>
										</CSSTransition>
									</div>
								</div>
								<CSSTransition
									in={true}
									appear={true}
									timeout={1100}
									classNames="arm"
								>
									{/* <img id="arm-mobile" src={arm} alt="arm" /> */}
									<img id="arm-desktop" src={arm} alt="arm" />
								</CSSTransition>
							</div>
						</CSSTransition>
					</div>

					<CSSTransition
						in={true}
						appear={true}
						timeout={1700}
						classNames="btn-animation"
					>
						<div className="begin">
							<div className="pulse-btn clean flex">
								<a href="./">Begin</a>
							</div>
							<div className="pulse-outer" />
						</div>
					</CSSTransition>
				</div>
				<CSSTransition
					in={true}
					appear={true}
					timeout={1700}
					classNames="timer"
				>
					<div id="timer" className="futura">
						<span id="hours">20</span>
						<span className="in-out">:</span>
						<span id="mins">20</span>
						<span className="in-out">:</span>
						<span id="secs">00</span>
					</div>
				</CSSTransition>
			</main>
		);
	}
}

export default Home;
