import { useState, useEffect } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Message from "./components/Message";
import RandomCocktail from "./components/RandomCocktail";
import Cocktails from "./components/Cocktails";

function App() {
  const [msg, setMsg] = useState("This is a message");
  const [subMsg, setSubMsg] = useState("This is a message");

  return (
    <div className="grid">
      {/* <Message msg={msg} subMsg={subMsg} />
      <button
        onClick={() => {
          setMsg("Message updated");
        }}
      >
        wijzig
      </button> */}
      <Cocktails />
      <RandomCocktail />
    </div>
  );
}

export default App;
