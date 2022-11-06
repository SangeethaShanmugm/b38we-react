import { useState } from "react";
import { ColorBox } from "./ColorBox";

// Custom components
// 1. First letter must be captial
// 2. It returns JSX elements
// Components - declaration
export function AddColor() {
  // const color="blue";
  const [color, setColor] = useState("skyblue");
  //  const colorList = ["orange", "red","pink", "plum"]
  const [colorList, setColorList] = useState(["orange", "red", "pink"]);
  const styles = {
    fontSize: "25px",
    backgroundColor: color
  };
  return (
    <div>
      <div className='add-color'>
        <input
          onChange={(event) => setColor(event.target.value)}
          style={styles} type="text" value={color} />
        {/* // copy the colorList and add newColor to it */}
        <button onClick={() => setColorList([...colorList, color])}>Add Color</button>
      </div>
      {colorList.map((clr) => (
        <ColorBox color={clr} />
      ))}


    </div>
  );
}
