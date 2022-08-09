import React, { Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

const CreateMembership = React.lazy(() => import('./create') );
const ViewMembership = React.lazy( ()=> import('./view'))
const Benefits = React.lazy(() =>
    import(/* webpackChunkName: "blank-page" */ './benefits')
);
const Memberships = ({ match }) => (
    <Suspense fallback={<div className="loading" />}>
        <Switch>
            <Redirect exact from={`${match.url}/`} to={`${match.url}/view`} />
            <Route
                path={`${match.url}/create`}
                render={props => <CreateMembership {...props} />}
            />
            <Route
                path={`${match.url}/view`}
                render={props => <ViewMembership {...props} />}
            />
            <Route
                path={`${match.url}/benefits`}
                render={props => <Benefits {...props} />}
            />
            <Redirect to="/error" />
        </Switch>
    </Suspense>
);
export default Memberships;
