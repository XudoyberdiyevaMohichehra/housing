
import React, { useState } from "react";
import { Container, Content } from "./style";
import { useNavigate } from "react-router-dom";
import { Button, Input } from "../Generics";
import useRequest from "../../hooks/useRequest";
import { message } from "antd";

export const Signin = () => {
  const request = useRequest();
  const [body, setBody] = useState({});
  const navigate = useNavigate();

  const onChange = ({ target: { value, placeholder } }) => {
    setBody({
      ...body,
      [placeholder]: value,
    });
  };
  const info = () => {
    message.info("Successfully logged in ");
  };
  const warning = (error) => {
    message.error(error || "Incorrect Login or Password");
  };
  const onSubmit = async () => {
    request({
      url: `/public/auth/login`,
      method: "POST",
      body,
      me: true,
    }).then((res) => {
      if (res?.authenticationToken) {
        navigate("/home");
        localStorage.setItem("token", res?.authenticationToken);
        info();
      }else{
        warning()
      }
      // info();
    });
  };

  return (
    <Container>
    <Content>
      <div className="subTitle">Sing in</div>
      <Input width="%" onChange={onChange} placeholder="email" type="email" />
      <Input width="%" onChange={onChange} placeholder="password" type="password" />
      <Button width="%" onClick={onSubmit}>
        Login
      </Button>
    </Content>
    </Container>
  );
};

export default Signin;



