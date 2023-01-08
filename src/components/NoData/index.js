import { Empty } from "antd";
import React from "react";
import { Container } from "./style";

export const NoData = () => {
  return (
    <Container>
      <Empty
        image="https://gw.alipayobjects.com/zos/antfincdn/ZHrcdLPrvN/empty.svg"
        imageStyle={{
          height: 200,
        }}
        description={
          <h1>
            Nothing is <a href="/properties">Found</a>
          </h1>
        }
      ></Empty>
    </Container>
  );
};

export default NoData;
