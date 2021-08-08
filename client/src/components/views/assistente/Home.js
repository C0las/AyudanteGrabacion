import React from "react";
import { Link } from "react-router-dom";
import { TrashIcon, PencilIcon } from "@heroicons/react/solid";
import { useSelector } from "react-redux";
import { idAssistant } from "../../../redux/selectors/auth";

export default function Home() {
  const assistant_id = useSelector(idAssistant);
  console.log(assistant_id);
  return (
    <div className="w-screen  h-screen  bg-gray-100 lg:rounded-l-lg">
      <div className="w-12/12 items-center justify-center text-center bg-white-400 ">
        <div className=" items-center justify-center flex-row  bg-blue-200 rounded-md mt-5 p-5 ">
          <div className="items-center justify-center  flex flex-col ml-3">
            <h1
              className=" items-center  justify-center text
            -primary-darkmd:text-center text-5xl font-bold"
            >
              ¡Bienvenido!
            </h1>
          </div>
        </div>
      </div>
      <div className="w-1/4 p-2 text-center bg-blue-500">
        <div className="flex flex-col items-center justify-center rounded-md gap-3 p-3 shadow-md border border-gray-100 ">
          <div className="flex items-center justify-end gap-2 w-full text-gray-400">
            <button className="flex items-center justify-center rounded-full border border-dashed border-gray-400 bg-transparent w-6 h-6">
              <PencilIcon className="h-4 w-4 hover:text-green-600" />
            </button>
            <button className="flex items-center justify-center rounded-full border border-dashed border-gray-400 bg-transparent w-6 h-6">
              <TrashIcon className="h-4 w-4 hover:text-red-600" />
            </button>
          </div>
          <div className="flex items-center justify-center rounded-full w-20 h-20 bg-primary">
            <span className="text-2xl font-bold text-white"></span>
          </div>
          <div className="flex flex-col items-center gap-1">
            <h1 className="font-semibold"></h1>
            <p className="text-xs font-light"></p>
          </div>
          <Link to="">
            <button className="text-xs text-white font-medium border-2 bg-primary-light rounded-2xl p-2">
              VER DETALLES
            </button>
          </Link>
        </div>
      </div>
      <div className="w-1/4 p-2 text-center bg-blue-600">.w-1/4</div>
      <div className="w-1/4 h-full p-2  text-center bg-blue-600">.w-1/4</div>
    </div>
  );
}
