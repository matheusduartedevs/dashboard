import ReactApexChart from "react-apexcharts";
import "./Chart.css";

const ActivityChart = () => {
  const data = [
    { reais: 200, sales: 400 },
    { reais: 220, sales: 440 },
    { reais: 240, sales: 480 },
    { reais: 260, sales: 520 },
    { reais: 280, sales: 560 },
    { reais: 300, sales: 600 },
    { reais: 320, sales: 640 },
    { reais: 340, sales: 680 },
    { reais: 360, sales: 720 },
    { reais: 380, sales: 760 },
    { reais: 400, sales: 800 },
    { reais: 420, sales: 840 },
    { reais: 440, sales: 880 },
    { reais: 460, sales: 920 },
    { reais: 480, sales: 960 },
    { reais: 500, sales: 1000 },
  ];

  const options = {
    chart: {
      height: 350,
      type: "line",
    },
    dataLabels: {
      enabled: false,
    },
    xaxis: {
      categories: data.map((item) => `R$${item.reais}`),
      title: {
        text: "Reais",
      },
    },
    yaxis: {
      title: {
        text: "Vendas",
      },
    },
  };

  const series = [
    {
      name: "Vendas",
      data: data.map((item) => item.sales),
    },
  ];

  return (
    <div className="chart activity-chart">
      <h3 className="chart-title">Dados</h3>
      <ReactApexChart
        options={options}
        series={series}
        type="area"
        height={350}
      />
    </div>
  );
};

export default ActivityChart;
