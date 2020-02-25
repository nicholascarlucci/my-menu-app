import * as types from "../actions/actionTypes";

export default function menuReducer(state = [], action) {
  switch (action.type) {
    case types.CREATE_MENU:
      return [...state, { ...action.menu }];
    default:
      return state;
  }
}
