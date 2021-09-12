import React from "react";

export default function ListPeeps({ feed }) {
  const allPeeps = feed.map((peep, id) => {
    return (
      <li key={id}>
        {" "}
        <div className="peepBody">{peep}</div>
        <button>Like peep</button>
      </li>
    );
  });

  return <ol>{allPeeps}</ol>;
}
