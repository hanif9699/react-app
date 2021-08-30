import {
    BrowserRouter as Router,
    Route,
    Switch
  } from "react-router-dom";
  import App from './App';
  import LoginPage from './LoginPage'
  function AppRouter() {
      return (
        <Router>
        <Switch>
            <Route path="/" component={App} exact={true}/>
            <Route path="/login" component={LoginPage} exact={true}/>
        </Switch>
        </Router>
      );
  }

export default AppRouter;

