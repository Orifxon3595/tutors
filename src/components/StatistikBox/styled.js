import styled from "styled-components";

export const Container = styled.div`
    user-select: none;
    border-left: 2px solid ${(props) => props.color};
    border-bottom: 2px solid ${(props) => props.color};
    box-shadow: 4px 4px 10px ${(props) => props.color};
    cursor: pointer;
    &:hover {
        transform: translateY(-4px); /* Butonni yuqoriga ko'tarish */
        box-shadow: 0 8px 12px ${(props) => props.color}; /* Kengaygan soyali effekt */
    }
    &:active {
        transform: translateY(2px); /* Bosilganda buton pastga tushadi */
        box-shadow: 0 2px 4px ${(props) => props.color}; /* Bosilganda eng kam soyali effekt */
    }
`;

export const BoxIndicator = styled.div`
    width: 7px;
    background-color: ${(props) => props.color};
`;

export const Text = styled.div`
    display: inline;
    color: ${(props) => props.color};
`;
