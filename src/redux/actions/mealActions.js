import * as types from "./actionTypes";
import * as courseApi from "../../api/courseApi";

export function createMeal(meal) {
  return { type: types.CREATE_MEAL, meal };
}

export function loadMealsSuccess(meals) {
  return { type: types.LOAD_MEALS_SUCCESS, meals };
}

export function loadMeals() {
  return function(dispatch) {
    return courseApi
      .getMeals()
      .then(meals => {
        dispatch(loadMealsSuccess(meals));
      })
      .catch(error => {
        throw error;
      });
  };
}
