import { useNavigate } from "react-router-dom";
import { HeaderContainer } from "./styled";
import cartImage from "../../assets/cart.png";

const Header = ({ showSidebar }) => {
  const navigate = useNavigate();

  const goToHome = (event) => {
    event.preventDefault();
    navigate("/");
  };

  const goToRequest = (event) => {
    event.preventDefault();
    navigate("/pedidos");
  };

  return (
    <HeaderContainer>
      <div></div>
      <ul>
        <a onClick={goToHome} href="">
          Home
        </a>
        <a onClick={goToRequest} href="">
          Pedidos
        </a>
      </ul>
      <img src={cartImage} onClick={showSidebar} />
    </HeaderContainer>
  );
};
export default Header;
