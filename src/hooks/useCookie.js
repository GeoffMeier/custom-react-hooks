import Cookies from 'js-cookie';
import { useState } from 'react';
export const useCookie = ({ key }) => {
  const initial = Cookies.get(key);
  const [cookie, setStateCookie] = useState(initial);
  const getCookie = () => Cookies.get(key);
  const setCookie = (value) => Cookies.set(key, value);

  return [cookie, setCookie];
};
