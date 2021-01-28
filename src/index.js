import React from "react";
import ReactDom from "react-dom";
import Form from "./components/Form";
import "./styles/App.scss";

const App = () => {
  const env = process.env.NODE_ENV;
  return (
    <div>
      <Form />
    </div>
  );
};

ReactDom.render(<App />, document.getElementById("root"));
