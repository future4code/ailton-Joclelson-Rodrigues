import Loading from "../../components/loading/Loading";
import { TitleH3, ProductsContainer, ProductContainer } from "./styled";

const HomePage = (props) => {
  const products = props.data?.map((product) => {
    return (
      <ProductContainer key={product.id}>
        <p>{product.name}</p>
        <div>
          <p>{`R$: ${product.price}`}</p>
          <p>{`Quantidade: ${product.qtyStock}`}</p>
        </div>
        <button onClick={() => props.addPoduct(product.id)}>Adicionar</button>
      </ProductContainer>
    );
  });
  return (
    <>
      <TitleH3>Inicio</TitleH3>
      <ProductsContainer>
        {!props.loading ? products : <Loading />}
      </ProductsContainer>
    </>
  );
};
export default HomePage;
