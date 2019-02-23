import React, { Fragment } from "react";
import { Link } from "react-router-dom";
import "../App.css";

class Logo extends React.Component {
  render() {
    return (
      <Fragment>
        <div className="chitter__logo">
          {/* <Link to="/"> */}
          <h1>Chitter</h1>
          {/* </Link> */}
        </div>
      </Fragment>
    );
  }
}

export default Logo;
