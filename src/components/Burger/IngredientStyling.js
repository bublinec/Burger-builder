import styled from 'styled-components';

const IngredientsStyles = {
    breadTop: `
        height: 20%;
        width: 80%;
        background: linear-gradient(#bc581e, #e27b36);
        border-radius: 50% 50% 0 0;
        box-shadow: inset -15px 0 #c15711;
        margin: 2% auto;
        position: relative;
    `,
    breadBottom: `
        height: 13%;
        width: 80%;
        background: linear-gradient(#F08E4A, #e27b36);
        border-radius: 0 0 30px 30px;
        box-shadow: inset -15px 0 #c15711;
        margin: 2% auto;
    `,

    meat: `
        width: 80%;
        height: 8%;
        background: linear-gradient(#7f3608, #702e05);
        margin: 2% auto;
        border-radius: 15px;
    `,

    salad: `
        width: 85%;
        height: 7%;
        margin: 2% auto;
        background: linear-gradient(#228c1d, #91ce50);
        border-radius: 20px;
    `,

    bacon: `
        width: 80%;
        height: 3%;
        background: linear-gradient(#bf3813, #c45e38);
        margin: 2% auto;
    `,

    cheese: `
        width: 90%;
        height: 4.5%;
        margin: 2% auto;
        background: linear-gradient(#f4d004, #d6bb22);
        border-radius: 20px;
    `
};

export default styled.div`${props => IngredientsStyles[props.type]}`;






