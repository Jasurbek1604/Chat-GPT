import styled from "styled-components";

export const Container = styled.div`
  transition: 0.5s;
  flex: ${({ isOpen }) => (isOpen ? "3" : "0")};
  border-right: 1px solid rgb(100, 100, 100);
  display: flex;
  flex-direction: column;
`;
export const SideBarTop = styled.div`
  flex: 2;
  border-bottom: 1px solid rgb(100, 100, 100);
  padding: 20px;
`;
export const SideBarBottom = styled.div`
  flex: 1;
  padding: 20px;
`;
export const Button = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  width: 100%;
  background: ${({ add }) => add && "purple"};
  justify-content: ${({ add }) => add && "center"};
  border-radius: 5px;
  cursor: pointer;
  margin: ${({ msg }) => (msg ? "5px 0" : "30px 0")};
  padding: ${({ msg, add }) => (msg ? "15px" : add ? "15px 0" : "")};
  border: ${({ msg }) => msg && "1px solid rgb(100,100,100)"};
`;
export const Logo = styled.img`
  width: ${({ logo }) => (logo ? "50px" : "28px")};
  height: ${({ logo }) => (logo ? "50px" : "28px")};
`;
export const Span = styled.div`
  display: ${({ isOpen }) => !isOpen && "none"};
  font-size: ${({ add, title }) =>
    title ? "2.5rem" : add ? "1.8rem" : "1.5rem"};
  font-weight: ${({ add }) => add && 600};
`;

export const Logos = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
`;
