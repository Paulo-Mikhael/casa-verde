import styled from "styled-components"

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

    &.disabled{
      background-color: #c08d0d;
      cursor: not-allowed;
    }
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
export const WarningP = styled.p`
  color: red;
  font-size: 25px;
  margin-top: 20px;
`