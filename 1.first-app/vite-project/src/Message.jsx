function Message(props) {
  console.log(props);
  const { bericht, vrienden, children } = props; //Kan je direct doen in de functie
  return (
    <>
      <h4>{bericht}</h4>
      {vrienden && (
        <ul>
          {vrienden.map((vriend, i) => (
            <li key={i}>{vriend}</li>
          ))}
        </ul>
      )}
      {children && <div className="grey">{children}</div>} <hr />
    </>
  );
}

export default Message;
