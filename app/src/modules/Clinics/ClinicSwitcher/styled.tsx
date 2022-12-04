import styled from "styled-components";

export const ClinicSwitcherWrapper = styled.div`
  display: flex;
`;
interface IButton {
  selected: boolean;
}
export const Button = styled.button<IButton>`
  border: 1px solid #8665e3;
  background-color: ${(props) => (props.selected ? "#8665e3" : "white")};
  color: ${(props) => (props.selected ? "#ffffff" : "#8665e3")};
  font-size: 16px;
  margin: 10px;
  margin-left: 0px;
  border-radius: 5px;
  padding: 5px 10px;
`;
