import "./App.css";
import Container from "./components/Container/Container";
import Header from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";

const App = () => {
  return (
    <div className="app">
      <Sidebar />
      <Container>
        <Header />
      </Container>
    </div>
  );
};

export default App;
