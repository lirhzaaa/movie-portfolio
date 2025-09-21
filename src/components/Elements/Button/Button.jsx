import React from "react";
import WithCalculate from "../../WithCalculate";

const Button = (props) => {
  console.log({ props });
  return (
    <section
      style={{
        textAlign: "center",
        marginTop: "100px",
      }}
    >
      <h1>Hasil : {props.nilai}</h1>
      <div
        style={{
          display: "flex",
          gap: "100px",
          justifyContent: "center",
          textAlign: "center",
        }}
      >
        <div
          style={{
            marginBottom: "50px",
          }}
        >
          <h2>X + {props.counter}</h2>
          <button onClick={props.tambahClick}>Click Me For +</button>
        </div>
        <div>
          <h2>X - {props.counter}</h2>
          <button onClick={props.kurangClick}>Click Me For -</button>
        </div>
        <div>
          <h2>X * {props.counter}</h2>
          <button onClick={props.kaliClick}>Click Me For *</button>
        </div>
        <div>
          <h2>X / {props.counter}</h2>
          <button onClick={props.bagiClick}>Click Me For /</button>
        </div>
        <button
          onClick={props.resetClick}
          style={{
            height: "30px",
            alignSelf: "center",
            backgroundColor: "red",
            color: "white",
            borderRadius: "5px",
            width: "100px",
            fontWeight: "bold",
            fontSize: "15px",
            border: "none",
          }}
        >
          Reset
        </button>
      </div>
    </section>
  );
};

export default WithCalculate(Button);
