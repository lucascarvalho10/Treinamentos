import styled from "styled-components";

export const Container = styled.div`
  height: 12em;
  width: 100%;
  background: #90e0ef;

  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-around;
`;

export const HeaderText = styled.h1`
  font-family: "Poppins", sans-serif;
  font-size: 3rem;
  color: #fff;
  font-weight: 400;
`;

export const HeaderImg = styled.img`
  width: 6rem;
  height: 6rem;
  margin: 0.8rem;
  transition: 0.2s;
  &:hover {
    transform: scale(120%);
    cursor: pointer;
  }
`;
