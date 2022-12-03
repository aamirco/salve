import styled from "styled-components";

const NavigationWrapper = styled.div`
  width: 100%;
  height: 60px;
  background-color: #1e1e1e;
`;
const NavigationLogo = styled.h1`
  padding: 0 20px;
  margin: 0;
  line-height: 60px;
  color: #d0d0d0;
`;

const Navigation = () => {
  return (
    <NavigationWrapper>
      <NavigationLogo>Salve</NavigationLogo>
    </NavigationWrapper>
  );
};

export default Navigation;
