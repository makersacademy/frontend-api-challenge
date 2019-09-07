import React from 'react';

const PeepSingle = ({item}) => (
  <div className="col s12 m3">
    <div className="card cyan darken-2 z-depth-3">
      <div className="card-content white-text">
        <span className="card-title">@{item.user.handle}</span>
        <p>{item.body} Created at: {item.created_at}</p>
      </div>
    </div>
  </div>
);


 
export default PeepSingle;