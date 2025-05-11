import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Kanghyun from "./assignments/kanghyun";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<div>6주차 과제 - 김강현</div>} />
        <Route path="/kanghyun" element={<kanghyun />} />  
      </Routes>
    </Router>
  );
}

export default App;
