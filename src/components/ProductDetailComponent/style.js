import styled from "styled-components";
import ButtonComponent from "../ButtonComponent/ButtonComponent";

export const WrapperStyleNameProduct = styled.h1`
    font-size: 30px;
    font-weight: 500;
    line-height: 32px;
    word-break: break-word;
`;

export const WrapperStyleTextSell = styled.span`
    font-size: 16px;
    font-weight: 400;
    line-height: 24px;
`;

export const WrapperPriceProduct = styled.div`
    border-radius: 10px;
    background-color: rgb(250, 250, 250);
`;

export const WrapperPriceTextProduct = styled.h1`
    padding: 10px;
    font-size: 38px;
    line-height: 40px;
    font-weight: 500;
    margin-left: 20px;
`;

export const WrapperAddress = styled.div`
    span.address {
        text-decoration: underline;
        white-space: nowrap;
        overflow: hidden;
        font-size: 16px;
        line-height: 40px;
        font-weight: 500;
    }
    span.change-address {
        color: blue;
        font-size: 16px;
        cursor: pointer;
        font-weight: 500;
    }
`;

export const WrapperQuantityProduct = styled.div`
    margin-top: 20px;
`;

export const WrapperTextQuantity = styled.span`
    font-size: 18px;
    font-weight: 600;
    line-height: 20px;
`;

export const WrapperInputQuantity = styled.div`
    margin-top: 10px;
    border: 1px solid grey;
    width: fit-content;
    border-radius: 4px;
`;

export const WrapperPayProduct = styled.div`
    padding-top: 30px;
`;

export const WrapperBtnPayProduct = styled(ButtonComponent)`
    border: none;
    font-size: 16px;
    font-weight: 500;
    color: #00483d;
    width: 240px;
    height: 48px;
    box-shadow: 2px 2px 2px gray;
    background: rgb(255, 57, 69);
`;
