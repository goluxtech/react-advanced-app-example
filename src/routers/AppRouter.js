import React from 'react';
import { Router, Route, Switch, Link, NavLink } from 'react-router-dom';
import createHistory from 'history/createBrowserHistory';
import CourseDashboardPage from '../components/CourseDashboardPage';
import AddCoursePage from '../components/AddCoursePage';
import EditCoursePage from '../components/EditCoursePage';
import NotFoundPage from '../components/NotFoundPage';

export const history = createHistory();

const AppRouter = () => (
  <Router history={history}>
    <div>
      <Switch>
        <Route path="/" component={CourseDashboardPage} exact={true} />
        <Route path="/create" component={AddCoursePage} />
        <Route path="/edit/:id" component={EditCoursePage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </Router>
);

export default AppRouter;
