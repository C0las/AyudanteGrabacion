export const SCHEDULER_STATE_CHANGE_ACTION = 'SCHEDULER_STATE_CHANGE'
export const ASSISTANT_STATE_CHANGE_ACTION = 'SCHEDULER_STATE_CHANGE'

export const assistant = [
  {
    id: 1,
    name: 'Isabella Moreno',
    rut: '19432989-1',
    fono: '934367854',
    email: 'example@gmail.com',
    image: undefined,
    daysAvailable: [
      {
        day: 'Lunes',
        hour: ['Mañana', 'Tarde']
      },
      {
        day: 'Jueves',
        hour: ['Tarde']
      },
      {
        day: 'Viernes',
        hour: ['Tarde']
      }
    ]
  },
  {
    id: 2,
    name: 'Lisset Silva',
    rut: '19432989-1',
    fono: '934367854',
    email: 'example@gmail.com',
    image: undefined,
    daysAvailable: [
      {
        day: 'Lunes',
        hour: ['Mañana', 'Tarde']
      },
      {
        day: 'Martes',
        hour: ['Mañana', 'Tarde']
      },
      {
        day: 'Miercoles',
        hour: ['Mañana']
      },
      {
        day: 'Jueves',
        hour: ['Mañana', 'Tarde']
      },
      {
        day: 'Viernes',
        hour: ['Mañana']
      }
    ]
  },
  {
    id: 3,
    name: 'Rolando Araya',
    rut: '19432989-1',
    fono: '934367854',
    email: 'example@gmail.com',
    image: undefined,
    daysAvailable: [
      {
        day: 'Lunes',
        hour: ['Mañana']
      },
      {
        day: 'Martes',
        hour: ['Mañana']
      },
      {
        day: 'Miercoles',
        hour: ['Mañana']
      },
      {
        day: 'Jueves',
        hour: ['Mañana', 'Tarde']
      },
      {
        day: 'Viernes',
        hour: ['Mañana', 'Tarde']
      }
    ]
  },
  {
    id: 4,
    name: 'Felipe Pinto',
    rut: '19432989-1',
    fono: '934367854',
    email: 'example@gmail.com',
    image: undefined,
    daysAvailable: [
      {
        day: 'Martes',
        hour: ['Mañana']
      },
      {
        day: 'Miercoles',
        hour: ['Mañana']
      },
      {
        day: 'Jueves',
        hour: ['Mañana', 'Tarde']
      },
      {
        day: 'Viernes',
        hour: ['Mañana', 'Tarde']
      }
    ]
  },
  {
    id: 5,
    name: 'Luis Tobar',
    rut: '19432989-1',
    fono: '934367854',
    email: 'example@gmail.com',
    image: undefined,
    daysAvailable: [
      {
        day: 'Lunes',
        hour: ['Mañana']
      },
      {
        day: 'Martes',
        hour: ['Mañana']
      },
      {
        day: 'Miercoles',
        hour: ['Mañana']
      },
      {
        day: 'Jueves',
        hour: ['Mañana', 'Tarde']
      },
      {
        day: 'Viernes',
        hour: ['Mañana', 'Tarde']
      }
    ]
  }
]

