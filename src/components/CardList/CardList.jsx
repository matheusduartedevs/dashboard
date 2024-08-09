import { IoCart, IoCash, IoPeople } from "react-icons/io5";
import Card from "../Card/Card";
import './CardList.css'

const CardList = () => {
  const mockData = {
    sales: {
      title: "Total de Vendas",
      amount: "R$30,500",
      growth: "+39%",
      icon: <IoCart />,
      backgroundColor: "#FFE7E7",
    },
    expenses: {
      title: "Total de Gastos",
      amount: "R$10,250",
      growth: "-13%",
      icon: <IoCash />,
      backgroundColor: "#CAA6A6",
    },
    users: {
      title: "Total de Usuários",
      amount: "5,143",
      growth: "+4%",
      icon: <IoPeople />,
      backgroundColor: "#B47B84",
    },
    newUsers: {
      title: "Novos Usuários",
      amount: "200",
      growth: "+60%",
      icon: <IoPeople />,
      backgroundColor: "#944E63",
    },
  };

  return (
    <div className="card-list">
      {Object.keys(mockData).map((item, index) => (
        <Card key={index} data={mockData[item]} />
      ))}
    </div>
  );
};

export default CardList;
