import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getOrdersById, updateOrders } from "../../services/OrderService";

function EditOrder() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [form, setForm] = useState({ quantity: 1 });

  useEffect(() => {
    fetchOrder();
  }, []);

  const fetchOrder = async () => {
    const data = await getOrdersById(id);
    setForm({ quantity: data.quantity });
  };

  const handleSubmit = async () => {
    await updateOrders(id, form);
    navigate("/orders");
  };

  return (
    <div>
      <h2>Edit Order</h2>
      <input
        type="number"
        min="1"
        value={form.quantity}
        onChange={(e) => {
          const val = parseInt(e.target.value);
          if (!isNaN(val)) {
            setForm({ quantity: Math.max(1, val) });
          }
        }}
      />
      <button onClick={handleSubmit}>Update</button>
      <button onClick={() => navigate("/orders")}>Cancel</button>
    </div>
  );
}

export default EditOrder;
