import React from 'react';
import styled from 'styled-components';
import BurgerLogoImg from '../../assets/images/burger-logo.png'

const LogoDiv = styled.div`
  background-color: white;
  padding: 6px;
  height: 50%;
  border-radius: 7px;
`;

const LogoImg = styled.img`
  height: 100%;
`;

const logo = (props) => {
    return (
        <LogoDiv>
            <LogoImg src={BurgerLogoImg} alt="BurgerBuilder"></LogoImg>
        </LogoDiv>
    );
}
 
export default logo;