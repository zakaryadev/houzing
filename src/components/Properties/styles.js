import styled from "styled-components";
const Wrapper = styled.div`
  margin: 0 auto;
  max-width: 1440px;
  width: 100%;
`;
const Container = styled.div`
  padding: var(--padding);
  display: grid;
  gap: 20px;
  grid-template-columns: repeat(auto-fill, minmax(380px, 1fr));
  justify-content: center;
`;

export { Container, Wrapper };

