import "./App.css";
import { BrowserRouter, Routes, Route, HashRouter } from "react-router-dom";
import PageIndex from "./components/PageIndex/PageIndex";
import PageProduct from "./components/PageProduct/PageProduct";
import PageNotFound from "./components/PageNotFound/PageNotFound";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<PageIndex />} />
        <Route path="/product" element={<PageProduct />} />
        <Route path="*" element={<PageNotFound />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
