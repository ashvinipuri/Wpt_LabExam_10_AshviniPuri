import React, { useRef } from "react";
import axios from "axios";

function Add() {
  const x1 = useRef();
  const x2 = useRef();
  const x3 = useRef();
  const x4 = useRef();


  const f1 = () => {
    const data = {
      id: x1.current.value,
      dDate: x2.current.value,
      dAddress: x3.current.value,
      dFee: x4.current.value,
    };

    if (
      !data.orderid ||
      !data.dDate ||
      !data.dAddress ||
      !data.dFee
      
    ) {
      alert("Please fill in all fields.");
      return;
    }

    axios
      .post("http://localhost:9000/addData", data)
      .then((response) => {
        console.log(response.data);
        alert("order added successfully!");
      })
      .catch((error) => {
        console.error("There was an error adding the order:", error);
        alert("Failed to add order.");
      });
  };

  return (
    <div className="container">
      <h1>Add Delivery</h1>
      <input type="text" ref={x1} placeholder="ID" />
      <br />
      <input type="text" ref={x2} placeholder="Delivery Date" />
      <br />
      <input type="text" ref={x3} placeholder="Delivery Address" />
      <br />
      <input type="text" ref={x4} placeholder="Delivery Fee" />
      <br />

      <button onClick={f1}>Add</button>
    </div>
  );
}

export default Add;
