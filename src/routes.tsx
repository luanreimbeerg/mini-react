import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";

import Home from "./pages/Home";

const MainRouter = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/frame" element={<Home />} />
      </Routes>
    </Router>
  );
};

export default MainRouter;
