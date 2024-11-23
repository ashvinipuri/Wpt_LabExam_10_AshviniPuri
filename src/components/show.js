import React, { useEffect, useState } from "react";

function Show() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:9000/getdata")
      .then((res) => res.json())
      .then((value) => {
        setData(value); // Store the fetched data in local state
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  return (
    <div className="container">
      <h1>Show Deliverys</h1>
      <table className="table">
        <thead>
          <tr>
            <th scope="col">Id</th>
            <th scope="col">Delivery Date</th>
            <th scope="col">Delivery Address</th>
            <th scope="col">Fee</th>
            
          </tr>
        </thead>
        <tbody>
          {data.map((record) => (
            <tr>
              <td>{record.id}</td>
              <td>{record.dDate}</td>
              <td>{record.dAdd}</td>
              <td>{record.dFee}</td>
              
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Show;
