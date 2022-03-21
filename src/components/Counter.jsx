import React from "react";

function Counter() {
  const [count, setCount] = React.useState(0);

  const [product, setProduct] = React.useState([]);
  console.log("line 4");

  React.useEffect(() => {
    // getData();
    console.log("insdie useeffect");
  }, [count]);

  // in dependency array we put here count, when count changes go into the useEffect

  // const getData = () => {
  //   fetch("https://fakestoreapi.com/products")
  //     .then((res) => res.json())
  //     .then((json) => setProduct(json));
  // };
  console.log("line no 18");
  return (
    <>
      <h1>Count is: {count} </h1>
      <button onClick={() => setCount(count + 1)}>+ (ADD)</button>
      {/* map through each item to get it render on the screen */}
      {/*/ {product.map((item) => (
      //   <div>{item.title}</div>
      // ))*/}
    </>
  );
}

export { Counter };
