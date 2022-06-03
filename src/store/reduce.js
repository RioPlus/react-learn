const defaultState = {
  num: 1,
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = defaultState, action) => {
  const newState = JSON.parse(JSON.stringify(state));
  //   if (action.type === "addNum") {
  //     newState.num += action.value;
  //   }
  switch (action.type) {
    case "addNum": {
      newState.num += action.value;
      break;
    }
    default:
      break;
  }
  return newState;
};
