import React, { useContext } from "react";
import { Appcontext } from "../App";
// this component will tell us the state of a key i.e its letter
// whether it is usable or not,color etc.
function Keys({ keyval, bigkey }) {
  const { otherKey, enterKey, deleteKey, usable=true} = useContext(Appcontext);
  function keyaction() {
    // i need to check the keyposition and then if the key is usable or not

    if (keyval == "Delete") {
      deleteKey();
    } else if (keyval == "Enter") {
      enterKey();
    } else {
      otherKey(keyval);
    }
  }

  return (
    <div
      className="key"
      id={bigkey ? "bigkeys" : usable ? "usable" : "notusable"}
      onClick={keyaction}
    >
      {keyval}
    </div>
  );
}

export default Keys;
