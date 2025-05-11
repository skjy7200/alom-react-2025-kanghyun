import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Kanghyun from "./assignments/kanghyun";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<div>6주차 과제 - 경로: /kanghyun</div>}
        />
        <Route path="/kanghyun" element={<Kanghyun />} />
      </Routes>
    </Router>
  );
}

export default App;
