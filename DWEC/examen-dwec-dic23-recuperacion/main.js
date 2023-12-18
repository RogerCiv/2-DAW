import { renderCardAirbnb } from "./src/components/renderCardAirbnb";
import { getRoomsApi } from "./src/util/getRoomsApi";


const url = "http://localhost:4000"

const listadoProductos = document.querySelector(".listado-productos")

getRoomsApi(url,listadoProductos)