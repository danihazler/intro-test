import React from "react";
import { Transition } from "react-transition-group";

import "./BriefAndRules.css";

const BriefAndRules = props => {
	return (
		<Transition>
			{status => (
				<main className={`side-wrapper flex bg-black`}>
					<div className="content-wrapper">
						<div className={`brief`}>
							<p className="your-brief">Your Brief</p>
							<h3 className="md-txt clean">
								Parson's
								<br />
								Gr<span className="a1">ee</span>n
							</h3>
							<div className="description">
								<p>
									Brave's situated in Parson's Green, which has its fair share
									of independent businesses and the famous White Horse pub (AKA
									'The Sloany Pony'). Research the area, and find an independent
									business that interests you.
								</p>
								<p>
									Your challenge: With little to no budget to buy advertising
									space, get more people through their door.
								</p>
								<p>
									Your response could be a poster, a strategic thought, a
									website, a film, something written on a chalkboard outside, a
									stunt that gets the business in a national newspaper,
									something the staff should do, a T-shirt, a dance craze, a
									tweet, a sing... you get the point, an idea can take many
									forms.
								</p>
							</div>
						</div>
					</div>
					<button id="brief" className="bg-black clean">
						Download
						<br />
						Brief
					</button>
					<div className="content-wrapper bg-cream">
						<div className={`rules`}>
							<h3 className="md-txt clean">
								Th<span className="a1">e</span>
								<br />
								Rul<span className="a1">e</span>z
							</h3>
							<div className="description">
								<p>
									How you bring this idea to life should reflect your skills and
									the area you want your intership to be in.
								</p>
								<p>
									So if you're a designer, we'll expect to see your design craft
									skills. And if you're a planner we'd want to see your research
									and thinking.
								</p>
								<p>
									You've got until midnight on ______ to submit your response.
									It should be something you can attach to an e-mail sent to
									intership@brave.co.uk.
								</p>
								<p>Be brave, have fun and good luck.</p>
							</div>
						</div>
					</div>
				</main>
			)}
		</Transition>
	);
};

export default BriefAndRules;
