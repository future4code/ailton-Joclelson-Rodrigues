import InputForm from "../../components/Input/InputForm";
import useForm from "../../Hooks/UseForm";
import { ProductContainer, TitleH3 } from "./styled";

const RequestPage = (props) => {
  const { form, onChange, clean } = useForm({ name: "", date: "" });

  const productsCart = props.cart?.map((product, index) => {
    return (
      <ProductContainer key={index}>
        <p>{product.name}</p>
        <div>
          {/* <p>{`R$: ${product.price}`}</p> */}
          <p>{`Quantidade: ${product.qtyStock}`}</p>
        </div>
        <button>x</button>
      </ProductContainer>
    );
  });

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
