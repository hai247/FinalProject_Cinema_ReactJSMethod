import React from "react";
import "./App.css";
import { BrowserRouter, Route, Switch } from "react-router-dom";
// import HomePage from "./containers/Home/HomePage";
// import About from "./containers/Home/About";
// import ListMovie from "./containers/Home/ListMovie";
import PageNotFound from "./containers/PageNotFound";
import { routesHome, routesAdmin } from "./routes";
import HomeTemplate from "./template/HomeTemplate";
import AdminTemplate from "./template/AdminTemplate";
import Auth from "./containers/Admin/Auth";

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

  const showMenuAdmin = routes => {
    if (routes && routes.length > 0) {
      return routes.map((item, index) => {
        return (
          <AdminTemplate
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
        {showMenuAdmin(routesAdmin)}

        <Route exact={false} path="/auth" component={Auth} />

        {/* Trang chu - localhost:3000 */}
        {/* <Route exact path="/" component={HomePage} /> */}

        {/* Trang About - localhost:3000/about */}
        {/* <Route path="/about" component={About} /> */}

        {/* Trang ListMovie - localhost:3000/list-movie */}
        {/* <Route path="/list-movie" component={ListMovie} /> */}

        {/* Trang Không tồn tại */}
        <Route path="" component={PageNotFound} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
