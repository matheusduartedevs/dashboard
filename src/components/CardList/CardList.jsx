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
      backgroundColor: "#A7BCEB",
    },
    expenses: {
      title: "Total de Gastos",
      amount: "R$10,250",
      growth: "-13%",
      icon: <IoCash />,
      backgroundColor: "#E3D3F5",
    },
    users: {
      title: "Total de Usuários",
      amount: "5,143",
      growth: "+4%",
      icon: <IoPeople />,
      backgroundColor: "#A7BCEB",
    },
    newUsers: {
      title: "Novos Usuários",
      amount: "200",
      growth: "+60%",
      icon: <IoPeople />,
      backgroundColor: "#E3D3F5",
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
