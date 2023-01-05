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
  grid-template-columns: repeat(auto-fill, minmax(343px, 380px));
  justify-content: center;
  padding-bottom: 30px;
`;

export { Container, Wrapper };
