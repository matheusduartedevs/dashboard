import "./App.css";
import CardList from "./components/CardList/CardList";
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
        </Content>
      </Container>
    </div>
  );
};

export default App;
