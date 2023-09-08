import { useState } from 'react';

export const UseIncrement = ({ initial = 0, maxValue = 10, minValue = -10, step = 1 }) => {
  const [value, setValue] = useState(initial);

  const inc = () => {
    setValue((prevState) => (prevState >= maxValue ? maxValue : prevState + step));
  };

  const dec = () => {
    setValue((prevState) => (prevState <= minValue ? minValue : prevState - step));
  };

  const reset = () => {
    setValue(initial);
  };

  return [value, { inc, dec, reset }];
};
