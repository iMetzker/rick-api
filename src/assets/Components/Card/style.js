import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  width: max-content;
  align-items: center;
  justify-content: center;
  margin: 10rem;
  background-color: var(--gray-100);
  border-radius: 8px;
  position: relative;

  .image-container {
    max-width: 20rem;
    height: 25rem;
  }
  .image-container img {
    border-radius: 8px;
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .content {
    text-align: center;
  }
  .content h1 {
    padding: 2rem 4rem;
    color: #495057;
  }

  .content p {
    color: #495057;
    font-size: 1.5rem;
    font-weight: bold;
    display: inline;
    padding: .8rem 1.8rem;
    border-radius: 30px;
    background-color: #90e0ef;
  }

  .icons {
    position: absolute;
    top: 0;
    right: 0;
    padding: 1rem;
  }
`;
