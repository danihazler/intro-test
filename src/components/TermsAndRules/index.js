import React from "react";
import { Transition } from "react-transition-group";

import Logo from "../Logo";

import "./TermsAndRules.css";

const TermsAndRules = props => {
	return (
		<Transition timeout={800} in={true} appear={true} mountOnEnter>
			{status => (
				<main
					className={`side-wrapper-animated flex bg-black pageTransition-${status}`}
				>
					<div className={`terms-rules textTransition-${status}`}>
						<h3>{props.title}</h3>
						<p>{props.description}</p>
					</div>
					<div className={`rt-logo logoTransition-${status}`}>
						<Logo color="light" />
					</div>
				</main>
			)}
		</Transition>
	);
};

export default TermsAndRules;
