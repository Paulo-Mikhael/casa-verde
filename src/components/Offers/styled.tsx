import styled from "styled-components";

export const BackgroundSection = styled.section`
  width: 100%;
  height: 868px;
  margin-top: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
`
export const OffersContainer = styled.div`
  width: 1500px;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-direction: column;

  h2{
    text-align: center;
  }
  @media screen and (max-width: 1440px){
    width: 1300px;
  }
`
export const OffersContent = styled.div`
  width: 100%;
  height: 80%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
`
export const OfferDescription = styled.div<{ $imgUrl: string }>`
  width: 100%;
  height: 300px;
  display: flex;
  box-shadow: 10px 10px 100px #00000022;
  
  span{
    width: 50%;
    height: 100%;
    background-image: url(${props => props.$imgUrl});
    background-position: center;
  }
  div{
    width: 50%;
    height: 100%;
    padding: 10px;

    b{
      font-size: 50px;
    }
    h4{
      width: 100%;
      display: flex;
      justify-content: space-between;
      margin-top: 30px;
      color: #FFCB47;
      font-size: 25px;
      cursor: pointer;

      i{
        margin-right: 10px;
      }
    }
    @media screen and (max-width: 1440px){
      b{
        font-size: 40px;
      }
    }
  }
`
export const ButtonsContainer = styled.div`
  width: 100%;
  height: 70px;
  display: flex;
  gap: 10px;
  align-items: end;
  margin-bottom: 10px;
  
  button:hover, div:hover{
    background-color: #c08d0d;
  }
  button{
    height: 40px;
    padding: 10px;
    border: none;
    background-color: #FFCB47;
    font-size: 25px;
    color: white;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    cursor: pointer;
    position: relative;

    &.activated{
      background-color: #1cfd55 !important;
    }
    &:nth-child(3):hover{
      background-color: #FFCB47;
    }
    input{
      border: none;
      background-color: #f1b10d;
      padding: 5px 10px;
      color: white;
      width: 50px;

      &:focus{
        outline: none;
      }
    }
  }
  .x {
    width: 40px;
    height: 40px;
    background-color: #FFCB47;
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;

    &:after {
      content: '';
      height: 35px;
      border-left: 3px solid #fff;
      position: absolute;
      transform: rotate(45deg);
    }
    &:before {
      content: '';
      height: 35px;
      border-left: 3px solid #fff;
      position: absolute;
      transform: rotate(-45deg);
    }
    &.hidden{
      display: none !important;
    }
  }
`