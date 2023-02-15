import { Product } from "../../utils/types/products.type";
import { useNavigate } from "react-router-dom";
import { ProductSection, ProductContent } from "./styles";
import { FaWindowClose } from "react-icons/fa";

interface CardProps extends Product {}

export function OneProduct({
  id,
  name,
  description,
  price,
  category,
  imageURL,
}: CardProps) {
  const navigate = useNavigate();

  return (
    <>
      <ProductSection>
        <ProductContent>
          <img src={imageURL} alt={name} />
          <h2>{name}</h2>
          <span>{"R$ " + price}</span>
          <p>{description}</p>
        </ProductContent>
        <button onClick={() => navigate("/home")}>
          <FaWindowClose size={25} />
        </button>
      </ProductSection>
    </>
  );
}
