import React from 'react';

function Peep({text, userHandle}) {
  return (
    <div>
      <div>
        {userHandle}
      </div>
      <div>
        {text}
      </div>
    </div>
  );
}

export default Peep;
