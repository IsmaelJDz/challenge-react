import { HomeActionTypes } from "../types";

/**
 *
 * @param {*} paramRes: state, action
 * @returns new states
 */

const HomeReducer = (state, action) => {
  switch (action.type) {
    case HomeActionTypes.SET_CURRENT_PLACES:
      return {
        ...state,
        places: action.payload || []
      };

    case HomeActionTypes.SET_NAME_PLACE: {
      return {
        ...state,
        airline: action.payload || null
      };
    }

    case HomeActionTypes.REGISTER_USER:
      return {
        ...state,
        success: action.payload
      };

    default:
      return state;
  }
};

export default HomeReducer;
