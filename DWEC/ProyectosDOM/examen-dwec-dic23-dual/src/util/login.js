import { renderMain } from "../components/renderMain";
import { getCredentials } from "../helper/getCredentials";

export function login(url){
     // Mueve la obtención de elementos aquí
     const form = document.querySelector(".form-login");
    
     const inputUsername = document.getElementById("inputUsername");
     const inputPassword = document.getElementById("inputPassword");
     
 
     form.addEventListener("submit", async (e) => {
         e.preventDefault();
         console.log("HOLA 2");
         if (inputPassword.value !== "" && inputUsername.value !== "") {
             const username = inputUsername.value;
             const password = inputPassword.value;
             const data = { username, password };
             console.log(data);
             const user = {
                user: await getCredentials(`${url}/users?username=${username}&?password=${password}`),
                expireDate: 60 * 60 * 1000,
             }
             console.log(user);
             localStorage.setItem("loged",JSON.stringify(user))
             window.location.reload()
            
         } else {
             console.log("Vacio");
         }
     });
}