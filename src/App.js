import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Kanghyun from "./assignments/kanghyun";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<div>6주차 과제 - 김강현 /kanghyun 에서 확인</div>} />
        <Route path="/kanghyun" element={<Kanghyun />} />
      </Routes>
    </Router>
  );
}

export default App;
