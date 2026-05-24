import OrderList from "./pages/order/OrderList";
import AddOrder from "./pages/order/AddOrder";
import EditOrder from "./pages/Order/EditOrder";
import CustomerList from "./pages/customer/CustomerList";
import AddCustomer from "./pages/customer/AddCustomer";
import EditCustomer from "./pages/customer/EditCustomer";
import ProductList from "./pages/Product/ProductList";
import AddProduct from "./pages/Product/AddProduct";
import EditProduct from "./pages/Product/EditProduct";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<h1>Home</h1>} />
        <Route path="/products" element={<ProductList />} />
        <Route path="/products/add" element={<AddProduct />} />
        <Route path="/products/edit/:id" element={<EditProduct />} />
        <Route path="/orders" element={<OrderList />} /> // ← replace h1 with
        OrderList
        <Route path="/orders/add" element={<AddOrder />} />
        <Route path="/orders/edit/:id" element={<EditOrder />} />
        <Route path="/customers" element={<CustomerList />} /> // ← replace h1
        with CustomerList
        <Route path="/customers/add" element={<AddCustomer />} />
        <Route path="/customers/edit/:id" element={<EditCustomer />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
