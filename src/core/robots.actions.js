/**
 *  ActionsTypes
 */

export const RobotActions = {
  initRobots: '@@robots/INIT_ROBOTS',
  initParts: '@@robots/INIT_PARTS',
  setSelectedRobotId: '@@robots/SET_SELECTED_ROBOT_ID',
};

/**
 * Actions creators
 */

export const initRobots = (robots) => {
  return {
    type: RobotActions.initRobots,
    payload: {
      robots,
    },
  };
};

export const initParts = (parts) => {
  return {
    type: RobotActions.initParts,
    payload: {
      parts,
    },
  };
};

export const setSelectedRobotId = (selectedRobotId) => {
  return {
    type: RobotActions.setSelectedRobotId,
    payload: selectedRobotId,
  };
};
