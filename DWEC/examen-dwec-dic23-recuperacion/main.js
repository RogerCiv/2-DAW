
import { saveAirbnb } from "./src/helper/saveAirbnb";
import { getRoomsApi } from "./src/util/getRoomsApi";


const url = "http://localhost:4000"

const listadoProductos = document.querySelector(".listado-productos")
const payCard = document.querySelector(".pay-card")
getRoomsApi(url,listadoProductos)

saveAirbnb(payCard)