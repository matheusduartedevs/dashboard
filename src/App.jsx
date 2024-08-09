import "./App.css";
import CardList from "./components/CardList/CardList";
import ActivityChart from "./components/Charts/ActivityChart";
import SalesChart from "./components/Charts/SalesChart";
import ChartContainer from "./components/Container/ChartContainer";
import Container from "./components/Container/Container";
import Content from "./components/Container/Content";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";

const App = () => {
  return (
    <div className="app">
      <Sidebar />
      <Container>
        <Header />
        <Content>
          <CardList />
          <ChartContainer>
            <ActivityChart />
            <SalesChart />
          </ChartContainer>
        </Content>
      </Container>
    </div>
  );
};

export default App;
