import { GET_DATA } from "./actiontypes";

const initState = { profiles: [] };

export const reducer = (state = initState, { type, payload }) => {
  switch (type) {
    case GET_DATA: {
      return { ...state, profiles: payload.profiles };
    }
    default:
      break;
  }
};
