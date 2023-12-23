import { styled } from "../zzooAct/styled.js";
import zzooAct from "../zzooAct/zzooAct.js";

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
  const [numbers, setNumbers] = zzooAct.useState([1, 2, 3]);

  window.setNumbers = () => setNumbers((prev) => [...prev, prev.length + 1]);
  return `
    <ul>
      ${numbers.map((item) => Li(item)).join("")}
      ${Btn("버튼", { id: "add", onclick: "setNumbers()" })}
    </ul>
  `;
};

export default List;
