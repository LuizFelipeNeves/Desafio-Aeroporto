import React from 'react'
import { Switch, Route } from 'react-router-dom'

import './App.css'

import Home from './pages/home'

export default () => {
	return (
		<div>
			<Switch>
				<Route exact path="/" component={Home} />
			</Switch>
		</div>
	)
}