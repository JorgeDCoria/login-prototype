import { useState } from "react";
import { RiMailLine } from "react-icons/ri";
import { Link } from "react-router-dom";
import { toast } from "react-toastify";
export default function ForgetPassword() {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if ([email].includes("")) {
      toast.error("El email es obligatorio", { theme: "colored" });
      return;
    }
    toast.success("Se envio un email a la cuenta ingresada");
  };
  return (
    <div className="bg-white rounded-lg p-8 w-full md:w-96">
      <div className="mb-8">
        <h1 className="text-3xl uppercase font-bold text-center">
          Recuperar Contraseña
        </h1>
      </div>
      <form
        onSubmit={handleSubmit}
        className="bg-white p-8 flex flex-col gap-4"
      >
        {/* *********** email *************** */}
        <div className="relative">
          <RiMailLine className="absolute left-2 top-1/2 -translate-y-1/2 text-gray-500" />
          <input
            type="email"
            name=""
            className="border border-gray-200 px-8 py-2 w-full outline-none rounded-lg "
            id=""
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div>
          <button className="bg-sky-600 text-white w-full py-2 px-4 rounded-lg hover:bg-sky-800 hover:scale-105 transition-all">
            Enviar Instrucciones
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
