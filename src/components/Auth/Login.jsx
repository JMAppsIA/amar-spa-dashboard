import React from "react";
import styled from "styled-components";
import background from '../../assets/background-login.png'; 

const Login = () => {
  return (
    <Wrapper>
      <LeftSideContainer>
        <Header>
          <span>Amar Spa</span>
          <h4>
            No tienes una cuenta? <a>Registrate!</a>
          </h4>
        </Header>
        <Body>
          <h1>Hola!</h1>
          <p>Por favor, ingresa tus credenciales</p>
          <ButtonContainer>
            <Button style={{marginRight: 14}}>Botón 1</Button>
            <Button>Botón 2</Button>
          </ButtonContainer>
        </Body>
      </LeftSideContainer>
      <RightSideContainer>
        <Disclaimer>
            <p>Today, we create innovative solutions to the challenges that consumers face in both their everyday lives and events.</p>
        </Disclaimer>
      </RightSideContainer>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  margin-top: 40px;
  margin-left: 58px;
`;
const LeftSideContainer = styled.div`
  flex: 1;
  margin-right: 57px;
`;
const Header = styled.div`
  display: flex;
  justify-content: space-between;

  h4 {
    font-family: "Poppins";
    font-weight: 300;
  }

  h4 > a {
    color: #20dc49;
    font-weight: 500;
  }
`;
const Body = styled.div`
  align-items: center;
  justify-content: center;
  text-align: center;
  margin-top: 106px;

  h1 {
    font-family: "Poppins";
    font-style: normal;
    font-weight: 600;
    font-size: 36px;
    line-height: 44px;
  }

  p {
    font-family: "Poppins";
    font-style: normal;
    font-weight: 400;
    font-size: 18px;
    line-height: 29px;
  }
`;

const ButtonContainer = styled.div`
    margin-top: 38px;
`;

const Button = styled.button`
  width: 126px;
  height: 43px;
  background: #ffffff;
  border: 1px solid #B8E8D1;
  border-radius: 5px;
  
  &:hover {
     background-color: #B8E8D1;
     transition: 0.3s ease-in-out;
     cursor: pointer;
  }
`;

const RightSideContainer = styled.div`
  flex: 1;
`;

const Disclaimer = styled.div`
width: 547px;
height: 270px;
background: rgba(255, 242, 242, 0.13);
mix-blend-mode: normal;
backdrop-filter: blur(100px);
border-radius: 10px;
`;

export default Login;
