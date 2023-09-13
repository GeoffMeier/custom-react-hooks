import React, { useState } from 'react';
import { UseIncrement } from '../hooks';
const Increment = () => {
  const [volume, { inc, dec, reset }] = UseIncrement({
    maxValue: 10,
    minValue: 0,
    initial: 5,
    step: 1,
  });

  return (
    <div>
      <h3>Volume</h3>
      <button onClick={dec}> - </button>
      {volume}
      <button onClick={inc}> + </button>
      <button onClick={reset}> reset </button>
    </div>
  );
};

export default Increment;
