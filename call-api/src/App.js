import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';
import Menu from './components/Menu/Menu';
import routes from './routes';

class App extends React.Component {
  render() {
    return (
      <Router>
        <Menu />
        { this.showContentMenu(routes) }
      </Router>
    );
  }

  showContentMenu = (routes) => {
    var result = null;
    if(routes.length > 0) {
      result = routes.map((route, index) => {
        return (
          <Route key={index} path={route.path} exact={route.exact}>
            { route.main }
          </Route>
        );
      })
    }
    return <Switch>{result}</Switch>;
  }
}

export default App;