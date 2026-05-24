import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getProducts, deleteProducts } from "../../services/productService";

function ProductList() {
  const [products, setProducts] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = async () => {
    const data = await getProduct();
    setProducts(data);
  };

  const handleDelete = async (id) => {
    await deleteProduct(id);
    fetchProducts();
  };

  return (
    <div>
      <h1>Product List</h1>
      <button onClick={() => navigate("/products/add")}>Add Product</button>

      {products.map((product) => (
        <div key={product.id}>
          <p>{product.name}</p>
          <p>{product.description}</p>
          <p>{product.price}</p>
          <p>{product.stock}</p>
          <button onClick={() => navigate(`/products/edit/${product.id}`)}>
            Edit
          </button>
          <button onClick={() => handleDelete(product.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}

export default ProductList;
