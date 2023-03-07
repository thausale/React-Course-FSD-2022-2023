import { useState, useEffect } from "react";
import axios from "axios";
import reactLogo from "./assets/react.svg";
import "./App.css";
import Form from "./components/Form";
import Grid from "./components/Grid";

function App() {
  const [amount, setAmount] = useState(5);
  const [userAmount, setUserAmount] = useState(0);
  const [users, setUsers] = useState([]);
  const getRandomUsers = async (nr) => {
    const {
      data: { results },
    } = await axios(`https://randomuser.me/api/?results=7`);
    setUsers(results);
    console.log(users);
  };
  //Empty array = function only runs at initial render
  //No array = function  runs at initial render and updates
  //Components in array, initial render and updates of those components
  useEffect(() => {
    if (userAmount) {
      getRandomUsers();
    }
  }, [userAmount]);

  return (
    <div className="App">
      <h1>Randomusergrid</h1>
      <p>How many users would you like to generate ?</p>
      <Form
        amount={amount}
        setAmount={setAmount}
        setUserAmount={setUserAmount}
      />
      <h2>Currently requesting {userAmount} random users.</h2>
      <Grid users={users} />
    </div>
  );
}

//Empty array = function only runs at initial render
//No array = function  runs at initial render and updates
//Components in array, initial render and updates of those components
useEffect(() => {}, []);

export default App;
