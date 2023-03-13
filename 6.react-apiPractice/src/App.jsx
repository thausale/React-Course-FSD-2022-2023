import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Form from "./components/Form";
import Select from "./components/Select";
import Grid from "./components/Grid";
import axios from "axios";

function App() {
  //VARIABLES
  const [breeds, setBreeds] = useState([]);
  const [searchBreed, setSearchBreed] = useState("");

  //FUNCTIONS
  const getBreeds = async () => {
    const {
      data: { message },
    } = await axios("https://dog.ceo/api/breeds/list/all");
    setBreeds(message);
    console.log(message);
  };

  //EFFECTS
  useEffect(() => {
    getBreeds();
  }, []);

  //RETURN
  return (
    <div className="form">
      <h2>Select breed</h2>
      <Select
        breeds={breeds}
        searchBreed={searchBreed}
        setSearchBreed={setSearchBreed}
      />
      <Grid searchBreed={searchBreed} />
    </div>
  );
}

export default App;
