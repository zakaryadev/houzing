import styled from "styled-components";
const Wrapper = styled.div`
  margin: 0 auto;
  width: 1440px;
`;
const Container = styled.div`
  padding: var(--padding);
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(auto-fill, minmax(380px, 4fr));
`;

export { Container, Wrapper };
