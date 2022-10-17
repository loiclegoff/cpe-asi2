import { RobotActions } from './robots.actions';

const initStateValue = {
  robots: [],
};

export const robotReducer = (state = initStateValue, action) => {
  console.log(action.type, action.payload);
  if (action.type === RobotActions.init) {
    return {
      ...state,
      robots: action.payload.robots,
    };
  }

  return state;
};
