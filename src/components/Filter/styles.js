import styled from "styled-components";
import { ReactComponent as houses } from "../../assets/icons/homes.svg";
import { ReactComponent as search } from "../../assets/icons/search.svg";
import { ReactComponent as filter } from "../../assets/icons/setting-lines.svg";
import { Select } from "antd";

const Container = styled.div`
  margin: ${({ margin }) => (margin ? `${margin}` : "0")};
  display: flex;
  justify-content: center;
  gap: 20px;
  padding: var(--padding);
  width: 100%;
  max-width: 1440px;
`;
const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const Icons = styled.div``;

Icons.Search = styled(search)`
  margin-right: 8px;
`;

Icons.Filter = styled(filter)`
  margin-right: 8px;
`;

Icons.Houses = styled(houses)`
  margin-right: 8px;
`;

const MenuWrapper = styled.div`
  padding: 30px;
  background: #ffffff;
  border: 1px solid #e6e9ec;
  border-radius: 2px;
  display: flex;
  flex-direction: column;
  box-shadow: ${({ shadow }) =>
    shadow ? "0px 15px 20px 0px #0000001a" : "none"};
`;

const Section = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  margin: 10px 0;
  gap: 10px;
  width: fit-content;
`;

const SelectAnt = styled(Select)`
  height: 44px;
  .ant-select-selector {
    width: 200px !important;
    height: 44px !important;
  }
  .ant-select-selection-item {
    display: flex !important;
    align-items: center !important;
  }
`;

export { Container, Icons, Wrapper, MenuWrapper, Section, SelectAnt };
