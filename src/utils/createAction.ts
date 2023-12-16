import { createAction } from '@reduxjs/toolkit';

export const request = (type: string) => createAction(type);

export const success = (type: string) =>
  createAction(type, (data) => ({
    payload: {
      ...data
    }
  }));

export const fail = (type: string) =>
  createAction(type, (errorMessage) => ({
    payload: {
      errorMessage
    }
  }));

const createActionUtils = (actions?: { [key: string]: string }) => {
  if (actions) {
    const renderActions = Object.keys(actions).reduce(
      (prev: any, curr: string) => {
        const createTypes: string[] = ['0', '1', '2'];
        createTypes.forEach((value: string) => {
          if (curr === 'CLEAR') {
            prev[`${curr}`] = request(actions[curr]);
          } else {
            if (value === '0') {
              prev[`${curr}`] = request(actions[curr]);
            } else if (value === '1') {
              prev[`${curr}Success`] = success(`${actions[curr]}_SUCCESS`);
            } else {
              prev[`${curr}Fail`] = fail(`${actions[curr]}_FAIL`);
            }
          }
        });
        return prev;
      },
      {}
    );
    return renderActions;
  } else {
    return {};
  }
};

export default createActionUtils;
