import React, { Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

const CreateSubCategory = React.lazy(() => import('./create') );
const ViewSubCategories = React.lazy( ()=> import('./view'))

const Categories = ({ match }) => (
    <Suspense fallback={<div className="loading" />}>
        <Switch>
            <Redirect exact from={`${match.url}/`} to={`${match.url}/view`} />
            <Route
                path={`${match.url}/create`}
                render={props => <CreateSubCategory {...props} />}
            />
            <Route
                path={`${match.url}/view`}
                render={props => <ViewSubCategories {...props} />}
            />
            <Redirect to="/error" />
        </Switch>
    </Suspense>
);
export default Categories;
