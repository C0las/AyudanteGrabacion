import { createSchedulerAction } from '../../actions/index'
import { connect } from 'react-redux'

const Filter = ({ onCurrentFilterChange, currentFilter }) => (
  <input
    type='text'
    placeholder='Buscar'
    className='w-full h-9 pl-10 outline-none rounded-2xl bg-transparent border-2 place-gray-500 text-sm text-gray-100 border-gray-500'
    value={currentFilter}
    onChange={({ target }) => onCurrentFilterChange(target.value)}
  />
)

const mapStateToProps = (state) => {
  // Recupera los elementos (Escuelas) a filtrar
  let data = state.data.filter(
    (dataItem) => state.schools.indexOf(dataItem.school) > -1
  )
  // Se captura la cadena del campo de entrada
  const lowerCaseFilter = state.currentFilter.toLowerCase()
  // Filtra los elementos del campo title y school
  data = data.filter(
    (dataItem) =>
      dataItem.title.toLowerCase().includes(lowerCaseFilter) ||
      dataItem.school.toLowerCase().includes(lowerCaseFilter) ||
      dataItem.department.toLowerCase().includes(lowerCaseFilter)
  )
  return { ...state, data }
}

const mapDispatchToProps = (dispatch) => ({
  onCurrentFilterChange: (currentFilter) =>
    dispatch(createSchedulerAction('currentFilter', currentFilter))
})

export default connect(mapStateToProps, mapDispatchToProps)(Filter)
