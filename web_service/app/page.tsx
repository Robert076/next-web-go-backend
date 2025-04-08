"use client";
import React, { useEffect, useState } from "react";

const HomePage = () => {
  const [data, setData] = useState<string>("");

  const fetchData = async () => {
    const response = await fetch("http://localhost:8080/api");
    const result = await response.json();
    setData(result);
  };

  return (
    <div>
      <button onClick={fetchData}>Click me</button>
      {data}
    </div>
  );
};

export default HomePage;
