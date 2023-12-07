import { renderCardDigimon } from "../components/renderCardDigimon/renderCardDigimon";

export async function getDigimons(url,container) {
  try {
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);

   data.map((digi,index) => {
    renderCardDigimon(container,digi,index)
   })
    return data;
  } catch (err) {
    console.log("Error en el acceso a la api", err.message);
  }
}
