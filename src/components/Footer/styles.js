import styled from "styled-components";

export const Container = styled.div`
width: 100%;
padding: 10px 0;

position: relative;
bottom: 0;
text-align: center;

background-color:  ${({ theme }) => theme.COLORS.GRAY_100};
`