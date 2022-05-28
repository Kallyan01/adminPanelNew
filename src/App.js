import { useContext } from "react";
import { GlobalContext } from "./globalapi/GlobalProvider";

import Mainlayout from "./layout/mainlayout";
import "./App.css";
import Route from "./route/MainRoute";

function App() {
  const { nav } = useContext(GlobalContext);
  const [navOpen, setNavOpen] = nav;
  return (
    <div className="App">
      <Route/>
    </div>
  );
}

export default App;
