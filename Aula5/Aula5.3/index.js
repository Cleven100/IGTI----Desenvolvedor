let bar = new Chart(document.getElementById("barras"), {
  type: "bar",
  data: {
    labels: ["Palio", "uno", "Gol", "Corsa", "Up", "Onix"],
    datasets: [
      {
        label: "Realizado",
        data: [10, 35, 24, 11, 12, 19],
        backgroundColor: "#0F0F0F",
      },
      {
        label: "Planejado",
        data: [20, 50, 200, 110, 152, 109],
        backgroundColor: "blue",
      },
    ]
  },
  options: {
    reponsive: true,
    plugins: {
      legend: {
        position: "top",
      },
      title: {
        display: true,
        text: "Vendas de veiculos",
      },
    },
  },
});
