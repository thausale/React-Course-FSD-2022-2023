import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import FullName from "./components/FullName";

function App() {
  const [fn, setFn] = useState("testing");
  const [ln, setLn] = useState("testln");
  const changeFn = (str) => {
    setFn(str);
  };

  return (
    <>
      <h1>hoi</h1>
      <FullName fn={fn} ln={ln} changeFn={changeFn} />
    </>
  );
}

export default App;
