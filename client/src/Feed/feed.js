import React from "react";

import Peep from "../Peep/peep.js";

class ChitterFeed extends React.Component {
  state = { peeps: null };

  componentWillMount() {
    fetch("https://chitter-backend-api.herokuapp.com/peeps")
      .then(response => response.json())
      .then(json => {
        const peeps = json;
        this.setState({ peeps });
      });
  }

  render() {
    return (
      <React.Fragment>
        {this.state.peeps &&
          this.state.peeps.map((peep, index) => {
            return (
              // <p>{peep.body}</p>

              <Peep
                body={peep.body}
                name={peep.user.handle}
                timestamp={peep.created_at}
              />
            );
          })}
      </React.Fragment>
    );
  }
}

// ReactDOM.render(
//   <HelloMessage name="Taylor" />,
//   document.getElementById("hello-example")
// );

export default ChitterFeed;

// state = { spaces: null };
//
// componentWillMount() {
//     fetch("http://localhost:3000/api/spaces")
//       .then(response => response.json())
//       .then(json => {
//         const spaces = json;
//         this.setState({ spaces });
//       });
//   }
