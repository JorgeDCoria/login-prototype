import { Outlet } from "react-router-dom";
export default function AuthLayout() {
  return (
    <div className="bg-red-200 min-h-screen flex items-center justify-center">
      hola que tal
      <Outlet />
    </div>
  );
}
