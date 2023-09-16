import { Card } from "antd";
import styled from "styled-components";

export const WrapperCardStyle = styled(Card)`
    width: 220px;
    & img {
        height: 220px;
        width: 220px;
    }
    position: relative;
`;

export const StyleNameProduct = styled.div`
    justify-content: center;
    font-weight: 700;
    font-size: 14px;
    line-height: 16px;
    color: rgb(56, 56, 61);
`;

export const WrapperRatingText = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 12px;
    color: rgb(128, 128, 137);
    margin: 5px 0 6px 0;
`;

export const WrapperPriceText = styled.div`
    font-size: 16px;
    font-weight: 700;
    color: #fd475a;
`;

export const WrapperDiscountText = styled.span`
    font-size: 12px;
    font-weight: 500;
    color: rgb(255, 66, 78);
    margin-left: 5px;
`;
