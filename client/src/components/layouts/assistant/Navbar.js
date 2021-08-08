/* eslint-disable jsx-a11y/anchor-has-content */
/* eslint-disable jsx-a11y/anchor-is-valid */
import { NavLink } from "react-router-dom";
import React from "react";
import {
  DocumentReportIcon,
  ViewGridIcon,
  UsersIcon,
  CreditCardIcon,
  ChartPieIcon,
  LogoutIcon,
} from "@heroicons/react/solid";
import { useSelector } from "react-redux";
import { idAssistant } from "../../../redux/selectors/auth";

export default function MainNav() {
  const assistant_id = useSelector(idAssistant);
  return (
    <div className="flex lg:flex-col items-center justify-center h-full space-x-4 lg:space-y-4 lg:space-x-0 py-2 lg:py-4">
      <NavLink to="/" className="group">
        <div className="flex justify-center items-center w-10 h-10 lg:w-14 lg:h-14 text-white opacity-50 rounded-xl group-hover:bg-gray-600 group-hover:opacity-100 group-hover:text-primary transform group-hover:-translate-y-8 lg:group-hover:-translate-y-0 lg:group-hover:translate-x-8 duration-300 group-hover:shadow-xl">
          <ViewGridIcon className="w-6 h-6" />
        </div>
      </NavLink>
      <NavLink to={`/report/${assistant_id}`} className="group">
        <div className="flex justify-center items-center w-10 h-10 lg:w-14 lg:h-14 text-white opacity-50 rounded-xl group-hover:bg-gray-600 group-hover:opacity-100 group-hover:text-primary transform group-hover:-translate-y-8 lg:group-hover:-translate-y-0 lg:group-hover:translate-x-8 duration-300 group-hover:shadow-xl">
          <DocumentReportIcon className="w-6 h-6" />
        </div>
      </NavLink>
      <NavLink to="/assistantDetail/" className="group">
        <div className="flex justify-center items-center w-10 h-10 lg:w-14 lg:h-14 text-white opacity-50 rounded-xl group-hover:bg-gray-600 group-hover:opacity-100 group-hover:text-primary transform group-hover:-translate-y-8 lg:group-hover:-translate-y-0 lg:group-hover:translate-x-8 duration-300 group-hover:shadow-xl">
          <UsersIcon className="w-6 h-6" />
        </div>
      </NavLink>
      <NavLink to="/PaymentDetails" className="group">
        <div className="flex justify-center items-center w-10 h-10 lg:w-14 lg:h-14 text-white opacity-50 rounded-xl group-hover:bg-gray-600 group-hover:opacity-50 group-hover:text-primary transform group-hover:-translate-y-8 lg:group-hover:-translate-y-0 lg:group-hover:translate-x-8 duration-300 group-hover:shadow-xl">
          <CreditCardIcon className="w-6 h-6" />
        </div>
      </NavLink>
      <a href="/logout" className="group">
        <div className="flex justify-center items-center w-10 h-10 lg:w-14 lg:h-14 text-white  opacity-50 rounded-xl group-hover:bg-gray-600 group-hover:opacity-100 group-hover:text-primary transform group-hover:-translate-y-8 lg:group-hover:-translate-y-0 lg:group-hover:translate-x-8 duration-300 group-hover:shadow-xl">
          <LogoutIcon className="w-6 h-6" />
        </div>
      </a>
    </div>
  );
}
