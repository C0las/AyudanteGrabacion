import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import {
  assistantUpdateRequest,
  fetchSelectedAssistant,
} from "../../../redux/actions/assistantActions";
import { filterAssistantSelector } from "../../../redux/selectors/filter";
import swal from "sweetalert";

const PaymentDetails = (props) => {
  const dispatch = useDispatch();
  let history = useHistory();
  const { id } = props.match.params;

  const assistant = useSelector(filterAssistantSelector);

  const { name, lastName, rut, email, fono } = assistant;
  const daysAvailable = assistant.daysAvailable;
  const address = assistant.address;
  const paymentDetails = assistant.paymentDetails || {};

  const mostrar = () => {
    swal({
      title: "titulo",
      text: "texto de pana",
      icon: "success",
      button: "Aceptar",
      timer: "600",
    });
  };
  const assistantRequest = {
    name: name,
    lastName: lastName,
    rut: rut,
    email: email,
    fono: fono,
    daysAvailable: daysAvailable,
    address: address,
    paymentDetails: paymentDetails,
  };

  const [payment, setPayment] = useState({
    accountNumber: "",
    accountType: "",
    bankName: "",
  });

  const update = (e) => {
    e.preventDefault();
    var list = payment;
    assistantRequest.paymentDetails = list;
    dispatch(assistantUpdateRequest(id, assistantRequest));

    setPayment({ accountNumber: "", accountType: "", bankName: "" });
    mostrar();
    history.push("/");
  };

  const handleChange = (e) => {
    setPayment({
      ...payment,
      [e.target.name]: e.target.value,
    });
  };

  useEffect(() => {
    async function asyncFetch() {
      dispatch(fetchSelectedAssistant(id));
    }

    asyncFetch();
  }, [dispatch, id]);

  return (
    <div className="flex flex-col items-center justify-center gap-10 p-3 lg:p-10">
      <form
        onSubmit={(e) => update(e)}
        className="flex flex-col items-center bg-white shadow-md rounded p-10"
      >
        <p>
          <h1 className="flex items-center justify-start text-2xl font-bold p-3 ">
            Dirección Particular
          </h1>
        </p>
        <div className="grid grid-cols-2 gap-5">
          <div className="flex flex-col gap-3">
            <label className="uppercase tracking-wide text-black text-xs font-bold">
              Número de cuenta:
            </label>
            <input
              defaultValue={paymentDetails.accountNumber}
              className=" bg-gray-200 text-black border border-gray-200 rounded h-10  w-full pl-3"
              onChange={(e) => handleChange(e)}
              name="accountNumber"
            />
          </div>
          <div className="flex flex-col gap-3">
            <label className="uppercase tracking-wide text-black text-xs font-bold">
              Tipo de cuenta:
            </label>
            <select
              defaultValue={paymentDetails.accountType}
              className="bg-gray-200 border border-gray-200 text-black text-xs rounded h-10 pl-3 w-full "
              onChange={(e) => handleChange(e)}
              name="accountType"
            >
              <option>CORRIENTE</option>
              <option>VISTA</option>
              <option>CUENTA RUT</option>
              <option>AHORRO</option>
            </select>
          </div>
          <div className="flex flex-col gap-3">
            <label className="uppercase tracking-wide text-black text-xs font-bold">
              Banco:
            </label>
            <select
              defaultValue={paymentDetails.bankName}
              className="bg-gray-200 border border-gray-200 text-black text-xs rounded h-10 pl-3 w-full "
              onChange={(e) => handleChange(e)}
              name="bankName"
            >
              <option>BANCO BCI</option>
              <option>BANCO BBVA</option>
              <option>BANCO BICE</option>
              <option>BANCO CORP BANCA</option>
              <option>BANCO CONSORCIO</option>
              <option>BANCO COPEUCH</option>
              <option>BANCO ESTADO</option>
              <option>BANCO FALLABELLA</option>
              <option>BANCO ITAU</option>
              <option>BANCO INTERNACIONAL</option>
              <option>BANCO PARIS</option>
              <option>BANCO RIPLEY</option>
              <option>BANCO SANTANDER</option>
              <option>BANCO SCOTIABANK</option>
              <option>BANCO SECURITY</option>
              <option>BANCO CHILE/EDWARDS/CREDICHILE</option>
              <option>BANCO DEL DESARROLLO</option>
              <option>HSBC BANK</option>
              <option>PREPAGO LOS HEROES</option>
              <option>TENPO PREPAGO S.A.</option>
            </select>
          </div>
        </div>
        <p>
          <h1 className="flex items-center justify-start text-2xl font-bold p-3">
            Información Bancaria
          </h1>
        </p>

        <div className="grid grid-cols-2 gap-5">
          <div className="flex flex-col gap-3">
            <label className="uppercase tracking-wide text-black text-xs font-bold">
              Número de cuenta:
            </label>
            <input
              defaultValue={paymentDetails.accountNumber}
              className=" bg-gray-200 text-black border border-gray-200 rounded h-10  w-full pl-3"
              onChange={(e) => handleChange(e)}
              name="accountNumber"
            />
          </div>
          <div className="flex flex-col gap-3">
            <label className="uppercase tracking-wide text-black text-xs font-bold">
              Tipo de cuenta:
            </label>
            <select
              defaultValue={paymentDetails.accountType}
              className="bg-gray-200 border border-gray-200 text-black text-xs rounded h-10 pl-3 w-full "
              onChange={(e) => handleChange(e)}
              name="accountType"
            >
              <option>CORRIENTE</option>
              <option>VISTA</option>
              <option>CUENTA RUT</option>
              <option>AHORRO</option>
            </select>
          </div>
          <div className="flex flex-col gap-3">
            <label className="uppercase tracking-wide text-black text-xs font-bold">
              Banco:
            </label>
            <select
              defaultValue={paymentDetails.bankName}
              className="bg-gray-200 border border-gray-200 text-black text-xs rounded h-10 pl-3 w-full "
              onChange={(e) => handleChange(e)}
              name="bankName"
            >
              <option>BANCO BCI</option>
              <option>BANCO BBVA</option>
              <option>BANCO BICE</option>
              <option>BANCO CORP BANCA</option>
              <option>BANCO CONSORCIO</option>
              <option>BANCO COPEUCH</option>
              <option>BANCO ESTADO</option>
              <option>BANCO FALLABELLA</option>
              <option>BANCO ITAU</option>
              <option>BANCO INTERNACIONAL</option>
              <option>BANCO PARIS</option>
              <option>BANCO RIPLEY</option>
              <option>BANCO SANTANDER</option>
              <option>BANCO SCOTIABANK</option>
              <option>BANCO SECURITY</option>
              <option>BANCO CHILE/EDWARDS/CREDICHILE</option>
              <option>BANCO DEL DESARROLLO</option>
              <option>HSBC BANK</option>
              <option>PREPAGO LOS HEROES</option>
              <option>TENPO PREPAGO S.A.</option>
            </select>
          </div>
        </div>
        <button
          type="submit"
          className="bg-gray-900 text-white font-bold border-b-4 hover:border-b-2 border-gray-500 hover:border-gray-100 rounded-full h-10 mt-6"
        >
          Guardar información
        </button>
      </form>
    </div>
  );
};

export default PaymentDetails;
