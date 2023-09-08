import React from 'react';
import { useMount, useUnMount } from '../hooks/useMount';
import { useToggle } from '../hooks/useToggle';

const Mount = () => {
  const { isToggled, toggle } = useToggle();

  return (
    <div>
      <button onClick={toggle}>Toggle</button>

      {isToggled && <UnMount />}
    </div>
  );
};

export const UnMount = () => {
  useMount(() => {
    console.log('mounted');
  });
  useUnMount(() => {
    console.log('UnMounted');
  });
  return <div>Unmount me</div>;
};

export default Mount;
