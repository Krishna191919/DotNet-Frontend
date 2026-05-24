import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getOrders, deleteOrders } from "../../services/OrderService";

function OrderList() {
  const [orders, setOrders] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchOrders();
  }, []);

  const fetchOrders = async () => {
    const data = await getOrders();
    setOrders(data);
  };

  const handleDelete = async (id) => {
    await deleteOrders(id);
    fetchOrders();
  };

  return (
    <div>
      <h2>Orders</h2>
      <button onClick={() => navigate("/orders/add")}>Add Order</button>
      {orders.map((o) => (
        <div key={o.orderId}>
          <p>Product: {o.productName}</p>
          <p>Customer: {o.customerName}</p>
          <p>Quantity: {o.quantity}</p>
          <p>Total Price: {o.totalPrice}</p>
          <p>Status: {o.orderStatus}</p>
          <button onClick={() => navigate(`/orders/edit/${o.orderId}`)}>
            Edit
          </button>
          <button onClick={() => handleDelete(o.orderId)}>Delete</button>
        </div>
      ))}
    </div>
  );
}

export default OrderList;
