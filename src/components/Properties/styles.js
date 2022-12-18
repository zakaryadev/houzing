import styled from "styled-components";
const Wrapper = styled.div`
  margin: 0 auto;
  padding: 0 130px;
  width: 1440px;
`
const Container = styled.div`
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(auto-fill, minmax(380px,4fr));
`;

export { Container,Wrapper };
