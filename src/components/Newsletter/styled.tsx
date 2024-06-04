import styled from "styled-components";

export const BackgroundSection = styled.section`
  position: absolute;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
`
export const BackgroundSpot = styled.img`
  position: absolute;
  top: 0;
  right: 0;
`
export const BackgroundPlant = styled.img`
  position: absolute;
  top: 0;
  right: 410px;
`
export const NewsletterContainer = styled.div`
  width: 1403px;
  height: 462px;
  z-index: 1;
  display: flex;
  align-items: end;
  justify-content: left;
`
export const NewsletterContent = styled.div`
  width: 685px;
  height: inherit;

  h1, h2{
    color: #9c9c9c;
    font-weight: 400;
    font-size: 25px;

    b{
      font-weight: 900;
      font-size: 82px;
      font-family: 'Elsie Swash Caps', sans-serif;
      color: #202020;
    }
  }
  h2{
    margin-top: 24px;
  }
`
export const InputContainer = styled.div`
  width: 785px;
  height: 85px;
  background-color: #fff;
  box-shadow: 10px 10px 100px #0000000c;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 37px;

  button{
    width: 30%;
    height: 100%;
    font-size: 22px;
    background-color: #FFCB47;
    border: none;
    cursor: pointer;
    color: white;
  }
`
export const InputContent = styled.div`
  width: 70%;
  height: 100%;
  display: flex;
  align-items: center;
  
  label{
    cursor: pointer;
    margin: 0px 20px;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  input[type='email']{
    width: 100%;
    font-size: 22px;
    font-weight: 400;
    padding: 20px;
    border: none;
    color: #9c9c9c;

    &:focus{
      outline: none;
    }
  }
`