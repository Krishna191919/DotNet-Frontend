import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import {
  getCustomersById,
  updateCustomers,
} from "../../services/CustomerService";

function EditCustomer() {
  const navigate = useNavigate();
  const { id } = useParams();
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    address: "",
  });

  useEffect(() => {
    fetchCustomer();
  }, []);

  const fetchCustomer = async () => {
    const data = await getCustomersById(id);
    setForm(data);
  };

  const handleSubmit = async () => {
    await updateCustomers(id, form);
    navigate("/customers");
  };

  return (
    <div>
      <h2>Edit Customer</h2>
      <input
        value={form.firstName}
        placeholder="First Name"
        onChange={(e) => setForm({ ...form, firstName: e.target.value })}
      />
      <input
        value={form.lastName}
        placeholder="Last Name"
        onChange={(e) => setForm({ ...form, lastName: e.target.value })}
      />
      <input
        value={form.email}
        placeholder="Email"
        onChange={(e) => setForm({ ...form, email: e.target.value })}
      />
      <input
        value={form.phoneNumber}
        placeholder="Phone"
        onChange={(e) => setForm({ ...form, phoneNumber: e.target.value })}
      />
      <input
        value={form.address}
        placeholder="Address"
        onChange={(e) => setForm({ ...form, address: e.target.value })}
      />
      <button onClick={handleSubmit}>Update</button>
      <button onClick={() => navigate("/customers")}>Cancel</button>
    </div>
  );
}

export default EditCustomer;
