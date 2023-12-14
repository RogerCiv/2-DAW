// IMPORT

import { renderLogin } from "./src/components/renderLogin";
import { renderMain } from "./src/components/renderMain";

import { login } from "./src/util/login";
import { logout } from "./src/util/logout";

// -- variales


const url = "http://localhost:4000";
const app = document.getElementById("app")

// elementos del dom

const table_checkin = document.getElementById("table__checkin");



// ---- funciones---

// ... (importaciones y declaraciones de variables)

// ---- funciones---

if (!localStorage.getItem("loged")) {
    renderLogin(app);
    login(url)
   
} else{
    const itemLS = JSON.parse(localStorage.getItem("loged"))
    console.log(itemLS);
    setTimeout(() => {
        logout()
    }, itemLS.expireDate);

    renderMain(app)

    const btnLogout = document.getElementById("btnLogout")
    btnLogout.addEventListener("click", (e) => {
        e.preventDefault()
      logout()
    })
}
    








