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


let linhas = new Chart(document.getElementById("linhas"), {
    type: 'line',
    data: {
        labels: ["Domingo", "segundo", "Terça", "quarta" ,"qinta", "sexta", "sabado"],
    
    datasets: [{
        data: [1554, 484548, 5548,664,77854,212,4485,111,747,2255,66554,444,225,1458,5442],
        label: "Casos confirmados",
        borderColor: "rgb(60,186,159,0.1"
        
    },
     {
         data: [143,109,208,100,125,5454,22],
         label: "numero",
         borderColor: "rgb(60,186,159,0.1"
     }

]
}   , options: {
        responsive: true,
        plugins: {
            legend: {
                display: true,
                position: 'left'
            }, 
            title: {
                display: true,
                text: "Curva de covid"
            },
            layout: {
                pdding: {
                    left: 100,
                    right: 100,
                    top: 50,
                    bottom: 10
                }
            }
        }
    }




})