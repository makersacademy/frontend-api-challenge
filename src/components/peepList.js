import React, { useState, useEffect } from 'react';
import Peep from './peep';

function PeepList() {
  const [test, setTest] = useState([]);

  const peeps = ['This is a peep', 'This is also a peep'].map((peep) => (
    <Peep key={peep} text={peep} />
  ));

  useEffect(() => {
    async function fetchPeeps() {
      const peeps2 = await fetch('https://chitter-backend-api-v2.herokuapp.com/peeps');
      await peeps2.json().then((peeps3) => setTest(peeps3));
    }

    fetchPeeps();
  }, []);

  return (
    <div>
      {peeps}
      {JSON.stringify(test)}
    </div>
  );
}

export default PeepList;
