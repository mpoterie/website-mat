import "./App.scss";
import { Outlet } from "react-router-dom";
import Header from "./Shared/Header";

function App() {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
}

export default App;
