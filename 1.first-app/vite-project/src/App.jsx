import Message from "./Message";
import Rectangle from "./Rectangle";
import Count from "./Count";
function App() {
  return (
    <>
      {/* <h1>Hello World</h1>
      <p>Dit is een paragraaf</p>

      <Message
        bericht="dit is een bericht"
        getal={11}
        status={true}
        vrienden={["jos", "jef"]}
        persoon={{ id: 55, voornaam: "piet" }}
      />
      <Message bericht="Nog een bericht" />
      <Message bericht="deze message heeft children">
        <p>Dit is kind 1</p>
        <strong>Dit is kind 2</strong>
        <h5>Dit is kind 3</h5>
      </Message> */}
      <Rectangle x={100} y={100} w={200} h={100} />
      <Rectangle x={300} y={400} w={100} h={300} />

      <Count />
      <Count />
      <Count />
      <Count />
    </>
  );
}

export default App;
