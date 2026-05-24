import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { createOrders } from "../../services/OrderService";
import { getProducts } from "../../services/productService";
import { getCustomers } from "../../services/CustomerService";

function AddOrder() {
  const navigate = useNavigate();
  const [products, setProducts] = useState([]);
  const [customers, setCustomers] = useState([]);
  const [form, setForm] = useState({
    productId: "",
    customerId: "",
    quantity: 1,
  });

  useEffect(() => {
    fetchDropdowns();
  }, []);

  const fetchDropdowns = async () => {
    const p = await getProducts();
    const c = await getCustomers();
    setProducts(p);
    setCustomers(c);
  };

  const handleSubmit = async () => {
    await createOrders(form);
    navigate("/orders");
  };

  return (
    <div>
      <h2>Add Order</h2>

      {/* Product dropdown */}
      <select onChange={(e) => setForm({ ...form, productId: e.target.value })}>
        <option value="">Select Product</option>
        {products.map((p) => (
          <option key={p.id} value={p.id}>
            {p.name}
          </option>
        ))}
      </select>

      {/* Customer dropdown */}
      <select
        onChange={(e) => setForm({ ...form, customerId: e.target.value })}
      >
        <option value="">Select Customer</option>
        {customers.map((c) => (
          <option key={c.id} value={c.id}>
            {c.firstName} {c.lastName}
          </option>
        ))}
      </select>

      {/* Quantity */}
      <input
        type="number"
        placeholder="Quantity"
        min="1"
        value={form.quantity}
        onChange={(e) => {
          const val = parseInt(e.target.value);
          if (!isNaN(val)) {
            setForm({ ...form, quantity: Math.max(1, val) });
          }
        }}
      />

      <button onClick={handleSubmit}>Save</button>
      <button onClick={() => navigate("/orders")}>Cancel</button>
    </div>
  );
}

export default AddOrder;
