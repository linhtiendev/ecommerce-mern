import styled from "styled-components";
import ButtonComponent from "../../components/ButtonComponent/ButtonComponent";

export const WrapperTypeProduct = styled.div`
    height: 40px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 24px;
`;

export const WrapperButtonMoreOption = styled(ButtonComponent)`
    &:hover {
        color: #fff;
        background-color: #00483d;
    }
`;

export const WrapperProduct = styled.div`
    display: flex;
    justify-content: center;
    gap: 15px;
    margin-top: 20px;
    flex-wrap: wrap;
`;
