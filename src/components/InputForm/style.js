import { Input } from "antd";
import styled from "styled-components";

export const WrapperInputStyle = styled(Input)`
    height: 40px;
    border-top: none;
    border-left: none;
    border-right: none;
    outline: none;
    &:focus {
        background-color: rgb(232, 240, 254);
    }
`;
