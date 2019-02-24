import React, { Fragment } from "react";

class Peep extends React.Component {
  render() {
    const {
      body,
      id,
      created_at,
      likes,
      updated_at,
      user
    } = this.props.details;
    return (
      <Fragment>
        <li>
          <h3>{body}</h3>
          <h5>{user.handle}</h5>
          <p>Created at: {created_at}</p>
          <p>Likes: {likes.length}</p>
        </li>
      </Fragment>
    );
  }
}

export default Peep;
