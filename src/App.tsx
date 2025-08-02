import Nav from "./Components/Nav";
import HeaderBar from "./Components/HeaderBar";
import { Route, Routes } from "react-router-dom";
import Homepage from "./Components/Homepage";
import UserPage from "./Components/UserPage";
import Outfits from "./Components/Outfits";
import NoPage from "./Components/NoPage";
import "./App.scss";

function App() {
  return (
    <>
      <div className="app">
        <HeaderBar />
        <div className="contentContainer">
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/outfits" element={<Outfits />} />
            <Route path="/user" element={<UserPage />} />
            <Route path="*" element={<NoPage />} />
          </Routes>
        </div>
        <Nav />
      </div>
    </>
  );
}

export default App;
