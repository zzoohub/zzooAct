import Header from "./components/Header.js";
import List from "./components/List.js";

const App = () => {
  return `
   ${Header()}
   ${List()}
  `;
};
document.getElementById("app").innerHTML = App();

export default App;
