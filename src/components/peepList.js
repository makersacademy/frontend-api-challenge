import React, { useState, useEffect } from 'react';
import Peep from './peep';

function PeepList() {
  const [test, setTest] = useState([]);

  useEffect(() => {
    async function fetchPeeps() {
      const data = await fetch('https://chitter-backend-api-v2.herokuapp.com/peeps');
      data.json().then((peeps) => setTest(peeps));
    }

    fetchPeeps();
  }, []);

  return (
    <div>
      {test.map((peep) => (<Peep key={peep.id} text={peep.body} />))}
    </div>
  );
}

export default PeepList;
