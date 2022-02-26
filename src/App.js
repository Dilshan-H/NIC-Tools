import "./App.css";
import Home from "./pages/Home";
import NICInfo from "./pages/NICInfo";
import NICGen from "./pages/NICGen";

const App = () => {
  return (
    <div className="Content">
      <Home />
      <NICInfo />
      <NICGen />
    </div>
  );
};

export default App;
