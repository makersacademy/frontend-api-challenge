import React from "react";
import ListPeeps from "../../components/ListPeeps/ListPeeps";
import Header from "../../components/Header/Header";
import "./Feed.css";

class Feed extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      feed: [],
    };
  }

  extractPeepBodyFromAPIResultArray(array) {
    return array.map((peep) => {
      return peep.body;
    });
  }

  async getPeeps() {
    console.log("get Peeps called");
    const response = await fetch(
      "https://chitter-backend-api-v2.herokuapp.com/peeps"
    );
    const value = await response.json();
    this.setState({ feed: this.extractPeepBodyFromAPIResultArray(value) });
  }

  handleClick() {
    this.getPeeps();
  }

  render() {
    return (
      <>
        <Header title="Welcome to Chitter" />
        <button
          className="button"
          id="refreshFeed"
          onClick={() => this.handleClick()}
        >
          Refresh feed
        </button>
        <ListPeeps feed={this.state.feed} />
      </>
    );
  }
}

export default Feed;
