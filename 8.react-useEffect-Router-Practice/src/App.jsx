import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import axios from "axios";
import Donaldgrid from "./components/Donaldgrid";

function App() {
  const [donalds, setDonalds] = useState({});
  //Empty array = function only runs at initial render
  //No array = function  runs at initial render and updates
  //Components in array, initial render and updates of those components
  useEffect(() => {
    (async () => {
      const { data } = await axios(
        "https://api.disneyapi.dev/character?name=mouse"
      );
      setDonalds(data);
    })();
  }, []);
  // console.log(donalds);

  return (
    <div className="App">
      <Donaldgrid donalds={donalds} />
    </div>
  );
}

export default App;
