import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";

import MainWrapper from "./components/MainWrapper";
import Home from "./components/Home";
import AboutYou from "./components/AboutYou";
import Game from "./components/Game/";
import TermsAndRules from "./components/TermsAndRules/";
import Hall from "./components/Hall/";
import BriefAndRules from "./components/BriefAndRules";

import { textContent } from "./components/TermsAndRules/textContent";

import "./App.css";

class App extends Component {
	state = {
		names: [
			"John Snow Bandeira",
			"Cersei de Jesus",
			"White Walker da Silva",
			"Ayra dos Santos"
		]
	};

	render() {
		return (
			<React.Fragment>
				<MainWrapper>
					<Switch>
						<Route exact path="/" component={Home} />
						<Route path="/aboutyou" component={AboutYou} />
						<Route path="/game" component={Game} />
						<Route
							exact
							path="/termsAndconditions"
							component={() => (
								<TermsAndRules
									title={textContent.terms.title}
									description={textContent.terms.description}
								/>
							)}
						/>
						<Route
							exact
							path="/rules"
							component={() => (
								<TermsAndRules
									title={textContent.rules.title}
									description={textContent.rules.description}
								/>
							)}
						/>
						<Route
							exact
							path="/hall"
							component={() => <Hall names={this.state.names} />}
						/>
						<Route
							exact
							path="/briefAndRules"
							component={() => <BriefAndRules />}
						/>
					</Switch>
				</MainWrapper>
			</React.Fragment>
		);
	}
}

export default App;
