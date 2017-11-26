import React from 'react';
import { Route, Switch } from 'react-router-dom';
import DataTable from './components/DataTable/DataTable';

export default (
	<Switch>
		<Route exact path="/" component={DataTable} />
	</Switch>
);
