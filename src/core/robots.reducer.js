import { RobotActions } from './robots.actions';

const initStateValue = {
  robots: [],
  parts: [],
  selectedRobotId: null,
};

export const robotReducer = (state = initStateValue, action) => {
  console.log(action.type, action.payload);
  if (action.type === RobotActions.initRobots) {
    return {
      ...state,
      robots: action.payload.robots,
    };
  }

  if (action.type === RobotActions.initParts) {
    return {
      ...state,
      parts: action.payload.parts,
    };
  }

  if (action.type === RobotActions.setSelectedRobotId) {
    return {
      ...state,
      selectedRobotId: action.payload,
    };
  }

  return state;
};
