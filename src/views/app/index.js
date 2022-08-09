import React, { Component, Suspense } from 'react';
import { Route, withRouter, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

import AppLayout from '../../layout/AppLayout';

const Dashboards = React.lazy(() =>
  import(/* webpackChunkName: "dashboards" */ './dashboards')
);
const Pages = React.lazy(() =>
  import(/* webpackChunkName: "pages" */ './pages')
);
const Applications = React.lazy(() =>
  import(/* webpackChunkName: "applications" */ './applications')
);


const Ui = React.lazy(() => import(/* webpackChunkName: "ui" */ './ui'));
const Menu = React.lazy(() => import(/* webpackChunkName: "menu" */ './menu'));
const BlankPage = React.lazy(() =>
  import(/* webpackChunkName: "blank-page" */ './blank-page')
);
const Categories = React.lazy(() =>
    import(/* webpackChunkName: "blank-page" */ './categories')
);

const SubCategories = React.lazy(() =>
    import(/* webpackChunkName: "blank-page" */ './sub-categories')
);

const Membership = React.lazy(() =>
    import(/* webpackChunkName: "blank-page" */ './membership')
);

const Roles = React.lazy(() =>
    import(/* webpackChunkName: "blank-page" */ './roles')
);

const Users = React.lazy(() =>
    import(/* webpackChunkName: "blank-page" */ './users')
);

const Team = React.lazy(() =>
    import(/* webpackChunkName: "blank-page" */ './team')
);

const Channel = React.lazy(() =>
    import(/* webpackChunkName: "blank-page" */ './channel')
);

const TeamPage = React.lazy(() =>
    import(/* webpackChunkName: "blank-page" */ './team-page')
);

const CHCProduct = React.lazy(() =>
    import(/* webpackChunkName: "blank-page" */ './chc-products')
);

class App extends Component {
  render() {
    const { match } = this.props;

    return (
      <AppLayout>
        <div className="dashboard-wrapper">
          <Suspense fallback={<div className="loading" />}>
            <Switch>
              <Redirect
                exact
                from={`${match.url}/`}
                to={`${match.url}/blank-page`}
              />
              <Route
                path={`${match.url}/dashboards`}
                render={props => <Dashboards {...props} />}
              />
              <Route
                path={`${match.url}/applications`}
                render={props => <Applications {...props} />}
              />
              <Route
                path={`${match.url}/pages`}
                render={props => <Pages {...props} />}
              />
              <Route
                path={`${match.url}/ui`}
                render={props => <Ui {...props} />}
              />
              <Route
                path={`${match.url}/menu`}
                render={props => <Menu {...props} />}
              />
              <Route
                path={`${match.url}/blank-page`}
                render={props => <BlankPage {...props} />}
            />
              <Route
                  path={`${match.url}/categories`}
                  render={props => <Categories {...props} />}
              />
              <Route
                  path={`${match.url}/sub-categories`}
                  render={props => <SubCategories {...props} />}
              />
              <Route
                  path={`${match.url}/membership`}
                  render={props => <Membership {...props} />}
              />
              <Route
                  path={`${match.url}/roles`}
                  render={props => <Roles {...props} />}
              />
              <Route
                  path={`${match.url}/users`}
                  render={props => <Users {...props} />}
              />
              <Route
                  path={`${match.url}/team`}
                  render={props => <Team {...props} />}
              />
              <Route
                  path={`${match.url}/channel`}
                  render={props => <Channel {...props} />}
              />
              <Route
                  path={`${match.url}/team-page`}
                  render={props => <TeamPage {...props} />}
              />
              <Route
                  path={`${match.url}/chc-products`}
                  render={props => <CHCProduct {...props} />}
              />
              <Redirect to="/error" />
            </Switch>
          </Suspense>
        </div>
      </AppLayout>
    );
  }
}
const mapStateToProps = ({ menu }) => {
  const { containerClassnames } = menu;
  return { containerClassnames };
};

export default withRouter(
  connect(
    mapStateToProps,
    {}
  )(App)
);
