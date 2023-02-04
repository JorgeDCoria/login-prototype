import { useState } from "react";
import {
  RiMailLine,
  RiLock2Line,
  RiEyeCloseLine,
  RiEyeLine,
} from "react-icons/ri";
export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const handleShowPassword = () => {
    setShowPassword(!showPassword);
  };
  return (
    <div className="bg-white rounded-lg p-8 w-96">
      <div className="mb-10">
        <h1 className="text-3xl uppercase font-bold text-center">
          Iniciar sesion
        </h1>
      </div>
      <form className="bg-white p-8 flex flex-col gap-4">
        <div className="relative">
          <RiMailLine className="absolute left-2 top-1/2 -translate-y-1/2 text-gray-500" />
          <input
            type="email"
            name=""
            className="border border-gray-200 px-8 py-2 w-full outline-none rounded-lg "
            id=""
            placeholder="Email"
          />
        </div>
        <div className="relative">
          <RiLock2Line className="absolute left-2 top-1/2 -translate-y-1/2 text-gray-500" />
          <input
            type={`${!showPassword ? "password" : "text"}`}
            name=""
            className="border border-gray-200 px-8 py-2 w-full outline-none rounded-lg "
            id=""
            placeholder="Password"
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
            Ingresar
          </button>
        </div>
      </form>
    </div>
  );
}
