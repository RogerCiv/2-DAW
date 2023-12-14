/**
 * 
 * @param {HTMLElement} element 
 */
export function renderLogin(element){

    element.innerHTML = `
    <div class="d-flex justify-content-center align-items-center vh-100">
    <form id="idForm" class="form-login bg-danger p-4 ">
  <div class="mb-3">
    <input type="text" class="form-control" id="inputUsername" placeholder="Username...">
  </div>
  <div class="mb-3">
    <input type="password" class="form-control" id="inputPassword" placeholder="Password...">
  </div>
  <button type="submit" class="btn btn-warning" id="btnValidar">Validar</button>
</form>
</div>
    `
}