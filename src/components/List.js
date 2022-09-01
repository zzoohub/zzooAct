import { styled } from "../utils/styled.js";
import { useState } from "../utils/useState.js";

const li = styled("li")`
  color: red;
  height: 100px;
`;
const button = styled("button")`
  background-color: #333;
  color: #fff;
  cursor: pointer;
`;

const List = () => {
  const [numbers, setNumbers] = useState([1, 2, 3]);

  window.setNumbers = () => setNumbers([...numbers, numbers.length + 1]);
  console.log("in component", numbers);

  return `
    <ul>
      ${numbers.map((item) => li(item)).join("")}
      ${button("버튼", { id: "add", onclick: "setNumbers()" })}
    </ul>
  `;
};

export default List;
