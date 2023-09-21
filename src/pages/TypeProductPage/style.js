import styled from "styled-components";
import { Col } from "antd";

export const WrapperProducts = styled.div`
    display: flex;
    justify-content: center;
    gap: 15px;
    flex-wrap: wrap;
`;

export const WrapperNavbar = styled(Col)`
    background: #fff;
    margin-right: 10px;
    border-radius: 10px;
    padding: 10px;
    height: fit-content;
`;
