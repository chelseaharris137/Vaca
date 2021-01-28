import React from "react";
import ReactDom from "react-dom";

const App = () => {
  const env = process.env.NODE_ENV;
  return (
    <div>
      <h1>{env}</h1>
      <p>Hello world!</p>
    </div>
  );
};

ReactDom.render(<App />, document.getElementById("root"));
