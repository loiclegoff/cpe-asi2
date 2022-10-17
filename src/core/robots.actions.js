export const RobotActions = {
  init: '@@robots/INIT',
};

export const initRobots = (robots) => {
  return {
    type: RobotActions.init,
    payload: {
      robots,
    },
  };
};
