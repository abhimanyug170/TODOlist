import React from 'react'
import { Router, Route, Switch, Redirect } from 'react-router-dom'

import history from '../history'

import TodoList from './TodoList'
import TodoCreate from './TodoCreate'
import TodoEdit from './TodoEdit'

function App() {
	return (
		<div className="container px-0">
			<Router history={history}>
				<Switch>
					<Redirect from="/" to="/pending" exact />
					<Route path="/add" exact component={TodoCreate} />
					<Route path="/edit/:id" exact component={TodoEdit} />
					<Route path="/:filter?" exact component={TodoList} />
				</Switch>
			</Router>
		</div>
	)
}

export default App
