import React, { Component } from 'react';
import styled from 'styled-components';
import Backdrop from './Backdrop'

const ModalDiv = styled.div`
    position: fixed;
    z-index: 500;
    background-color: white;
    width: 70%;
    border: 1px solid #ccc;
    box-shadow: 1px 1px 1px black;
    padding: 16px;
    left: 15%;
    top: 30%;
    box-sizing: border-box;
    transition: all 0.3s ease-out;
    transform: ${props => props.show ? 'translateY(0)' : 'translateY(-100vh)'};
    opacity: ${props => props.show ? '1' : '0'};
    @media (min-width: 600px) {
        width: 500px;
        left: calc(50% - 250px);
    }
`;

class Modal extends Component {
    // Order Summary needs to be rerended only when modal is showing
    shouldComponentUpdate(nextProps, nextState) {
        return (nextProps.show !== this.props.show)
    }

    render () {
        return (
            <React.Fragment>
                <Backdrop show={this.props.show} onClick={this.props.hideModal}/>
                <ModalDiv show={this.props.show}>
                    {this.props.children}
                </ModalDiv>
            </React.Fragment>
    
         );
    }
}
 
export default Modal;