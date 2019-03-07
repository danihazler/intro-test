import React from "react";
import { Transition } from "react-transition-group";

import "./Hall.css";

const Hall = props => {
	return (
		<Transition timeout={800} in={true} appear={true} mountOnEnter>
			{status => (
				<main
					className={`side-wrapper-animated flex bg-black pageTransition-${status}`}
				>
					<div className={`hall-of-fame textTransition-${status}`}>
						<h3 className="a1 md-txt">
							<span className="clean">H</span>a
							<span className="clean m-right">ll</span>
							<span className="upper clean">of</span>
							<span className="clean m-left">F</span>a
							<span className="clean">m</span>e
						</h3>
						<p>John Snow Bandeira</p>
						<p>Cersei de Jesus</p>
						<p>White Walker da Silva</p>
						<p>Ayra dos Santos</p>
					</div>
				</main>
			)}
		</Transition>
	);
};

export default Hall;
