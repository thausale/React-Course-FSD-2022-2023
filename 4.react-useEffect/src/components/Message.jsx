import React, { useEffect } from "react";

const Message = ({ msg, subMsg }) => {
  //Deze useEffect runt elke keer dat de component Mount(opstart) & update
  useEffect(() => {
    console.log("dit wordt uitgevoerd bij eerste render + update renders");
  });

  useEffect(() => {
    console.log("enkel bij opstart");
  }, []);

  //Empty array = function only runs at initial render
  //No array = function  runs at initial render and updates
  useEffect(() => {}, [msg, subMsg]);

  return <h1>{msg}</h1>;
};

export default Message;
