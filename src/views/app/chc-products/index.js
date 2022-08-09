import React, { Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

const CreateCHCProduct = React.lazy(() => import('./create') );
const ViewCHCProduct = React.lazy( ()=> import('./view'))

const CHCProduct = ({ match }) => (
    <Suspense fallback={<div className="loading" />}>
        <Switch>
            <Redirect exact from={`${match.url}/`} to={`${match.url}/view`} />
            <Route
                path={`${match.url}/create`}
                render={props => <CreateCHCProduct {...props} />}
            />
            <Route
                path={`${match.url}/view`}
                render={props => <ViewCHCProduct {...props} />}
            />

            <Redirect to="/error" />
        </Switch>
    </Suspense>
);
export default CHCProduct;
