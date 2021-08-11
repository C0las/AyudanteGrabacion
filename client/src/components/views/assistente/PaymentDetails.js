import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { withRouter } from "react-router-dom";
import axios from "axios";

const PaymentDetails = (props) => {
  const { id } = props.match.params;

  const [payment, setPayment] = useState({
    data: {},
    paymentDetails: { bankName: "", accountType: "", accountNumber: "" },
  });

  console.log(payment);
  const handleChange = (e) => {
    setPayment({
      ...payment.paymentDetails,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    updatePayment();
  };

  const updatePayment = async () => {
    let updateNew = { ...payment.paymentDetails };
    let list = payment.data;
  };
  /*list.push(updateNew);
    await axios
      .put(`https://api-ayudantes.herokuapp.com/api/assistant/${id}`, list)
      .then((res) => {
        if (res.data.messsage) {
          props.history.push("/");
        }
      });
  };*/

  useEffect(() => {
    const getPayment = () => {
      axios
        .get(`https://api-ayudantes.herokuapp.com/api/assistant/${id}`)
        .then((res) => {
          if (res.data.name) {
            console.log(res.data);
            setPayment({ ...payment, data: res.data });
          } else {
            alert("no funciona");
          }
        });
    };
    getPayment();
  }, [id]);

  return (
    <div className="flex flex-col items-center justify-center gap-5 px-5">
      <h1 className="flex items-center justify-center text-2xl font-bold">
        Información Bancaria
      </h1>
      <form
        onSubmit={(e) => handleSubmit(e, id)}
        className="grid grid-cols-2 content-center items-center bg-white shadow-md rounded p-10 gap-5"
      >
        <div className="flex flex-col gap-3">
          <label className="uppercase tracking-wide text-black text-xs font-bold">
            Número de cuenta:
          </label>
          <input
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
            className="bg-gray-200 border border-gray-200 text-black text-xs rounded h-10 pl-3 w-full "
            onChange={(e) => handleChange(e)}
            name="accountType"
          >
            <option></option>
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
            className="bg-gray-200 border border-gray-200 text-black text-xs rounded h-10 pl-3 w-full "
            onChange={(e) => handleChange(e)}
            name="bankName"
          >
            <option></option>
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
