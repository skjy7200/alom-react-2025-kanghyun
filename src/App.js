import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Kanghyun from "./assignments/kanghyun";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<div>기본 페이지. /kanghyun 으로 이동.</div>} />
        <Route path="/kanghyun" element={<Kanghyun />} />
      </Routes>
    </Router>
  );
}

export default App;
