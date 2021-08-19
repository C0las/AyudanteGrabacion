import swal from 'sweetalert'
import codeMessage from './codeMessage'

const errorHandler = (error, emptyResult = null) => {
  const { response } = error

  if (!response) {
    return {
      success: false,
      result: emptyResult,
      message: 'No se puede conectar al servidor, Compruebe su red de Internet'
    }
  } else if (response && response.status) {
    const message = response.data && response.data.message
    const errorText = message || codeMessage[response.status]
    const { status } = response

    swal(`Request error ${status}`, errorText, 'error')

    return response.data
  } else {
    swal(
      'Error Desconocido',
      'Se ha producido un error desconocido en la aplicación, inténtelo de nuevo. ',
      'error'
    )
    return {
      success: false,
      result: emptyResult,
      message:
        'Se ha producido un error desconocido en la aplicación, inténtelo de nuevo. '
    }
  }
}

export default errorHandler
