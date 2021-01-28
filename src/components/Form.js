import React, { useState } from "react";
import ReactDom from "react-dom";
import PlaneIcon from "../images/plane.png";
import styled, { keyframes } from "styled-components";

const move = keyframes`
0%{
    opacity:0;
}
95%{
    opacity:1;
}
`;
const BackgroundBox = styled.div`
  background-color: #fdedc4;
  height: 55vh;
  width: 55%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 5rem auto;
  position: relative;
  border-radius: 5px;

  .text1 {
    z-index: ${(props) => (props.clicked ? "-700" : "700")};
    transform: ${(props) =>
      props.clicked ? "translateX(0)" : "translateX(80%)"};
    transition: transform 1s ease-in-out;
    animation: ${(props) => (props.clicked ? move : "none")} 1.5s;
  }
  .text2 {
    z-index: ${(props) => (props.clicked ? "700" : "-700")};
    animation: ${(props) => (props.clicked ? "none" : move)} 1.5s;
    transform: ${(props) =>
      props.clicked ? "translateX(-140%)" : "translateX(50%)"};
    transition: transform 1s ease-in-out;
  }
  .signin {
    position: absolute;
    top: 0%;
    text-align: center;
    z-index: ${(props) => (props.clicked ? "-600" : "500")};
    transform: ${(props) => (props.clicked ? "none" : "translateX(-70%)")};
    transition: all 1s;
  }
  .signup {
    position: absolute;
    top: 0%;
    text-align: center;
    z-index: ${(props) => (props.clicked ? "500" : "-500")};
    transform: ${(props) => (props.clicked ? "translateX(50%)" : "none")};
    transition: all 1s;
  }
`;

const Box1 = styled.div`
  width: 50%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
  transform: ${(props) =>
    props.clicked ? "translateX(90%)" : "translateX(10%)"};
  transition: transform 1s;
  &::after,
  &::before {
    content: "";
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: transparent;
    z-index: -200;
  }
  &::before {
  }
  &::after {
  }
`;

const Box2 = styled.div`
  background-color: #fff;
  width: 50%;
  height: 100%;
  position: absolute;
  right: 0;
  top: 0;
  z-index: 600;
  transform: ${(props) =>
    props.clicked ? "translateX(-122%)" : "translateX(0%)"};
  transition: transform 1s;
  border-radius: ${(props) => (props.clicked ? "5px 0 0 5px" : "0 5px 5px 0")};
`;

const Form = styled.form`
  color: #1b1b1b;
  font-family: "Raleway", sans-serif;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  padding: 0 4rem;
  /* z-index: 100; */
`;

const Input = styled.input`
  background-color: #fff;
  font-family: "Raleway", sans-serif;
  border: none;
  border-bottom: 2px solid #053271;
  padding: 1rem 2rem;
  margin: 0.5rem 0;
  width: 100%;
  &:focus {
    outline: none;
    border: none;
    border: 2px solid #053271;
  }
`;

const Button = styled.button`
  border-radius: 3px;
  font-family: "Raleway", sans-serif;
  padding: 1rem 3.5rem;
  margin-top: 1rem;
  border: 1px solid black;
  background-color: black;
  color: #fff;
  text-transform: uppercase;
  cursor: pointer;
  letter-spacing: 1px;
  box-shadow: 0 7px #999;
  &:hover {
    background-color: #1b1b1b;
  }
  &:active {
    background-color: black;
    box-shadow: 0 5px #666;
    transform: translateY(4px);
  }
  &:focus {
    outline: none;
  }
`;

const Title = styled.h1`
  font-size: 2.8rem;
  margin-bottom: 2rem;
  font-family: "Raleway", sans-serif;
`;

const Link = styled.a`
  text-decoration: none;
  color: #333;
  font-size: 1.4rem;
  margin: 1rem 0;
  font-family: "Raleway", sans-serif;
`;

const ButtonAnimate = styled.button`
  position: absolute;
  z-index: 1000;
  height: 5rem;
  width: 5rem;
  top: 70%;
  border: none;
  cursor: pointer;
  right: ${(props) => (props.clicked ? "57%" : "47%")};
  transform: ${(props) => (props.clicked ? "rotate(360deg)" : "rotate(0)")};
  transition: all 1.5s;
  background: transparent;
  &::before {
    content: url(${PlaneIcon});
    font-size: 4rem;
  }
  &:focus {
    outline: none;
  }
`;

const Text = styled.div`
  position: absolute;
  font-family: "Raleway", sans-serif;
  z-index: 1000;
  font-size: 1rem;
  display: flex;
  flex-direction: column;
  letter-spacing: 0.2rem;
  color: #000;
  .attention {
    font-size: 1.6rem;
    position: relative;
    margin-top: 2rem;
  }
  .attention-icon {
    position: absolute;
    right: ${(props) => (props.clicked ? "0" : "none")};
    top: 100%;
    font-size: 5rem;
  }
`;
const FormComp = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);
  return (
    <BackgroundBox clicked={click}>
      <ButtonAnimate clicked={click} onClick={handleClick}></ButtonAnimate>

      <Form className="signin">
        <Title>Sign In</Title>
        <Input type="email" name="email" id="emailId" placeholder="Email" />
        <Input
          type="password"
          name="password"
          id="passwordId"
          placeholder="Password"
        />
        <Link href="#">Forgot Your Password?</Link>
        <Button>Sign In</Button>
      </Form>

      <Form className="signup">
        <Title>Sign Up</Title>
        <Input
          type="text"
          name="username"
          id="usernameId"
          placeholder="Username"
        />

        <Input type="email" name="email" id="emailId" placeholder="Email" />
        <Input
          type="password"
          name="password"
          id="passwordId"
          placeholder="Password"
        />
        <Link href="#" onClick={handleClick}>
          Already have an Account?
        </Link>
        <Button>Sign Up</Button>
      </Form>

      <Text className="text1" clicked={click}>
        <h1>Welcome!</h1>
        Don't have an account?
        <br />
        <span className="attention">Get your boarding pass!</span>
        <span className="attention-icon">⤶</span>
      </Text>

      <Text className="text2" clicked={click}>
        <h1>Hi There!</h1>
        Already have an account?
        <br />
        <span className="attention">Fly away!</span>
        <span className="attention-icon">⤷</span>
      </Text>

      <Box1 clicked={click} />
      <Box2 clicked={click} />
    </BackgroundBox>
  );
};

export default FormComp;
