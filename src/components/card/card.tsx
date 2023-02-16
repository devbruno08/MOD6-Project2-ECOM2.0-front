import { useNavigate } from "react-router-dom";
import { api } from "../../utils/api/api";
import { Product } from "../../utils/types/products.type";
import { CardContent, CardSection, ButtonSection } from "./styles";
import { FaCartPlus } from "react-icons/fa"

interface CardProps extends Product {
  update: () => void;
}

export function Card({
  id,
  name,
  description,
  price,
  category,
  imageURL,
  update,
}: CardProps) {
  const navigate = useNavigate();

  async function DeleteCard() {
    const toDeleted = await api.deleteProduct(id);
    if (toDeleted) {
      update();
    }
  }

  return (
    <CardSection>
      <CardContent>
        <img src={imageURL} alt={name} />
        <h2>{name}</h2>
        <span>{"R$ " + price}</span>
        <p>{description}</p>
      </CardContent>
      <ButtonSection>
        <button
          onClick={() => {
            navigate("/update/" + id);
          }}
        >
          Update
        </button>
        <button onClick={DeleteCard}>Delete</button>
        <button
          onClick={() => {
            navigate("/product/" + id);
          }}
        >
          See +
        </button>
        <button onClick={() => {
          navigate("/shoppingcart/" + id)
        }}>
          <FaCartPlus size={17}/>
        </button>
      </ButtonSection>
    </CardSection>
  );
}
