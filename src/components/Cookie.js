import React from 'react';
import { useCookie } from '../hooks';
const Cookie = () => {
  const [cookie, setCookie] = useCookie({ key: 'test' });

  if (!cookie) return null;
  return (
    <div>
      <h1>{cookie}</h1>
      <input value={cookie} onChange={(e) => setCookie(e.target.value)} />
    </div>
  );
};
export default Cookie;
