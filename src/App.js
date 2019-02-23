import React, { Component, Fragment } from "react";
import ButtonAppBar from "./components/ButtonAppBar";
import CenteredTabs from "./components/CenteredTabs";
import "./App.css";

class App extends Component {
  render() {
    return (
      <Fragment>
        <ButtonAppBar />
        <CenteredTabs />
      </Fragment>
    );
  }
}

export default App;
