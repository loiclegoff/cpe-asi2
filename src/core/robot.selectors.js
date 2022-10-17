export const selectRobots = (state) => state.robots;
export const selectPartsofSelectedRobot = (state) => {
  const selectedRobot = state.robots.find(
    (robot) => robot.id === state.selectedRobotId
  );
  const selectedPartIds = selectedRobot?.parts ?? [];

  console.log(selectedPartIds);
  return state.parts.filter((part) =>
    selectedPartIds.includes(part.id)
  );
};
