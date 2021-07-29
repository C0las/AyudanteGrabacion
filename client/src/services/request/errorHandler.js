import { notification } from "antd";
import history from "../../utils/history";
import codeMessage from "./codeMessage";

const errorHandler = (error, emptyResult = null) => {
  const { response } = error;

  if (!response) {

    return {
      success: false,
      result: emptyResult,
      message: "No se puede conectar al servidor, Compruebe su red de Internet",
    };
  } else if (response && response.status) {
    const message = response.data && response.data.message;
    const errorText = message || codeMessage[response.status];
    const { status } = response;
    notification.config({
      duration: 20,
    });
    notification.error({
      message: `Request error ${status}`,
      description: errorText,
    });
    if (error.response.data.jwtExpired) {
      history.push("/logout");
    }
    return response.data;
  } else {
    notification.config({
      duration: 20,
    });
    notification.error({
      message: "Unknown Error",
      description: "Se ha producido un error desconocido en la aplicación, inténtelo de nuevo. ",
    });
    return {
      success: false,
      result: emptyResult,
      message: "Se ha producido un error desconocido en la aplicación, inténtelo de nuevo. ",
    };
  }
};

export default errorHandler;