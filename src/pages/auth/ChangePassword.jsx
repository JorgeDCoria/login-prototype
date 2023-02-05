import { useState } from "react";
import {
  RiMailLine,
  RiLock2Line,
  RiEyeCloseLine,
  RiEyeLine,
} from "react-icons/ri";
import { Link, useParams, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
export default function ChangePassword() {
  const [showPassword, setShowPassword] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState("");
  const [password, setPassword] = useState("");
  const { token } = useParams();
  const navigate = useNavigate();
  if (token != "12345") {
    navigate("/");
  }
  console.log(token);
  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if ([confirmPassword, password].includes("")) {
      toast.error("Se detecto campo vacio", { theme: "colored" });
      return;
    }
    if (password.length < 6) {
      toast.error("El password debe contener al menos 6 caracteres", {
        theme: "colored",
      });
      return;
    }
    if (password != confirmPassword) {
      toast.error("Las contraseñas no coiciden", { theme: "colored" });
      return;
    }
    toast.success("campos validos", { theme: "colored " });
  };
  return (
    <div className="bg-white rounded-lg p-8 w-full md:w-96">
      <div className="mb-8">
        <h1 className="text-3xl uppercase font-bold text-center">
          Actualizar contraseña
        </h1>
      </div>
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 flex flex-col gap-4"
      >
        {/* *********** password *************** */}
        <div className="relative">
          <RiLock2Line className="absolute left-2 top-1/2 -translate-y-1/2 text-gray-500" />
          <input
            type={`${!showPassword ? "password" : "text"}`}
            name=""
            className="border border-gray-200 px-8 py-2 w-full outline-none rounded-lg "
            id=""
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          {!showPassword ? (
            <RiEyeLine
              onClick={() => handleShowPassword()}
              className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500 hover:cursor-pointer"
            />
          ) : (
            <RiEyeCloseLine
              onClick={handleShowPassword}
              className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500 hover:cursor-pointer"
            />
          )}
        </div>
        {/* *********** confirm password *************** */}
        <div className="relative">
          <RiLock2Line className="absolute left-2 top-1/2 -translate-y-1/2 text-gray-500" />
          <input
            type={`${!showPassword ? "password" : "text"}`}
            name="confirmPassword"
            className="border border-gray-200 px-8 py-2 w-full outline-none rounded-lg "
            id=""
            placeholder="Confirm Password"
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
          />
          {!showPassword ? (
            <RiEyeLine
              onClick={() => handleShowPassword()}
              className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500 hover:cursor-pointer"
            />
          ) : (
            <RiEyeCloseLine
              onClick={handleShowPassword}
              className="absolute right-2 top-1/2 -translate-y-1/2 text-gray-500 hover:cursor-pointer"
            />
          )}
        </div>

        <div>
          <button className="bg-sky-600 text-white w-full py-2 px-4 rounded-lg hover:bg-sky-800 hover:scale-105 transition-all">
            Restablecer Contraseña
          </button>
        </div>
      </form>

      <div className="text-center">
        ¿No tienes una Cuenta?{" "}
        <Link
          className="font-bold text-sky-700 hover:underline transition-all"
          to={"/register"}
        >
          Registrate
        </Link>
      </div>
    </div>
  );
}
