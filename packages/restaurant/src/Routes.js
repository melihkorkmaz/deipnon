// @flow
import * as React from 'react'
import { Switch, Route } from "react-router-dom";

import Home from './views/Home'
import Orders from './views/Orders'
import Users from './views/Users'
import Menu from './views/Menu'
// import Settings from './views/Settings'

const Routes = () => (<Switch>
	<Route exact path="/">
		<Home />
	</Route>
	<Route path="/orders">
		<Orders />
	</Route>
	<Route path="/users">
		<Users />
	</Route>
	<Route path="/menu">
		<Menu />
	</Route>
	{/* <Route path="/settings">
		<Settings />
	</Route> */}
</Switch>)

export default Routes
