import { BrowserRouter, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import HomeIndex from "./pages/home/HomeIndex";

function App() {
  return (
    <div className="text-center">
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<HomeIndex />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
