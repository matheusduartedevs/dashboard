import Chart from "react-apexcharts";
import "./Chart.css";

const SalesChart = () => {
  const data = {
    Despesas: 10000,
    Vendas: 25000,
  };

  const options = {
    labels: Object.keys(data),
    colors: ["#FF4560", "008FFB"],
    legend: {
      position: "bottom",
    },
  };

  const series = Object.values(data);

  return (
    <div className="chart sales-chart">
      <h3 className="chart-title">Vendas e Despesas</h3>
      <Chart options={options} series={series} type="pie" height={350} />
    </div>
  );
};

export default SalesChart;
