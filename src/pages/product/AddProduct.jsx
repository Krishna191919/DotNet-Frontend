import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createProducts } from "../../services/productService";

function AddProduct() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    name: "",
    description: "",
    price: 0,
    stock: 0,
  });

  const handleSubmit = async () => {
    await createProducts(form);
    navigate("/products");
  };

  return (
    <div>
      <h2>Add Product</h2>
      <input
        placeholder="Name"
        onChange={(e) => setForm({ ...form, name: e.target.value })}
      />
      <input
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
      <button onClick={handleSubmit}>Save</button>
      <button onClick={() => navigate("/products")}>Cancel</button>
    </div>
  );
}

export default AddProduct;
