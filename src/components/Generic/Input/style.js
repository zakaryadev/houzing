import styled from "styled-components";

const Container = styled.input`
  font-family: var(--fontFamily);
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 2px;
  min-width: 120px;
  color: var(--colorPrimary);
  font-size: ${({ fontSize }) => (fontSize ? `${fontSize}px` : "14px")};
  height: ${({ height }) => (height ? `${height}px` : "44px")};
  width: ${({ width }) => (width ? `${width}px` : "100%")};
  outline: none;
  border: 1px solid #e6e9ec;
  padding-left: ${({ icon }) => (icon ? "44px" : "20px")};
  :focus {
    border: 1px solid #0061df;
  }
  ::placeholder {
    color: var(--colorPrimary);
  }
`;
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  width: ${({ width }) => (width ? `${width}px` : "100%")};
`;
const Icon = styled.div`
  margin-top: 4px;
  margin-left: 15px;
  position: absolute;
  z-index: 2;
`;

export { Container, Wrapper, Icon };