export const appointments = [
  {
    title: 'VI-MULTIC02',
    startDate: new Date(2021, 5, 29, 9, 30),
    endDate: new Date(2021, 5, 29, 11, 45),
    id: 0,
    members: [
      {
        name: 'Estefania Reyes'
      }
    ],
    department: 'Preparador Físico',
    school: 'Escuela de Salud'
  },
  {
    title: 'VI-MULTIC02',
    startDate: new Date(2021, 5, 29, 13, 16),
    endDate: new Date(2021, 5, 29, 17, 45),
    id: 0,
    members: [
      {
        name: 'Sara Madrid'
      }
    ],
    department: 'Preparador Físico',
    school: 'Escuela de Salud'
  },
  {
    title: 'VI-G2',
    startDate: new Date(2021, 5, 29, 16, 16),
    endDate: new Date(2021, 5, 29, 18, 30),
    id: 0,
    members: [
      {
        name: 'Felipe Pinto'
      }
    ],
    department: 'Preparador Físico',
    school: 'Escuela de Salud'
  },
  {
    title: 'VI-G3',
    startDate: new Date(2021, 5, 29, 11, 15),
    endDate: new Date(2021, 5, 29, 13, 15),
    id: 0,
    members: [
      {
        name: 'Karla Lagos'
      }
    ],
    department: 'Preparador Físico',
    school: 'Escuela de Salud'
  },
  {
    title: 'VI-G2',
    startDate: new Date(2021, 5, 29, 17, 46),
    endDate: new Date(2021, 5, 29, 20, 45),
    id: 0,
    members: [
      {
        name: 'Felipe Pinto'
      }
    ],
    department: 'Preparador Físico',
    school: 'Escuela de Salud'
  },
  {
    title: 'VI-G2',
    startDate: new Date(2021, 5, 29, 17, 46),
    endDate: new Date(2021, 5, 29, 20, 45),
    id: 0,
    members: [
      {
        name: 'Sebastian Escobar'
      }
    ],
    department: 'Preparador Físico',
    school: 'Escuela de Salud'
  },
  {
    title: 'VI-S12',
    startDate: new Date(2021, 5, 29, 9, 30),
    endDate: new Date(2021, 5, 29, 11, 45),
    id: 0,
    members: [
      {
        name: 'Sebastian Escobar'
      }
    ],
    department: 'Sonido',
    school: 'Escuela de Comunicación'
  },
  {
    title: 'VI-S12',
    startDate: new Date(2021, 5, 29, 12, 30),
    endDate: new Date(2021, 5, 29, 16, 15),
    id: 0,
    members: [
      {
        name: 'Geraldine Hidalgo'
      },
      {
        name: 'Rolando Soto'
      },
      {
        name: 'Laura Salgado'
      },
      {
        name: 'Oscar Hidalgo'
      },
      {
        name: 'Nicolas Andrade'
      }
    ],
    department: 'Actuación',
    school: 'Escuela de Comunicación'
  },
  {
    title: 'VI-LT1',
    startDate: new Date(2021, 5, 29, 17, 46),
    endDate: new Date(2021, 5, 29, 20, 0),
    id: 0,
    members: [
      {
        name: 'Daniel Urbina'
      }
    ],
    department: 'Administración de Redes y Telecomunicaciones',
    school: 'Escuela de Informática'
  },
  // SEMARAPC
  {
    title: 'VI-MULTIC02',
    startDate: new Date(2021, 5, 30, 12, 30),
    endDate: new Date(2021, 5, 30, 15, 30),
    id: 0,
    members: [
      {
        name: 'Estefania Reyes'
      }
    ],
    department: 'Preparador Físico',
    school: 'Escuela de Salud'
  },
  {
    title: 'VI-MULTIC02',
    startDate: new Date(2021, 5, 30, 13, 16),
    endDate: new Date(2021, 5, 30, 17, 45),
    id: 0,
    members: [
      {
        name: 'Sara Madrid'
      }
    ],
    department: 'Preparador Físico',
    school: 'Escuela de Salud'
  },
  {
    title: 'VI-G2',
    startDate: new Date(2021, 5, 30, 16, 16),
    endDate: new Date(2021, 5, 30, 18, 30),
    id: 0,
    members: [
      {
        name: 'Felipe Pinto'
      }
    ],
    department: 'Preparador Físico',
    school: 'Escuela de Salud'
  },

  {
    title: 'VI-S12',
    startDate: new Date(2021, 5, 30, 9, 30),
    endDate: new Date(2021, 5, 30, 11, 45),
    id: 0,
    members: [
      {
        name: 'Sebastian Escobar'
      }
    ],
    department: 'Sonido',
    school: 'Escuela de Comunicación'
  },

  {
    title: 'VI-LT1',
    startDate: new Date(2021, 5, 30, 17, 46),
    endDate: new Date(2021, 5, 30, 20, 0),
    id: 0,
    members: [
      {
        name: 'Daniel Urbina'
      }
    ],
    department: 'Administración de Redes y Telecomunicaciones',
    school: 'Escuela de Informática'
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
  'Sonido',
  'Administración de Redes y Telecomunicaciones'
]

export const resources = [
  {
    fieldName: 'department',
    title: 'Department',
    instances: [
      { id: DEPARTMENT[0], text: DEPARTMENT[0], color: '#36A5C4' },
      { id: DEPARTMENT[1], text: DEPARTMENT[1], color: '#BF0249' },
      { id: DEPARTMENT[2], text: DEPARTMENT[2], color: '#F78B30' },
      { id: DEPARTMENT[3], text: DEPARTMENT[3], color: '#939393' }
    ]
  }
]

export const schedulerInitialState = {
  data: appointments,
  locale: 'es-Cl',
  currentDate: '2021-06-28',
  currentViewName: 'Week',
  displayNameWeek: 'Semanas',
  displayNameDay: 'Dias',
  firstDayOfWeek: 1,
  excludedDays: [0, 6],
  currentFilter: '',
  schools: SCHOOL
}
