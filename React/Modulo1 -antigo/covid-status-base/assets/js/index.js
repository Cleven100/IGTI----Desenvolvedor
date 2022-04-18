const url = "https://api.covid19api.com/summary";

function getKPIs(response) {
  if (response?.data?.Countries?.length) {
    const globalInformation = response.data.Global;

    const totalConfirmedId = document.getElementById("confirmed");
    const totalDeathsId = document.getElementById("death");
    const totalRecoveredId = document.getElementById("recovered");
    const consultationDateId = document.getElementById("date");

    const timeDate = new Date(globalInformation.Date).toLocaleTimeString();

    const dateConsultation = new Date(
      globalInformation.Date
    ).toLocaleDateString();

    const dateFormat = `Data de atualização: ${dateConsultation} ${timeDate}`;

    totalConfirmedId.innerHTML = globalInformation.TotalConfirmed;
    totalDeathsId.innerHTML = globalInformation.TotalDeaths;
    totalRecoveredId.innerHTML = globalInformation.TotalRecovered;
    consultationDateId.innerHTML = dateFormat;
  }
}

function graphicPizza(response) {
  if (response?.data?.Global) {
    const newConfirmed = response.data.Global.NewConfirmed ?? 0;
    const newDeaths = response.data.Global.NewDeaths ?? 0;
    const newRecovered = response.data.Global.NewRecovered ?? 0;

    function handleHover(evt, item, legend) {
      legend.chart.data.datasets[0].backgroundColor.forEach(
        (color, index, colors) => {
          colors[index] =
            index === item.index || color.length === 9 ? color : color + "4D";
        }
      );
      legend.chart.update();
    }

    function handleLeave(evt, item, legend) {
      legend.chart.data.datasets[0].backgroundColor.forEach(
        (color, index, colors) => {
          colors[index] = color.length === 9 ? color.slice(0, -2) : color;
        }
      );
      legend.chart.update();
    }

    const data = {
      labels: ["Confirmados", "Recuperados", "Mortes"],
      datasets: [
        {
          data: [newConfirmed, newRecovered, newDeaths],
          borderWidth: 1,
          backgroundColor: ["#F1C40F", "#1F618D", "#CB4335"],
        },
      ],
    };

    new Chart(document.getElementById("pizza"), {
      type: "pie",
      data: data,
      options: {
        responsive: true,
        plugins: {
          title: {
            display: true,
            text: "Distribuição de novos casos",
          },
          legend: {
            onHover: handleHover,
            onLeave: handleLeave,
          },
        },
      },
    });
  }
}

function graphicBar(response) {
  if (response?.data?.Countries?.length) {
    const countries = response.data.Countries;
    countries.sort((a, b) =>
      parseFloat(a.TotalDeaths) > parseFloat(b.TotalDeaths)
        ? -1
        : parseFloat(a.TotalDeaths) < parseFloat(b.TotalDeaths)
        ? 1
        : 0
    );
    const topCountries = countries.slice(0, 10);
    const labels = topCountries.map((country) => country.Country);
    const data = topCountries.map((country) => country.TotalDeaths);

    new Chart(document.getElementById("barras"), {
      type: "bar",
      data: {
        labels: labels,
        datasets: [
          {
            label: "Países",
            data: data,
            backgroundColor: "#F1C4",
          },
        ],
      },
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: "top",
          },
          title: {
            display: true,
            text: "Total de mortes por país - Top 10",
          },
        },
      },
    });
  }
}

async function getSummary() {
  const response = await axios(url);
  console.log("response", response);

  getKPIs(response);
  graphicPizza(response);
  graphicBar(response);
}

getSummary();