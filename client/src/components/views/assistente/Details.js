import React from "react";
import { Link } from "react-router-dom";
import { TrashIcon, PencilIcon } from "@heroicons/react/solid";

export default function Details() {
  return (
    <div className=" w-screen  h-auto  bg-gray-100 lg:rounded-l-lg">
      <div className="overflow-auto  bg-gray-100 mx-auto max-w-6xl py-20 px-3 lg:px-24  mb-24">
        <h1 className=" items-center  justify-center text-primary-darkmd:text-center text-5xl font-bold  md:flex mb-6  px-8 pt-6 pb-8  flex flex-col">
          Editar perfil
        </h1>
        <form>
          <div className="overflow-auto bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 flex flex-col">
            <div className="-mx-3 md:flex mb-6">
              <div className="md:w-1/2 px-3 mb-6 md:mb-0">
                <label className="uppercase tracking-wide text-black text-xs font-bold mb-2">
                  Nombre:
                </label>
                <input className="w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3" />
              </div>
              <div className="md:w-1/2 px-3">
                <label className="uppercase tracking-wide text-black text-xs font-bold mb-2">
                  Apellido:
                </label>
                <input className="w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3" />
              </div>
            </div>
            <div className="-mx-3 md:flex mb-6">
              <div className="md:w-full px-3">
                <label className="uppercase tracking-wide text-black text-xs font-bold mb-2">
                  Rut:
                </label>
                <input className="w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3" />
              </div>
              <div className="md:w-full px-3">
                <label className="uppercase tracking-wide text-black text-xs font-bold mb-2">
                  Email:
                </label>
                <input className="w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3" />
              </div>
            </div>
            <div className="-mx-3 md:flex mb-6">
              <div className="md:w-full px-3">
                <label className="uppercase tracking-wide text-black text-xs font-bold mb-2">
                  Teléfono:
                </label>
                <input className="w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3" />
              </div>
              <div className="md:w-full px-3">
                <label className="uppercase tracking-wide text-black text-xs font-bold mb-2">
                  Email:
                </label>
                <input className="w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3" />
              </div>
            </div>

            <div className="-mx-3 md:flex mb-6">
              <div className="md:w-full px-3">
                <label className="uppercase tracking-wide text-black text-xs font-bold mb-2">
                  Teléfono:
                </label>
                <input className="w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3" />
              </div>
              <div className="md:w-full px-3">
                <label className="uppercase tracking-wide text-black text-xs font-bold mb-2">
                  Email:
                </label>
                <input className="w-full bg-gray-200 text-black border border-gray-200 rounded py-3 px-4 mb-3" />
              </div>
            </div>

            <div className="-mx-3 md:flex mt-2">
              <div className="md:w-full px-3 ">
                <button className=" md:w-1/5 bg-gray-900 text-white font-bold py-2 px-4 border-b-4 hover:border-b-2 border-gray-500 hover:border-gray-100 rounded-full">
                  Editar Información
                </button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
