export const SCHEDULER_STATE_CHANGE_ACTION = 'SCHEDULER_STATE_CHANGE'

export const appointments = [
  {
    title: 'Gimnasio 1',
    startDate: new Date(2021, 5, 14, 10, 0),
    endDate: new Date(2021, 5, 14, 11, 45),
    id: 0,
    members: [
      {
        name: 'Nicolás Henríquez'
      },
      {
        name: 'Gabriel Mena'
      }
    ],
    department: 'Preparador Físico',
    school: 'Escuela de Salud'
  },
  {
    title: 'Gimnasio 1',
    startDate: new Date(2021, 5, 14, 11, 46),
    endDate: new Date(2021, 5, 14, 13, 15),
    id: 0,
    members: [1],
    department: 'Preparador Físico',
    school: 'Escuela de Salud'
  },
  {
    title: 'Gimnasio 2',
    startDate: new Date(2021, 5, 14, 9, 15),
    endDate: new Date(2021, 5, 14, 11, 0),
    id: 0,
    members: [2],
    department: 'Preparador Físico',
    school: 'Escuela de Salud'
  },
  {
    title: 'Gimnasio 2',
    startDate: new Date(2021, 5, 14, 11, 1),
    endDate: new Date(2021, 5, 14, 12, 30),
    id: 0,
    members: [2],
    department: 'Preparador Físico',
    school: 'Escuela de Salud'
  },
  {
    title: 'Gimnasio 2',
    startDate: new Date(2021, 5, 14, 13, 15),
    endDate: new Date(2021, 5, 14, 14, 45),
    id: 0,
    members: [2],
    department: 'Preparador Físico',
    school: 'Escuela de Salud'
  },
  {
    title: 'Gimnasio 3',
    startDate: new Date(2021, 5, 14, 10, 0),
    endDate: new Date(2021, 5, 14, 11, 45),
    id: 0,
    members: [3],
    department: 'Preparador Físico',
    school: 'Escuela de Salud'
  },
  {
    title: 'Gimnasio 3',
    startDate: new Date(2021, 5, 14, 11, 46),
    endDate: new Date(2021, 5, 14, 13, 15),
    id: 0,
    members: [3],
    department: 'Preparador Físico',
    school: 'Escuela de Salud'
  },
  // Actuacion
  {
    title: 'Actuación 1',
    startDate: new Date(2021, 5, 14, 13, 16),
    endDate: new Date(2021, 5, 14, 16, 15),
    id: 0,
    members: [1, 2, 3, 4, 5],
    department: 'Actuación',
    school: 'Escuela de Comunicación'
  },
  {
    title: 'Actuación 1',
    startDate: new Date(2021, 5, 14, 16, 16),
    endDate: new Date(2021, 5, 14, 19, 15),
    id: 0,
    members: [1, 2, 3, 4, 5],
    department: 'Actuación',
    school: 'Escuela de Comunicación'
  }
]

export const SCHOOL = [
  'Escuela de Salud',
  'Escuela de Comunicación',
  'Escuela de Informática'
]

export const DEPARTMENT = [
  'Preparador Físico',
  'Actuación',
  'Técnico en Sonido'
]
export const resources = [
  {
    fieldName: 'department',
    title: 'Department',
    instances: [
      { id: DEPARTMENT[0], text: DEPARTMENT[0], color: '#36A5C4' },
      { id: DEPARTMENT[1], text: DEPARTMENT[1], color: '#BF0249' },
      { id: DEPARTMENT[2], text: DEPARTMENT[2], color: '#F78B30' }
    ]
  }
]

export const schedulerInitialState = {
  data: appointments,
  locale: 'es-Cl',
  currentDate: '2021-06-14',
  currentViewName: 'Week',
  displayNameWeek: 'Semanas',
  displayNameDay: 'Dias',
  firstDayOfWeek: 1,
  excludedDays: [0, 6],
  currentFilter: '',
  schools: SCHOOL
}
