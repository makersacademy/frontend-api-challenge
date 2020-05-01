import React from 'react';
import Peep from './peep';

function PeepList() {
  const peeps = ['This is a peep', 'This is also a peep'].map((peep) => (
    <Peep key={peep} text={peep} />
  ));
  return (
    <div>
      {peeps}
    </div>
  );
}

export default PeepList;
