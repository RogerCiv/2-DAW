import * as echarts from "echarts";

export default function crearGrafico(nameContainer, { tasks }) {
  const container = document.querySelector(nameContainer);
  //dimensiones

  const completadas = tasks.filter((task) => task.isCompleted).length;
  const noCompletadas = tasks.length - completadas;

  const width = container.clientWidth;
  const height = container.clientHeight;

  const datos = {
    categories: [],
    values: [],
  };
  /*
  // datos del grafico
  const datos = {
    categories: ["Completadas", "No Completadas"],
    values: [45, 23, 80],
  };

  //opciones
  const options = {
    title: {
      text: "Gráfico Pluviométrico Barras",
    },
    xAxis: {
      data: datos.categories,
    },
    yAxis: {},
    series: [
      {
        data: datos.values,
        type: "bar",
      },
    ],
  };
  */
  const option = {
    tooltip: {
      trigger: "item",
    },
    legend: {
      top: "5%",
      left: "center",
    },
    series: [
      {
        name: "Access From",
        type: "pie",
        radius: ["40%", "70%"],
        avoidLabelOverlap: false,
        label: {
          show: false,
          position: "center",
        },
        emphasis: {
          label: {
            show: true,
            fontSize: 40,
            fontWeight: "bold",
          },
        },
        labelLine: {
          show: false,
        },
        data: [
          { value: completadas, name: "Completadas" },
          { value: noCompletadas, name: "No Completadas" },
        ],
      },
    ],
  };
  let miGrafico = echarts.init(container, "dark");
  miGrafico.resize({ width, height });
  miGrafico.setOption(option);

  return miGrafico;
}
