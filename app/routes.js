import React from 'react';
import { Route, Switch } from 'react-router-dom';
import CardsTables from './components/CardsTables/CardsTables';

export default (
	<Switch>
		<Route exact path="/" component={CardsTables} />
	</Switch>
);
