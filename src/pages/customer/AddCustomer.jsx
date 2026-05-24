import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createCustomers } from "../../services/CustomerService";

function AddCustomer() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    address: "",
  });

  const handleSubmit = async () => {
    await createCustomers(form);
    navigate("/customers");
  };

  return (
    <div>
      <h2>Add Customer</h2>
      <input
        placeholder="First Name"
        onChange={(e) => setForm({ ...form, firstName: e.target.value })}
      />
      <input
        placeholder="Last Name"
        onChange={(e) => setForm({ ...form, lastName: e.target.value })}
      />
      <input
        placeholder="Email"
        onChange={(e) => setForm({ ...form, email: e.target.value })}
      />
      <input
        placeholder="Phone"
        onChange={(e) => setForm({ ...form, phoneNumber: e.target.value })}
      />
      <input
        placeholder="Address"
        onChange={(e) => setForm({ ...form, address: e.target.value })}
      />
      <button onClick={handleSubmit}>Save</button>
      <button onClick={() => navigate("/customers")}>Cancel</button>
    </div>
  );
}

export default AddCustomer;
