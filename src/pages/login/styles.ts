import styled from "styled-components";

export const LoginSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 50px;

  h2{
    margin-bottom: 2%;
  }

  input{
    display: flex;
    margin: 0.2%;
  }

  button{
    margin: 0.5%;
    margin-left: 15%;
    background-color: #9300ff;
    border-radius: 10%;
    width: 35px;
    font-size: larger;
    cursor: pointer;
    
  }
`

export const LogoSection = styled.section`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 20%;
    color: #9300ff;

    h1{
        color: white;
        font-size: 3rem;
    }

    
`
