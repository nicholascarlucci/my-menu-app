import * as types from "../actions/actionTypes";

export default function mealReducer(state = [], action) {
  switch (action.type) {
    case types.CREATE_MEAL:
      return [...state, { ...action.meal }];
    case types.LOAD_MEALS_SUCCESS:
      return action.meals;
    default:
      return state;
  }
}
