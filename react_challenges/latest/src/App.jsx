import { useState } from "react";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Title from "./components/Title";
import Timer from "./components/Timer";
import Challenge3 from "./components/CityInput";
import ProgressBar from "./components/ProgressBar";
import Input from "./components/Input";
import Button from "./components/Button";

function App() {
  const [value, setValue] = useState("");

  return (
    <div className="App">
      <Title>React is amazing</Title>
      <Timer />
      <Challenge3 />
      <ProgressBar />
      <Input
        value={value}
        setValue={setValue}
        placeholder="test"
        required={true}
      />
      <Input
        value={value}
        setValue={setValue}
        placeholder="test"
        required={true}
        disabled={true}
        className="test"
      />
      <Button>testing </Button>
      <Button outline="true" className="test" disabled={true}>
        Hello World
      </Button>
    </div>
  );
}

export default App;
