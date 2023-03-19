import { createContext, useContext, useReducer } from 'react';

import { IContextProps } from './types';

import type { Dispatch } from 'react';

export interface IAddressStateContext {
  value: string;
  hash: string;
  isIP: boolean;
  isValid: boolean;
}

export interface IAddressDispatchAction {
  type: 'SET_ADDRESS';
  payload: string;
}

export const ACTIONS = {
  SET_ADDRESS: 'SET_ADDRESS',
};

export const AddressStateContext = createContext<IAddressStateContext>({
  value: '',
  hash: '',
  isIP: false,
  isValid: false,
});

export const AddressDispatchContext = createContext<React.Dispatch<IAddressDispatchAction>>(
  () => {},
);

export const useAddressState = (): IAddressStateContext => {
  const context = useContext(AddressStateContext);

  if (!context) {
    throw new Error('useAddressState must be used within a AddressProvider');
  }

  return context;
};

export const useAddressDispatch = (): Dispatch<IAddressDispatchAction> => {
  const context = useContext(AddressDispatchContext);

  if (!context) {
    throw new Error('useAddressDispatch must be used within a AddressProvider');
  }

  return context;
};

const hashValue = (value: string) => '';
const verifyIsIP = (value: string) => false;
const verifyIsValidAddress = (value: string) => false;

export const addressReducer = (
  state: IAddressStateContext,
  action: IAddressDispatchAction,
): IAddressStateContext => {
  switch (action.type) {
    case ACTIONS.SET_ADDRESS:
      console.log(state, action);
      return {
        value: action.payload,
        hash: hashValue(action.payload),
        isIP: verifyIsIP(action.payload),
        isValid: verifyIsValidAddress(action.payload),
      };
    default:
      return state;
  }
};

export const AddressContext = ({ children }: IContextProps) => {
  const [state, dispatch] = useReducer(addressReducer, {
    value: '',
    hash: '',
    isIP: false,
    isValid: false,
  });

  return (
    <AddressStateContext.Provider value={state}>
      <AddressDispatchContext.Provider value={dispatch}>{children}</AddressDispatchContext.Provider>
    </AddressStateContext.Provider>
  );
};
