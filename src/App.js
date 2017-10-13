import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import getMuiTheme from "material-ui/styles/getMuiTheme";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import { Url } from "./env";
import hi from "./components/hi";
import ni from "./components/ni";


class App extends Component {
	render() {
		return (<MuiThemeProvider muiTheme={getMuiTheme()}><Router>
			<div>
				<Switch>
					<Route exact path={Url("_hhh")} component={ ni } />
					<Route exact path={Url("_xixi")} component={ hi } />
				</Switch>
			</div>
		</Router>
		</MuiThemeProvider>
		);
	}
}

export default App;