import { Routes, Route } from "react-router-dom";
import Dashboard from "./components/admin/Dashboard";
import Home from "./components/user/Home";
import AdminLogin from "./components/admin/Login";
import Register from "./components/admin/Register";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<Dashboard />} />
        <Route path="/admin/login" element={<AdminLogin />} />
        <Route path="/admin/register" element={ <Register /> } />
      </Routes>
    </>
  );
}

export default App;
