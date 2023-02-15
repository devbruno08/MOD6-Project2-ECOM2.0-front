import { FormEvent, useState, useEffect } from "react";
import { FormComponent } from "./styles";
import { Product, ProductInput } from "../../utils/types/products.type";
import { api } from "../../utils/api/api";
import { useParams, useNavigate } from "react-router-dom";

export function Update() {
  const navigate = useNavigate();
  const [product, setProduct] = useState<Product>();
  const { id } = useParams();

  useEffect(() => {
    if (id) {
      api.getProductById(id).then((data) => {
        setProduct(data);
      });
    }
  }, []);

  async function getProductById(id: string) {
    if (id) {
      const product = await api.getProductById(id);
      setProduct(product);
    }
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const newProduct: ProductInput = {
      name: e.currentTarget.productName.value,
      description: e.currentTarget.productDescription.value,
      price: parseFloat(e.currentTarget.productPrice.value),
      category: e.currentTarget.productCategory.value,
      imageURL: e.currentTarget.productImage.value,
    };

    let ProductResponse;
    if (id) {
      const productToUpdate = { ...newProduct, id: id };
      ProductResponse = await api.updateProduct(productToUpdate);
      navigate("/");
    }
  }

  return (
    <FormComponent>
      <form onSubmit={handleSubmit}>
        <h2> Product Update</h2>
        <label>Product Name:</label>
        <input
          defaultValue={product?.name}
          type="text"
          name="productName"
          required
        ></input>
        <label>Product Description:</label>
        <input
          defaultValue={product?.description}
          type="text"
          name="productDescription"
          required
        ></input>
        <label>Product Price:</label>
        <input
          defaultValue={product?.price}
          type="number"
          name="productPrice"
          step="0.01"
          required
        ></input>
        <label>Product Category:</label>
        <input
          defaultValue={product?.category}
          type="text"
          name="productCategory"
          required
        ></input>
        <label>Product Image:</label>
        <input
          defaultValue={product?.imageURL}
          type="text"
          name="productImage"
          required
        ></input>
        <button type="submit">Submit</button>
      </form>
    </FormComponent>
  );
}
