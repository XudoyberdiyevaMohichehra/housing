import React, { useState } from "react";
import { Content } from "./style";

import { useNavigate } from "react-router-dom";
import Input from "../Generics/Input";
import Button from "../Generics/Button";
import useRequest from "../../hooks/useRequest";
import { message } from "antd";

export const SignUp = () => {
  const [body, setBody] = useState({
    email: "",
    password: "",
  });
  const request = useRequest();
  const navigate = useNavigate();

  const info = () => {
    message.info("Successfully Signed Up");
  };
  // const warning = () => {
  //   message.error("Incorrect Login or Password");
  // };

  const onChangeValue = ({ target: { value, placeholder } }) => {
    setBody({
      ...body,
      [placeholder]: value,
    });
  };

  const onSubmit = async () => {
    request({
      url: `/public/auth/register`,
      body,
      method: "POST",
      me: true,
    }).then((res) => {
      navigate("/register");
      info();
    });
  };

  return (
    <Content>
      <div className="subTitle">Sign Up</div>
      <Input
        width="%"
        onChange={onChangeValue}
        name="email"
        placeholder="email"
        type="email"
      />

      <Input
        width="%"
        onChange={onChangeValue}
        name="password"
        placeholder="firstname"
        type="text"
      />
      <Input
        width="%"
        onChange={onChangeValue}
        name="password"
        placeholder="lastname"
        type="text"
      />
      <Input
        width="%"
        onChange={onChangeValue}
        name="password"
        placeholder="password"
        type="password"
      />
      <Button onClick={onSubmit} width="%">
        Login
      </Button>
    </Content>
  );
};
