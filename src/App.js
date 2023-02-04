import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
//layouts
import AuthLayout from "./layouts/auth/AuthLayout";
//pages
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import ForgetPassword from "./pages/auth/ForgetPassword";
import ChangePassword from "./pages/auth/ChangePassword";
import NotFound from "./pages/NotFound";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<AuthLayout />}>
          {/* al poner index en router indicamos que es la ruta por default */}
          <Route index element={<Login />} />
          <Route path="register" element={<Register />}></Route>
          <Route path="forget-password" element={<ForgetPassword />}></Route>
          <Route
            path="restore-password/:token"
            element={<ChangePassword />}
          ></Route>
          <Route path="register" element={<Register />}></Route>
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
