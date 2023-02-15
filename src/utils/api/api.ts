import { Product, ProductInput } from "../types/products.type";
import axios from "axios";

axios.defaults.baseURL = "https://mod6-project2-ecom20-back-production.up.railway.app/products";
axios.defaults.headers.post["Content-Type"] = "application/json";

export const api = {
  getProducts: async (): Promise<Product[] | undefined> => {
    try {
      const products = await axios.get("/all-products");
      return products.data;
    } catch (err: any) {
      alert("Erro no servidor");
      throw new Error(err);
    }
  },

  createProduct: async (
    product: ProductInput
  ): Promise<ProductInput | undefined> => {
    try {
      const newProduct = await axios.post("/create", product);
      console.log(newProduct);
      return newProduct.data;
    } catch (err: any) {
      alert("Erro ao criar o produto");
      throw new Error(err);
    }
  },

  deleteProduct: async (productId: string): Promise<boolean | undefined> => {
    try {
      const toDeleted = await axios.delete("/delete/" + productId);
      if (toDeleted.status === 200) {
        return true;
      }
    } catch (err: any) {
      console.log(productId);
      alert("Erro ao deletar o produto");
    }
  },

  updateProduct: async (
    product: Product
  ): Promise<ProductInput | undefined> => {
    try {
      const updatedProduct = await axios.put("/update", product);
      return updatedProduct.data;
    } catch (err: any) {
      alert("Erro ao atualizar o produto");
      throw new Error(err);
    }
  },

  getProductById: async (productId: string): Promise<Product> => {
    try {
      const product = await axios.get("/product/" + productId);
      return product.data;
    } catch (err: any) {
      alert("Produto não encontrado");
      throw new Error(err);
    }
  },
};
