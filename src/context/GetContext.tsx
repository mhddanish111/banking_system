import { useContext } from 'react';
import AppContext from './Context';

const GetContext = () => {
  return useContext(AppContext);
};

export default GetContext;
