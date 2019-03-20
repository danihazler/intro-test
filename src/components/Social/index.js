import React from "react";
import { LIGHT, DARK } from "../../colors.js";

import Facebook from "./Facebook";
import Twitter from "./Twitter";
import Instagram from "./Instagram";

const Social = props => {
	const colors = {
		light: LIGHT,
		dark: DARK
	};

	return (
		<div className="social flex f-col">
			<a
				href="https://www.facebook.com/Brave-147791791925436/"
				rel="noopener noreferrer"
				target="_blank"
			>
				<Facebook color={colors[props.color]} />
			</a>
			<a
				href="https://twitter.com/BraveCreativity"
				rel="noopener noreferrer"
				target="_blank"
			>
				<Twitter color={colors[props.color]} />
			</a>
			<a
				href="https://www.instagram.com/wearebrave/"
				rel="noopener noreferrer"
				target="_blank"
			>
				<Instagram color={colors[props.color]} />
			</a>
		</div>
	);
};

export default Social;
