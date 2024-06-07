import styled from "styled-components";

export const BackgroundSection = styled.section`
  width: 100%;
  height: 550px;
  display: flex;
  align-items: center;
  justify-content: center;
`
export const StepsImageContainer = styled.div`
  width: 1500px;
  height: 100%;
  background-color: white;
  z-index: 1;
  box-shadow: 0px 2px 10px #00000022;
  display: flex; 

  @media screen and (max-width: 1440px){
    width: 1300px;
  }
`
export const ImageContainer = styled.div`
  width: 50%;
  height: 100%;
  background-image: url('images/plant.png');
  background-position: center top;
`
export const StepsContainer = styled.div`
  width: 50%;
  height: 100%;
  padding: 52px 38px 38px 38px;
`
export const StepsInfo = styled.div`
  width: 100%;
  height: 50px;
  display: flex;
  align-items: center;
  margin: 50px 0px;
  position: relative;

  &:before{
    position: absolute;
    content: '';
    border-radius: 50%;
    width: 52px;
    height: 52px;
    background-color: #FFCB47;
    left: 0px;
  }
  h3{
    font-size: 23px;
    margin-left: 70px;
  }
`