import React, { useState } from "react"; //useState = hooks

export default function TextForm(props) {
  function upClick() {
    console.log("Upper case was clicked" + a);
    let upperConvert = a.toUpperCase();
    b(upperConvert);
  }
  function convert(event) {
    console.log("Upper case was convert");
    b(event.target.value);
  }

  const [a, b] = useState("Please write :"); //Hooks concept  , text = any variable , setText = updateVariable
  //   text = "hii , I am Developer"; // Wrong way to update the variable -- show error
  //setText = "Hii, now I am learning React.js"; // Correct way to update the variable
  return (
    <>
      <div>
        <h3>{props.heading}</h3>
        <div className="mb-3">
          <textarea
            className="form-control"
            value={a}
            id="myBox"
            rows="8"
            onChange={convert}
          ></textarea>
        </div>
        <button type="" className="btn btn-primary" onClick={upClick}>
          Convert to Uppercase
        </button>
      </div>

      <div className="container  my-5">
        <h3>Your text summary</h3>
        <p>
          {a.split(" ").length} Word and {a.length} character
        </p>
      </div>
    </>
  );
}
