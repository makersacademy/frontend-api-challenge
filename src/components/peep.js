import React from 'react';

function Peep({text, userHandle}) {
  return (
    <div style={{ border: '1px solid black', margin: '5px', padding: '5px' }}>
      <div style={{ textAlign: 'right' }}>
        {userHandle}
      </div>
      <div>
        {text}
      </div>
    </div>
  );
}

export default Peep;
