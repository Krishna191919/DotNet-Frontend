import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getProductsById, updateProducts } from "../../services/productService";

function EditProduct() {
  const navigate = useNavigate();
  const { id } = useParams(); // gets id from URL
  const [form, setForm] = useState({
    name: "",
    description: "",
    price: 0,
    stock: 0,
  });

  // load existing product data
  useEffect(() => {
    fetchProduct();
  }, []);

  const fetchProduct = async () => {
    const data = await getProductById(id);
    setForm(data); // fill form with existing data
  };

  const handleSubmit = async () => {
    await updateProduct(id, form);
    navigate("/products");
  };

  return (
    <div>
      <h2>Edit Product</h2>
      <input
        value={form.name}
        placeholder="Name"
        onChange={(e) => setForm({ ...form, name: e.target.value })}
      />
      <input
        value={form.description}
        placeholder="Description"
        onChange={(e) => setForm({ ...form, description: e.target.value })}
      />
      <input
        placeholder="Price"
        type="number"
        min="0"
        max="10000"
        value={form.price}
        onChange={(e) => {
          const val = parseFloat(e.target.value);
          if (!isNaN(val)) {
            setForm({ ...form, price: Math.max(0, Math.min(10000, val)) });
          }
        }}
      />
      <input
        type="number"
        placeholder="Stock"
        min="0"
        max="100"
        value={form.stock === 0 ? "" : form.stock} // show empty not 0
        onChange={(e) => {
          const val = parseInt(e.target.value);
          if (!isNaN(val)) {
            setForm({ ...form, stock: Math.max(0, Math.min(100, val)) });
          } else {
            setForm({ ...form, stock: 0 }); // reset to 0 if empty
          }
        }}
      />
      <button onClick={handleSubmit}>Update</button>
      <button onClick={() => navigate("/products")}>Cancel</button>
    </div>
  );
}

export default EditProduct;
