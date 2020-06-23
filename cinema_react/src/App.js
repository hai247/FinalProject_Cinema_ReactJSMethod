import React from "react";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import HomeTemplate from './template/HomeTemplate';
import {routesHome} from './routes'

function App() {
  const showMenuHome = routes => {
    if (routes && routes.length > 0) {
      return routes.map((item, index) => {
        return (
          <HomeTemplate
            key={index}
            exact={item.exact}
            path={item.path}
            Component={item.component}
          />
        );
      });
    }
  };
  return (
    <BrowserRouter>
      <Switch>
        {showMenuHome(routesHome)}
        {/* <Route exact path="/auth" component={Auth} /> */}
        {/* Trang chu - localhost:3000 */}
        {/* <Route exact path="/" component={HomePage} /> */}

        {/* Trang About - localhost:3000/about */}
        {/* <Route path="/about" component={About} /> */}

        {/* Trang ListMovie - localhost:3000/list-movie */}
        {/* <Route path="/list-movie" component={ListMovie} /> */}

        {/* Trang Không tồn tại */}
        {/* <Route path="" component={PageNotFound} /> */}
      </Switch>
    </BrowserRouter>
  );
}

export default App;
