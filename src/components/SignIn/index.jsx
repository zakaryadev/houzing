import React, { useState } from "react";
import { Section, Container, Content, Label } from "./style";
import { useNavigate } from "react-router-dom";
import { useRequest } from "../../hooks/useRequest";
import { Button, Input } from "../Generic";
import { message } from "antd";

export default function SignIn() {
  const request = useRequest();
  const navigate = useNavigate();
  const [body, setBody] = useState({
    email: null,
    password: null,
  });

  const messagen = (type, content) => {
    message[type](content);
  };

  const onChange = ({ target: { value, name } }) => {
    setBody({
      ...body,
      [name]: value,
    });
  };

  const onSubmit = () => {
    request({
      me: true,
      url: `/public/auth/login`,
      body,
      method: "POST",
    })
      .then((res) => {
        if (res?.authenticationToken) {
          navigate("/home");
          localStorage.setItem("token", res.authenticationToken);
          messagen("success", "Logged successfully");
        }
      })
      .catch((err) => messagen("error", "Error, email or password wrong"));
  };

  return (
    <React.Fragment>
      <Container>
        <Content>
          <Section>
            <div className="subTitle">Sign In</div>
          </Section>
          <Section>
            <Label>Login</Label>
            <Input onChange={onChange} type="email" name="email" />
          </Section>
          <Section>
            <Label>Password</Label>
            <Input onChange={onChange} type="password" name="password" />
          </Section>
          <Section>
            <Button onClick={onSubmit} width={"100%"}>
              Login
            </Button>
          </Section>
        </Content>
      </Container>
    </React.Fragment>
  );
}
