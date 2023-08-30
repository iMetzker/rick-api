import Logo from "../../img/logo-rick.png";
import Saves from "../../img/saves.png";
import { Container } from "./style";

export function Header() {
  return (
    <>
      <Container>
        <div className="logo">
          <img src={Logo} alt="Logo Rick and Morty" />
        </div>
        <button title="Favoritos">
          <img src={Saves} alt="Logo metade vivo metade zumbi" />
        </button>
      </Container>
    </>
  );
}
