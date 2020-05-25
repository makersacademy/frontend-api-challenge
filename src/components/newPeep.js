import React from 'react';

function NewPeep() {
  return (
    <div>
      <form>
        <label htmlFor="text">Text:</label>
        <textarea name="text" id="text" />
      </form>
    </div>
  );
}

export default NewPeep;
