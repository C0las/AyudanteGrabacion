import React from "react";
import * as FaIcons from "react-icons/fa";
import * as AiIcons from "react-icons/ai";
import * as IoIcons from "react-icons/io";

export const SidebarData = [
  {
    title: "home",
    path: "/",
    icon: <AiIcons.AiFillHome />,
    cName: "nav-text",
  },
  {
    title: "Report",
    path: "/scheduler",
    icon: <IoIcons.IoIosPaper />,
    cName: "nav-text",
  },
  {
    title: "intento 1",
    path: "/",
    icon: <FaIcons.FaCartPlus />,
    cName: "nav-text",
  },
  {
    title: "intento 2",
    path: "/",
    icon: <IoIcons.IoMdPeople />,
    cName: "nav-text",
  },
  {
    title: "intento 3",
    path: "/",
    icon: <FaIcons.FaEnvelopeOpenText />,
    cName: "nav-text",
  },
  {
    title: "intento 4",
    path: "/",
    icon: <IoIcons.IoMdHelpCircle />,
    cName: "nav-text",
  },
];
