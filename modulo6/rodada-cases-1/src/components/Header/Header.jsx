import { useNavigate } from "react-router-dom";
import { HeaderContainer } from "./styled";

const Header = () => {
  const navigate = useNavigate();

  const goToHome = (event) => {
    event.preventDefault();
    navigate("/");
  };

  const goToCart = (event) => {
    event.preventDefault();
    navigate("/carrinho");
  };
  const goToRequest = (event) => {
    event.preventDefault();
    navigate("/pedidos");
  };

  return (
    <HeaderContainer>
      <ul>
        <a onClick={goToHome} href="">
          Home
        </a>
        <a onClick={goToRequest} href="">
          Pedidos
        </a>
        <a onClick={goToCart} href="">
          Carrinho
        </a>
      </ul>
    </HeaderContainer>
  );
};
export default Header;
