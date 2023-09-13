import { Row } from "antd";
import styled from "styled-components";

export const WrapperHeader = styled(Row)`
    padding: 15px 120px;
    background-color: #00483d;
    align-items: center;
`;

export const WrapperTextHeader = styled.span`
    font-size: 20px;
    color: white;
    font-weight: bold;
    text-align: left;
`;

export const WrapperTextHeaderSmall = styled.span`
    font-size: 12px;
    color: white;
`;

export const WrapperHeaderAccount = styled.div`
    display: flex;
    align-items: center;
    color: white;
    gap: 15px;
`;
