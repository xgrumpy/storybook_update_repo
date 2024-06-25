"use client"
import React, { createContext, useContext, useReducer } from 'react';

export type State = {
  user: {};
  apiResponse: any; // Define more specific types if possible
};

export type Action = {
  type: string;
  payload: any;
};

const initialState: State = {
  user: {},
  apiResponse: {},
};

// Providing a default value for the context
const defaultDispatch: React.Dispatch<Action> = () => initialState; // Provide a no-op function or handle appropriately
const store = createContext<{ state: State; dispatch: React.Dispatch<Action> }>({ state: initialState, dispatch: defaultDispatch });
const { Provider } = store;

const StateProvider = ({ children }: { children: React.ReactNode }) => {
  const [state, dispatch] = useReducer(
    (state: State, action: Action) => {
      switch (action.type) {
        case 'SET_USER':
          return { ...state, user: { ...action.payload } };
        case 'SET_RESPONSE':
          return { ...state, apiResponse: { ...action.payload } };
        default:
          return state;
      }
    },
    initialState
  );

  return <Provider value={{ state, dispatch }}>{children}</Provider>;
};

export { store, StateProvider };