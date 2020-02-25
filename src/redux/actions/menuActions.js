import * as types from "./actionTypes";

export function createMenu(menu) {
  return { type: types.CREATE_MENU, menu };
}
