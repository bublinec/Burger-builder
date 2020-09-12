import React from 'react';
import styled from 'styled-components';
import BurgerLogoImg from '../../assets/images/burger-logo.png'

const LogoDiv = styled.div`
  background-color: white;
  padding: 6px;
  height: ${props=> props.height};
  border-radius: 7px;
`;

const LogoImg = styled.img`
  height: 100%;
`;

const logo = (props) => {
    return (
        <LogoDiv height={props.height}>
            <LogoImg 
              src={BurgerLogoImg} 
              alt="BurgerBuilder"/>
        </LogoDiv>
    );
}
 
export default logo;