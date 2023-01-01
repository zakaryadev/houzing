import React from "react";
import { LoadingOutlined } from "@ant-design/icons";
import { Spin } from "antd";
import { Container } from "./style";

function Spinner(props) {
  const antIcon = (
    <LoadingOutlined style={{ fontSize: 64, color: "#b8ff06" }} spin />
  );
  return (
    <Container>
      <Spin indicator={antIcon} />
    </Container>
  );
}

export default Spinner;
