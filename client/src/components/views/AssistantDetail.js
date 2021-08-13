import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import {
  fetchSelectedAssistant,
  removeSelectedAssistant,
} from "../../redux/actions/assistantActions";
import AssistantDetailLoading from "../common/AssistantDetailLoading";

const AssistantDetail = (props) => {
  const assistant = useSelector((state) => state.assistant.assistant);
  const address = useSelector((state) => state.assistant.assistant.address);
  const paymentDetails = useSelector(
    (state) => state.assistant.assistant.paymentDetails
  );
  const loading = useSelector((state) => state.assistant.loading);
  const { id } = useParams();
  const dispatch = useDispatch();

  console.log(id);

  const { name, lastName, rut, mail, fono } = assistant;
  const { street, city, commune } = address || {};
  const { accountNumber, bankName, accountType } = paymentDetails || {};
  const { img, titleName } = props.location.state;

  useEffect(() => {
    if (id && id !== "") dispatch(fetchSelectedAssistant(id));
    return () => {
      dispatch(removeSelectedAssistant());
    };
  }, [dispatch, id]);

  return (
    <>
      {loading ? (
        <AssistantDetailLoading />
      ) : (
        <div className="flex flex-col items-center p-10 w-full  gap-5">
          <div className="flex flex-row items-center w-full">
            <h1 className="text-white text-xl font-semibold w-2/12">
              Perfil de Usuario
            </h1>
            <span className="w-11/12 h-0 border border-white" />
          </div>

          <div className="flex flex-row items-center bg-white w-full rounded-md">
            <div className="flex flex-col items-center p-10 gap-2 border-r-2 border-gray-300 w-3/12">
              <div className="flex items-center justify-center rounded-full w-20 h-20 bg-primary">
                <span className="text-2xl font-bold text-white">{img}</span>
              </div>
              <h1 className="text-gray-800 font-bold">{titleName}</h1>
            </div>

            <div className="flex flex-col p-10 text-xs w-10/12 divide-y-2 divide-gray-200">
              <div className="flex flex-col pb-5 gap-3">
                <h2 className="text-gray-400">Datos de Contacto</h2>
                <div className="grid grid-cols-2 gap-x-10 gap-y-3 items-center ">
                  <div className="flex flex-row items-center gap-2">
                    <h3 className="text-gray-500 font-medium">
                      Nombre Completo:
                    </h3>
                    <p className="font-semibold text-gray-700">
                      {name} {lastName}
                    </p>
                  </div>
                  <div className="flex flex-row items-center gap-2">
                    <h3 className="text-gray-500 font-medium">Rut:</h3>
                    <p className="font-semibold text-gray-700">{rut}</p>
                  </div>
                  <div className="flex flex-row items-center gap-2">
                    <h3 className="text-gray-500 font-medium">
                      Correo Electronico:
                    </h3>
                    <p className="font-semibold text-gray-700">{mail}</p>
                  </div>
                  <div className="flex flex-row items-center gap-2">
                    <h3 className="text-gray-500 font-medium">Telefono:</h3>
                    <p className="font-semibold text-gray-700">+56 {fono}</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col pt-5 pb-5 gap-3">
                <h2 className="text-gray-400">Dirección Particular</h2>
                <div className="grid grid-cols-3 items-center gap-10">
                  <div className="flex flex-row items-center gap-2">
                    <h3 className="text-gray-500 font-medium">Dirección:</h3>
                    <p className="font-semibold text-gray-700">{street}</p>
                  </div>
                  <div className="flex flex-row items-center gap-2">
                    <h3 className="text-gray-500 font-medium">Ciudad:</h3>
                    <p className="font-semibold text-gray-700">{city}</p>
                  </div>
                  <div className="flex flex-row items-center gap-2">
                    <h3 className="text-gray-500 font-medium">Comuna:</h3>
                    <p className="font-semibold text-gray-700">{commune}</p>
                  </div>
                </div>
              </div>
              <div className="flex flex-col pt-5 gap-3">
                <h2 className="text-gray-400">Datos Cuenta Bancaria</h2>
                <div className="grid grid-cols-3  items-center gap-10">
                  <div className="flex flex-row items-center gap-2">
                    <h3 className="text-gray-500 font-medium">
                      Número de cuenta:
                    </h3>
                    <p className="font-semibold text-gray-700">
                      {accountNumber}
                    </p>
                  </div>
                  <div className="flex flex-row items-center gap-2">
                    <h3 className="text-gray-500 font-medium">Banco:</h3>
                    <p className="font-semibold text-gray-700">{bankName}</p>
                  </div>
                  <div className="flex flex-row items-center gap-2">
                    <h3 className="text-gray-500 font-medium">
                      Tipo de Cuenta:
                    </h3>
                    <p className="font-semibold text-gray-700">{accountType}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div></div>
          </div>
        </div>
      )}
    </>
  );
};

export default AssistantDetail;
