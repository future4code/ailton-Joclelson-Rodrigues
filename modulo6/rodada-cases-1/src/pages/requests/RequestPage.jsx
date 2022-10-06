import InputForm from "../../components/Input/InputForm";
import useForm from "../../Hooks/UseForm";
import { ProductContainer, TitleH3 } from "./styled";

const RequestPage = ({ cart, setCart }) => {
  const { form, onChange, clean } = useForm({ name: "", date: "" });

  const productsCart = cart?.map((product, index) => {
    return (
      <ProductContainer key={index}>
        <p>{product.name}</p>
        <div>
          <p>{`R$: ${product.price.toFixed(2)}`}</p>
          <p>{`Quantidade: ${product.qtyStock}`}</p>
        </div>
        <button onClick={() => removeProduct(product)}>x</button>
      </ProductContainer>
    );
  });

  const removeProduct = (product) => {
    const products = [...cart];

    const newCart = products
      .map((item) => {
        if (item.id === product.id) {
          return {
            ...item,
            qtyStock: item.qtyStock - 1,
            price: (item.price / item.qtyStock) * (item.qtyStock - 1),
          };
        }

        return item;
      })
      .filter((item) => item.qtyStock > 0);

    setCart(newCart);
  };

  return (
    <>
      <TitleH3>Pedidos</TitleH3>
      <form>
        <InputForm
          onChange={onChange}
          value={form.name}
          name={"name"}
          type={"text"}
          label={"Nome do cliente"}
        />

        <InputForm
          onChange={onChange}
          value={form.date}
          name={"date"}
          type={"date"}
          label={""}
        />
      </form>
      {productsCart}
    </>
  );
};
export default RequestPage;
