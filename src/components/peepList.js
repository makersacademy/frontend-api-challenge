import React, { useState, useEffect } from 'react';
import Peep from './peep';

function PeepList() {

  const [peeps, setPeeps] = useState([]);

  useEffect(() => {
    async function fetchPeeps() {
      const data = await fetch('https://chitter-backend-api-v2.herokuapp.com/peeps');
      data.json().then((peepsData) => setPeeps(peepsData));
    }

    fetchPeeps();
  }, []); // empty array as second arg prevents the hook being repeatedly called

  return (
    <div>
      {peeps.map((peep) => (<Peep key={peep.id} text={peep.body} userHandle={peep.user.handle} />))}
    </div>
  );
}

export default PeepList;
