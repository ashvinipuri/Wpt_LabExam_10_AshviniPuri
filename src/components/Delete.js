import React, { useRef } from "react";
import axios from "axios";

function Delete() {
  const deleteIdRef = useRef();

  const f1 = () => {
    const deleteId = deleteIdRef.current.value;

    if (!deleteId) {
      alert("Please enter an ID to delete.");
      return;
    }

    axios
      .delete(`http://localhost:9000/deliverys/${deleteId}`)
      .then((response) => {
        alert(response.data);
      })
      .catch((error) => {
        console.error("There was an error deleting the order:", error);
        alert("Failed to delete order.");
      });
  };

  return (
    <div className="container">
      <h1>Delete </h1>
      <input
        type="text"
        ref={deleteIdRef}
        placeholder="Enter Order ID to delete"
      />
      <br />
      <button onClick={f1}>Delete Order</button>
    </div>
  );
}

export default Delete;
