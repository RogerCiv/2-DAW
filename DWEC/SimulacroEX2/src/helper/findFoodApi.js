import { renderCardFoods } from "../components/renderCardFoods/renderCardFoods";

export async function findFoodApi(container, query) {
    try {
      const response = await fetch(
        "http://localhost:4000/categories?strCategory=" + query
      );
      if (!response.ok) {
        throw new Error("No se pudo obtener los datos");
      }
  
      const datos = await response.json();
      
      console.log("Datos desde la API:", datos);
      
      container.innerHTML = '';
      
 
      datos.forEach(food => {
        renderCardFoods(container, food);
      });
      
    } catch (error) {
      console.error("Error:", error);
    }
  }
  

  
  