import React, { Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

const CreateTeam = React.lazy(() => import('./create') );
const ViewTeam = React.lazy( ()=> import('./view'))

const Teams = ({ match }) => (
    <Suspense fallback={<div className="loading" />}>
        <Switch>
            <Redirect exact from={`${match.url}/`} to={`${match.url}/view`} />
            <Route
                path={`${match.url}/create`}
                render={props => <CreateTeam {...props} />}
            />
            <Route
                path={`${match.url}/view`}
                render={props => <ViewTeam {...props} />}
            />

            <Redirect to="/error" />
        </Switch>
    </Suspense>
);
export default Teams;
