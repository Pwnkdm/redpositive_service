import { GET_DATA } from "./actiontypes";

const initState = { profiles: [] };

export const reducer = (state = initState, { type, payload }) => {
  switch (type) {
    case GET_DATA: {
      console.log(payload);
      return { ...state, profiles: payload.profiles };
    }
    default:
      break;
  }
};
console.log(initState);
