import React from "react";
import { useSelector } from "react-redux";

const MyComponent = () => {
  const count = useSelector((state) => state.counter.value);
  return <h1>MyComponent: {count}</h1>;
};

export default MyComponent;
