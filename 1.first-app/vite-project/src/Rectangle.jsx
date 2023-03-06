import randomColor from "randomcolor";

function Rectangle({ x, y, w, h }) {
  return (
    <div
      style={{
        position: "absolute",
        top: `${x}px`,
        left: `${y}px`,
        backgroundColor: randomColor(),
        width: `${w}px`,
        height: `${h}px`,
      }}
    ></div>
  );
}

export default Rectangle;
