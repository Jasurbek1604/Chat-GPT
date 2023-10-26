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
  background: red;
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
  width: 100%;
  height: 100%;
`;
export const Text = styled.div`
  text-align: center;
  margin-top: 20px;
  font-size: 1.2rem;
`;
