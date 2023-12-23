import App from "../App.js";

const zzooAct = () => {
  const states = new Map();
  let currentIndex = 0;

  const useState = (defaultValue) => {
    if (!states.get(currentIndex) && defaultValue)
      states.set(currentIndex, defaultValue);

    const setState = (data) => {
      const prev = states.get(currentIndex);
      if (typeof data === "function") {
        states.set(currentIndex, data(prev));
        return render();
      }
      states.set(currentIndex, data);
      render();
    };

    const state = states.get(currentIndex);
    return [state, setState];
  };

  const render = () => {
    document.getElementById("app").innerHTML = App();
  };

  return { useState, render };
};

export default zzooAct();
