import styled from "styled-components";

export const Container = styled.div`
  transition: 0.5s;
  flex: ${({ isOpen }) => (isOpen ? "3" : "0")};
  border-right: 1px solid rgb(100, 100, 100);
  display: flex;
  flex-direction: column;
  @media (max-width: 600px) {
    position: absolute;
    background: rgb(3, 0, 31);
    transform: ${({ isOpen }) =>
      isOpen ? "translateX(0)" : "translateX(-100%)"};
    width: 100%;
    height: 100vh;
    flex: ${({ isOpen }) => (isOpen ? "10" : "0")};
  }
`;
export const SideBarTop = styled.div`
  flex: 2;
  border-bottom: 1px solid rgb(100, 100, 100);
  padding: ${({ isOpen }) => (isOpen ? "20px" : "10px ")};
  @media (max-width: 600px) {
    padding: 10px;
  }
`;
export const SideBarBottom = styled.div`
  flex: 1;
  padding: ${({ isOpen }) => (isOpen ? "20px" : "")};
  @media (max-width: 600px) {
    padding: 10px;
  }
`;
export const Button = styled.div`
  display: flex;
  align-items: center;
  gap: 15px;
  width: 100%;
  background: ${({ New }) => New && "purple"};
  justify-content: ${({ New, isOpen }) => (isOpen || New) && "center"};
  border-radius: 5px;
  cursor: pointer;
  margin: ${({ msg }) => (msg ? "5px 0" : "30px 0")};
  padding: ${({ msg, New }) => (msg ? "15px" : New ? "15px 0" : "")};
  border: ${({ msg }) => msg && "1px solid rgb(100,100,100)"};
  @media (max-width: 600px) {
    justify-content: ${({ New }) => (New ? "center" : "flex-start")};
  }
`;
export const Logo = styled.img`
  width: ${({ logo }) => (logo ? "50px" : "28px")};
  height: ${({ logo }) => (logo ? "50px" : "28px")};
`;
export const Span = styled.div`
  display: ${({ isOpen }) => !isOpen && "none"};
  font-size: ${({ New, title }) =>
    title ? "2.5rem" : New ? "1.8rem" : "1.5rem"};
  font-weight: ${({ New }) => New && 600};
  @media (max-width: 600px) {
    display: ${({ isOpen }) => !isOpen && "inline"};
  }
`;

export const Logos = styled.div`
  display: flex;
  align-items: center;
  gap: 5px;
  cursor: pointer;
  @media (max-width: 600px) {
    justify-content: space-between;
  }
`;
