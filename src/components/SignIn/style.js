import styled from "styled-components";

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  margin: auto;
  width: 100%;
  background: #ffffff;
`;

const Content = styled.div`
  max-width: 580px;
  height: 376px;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  border: 1px solid #e6e9ec;
  box-shadow: 0px 10px 30px rgba(13, 38, 59, 0.05);
  border-radius: 3px;
  padding: 24px 30px;
  margin: 64px;
`;

const Section = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const Label = styled.div`
  font-family: "Montserrat";
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 20px;
  color: #0d263b;
  margin-bottom: 6px;
`;

export { Container, Content, Section, Label };
