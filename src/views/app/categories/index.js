import React, { Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

const CreateCategory = React.lazy(() => import('./create') );
const ViewCategories = React.lazy( ()=> import('./view'))

const Categories = ({ match }) => (
    <Suspense fallback={<div className="loading" />}>
        <Switch>
            <Redirect exact from={`${match.url}/`} to={`${match.url}/view`} />
            <Route
                path={`${match.url}/create`}
                render={props => <CreateCategory {...props} />}
            />
            <Route
                path={`${match.url}/view`}
                render={props => <ViewCategories {...props} />}
            />
            <Redirect to="/error" />
        </Switch>
    </Suspense>
);
export default Categories;
