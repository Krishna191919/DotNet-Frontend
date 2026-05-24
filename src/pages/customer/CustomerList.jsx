import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { getCustomers, deleteCustomers } from "../../services/CustomerService";

function CustomerList() {
  const [customers, setCustomers] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchCustomers();
  }, []);

  const fetchCustomers = async () => {
    const data = await getCustomers();
    setCustomers(data);
  };

  const handleDelete = async (id) => {
    await deleteCustomers(id);
    fetchCustomers();
  };

  return (
    <div>
      <h2>Customers</h2>
      <button onClick={() => navigate("/customers/add")}>Add Customer</button>
      {customers.map((c) => (
        <div key={c.id}>
          <p>
            Name: {c.firstName} {c.lastName}
          </p>
          <p>Email: {c.email}</p>
          <p>Phone: {c.phoneNumber}</p>
          <button onClick={() => navigate(`/customers/edit/${c.id}`)}>
            Edit
          </button>
          <button onClick={() => handleDelete(c.id)}>Delete</button>
        </div>
      ))}
    </div>
  );
}

export default CustomerList;
