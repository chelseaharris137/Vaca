import React from "react";
import ReactDom from "react-dom";
import styled, { keyframes } from "styled-components";

const BackgroundBox = styled.div`
  background-color: #fdedc4;
  color: #000;
  height: 50vh;
  width: 40%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 5rem auto;
  position: relative;
  border-radius: 5px;
`;
const Form = () => {
  return <BackgroundBox>hello world!!</BackgroundBox>;
};

export default Form;
