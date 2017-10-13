import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import getMuiTheme from "material-ui/styles/getMuiTheme";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";
import './css/App.css';
import { Url } from "./env";
import hi from "./components/posts/hi";
import DashBoard from "./components/dashboard/DashBoard";


class App extends Component {
	render() {
		return (<MuiThemeProvider muiTheme={getMuiTheme()}><Router>
			<div>
				<Switch>
					<Route exact path={Url("_dashboard")} component={ DashBoard } />
					<Route exact path={Url("_posts")} component={ hi } />
				</Switch>
			</div>
		</Router>
		</MuiThemeProvider>
		);
	}
}

export default App;