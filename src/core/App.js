import List from "../components/List.js";
const App = () => {
  return `
   ${List()}

  `;
};

const app = document.getElementById("app");
app.innerHTML = App();
