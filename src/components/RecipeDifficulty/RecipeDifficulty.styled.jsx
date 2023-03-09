import styled from "@emotion/styled";

export const Wrapper = styled.div`
    margin-top: 16px;
`;

export const Title = styled.h3`
    margin-bottom: 8px;
`;

export const WrapperList = styled.div`
    display: flex;
    align-items: center;
    gap: 8px;
`;

export const Item = styled.span`
    padding: 8px;
    border: 1px solid ${(p) => p.theme.colors.black};
    border-radius: 4px;

    background-color: ${(p) => {
        return p.active ? p.theme.colors.accent : p.theme.colors.white
    }};
`;