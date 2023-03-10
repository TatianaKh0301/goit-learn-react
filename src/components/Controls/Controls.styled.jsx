import styled from "@emotion/styled";

export const CounterControls = styled.div`
    position: absolute;
    top: 50%;                         
    transform: translate(20%, -10%);
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const Button = styled.button`
    width: 170px;
    height: 50px;
    font-size: 15px;
    font-weight: bold;
    
    background-color: skyblue;
    width: 150px;

    &:not(:last-of-type) {
        margin-right: 20px;
    }
`;
