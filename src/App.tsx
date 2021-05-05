import React from "react";
import { Route, Switch } from "react-router-dom";
import { Global } from "@emotion/react";
import global from "./lib/styles/global";
import GNB from "./components/GNB";
import Layout from "./components/Layout";
import Statistics from "./pages/Statistics";
import Info from "./pages/Info";

function App() {
  return (
    <>
      <div id="portal" />
      <Global styles={global} />
      <Switch>
        <Route path={["/", "/map", "/map/:id", "/info"]} exact>
          <Layout>
            <Layout.Aside>
              <GNB />
            </Layout.Aside>
            <Layout.Main>
              <Switch>
                <Route path="/" exact>
                  <Statistics />
                </Route>
                <Route path="/map/:id" exact></Route>
                <Route path="/info" exact>
                  <Info />
                </Route>
              </Switch>
            </Layout.Main>
          </Layout>
        </Route>
        <Route>404</Route>
      </Switch>
    </>
  );
}

export default App;
