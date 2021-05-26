import React, { useReducer } from "react";
import HomeContext from "./HomeContext";
import HomeReducer from "./HomeReducer";

import { HomeActionTypes } from "../types";

/**
|--------------------------------------------------
| General State context API
|--------------------------------------------------
*/

const HomeState = ({ children }) => {
  /**
   * Desc: Initial state
   */

  const initialState = {
    places: [],
    airline: null,
    loading: false,
    error: false,
    success: false
  };

  const [state, dispatch] = useReducer(HomeReducer, initialState);

  /**
   * @param {*} paramRes: places from api to context state
   */

  const setPlacesData = places => {
    dispatch({
      type: HomeActionTypes.SET_CURRENT_PLACES,
      payload: places
    });
  };

  /**
   *
   * @param {*} paramRes: setSpecificAirline on context state
   * @returns general data
   */

  const setNamePlace = namePlace => {
    dispatch({
      type: HomeActionTypes.SET_NAME_PLACE,
      payload: namePlace
    });
  };

  /**
   * @param {*} paramRes: user data: { name, email, tel, age } send backend
   * show in console the user data
   */

  const registerUser = user => {
    console.log("DATA USER ---->", user);
    dispatch({
      type: HomeActionTypes.REGISTER_USER,
      payload: true
    });

    setTimeout(() => {
      dispatch({
        type: HomeActionTypes.REGISTER_USER,
        payload: false
      });
    }, 3000);
  };

  return (
    <HomeContext.Provider
      value={{
        places: state.places,
        airline: state.airline,
        loading: state.loading,
        success: state.success,
        error: state.error,
        setPlacesData,
        setNamePlace,
        registerUser
      }}
    >
      {children}
    </HomeContext.Provider>
  );
};

export default HomeState;
