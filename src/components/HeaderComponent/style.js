import { Row } from "antd";
import styled from "styled-components";

export const WrapperHeader = styled(Row)`
    display: flex;
    width: 100%;
    padding: 15px 120px;
    background-color: #00483d;
    align-items: center;
    gap: 16px;
    flex-wrap: nowrap;
`;

export const WrapperTextHeader = styled.span`
    font-size: 24px;
    color: white;
    font-weight: bold;
    text-align: left;
`;

export const WrapperTextHeaderSmall = styled.span`
    font-size: 12px;
    color: white;
    white-space: nowrap;
`;

export const WrapperHeaderAccount = styled.div`
    display: flex;
    align-items: center;
    color: white;
    gap: 15px;
`;
