import Nav from "./Components/Nav";
import HeaderBar from "./Components/HeaderBar";
import "./App.scss";
import RouteHandler from "./Components/RouteHandling/RouteHandler";

function App() {
  return (
    <>
      <div className="app">
        <HeaderBar />
        <RouteHandler />
        <Nav />
      </div>
    </>
  );
}

export default App;
