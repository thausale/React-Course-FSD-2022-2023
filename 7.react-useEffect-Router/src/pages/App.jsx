import { useState, useEffect } from "react";
import "../App.css";
import "mvp.css";
import Form from "../components/Form";
import axios from "axios";
import CocktailGrid from "../components/CocktailGrid";
import { Link } from "react-router-dom";

function App() {
  const [input, setInput] = useState("");
  const [cocktails, setCocktails] = useState([]);
  const [searchValue, setSearchValue] = useState();

  //Functions
  const getCocktails = async () => {
    const url = `http://www.thecocktaildb.com/api/json/v1/1/filter.php?i=${searchValue}`;
    const testUrl = `https://api.disneyapi.dev/character?name=${searchValue}`;
    console.log(testUrl);
    const {
      data: { data },
    } = await axios(testUrl);
    // console.log(data);
    return data;
  };

  useEffect(() => {
    if (searchValue) {
      (async () => {
        const data = await getCocktails(searchValue);
        setCocktails(data);
      })();
    }
  }, [searchValue]);

  return (
    <main className="App">
      <Link to="/test">Go to testpage</Link>
      <h1>Cocktail App</h1>
      <h2>Find your favorite cocktails</h2>
      <Form setSearchValue={setSearchValue} getCocktails={getCocktails} />
      {searchValue && <h3>you searched for {searchValue}</h3>}

      <CocktailGrid cocktails={cocktails} />
    </main>
  );
}

export default App;
