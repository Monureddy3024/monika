import React from "react";
import { Router, Route, Switch, Redirect } from "react-router-dom";
import { createBrowserHistory } from "history";

// Layouts & Route
import routes from "./routes";
import PublicLayout from "./shared/layout/PublicLayout";

// Public pages
import AssignmentOne from "./pages/AssignmentOne";
import AssignmentTwo from "./pages/AssignmentTwo";
import AssignmentThree from "./pages/AssignmentThree";

const pages = [
  // Public pages
  {
    exact: true,
    path: routes.assignmentone,
    component: AssignmentOne,
    layout: PublicLayout
  },
  {
    exact: true,
    path: routes.assignmenttwo,
    component: AssignmentTwo,
    layout: PublicLayout
  },
  {
    exact: true,
    path: routes.assignmentthree,
    component: AssignmentThree,
    layout: PublicLayout
  }
];

const App = () => {
  const history = createBrowserHistory();

  return (
    <Router history={history}>
      <Switch>
        {pages.map(
          ({ exact, path, component: Component, layout: Layout }, index) => (
            <Route
              key={index}
              exact={exact}
              path={path}
              render={props => (
                <Layout history={props.history}>
                  <Component {...props} />
                </Layout>
              )}
            />
          )
        )}
        <Redirect to={routes.assignmentone} />
      </Switch>
    </Router>
  );
};

export default App;
