import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

import { Header } from "./components/Header";
import Character from "./pages/Character";
import Home from "./pages/Home";

const MainRouter = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/frame" element={<Home />} />
        <Route path="/frame/character" element={<Character />} />
      </Routes>
    </Router>
  );
};

export default MainRouter;
