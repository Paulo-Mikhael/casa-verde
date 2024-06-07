import styled from "styled-components";

export const HeaderBar = styled.header`
  position: absolute;
  top: 10.16px;
  width: 100%;
  height: 48.84px;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1;
`
export const HeaderContent = styled.div`
  width: 1403px;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media screen and (max-width: 1440px){
    width: 1203px;
  }
`
export const HeaderImage = styled.img`
  width: 177px;
  height: 44.84px;
`
export const NavText = styled.p`
  font-weight: bold;
  font-size: 20px;
  cursor: pointer;
`
 