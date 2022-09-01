import { render } from "./render.js";

let state = undefined;
export const useState = (initState) => {
  if (state === undefined) {
    state = initState;
  }
  const setState = (newState) => {
    state = newState;
    console.log("in useState", state);
    render();
  };
  return [state, setState];
};
