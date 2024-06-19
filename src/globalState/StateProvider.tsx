"use client"

import React, { createContext, useReducer } from 'react';

export type State = {
  user: {};
  apiResponse: {};
};

export type Action = {
  type: string;
  payload: any;
};

const initialState: State = {
  user: {},
  apiResponse: {},
};

const store = createContext<{ state: State; dispatch: React.Dispatch<Action> } | undefined>(
  undefined
);
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