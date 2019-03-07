import React, { Component } from "react";

import spiral from "./spiral.svg";
import dashed from "./dashed.svg";
import circle from "./circle.svg";
import handImg from "./hand1.png";

import "./Game.css";
import "./GameQueries.css";

class Game extends Component {
	state = {
		degreesToSpin: 0,
		totalDegrees: 0,
		degreeHand: 0,
		degreePad: 0,
		difference: 0.03,
		last: new Date().getTime(),
		// speedVariation: null,
		position: null,
		showChallenge: false,
		showPad: false,
		showHand: false
	};
	play = () => {
		let randomNum = Math.floor(Math.random() * 6 + 2);

		this.setState(
			{
				degreesToSpin: randomNum * 90, // will be deducted
				totalDegrees: randomNum * 90, // will always be the same
				showHand: true
			},
			() => {
				setTimeout(this.callRenderChallenge, 1000);
			}
		);
	};

	callRenderChallenge = () => {
		requestAnimationFrame(this.renderChallenge);
	};

	getSpeed = () => {
		let { degreesToSpin, totalDegrees, difference } = this.state;

		let speedVariation = null;

		let degreesDivision = totalDegrees / 6;

		// if (degreesToSpin <= degreesDivision) {
		// 	speedVariation = difference * 5.25;
		// 	console.log("1-slow?");
		// 	this.setState(prevState => ({
		// 		difference: (prevState.difference = speedVariation),
		// 		degreeHand: prevState.degreeHand + 1
		// 	}));
		// }

		if (degreesToSpin > degreesDivision) {
			speedVariation = difference * 0.00025;
			console.log("1-fast?");
			this.setState(prevState => ({
				difference: (prevState.difference = speedVariation),
				degreeHand: prevState.degreeHand + 2
			}));
		}

		if (degreesToSpin <= degreesDivision) {
			speedVariation = difference * 5.25;
			console.log("2-slow?");
			this.setState(prevState => ({
				difference: (prevState.difference = speedVariation),
				degreeHand: prevState.degreeHand + 1
			}));
		}
		return;
	};

	renderChallenge = () => {
		const {
			last,
			difference,
			degreesToSpin,
			totalDegrees,
			degreeHand
			// speedVariation
		} = this.state;

		let position = (totalDegrees / 360) % 1;

		let now = new Date().getTime();

		if (degreesToSpin === 0) {
			cancelAnimationFrame(this.renderChallenge);

			this.setState({
				position: position,
				totalDegrees: 0,
				showChallenge: true,
				difference: 0.03
			});
			console.log("degreeHand FINAL: ", this.state.degreeHand);
			console.log("position FINAL: ", position);
			console.log("Total degrees: ", totalDegrees);

			return;
		}

		if (!last || now - last > difference) {
			let positionHand = (degreeHand / 360) % 1;
			this.setState(prevState => ({
				last: now,
				showPad: true,
				showChallenge: false,
				degreesToSpin: prevState.degreesToSpin - 1
				// degreeHand: prevState.degreeHand + 1
			}));
			this.getSpeed();
			// console.log("positionHand LIVE: ", positionHand);

			if (positionHand >= 0.9 || (positionHand >= 0 && positionHand <= 0.14)) {
				this.setState(prevState => ({
					degreePad: (prevState.degreePad = 0)
				}));
			}
			if (positionHand >= 0.15 && positionHand <= 0.39) {
				this.setState(prevState => ({
					degreePad: (prevState.degreePad = 90)
				}));
			}
			if (positionHand >= 0.4 && positionHand <= 0.64) {
				this.setState(prevState => ({
					degreePad: (prevState.degreePad = 180)
				}));
			}
			if (positionHand >= 0.65 && positionHand <= 0.89) {
				this.setState(prevState => ({
					degreePad: (prevState.degreePad = 270)
				}));
			}
		}
		requestAnimationFrame(this.renderChallenge);
	};

	render() {
		const { degreePad, degreeHand, position, showPad, showHand } = this.state;
		// console.log("Difference: ", this.state.difference);
		// console.log("Position: ", this.state.position);

		let challengeTitle = null;

		if (this.state.showChallenge) {
			challengeTitle = (
				<p
					className="challenge"
					style={{ transform: `rotate(-${degreePad}deg)` }}
				>
					{position === 0 ? (
						<span id="pg">
							Parson's <br />
							Green
						</span>
					) : null}
					{position === 0.25 ? (
						<span id="bny">
							Brave
							<br />
							New
							<br />
							York
						</span>
					) : null}
					{position === 0.5 ? (
						<span id="st">
							Sex
							<br />
							Toys
						</span>
					) : null}
					{position === 0.75 ? (
						<span id="sb">
							Sheer
							<br />
							Bravery
						</span>
					) : null}
				</p>
			);
		}
		return (
			<React.Fragment>
				<main className="side-wrapper">
					<div className="wheel-wrapper">
						<div className="pad-wrapper">
							{showPad && (
								<div id="pad" style={{ transform: `rotate(${degreePad}deg)` }}>
									{challengeTitle}
								</div>
							)}
						</div>

						<div className="clipper">
							<div className="svg-spiral spin">
								<img src={spiral} alt="spiral turning" />
							</div>
						</div>

						<div className="svg-dashed">
							<img src={dashed} alt="dashed lines" />
						</div>

						<div className="svg-circle">
							<img src={circle} alt="circle" />
						</div>

						<div
							className="outer-btn"
							style={{
								transform: `translate(-50%, -50%) rotate(${degreeHand}deg)`
							}}
						>
							<span
								className={
									showHand ? "fade-out-trans-scale inner-btn" : "inner-btn"
								}
							>
								Play
							</span>

							<svg
								id="hand-clipping"
								xmlns="http://www.w3.org/2000/svg"
								width="275"
								height="320"
							>
								<clipPath id="hand-clipping-path">
									<path
										d="M0 191V0h275c.333 62.667-.333 165.333 0 228-31.667-1-58.333-1-89.984-1.977C170.648 245.579 131.591 252.708 107 239c-17.055-9.507-31.089-26.422-34-48-25.333 1.333-47.667-1.333-73 0z"
										fill="none"
										stroke="none"
									/>
								</clipPath>
							</svg>

							<div id="for-clipping-hand">
								<button id="play-btn" onClick={this.play}>
									{showHand && (
										<img
											className="slide-in-hand hand-btn"
											src={handImg}
											alt="hand"
										/>
									)}
								</button>
							</div>
						</div>

						<div className="mobile-wrapper">
							<img
								className="mobile_dashed"
								src="./dashed_mobile.svg"
								alt="dashed lines"
							/>
							<img className="mobile_spiral" src="./spiral.svg" alt="spiral" />
						</div>
					</div>

					<div
						className={
							showHand ? "fade-out-scale brave-enough" : "brave-enough"
						}
					>
						<h2>
							Are you
							<br />
							brave enough
							<br />
							to take the
							<br />
							challenge?
						</h2>
					</div>
				</main>
			</React.Fragment>
		);
	}
}

export default Game;
