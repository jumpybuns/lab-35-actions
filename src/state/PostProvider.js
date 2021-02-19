import React, { createContext, useReducer, useContext } from 'react';
import reducer, { initialState } from '../reducers/postReducer';

const BlogContext = createContext(null);

// eslint-disable-next-line react/prop-types
export const BlogProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <BlogContext.Provider value={{ state, dispatch }}>
      {children}
    </BlogContext.Provider>
  );
};

export const useDispatch = () => {
  const { dispatch } = useContext(BlogContext);

  return dispatch;
};

export const useSelector = (selectorFunction) => {
  const { state } = useContext(BlogContext);

  return selectorFunction(state);
};
