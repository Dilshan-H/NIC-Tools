import "./App.scss";
import "../node_modules/bulma/bulma.sass";
import Header from "./components/Header";
import Home from "./pages/Home";
import NICInfo from "./pages/NICInfo";
import Blocks from "./components/Blocks";
import NICGen from "./pages/NICGen";
import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
// import { AnimatePresence } from "framer-motion";
import AOS from "aos";
import "aos/dist/aos.css";

const App = () => {
  useEffect(() => {
    AOS.init({
      easing: "ease-in-out",
    });
  }, []);

  return (
    <div className="Content">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/nic-info" element={<NICInfo />} />
        <Route path="/nic-generate" element={<NICGen />} />
      </Routes>
      <Blocks />
    </div>
  );
};

export default App;
