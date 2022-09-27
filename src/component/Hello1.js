import React from 'react';

function Child({handleClick}) {
  return (
    <div>
      <button onClick={handleClick(10)}>Submit</button>
    </div>
  )
}
export default Child
