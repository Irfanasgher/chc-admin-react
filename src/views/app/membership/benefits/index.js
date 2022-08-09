import React, { Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

const CreateBenefit = React.lazy(() => import('./create') );
const ViewBenefit = React.lazy( ()=> import('./view'))

const Benefits = ({ match }) => (
    <Suspense fallback={<div className="loading" />}>
        <Switch>
            <Redirect exact from={`${match.url}/`} to={`${match.url}/view`} />
            <Route
                path={`${match.url}/create`}
                render={props => <CreateBenefit {...props} />}
            />
            <Route
                path={`${match.url}/view`}
                render={props => <ViewBenefit {...props} />}
            />
            <Redirect to="/error" />
        </Switch>
    </Suspense>
);
export default Benefits;
