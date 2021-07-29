const codeMessage = {
  200: 'El servidor ha devuelto con éxito los datos solicitados. ',
  201: 'Crear o modificar datos con éxito. ',
  202: 'Una solicitud ha entrado en la cola de fondo (tarea asíncrona). ',
  204: 'Datos eliminados con éxito. ',
  400: 'Hubo un error en la solicitud enviada, y el servidor no creó ni modificó los datos. ',
  401: 'El usuario no tiene permiso, por favor, intente conectarse de nuevo. ',
  403: 'El usuario está autorizado, pero el acceso está prohibido. ',
  404: 'La solicitud enviada es para un registro que no existe, y el servidor no está operativo. ',
  406: 'El formato solicitado no está disponible. ',
  410: 'El recurso solicitado ha sido eliminado permanentemente y ya no estará disponible. ',
  422: 'Al crear un objeto, se ha producido un error de validación. ',
  500: 'Se ha producido un error en el servidor, por favor, compruebe el servidor. ',
  502: 'Error en la puerta de enlace. ',
  503: 'El servicio no está disponible, el servidor está temporalmente sobrecargado o se mantiene. ',
  504: 'La puerta de enlace ha expirado.'
}

export default codeMessage
