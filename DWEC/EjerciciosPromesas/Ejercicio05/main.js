import './style.css'

const username = document.getElementById('username')
const password = document.getElementById('password')
const btnSend = document.getElementById('btnSend')
const users = "https://jsonplaceholder.org/users"



// ...

async function fetchApi(url) {
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error("No se pudo obtener los datos");
    }

    const datos = await response.json();

    // Devuelve los datos obtenidos
    return datos;
  } catch (error) {
    // Maneja el error y rechaza la promesa
    throw new Error("Error al obtener los datos de la API");
  }
}

async function login(inputUsername, inputPassword) {
  try {
    // Obtiene los datos de la API
    const datos = await fetchApi(users);

    // Accede a los usernames y passwords
    const usernames = datos.map(user => user.login.username);
    const passwords = datos.map(user => user.login.password);

    // Comprueba si el usuario y la contraseña coinciden con los de la API
    const userIndex = usernames.indexOf(inputUsername);

    if (userIndex !== -1 && passwords[userIndex] === inputPassword) {
      // Credenciales correctas, resuelve la promesa
      return Promise.resolve("¡Inicio de sesión exitoso!");
    } else {
      // Credenciales incorrectas, rechaza la promesa
      throw new Error("Usuario o contraseña incorrectos.");
    }
  } catch (error) {
    // Maneja errores, rechaza la promesa con el mensaje de error
    return Promise.reject(error.message);
  }
}

btnSend.addEventListener('click', async (e) => {
  e.preventDefault();

  // Obtener el valor del usuario y la contraseña del formulario
  const inputUsername = username.value;
  const inputPassword = password.value;

  try {
    // Intentar el inicio de sesión utilizando la función simulateLogin
    const result = await login(inputUsername, inputPassword);
    console.log(result);
  } catch (error) {
    // Capturar errores y mostrar el mensaje de error
    console.log(error);
  }
});
