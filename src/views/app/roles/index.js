import React, { Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

const CreateRole = React.lazy(() => import('./create') );
const ViewRoles = React.lazy( ()=> import('./view'))

const Roles = ({ match }) => (
    <Suspense fallback={<div className="loading" />}>
        <Switch>
            <Redirect exact from={`${match.url}/`} to={`${match.url}/view`} />
            <Route
                path={`${match.url}/create`}
                render={props => <CreateRole {...props} />}
            />
            <Route
                path={`${match.url}/view`}
                render={props => <ViewRoles {...props} />}
            />
            <Redirect to="/error" />
        </Switch>
    </Suspense>
);
export default Roles;
