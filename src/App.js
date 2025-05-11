import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Kanghyun from "./assignments/kanghyun";
import Example from "./assignments/example";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={<div>6주차 과제-김강현</div>}
        />
        <Route path="/example" element={<Example />} />
        <Route path="/kanghyun" element={<Kanghyun />} /> 
      </Routes>
    </Router>
  );
}

export default App;
