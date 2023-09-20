import "./App.css";
import { Header } from "./components/Header";
import { Main } from "./components/Main.jsx";

function App() {
  return (
    <div className="lg:px-14 px-5 py-5 lg:py-12">
      <Header></Header>
      <Main></Main>
    </div>
  );
}

export default App;
