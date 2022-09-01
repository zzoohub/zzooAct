import { styled } from "../utils/styled.js";
import { useState } from "../utils/useState.js";

const Li = styled("li")`
  color: red;
  height: 100px;
`;
const Btn = styled("button")`
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
      ${numbers.map((item) => Li(item)).join("")}
      ${Btn("버튼", { id: "add", onclick: "setNumbers()" })}
    </ul>
  `;
};

export default List;
