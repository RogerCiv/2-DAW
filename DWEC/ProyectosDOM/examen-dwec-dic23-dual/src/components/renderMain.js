/**
 * 
 * @param {HTMLElement} element 
 */
export function renderMain(element){
    
    element.innerHTML = `
    
    <div class="fondo">
    <header class="cabecera">
    <button class="btn btn-warning" id="btnLogout"> Logout </button>
      <h1 class="titulo">GESTIÓN HOTELERA DWEC</h1>
    </header>
    <section class="contact">
    <figure class="contact__picture">
      <img src="public/hotel2.png" alt="Hotel" class="contact__img" />
    </figure>
    
    <form class="contact__form">
      <h2 class="contact__title">CheckIN</h2>
      <input
      type="text"
      placeholder="Nombre cliente:"
      class="contact__input"
      />
      <input
      type="email"
      placeholder="Email cliente:"
      class="contact__input"
      />
      <input
      type="number"
      placeholder="Número de personas:"
      min="1"
      max="4"
      class="contact__input"
      />
      <input
      type="date"
      placeholder="Fecha de entrada:"
      class="contact__input"
      />
      <input
        type="date"
        placeholder="Fecha de salida:"
        class="contact__input"
        />
        
        <button type="submit" class="contact__cta">Check-In</button>
      </form>

    <section class="tabla">
      <h2 class="contact__title">Info Reservas</h2>
      <table id="table__checkin">
        <tr>
          <th>Id</th>
          <th>Cliente</th>
          <th>Habitación</th>
          <th>F. entrada</th>
          <th>F. salida</th>
          <th>Precio</th>
          <th>Editar</th>
          <th>Checkout</th>
        </tr>
       
        <tr>
          <td>101</td>
          <td>John Doe</td>
          <td>2</td>
          <td>2023-12-15</td>
          <td>2023-12-20</td>
          <td>$500</td>
          <td><button class="editar">Editar</button></td>
          <td><button class="check-out">Check-Out</button></td>
        </tr>
      </table>
    </section>
  </section>
</div>
<footer class="pie">
  <h3 class="title__pie">&copy; Isaías Fernández Lozano</h3>
</footer>
    `
}