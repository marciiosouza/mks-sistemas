import styled from "styled-components";

export const Container = styled.div`
width: 100%;
padding: 10px 0;

position: fixed;
/* z-index: 3; */
bottom: 0;
text-align: center;
background-color:  ${({ theme }) => theme.COLORS.GRAY_100};
`