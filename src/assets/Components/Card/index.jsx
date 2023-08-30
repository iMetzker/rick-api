import { Container } from "./style";
import { AiOutlineHeart, AiFillInfoCircle } from "react-icons/ai";

export function Card() {
  return (
    <>
      <Container>
        <div className="image-container">
          <img src="https://rickandmortyapi.com/api/character/avatar/1.jpeg" alt="" />
        </div>
        <div className="content">
          <h1>Rick Sanchez</h1>
          <p>Alive</p>
        </div>
        <div className="icons">
          <AiOutlineHeart />
          <AiFillInfoCircle />
        </div>
      </Container>
    </>
  );
}
