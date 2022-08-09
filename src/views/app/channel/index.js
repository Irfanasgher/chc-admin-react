import React, { Suspense } from 'react';
import { Redirect, Route, Switch } from 'react-router-dom';

const CreateChannel = React.lazy(() => import('./create') );
const ViewChannels = React.lazy( ()=> import('./view'))

const Channels = ({ match }) => (
    <Suspense fallback={<div className="loading" />}>
        <Switch>
            <Redirect exact from={`${match.url}/`} to={`${match.url}/view`} />
            <Route
                path={`${match.url}/create`}
                render={props => <CreateChannel {...props} />}
            />
            <Route
                path={`${match.url}/view`}
                render={props => <ViewChannels {...props} />}
            />
            <Redirect to="/error" />
        </Switch>
    </Suspense>
);
export default Channels;
