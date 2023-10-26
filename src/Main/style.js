import styled from "styled-components";

export const Container = styled.div`
  flex: 9;
`;

export const Menu = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const Bar = styled.img`
  margin: 10px;
  width: ${({ isOpen }) => (isOpen ? "20px" : "30px")};
`;

export const Wrapper = styled.div`
  margin: 0 auto;
  width: 80%;
  background: red;
  height: calc(100vh - 40px);
`;

export const Message = styled.div``;
export const Inputs = styled.div``;
