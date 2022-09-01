const Header = () => {
  const cap = document.querySelector("cap");

  console.log(cap);

  cap.innerHTML = `
    <style>
        .cap{
            display: flex;
            justify-content: space-between;
            align-items: center;
            width: 100%;
            height: 100px;
        }
        .logo{
            color: ${cap.dataset.chapter === "3" ? "red" : "black"};
            font-size: 35px;
        }
    </style>
    <div class="cap">
        <h1 class="logo">${cap.dataset.title}</h1>
    </div>
  `;
};

Header();

export default Header;
