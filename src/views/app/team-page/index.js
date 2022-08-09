import React, { Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

const CreateTeamPage = React.lazy(() => import('./create') );
const ViewTeamPage = React.lazy( ()=> import('./view'))

const TeamPage = ({ match }) => (
    <Suspense fallback={<div className="loading" />}>
        <Switch>
            <Redirect exact from={`${match.url}/`} to={`${match.url}/view`} />
            <Route
                path={`${match.url}/create`}
                render={props => <CreateTeamPage {...props} />}
            />
            <Route
                path={`${match.url}/view`}
                render={props => <ViewTeamPage {...props} />}
            />

            <Redirect to="/error" />
        </Switch>
    </Suspense>
);
export default TeamPage;
