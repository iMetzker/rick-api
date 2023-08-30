import styled from "styled-components";

export const Container = styled.header`
display: flex;
align-items: center;
justify-content: space-between;
padding: 3rem 10rem;
box-shadow: 100px 1px 50px black;

  img {
    width: 100%;
    height: auto;
  }
  .logo {
    width: 25rem;
  }
  button {
    background: transparent;
    border: none;
    cursor: pointer;
    width: 6rem;
  }
`;
