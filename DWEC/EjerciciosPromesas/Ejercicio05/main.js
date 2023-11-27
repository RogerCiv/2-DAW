import "./style.css";

const username = document.getElementById("username");
const password = document.getElementById("password");
const btnSend = document.getElementById("btnSend");
const form = document.getElementById("login");

const users = "https://jsonplaceholder.org/users";

async function fetchApi(url) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("No se pudo obtener los datos");
    }

    const datos = await response.json();

    return datos;
  } catch (error) {
    throw new Error("Error al obtener los datos de la API");
  }
}

async function login(inputUsername, inputPassword) {
  try {
    const datos = await fetchApi(users);

    const user = datos.find(
      (user) =>
        user.login.username === inputUsername &&
        user.login.password === inputPassword
    );

    if (user) {
      return Promise.resolve(user);
    } else {
      // Credenciales incorrectas, rechaza la promesa
      throw new Error("Usuario o contraseña incorrectos.");
    }
  } catch (error) {
    return Promise.reject(error.message);
  }
}

function hideLoginForm() {
  form.style.display = "none";
}

function displayError(message) {
  form.textContent = message;

  setTimeout(() => {
    form.textContent = "";
  }, 2000);
}

async function handleLogin(e) {
  e.preventDefault();
  // Obtener el valor del usuario y la contraseña del formulario
  const inputUsername = username.value;
  const inputPassword = password.value;

  try {
    // Intentar el inicio de sesión utilizando la función login
    const result = await login(inputUsername, inputPassword);
    hideLoginForm();
    createCard(result);
    console.log(result);
  } catch (error) {
    // Capturar errores y mostrar el mensaje de error
    console.log(error);
    displayError("Error de credenciales");
  }
}

function createCard(data) {
  const card = document.createElement("div");
  card.id = "userCard";

  const pName = document.createElement("p");
  pName.classList.add("name");
  pName.textContent = `Nombre y apellido: ${data.firstname} ${data.lastname}`;

  const pEmail = document.createElement("p");
  pEmail.classList.add("email");
  pEmail.textContent = `El email es : ${data.email}`;

  card.appendChild(pName);
  card.appendChild(pEmail);

  document.body.appendChild(card); 
}

btnSend.addEventListener("click", handleLogin);
