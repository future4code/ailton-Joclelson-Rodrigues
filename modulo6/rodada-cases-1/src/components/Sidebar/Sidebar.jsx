import useRequestData from "../../Hooks/useRequestData";
import { BASE_URL } from "../../constants/Urls";
import { Container, Purchases } from "./styled";
import Loading from "../loading/Loading";

const Sidebar = () => {
  const { data, loading } = useRequestData(`${BASE_URL}/products/purchases`);

  const purchases = data?.map((item, index) => {
    return (
      <Purchases key={index}>
        <p>{item.name}</p>
        <p>{item.qtyStock}</p>
        <p>{item.price}</p>
      </Purchases>
    );
  });
  return (
    <Container>
      <h2>Compras</h2>
      {purchases}
    </Container>
  );
};
export default Sidebar;
