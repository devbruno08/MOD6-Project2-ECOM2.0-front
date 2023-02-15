import { api } from "../../utils/api/api";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { Product } from "../../utils/types/products.type";
import { OneProduct } from "./oneproduct";

export function ProductId() {
  const { id } = useParams();

  const [oneProduct, setProduct] = useState<Product>({
    id: "",
    name: "",
    description: "",
    imageURL: "",
    price: 0,
    category: "",
  });

  useEffect(() => {
    if (id) {
      api.getProductById(id).then((data) => {
        setProduct(data);
      });
    }
  }, []);

  async function getProductById(id: string) {
    const product = await api.getProductById(id);
    setProduct(product);
  }

  return (
    <>
      <section>
        <OneProduct
          id={oneProduct?.id}
          description={oneProduct.description}
          imageURL={oneProduct.imageURL}
          name={oneProduct.name}
          price={oneProduct.price}
          category={oneProduct.category}
        />
      </section>
    </>
  );
}
