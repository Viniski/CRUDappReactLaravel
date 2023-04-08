import { Route, Routes, NavLink } from "react-router-dom";
import { HomePage } from "./pages/HomePage";
import { ListPage } from "./pages/ListPage";
import { ChartPage } from "./pages/ChartPage";
import { EditPage } from "./pages/EditPage";

function App() {
  return (
    <div className="App">
      <nav>
        <div>
          <li>
            <NavLink to={"/"}>Strona główna</NavLink>
          </li>
          <li>
            <NavLink to={"/lista"}>Lista</NavLink>
          </li>
          <li>
            <NavLink to={"/wykres"}>Wykres</NavLink>
          </li>
        </div>
      </nav>
      <div>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/lista" element={<ListPage />} />
          <Route path="/wykres" element={<ChartPage />} />
          <Route path="/edit/:id" element={<EditPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
