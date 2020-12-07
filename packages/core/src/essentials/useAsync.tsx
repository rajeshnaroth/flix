import React, { useEffect } from "react";
export interface IReducer {
  errorMessage?: object | null;
  isBusy: boolean;
  isError: boolean;
  isStale: boolean;
  result: any;
}

export type TransformerFunction = (input: object | any[]) => object | any[];
export type LoaderFunction = () => Promise<any>;

export interface IAsyncResult extends IReducer {
  execute: (loader: LoaderFunction) => Promise<any>;
  reset: () => void;
}
export enum AsyncAction {
  RESET = "RESET",
  SET_WAITING = "SET_WAITING",
  SET_DATA = "SET_DATA",
  SET_ERROR = "SET_ERROR",
}

export const waitingAction = () => ({
  data: {},
  type: AsyncAction.SET_WAITING,
});

export const dataUpdateAction = (result: object) => ({
  data: result,
  type: AsyncAction.SET_DATA,
});

export const errorAction = (error: object) => ({
  data: error,
  type: AsyncAction.SET_ERROR,
});

export const resetAction = () => ({
  data: {},
  type: AsyncAction.RESET,
});

const initialState: IReducer = {
  errorMessage: null,
  isBusy: false,
  isError: false,
  isStale: false,
  result: null,
};

export interface IReducerAction {
  type: string;
  data: any;
}

const extractErrorMessages = (errors: any) =>
  errors.map((error: { message: string }) => error.message).toString() ||
  "Failed to perform operation.";

const asyncStateReducer = (
  state: IReducer = initialState,
  action: IReducerAction
) => {
  switch (action.type) {
    case AsyncAction.SET_WAITING:
      return { ...state, isBusy: true, isStale: true, errorMessage: null };
    case AsyncAction.SET_DATA:
      return {
        ...state,
        isBusy: false,
        isError: false,
        isStale: false,
        errorMessage: null,
        result: action.data,
      };
    case AsyncAction.SET_ERROR:
      return {
        ...state,
        isBusy: false,
        isError: true,
        errorMessage: action.data.response?.data?.errors
          ? extractErrorMessages(action.data.response.data.errors)
          : action.data.message,
        result: null,
      };
    case AsyncAction.RESET:
      return {
        ...state,
        isBusy: false,
        isStale: false,
        isError: false,
        errorMessage: null,
        result: null,
      };
    default:
      return state;
  }
};

// useAsync is a utility that can simplify running async calls
// returns IAsyncResult

export const useAsync = (xformer?: TransformerFunction): IAsyncResult => {
  const [
    { isBusy, isError, isStale, errorMessage, result },
    dispatch,
  ] = React.useReducer(asyncStateReducer, initialState);
  const cancelled = React.useRef(false);
  const cancel = () => (cancelled.current = true);

  useEffect(() => {
    return () => {
      cancel();
    };
  }, []);

  const execute = async (loader: LoaderFunction) => {
    dispatch(waitingAction());
    try {
      const pload: any = await loader();
      const transformedPayload = xformer ? xformer(pload) : pload;
      if (!cancelled.current) {
        dispatch(dataUpdateAction(transformedPayload));
        return Promise.resolve(transformedPayload);
      }
    } catch (e) {
      !cancelled.current && dispatch(errorAction(e));
      throw e;
    }
  };

  const reset = () => dispatch(resetAction());

  return { isBusy, isStale, isError, errorMessage, result, reset, execute };
};
