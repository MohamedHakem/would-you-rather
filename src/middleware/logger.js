const logger = (store) => (next) => (action) => {
  console.group(action.type);
  console.log("the action", action);
  const returnValue = next(action);
  console.log("The new state: ", store.getState());
  console.groupEnd(action.type);
  return returnValue;
};

export default logger;
