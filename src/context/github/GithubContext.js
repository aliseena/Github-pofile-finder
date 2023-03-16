import { createContext, useReducer } from 'react';
import GithubReducer from './GithubReducer';
const GithubContext = createContext();

export const GithubProvider = ({ children }) => {
  // state
  const initialState = {
    users: [],
    user: {},
    repos: [],
    loading: false,
  };
  const [state, dispatch] = useReducer(GithubReducer, initialState);
  //Provider wrapper
  return (
    <GithubContext.Provider
      value={{
        ...state,
        dispatch,
      }}
    >
      {children}
    </GithubContext.Provider>
  );
};

export default GithubContext;
