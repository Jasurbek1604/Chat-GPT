import styled from "styled-components";

export const Container = styled.div`
  flex: 9;
`;

export const Menu = styled.div`
  height: 40px;
  display: flex;
  align-items: center;
  cursor: pointer;
`;

export const Bar = styled.img`
  margin: 10px;
  width: ${({ isOpen }) => (isOpen ? "20px" : "30px")};
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  width: 80%;
  height: calc(100vh - 40px);
  @media (max-width: 800px) {
    width: 95%;
  }
`;

export const Message = styled.div`
  flex: 4;
  display: flex;
  flex-direction: column;
  gap: 10px;
  overflow: auto;
  &::-webkit-scrollbar {
    width: 4px;
    background: #fff;
    border-radius: 5px;
  }
  &::-webkit-scrollbar-thumb {
    background: gray;
    border-radius: 5px;
  }
  &::-webkit-scrollbar-track {
  }
`;

export const MessageFrom = styled.div`
  display: flex;
  gap: 10px;
  background: ${({ gpt }) => (gpt ? "rgba(28, 30, 58, 1)" : "")};
  padding: 20px;
  border-radius: 8px;
`;

export const MainBottom = styled.div`
  flex: 1;
`;

export const Form = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: rgba(28, 30, 58, 1);
  padding: 15px 20px;
  border-radius: 8px;
  margin-top: 5px;
`;
export const Input = styled.input`
  width: 100%;
  outline: none;
  background: transparent;
  border: none;
  font-size: 1.7rem;
  color: #fff;
`;
export const Button = styled.button`
  width: 30px;
  height: 30px;
  border: none;
  background: transparent;
  cursor: pointer;
`;
export const Img = styled.img`
  width: ${({ user }) => (user ? "40px" : "100%")};
  height: ${({ user }) => (user ? "40px" : "100%")};
  border-radius: ${({ user }) => user && "10px"};
`;
export const Text = styled.div`
  text-align: ${({ txt }) => txt && "center"};
  margin: ${({ txt }) => txt && "20px 0 10px"};
  font-size: ${({ user }) => (user ? "1.5rem" : "1.2rem")};
`;
