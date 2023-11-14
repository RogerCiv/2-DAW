import crearGrafico from "../components/chart";
export function actualizarGraficoSiVisible(app) {
  const containerChart = document.querySelector(".grafico-container");
  if (containerChart.style.display === "block") {
      crearGrafico(".grafico-container", app);
  }
}