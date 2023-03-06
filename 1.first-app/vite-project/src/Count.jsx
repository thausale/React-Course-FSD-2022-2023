import { useState } from "react";

function Count() {
  const [nr, setNr] = useState(0);

  const telOp = () => {
    setNr(nr + 1);
  };

  return <button onClick={telOp}>{nr}</button>;
}

export default Count;
