import "./style.css";
import javascriptLogo from "./javascript.svg";
import viteLogo from "/vite.svg";
import { pintarPromesas } from "./components/pintarPromesas.js";
import { pintarUsersJson } from "./components/pintarUsersJson.js";

document.querySelector("#app").innerHTML = `
  <div>
    <a href="https://vitejs.dev" target="_blank">
      <img src="${viteLogo}" class="logo" alt="Vite logo" />
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank">
      <img src="${javascriptLogo}" class="logo vanilla" alt="JavaScript logo" />
    </a>
    <h1>Promesas !</h1>
    <div class="card">
     
    </div>
    
  </div>
`;

const elementCard = document.querySelector(".card");

pintarUsersJson(elementCard);
