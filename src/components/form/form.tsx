import { FormEvent } from "react";
import { ProductInput } from "../../utils/types/products.type";
import { api } from "../../utils/api/api";
import { FormComponent } from "./styles";

interface FormProps {
  handleModal: () => void;
  update: () => void;
}

export function Form({ handleModal, update }: FormProps) {
  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const newProduct: ProductInput = {
      name: e.currentTarget.productName.value,
      description: e.currentTarget.productDescription.value,
      price: parseFloat(e.currentTarget.productPrice.value),
      category: e.currentTarget.productCategory.value,
      imageURL: e.currentTarget.productImage.value,
    };

    const product = await api.createProduct(newProduct);
    if (product) {
      console.log(product);
      update();
      handleModal();
    }
  }

  return (
    <FormComponent>
      <form onSubmit={handleSubmit}>
        <h2>Create Product</h2>
        <label>Product Name:</label>
        <input type="text" name="productName" required></input>
        <label>Product Description:</label>
        <input type="text" name="productDescription" required></input>
        <label>Product Price:</label>
        <input type="number" name="productPrice" step="0.01" required></input>
        <label>Product Category:</label>
        <input type="text" name="productCategory" required></input>
        <label>Product Image:</label>
        <input type="text" name="productImage" required></input>
        <button type="submit">Submit</button>
      </form>
    </FormComponent>
  );
}
