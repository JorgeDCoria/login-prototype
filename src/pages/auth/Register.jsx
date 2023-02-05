import { useState } from "react";
import {
  RiMailLine,
  RiLock2Line,
  RiEyeCloseLine,
  RiEyeLine,
  RiUser3Line,
} from "react-icons/ri";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [input, setInput] = useState({
    name: "",
    lastname: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (
      [
        input.email,
        input.password,
        input.name,
        input.lastname,
        input.confirmPassword,
      ].includes("")
    ) {
      toast.error("Se detecto campo vacio", { theme: "colored" });
      return;
    }
    if (input.password.length < 6) {
      toast.error("El password debe contener al menos 6 caracteres", {
        theme: "colored",
      });
      return;
    }
    if (input.password !== input.confirmPassword) {
      toast.error("Los passwords no coinciden");
    }
    toast.success("campos validos", { theme: "colored " });
  };
  return (
    <div className="bg-white rounded-lg p-8 w-full md:w-96">
      <div className="mb-2">
        <h1 className="text-3xl uppercase font-bold text-center">
          Registrarse
        </h1>
      </div>
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 flex flex-col gap-4"
      >
        {/* *********** name *************** */}
        <div className="relative">
          <RiUser3Line className="absolute left-2 top-1/2 -translate-y-1/2 text-gray-500" />
          <input
            type="text"
            name="name"
            className="border border-gray-200 px-8 py-2 w-full outline-none rounded-lg "
            id=""
            placeholder="Name(s)"
            value={input.name}
            onChange={(e) => handleChange(e)}
          />
        </div>

        {/* *********** lastname *************** */}
        <div className="relative">
          <RiUser3Line className="absolute left-2 top-1/2 -translate-y-1/2 text-gray-500" />
          <input
            type="text"
            name="lastname"
            className="border border-gray-200 px-8 py-2 w-full outline-none rounded-lg "
            id=""
            placeholder="Apellido"
            value={input.lastname}
            onChange={(e) => handleChange(e)}
          />
        </div>
        {/* *********** email *************** */}
        <div className="relative">
          <RiMailLine className="absolute left-2 top-1/2 -translate-y-1/2 text-gray-500" />
          <input
            type="email"
            name="email"
            className="border border-gray-200 px-8 py-2 w-full outline-none rounded-lg "
            id=""
            placeholder="Email"
            value={input.email}
            onChange={(e) => handleChange(e)}
          />
        </div>

        {/* *********** password *************** */}
        <div className="relative">
          <RiLock2Line className="absolute left-2 top-1/2 -translate-y-1/2 text-gray-500" />
          <input
            type={`${!showPassword ? "password" : "text"}`}
            name="password"
            className="border border-gray-200 px-8 py-2 w-full outline-none rounded-lg "
            id=""
            placeholder="Password"
            value={input.password}
            onChange={(e) => handleChange(e)}
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
        {/* ***********confirm password *************** */}
        <div className="relative">
          <RiLock2Line className="absolute left-2 top-1/2 -translate-y-1/2 text-gray-500" />
          <input
            type={`${!showPassword ? "password" : "text"}`}
            name="confirmPassword"
            className="border border-gray-200 px-8 py-2 w-full outline-none rounded-lg "
            id=""
            placeholder="Confirm Password"
            value={input.confirmPassword}
            onChange={(e) => handleChange(e)}
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
            Crear Cuenta
          </button>
        </div>
      </form>
      <div className="text-center">
        ¿Ya tienes una Cuenta?{" "}
        <Link
          className="font-bold text-sky-700 hover:underline transition-all"
          to={"/"}
        >
          Login
        </Link>
      </div>
    </div>
  );
}
