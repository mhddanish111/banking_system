import { useReducer, useMemo } from 'react';
import RootReducer from './reducer';
import initState from './InitState';
import AppContext from './Context';

function AppContextWrapper({ children }: any) {
  const [state, dispatch] = useReducer(RootReducer, initState);
  const wrapper = useMemo(() => {
    return (
      <AppContext.Provider value={{ state, dispatch }}>
        {children}
      </AppContext.Provider>
    );
  }, [state, dispatch, children]);
  return wrapper;
}

export default AppContextWrapper;
