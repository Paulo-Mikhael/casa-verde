import styled from "styled-components";

export const BackgroundSection = styled.section`
  position: relative;
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
  width: 40%;
  top: 0;
  right: 410px;

  @media screen and (max-width: 1440px){
    right: 250px;
  }
`
export const NewsletterContainer = styled.div`
  width: 1403px;
  height: 462px;
  z-index: 1;
  display: flex;
  align-items: end;
  justify-content: left;
  
  @media screen and (max-width: 1440px){
    width: 1203px;
    height: 332px;
  }
`
export const NewsletterContent = styled.div`
  width: 685px;
  height: inherit;
  
  h2{
    margin-top: 24px;
  }
  @media screen and (max-width: 1440px){
  h1, h2{
    font-size: 20px;

    b{
      font-size: 52px;
    }
  }
}
`
export const UserInText = styled.p`
  margin-top: 37px;
  font-weight: 900;
  font-size: 32px;
  font-family: 'Elsie Swash Caps', sans-serif;
  color: #c08d0d;
  font-style: italic;
  text-shadow: 0px 0px 10px #c08d0d;

  b{
    font-size: 25px;
    font-family: inherit;
    color: #202020;
  }
`