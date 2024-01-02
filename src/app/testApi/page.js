"use client";
import { useState, useEffect } from "react";
import axios from "axios";

const page = () => {
  const [data, setdata] = useState(null);
  const [loading, setloading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://dumbstockapi.com/stock?exchanges=NYSE"
        );
        setdata(response.data);
        setloading(false);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();

    return () => {};
  });

  return (
    <div>
      {loading ? (
        <p>Chargement...</p>
      ) : (
        <ul>
          {data && data.map((item) => <li key={item.ticker}>{item.name}</li>)}
        </ul>
      )}
    </div>
  );
};

export default page;
