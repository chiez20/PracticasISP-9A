export enum RabbitMQ {
  StudentQueue = 'students',
  CanchaQueue = 'canchas',
}

export enum StudentMsg {
  CREATE = 'CREATE_STUDENT',
  FIND_ALL = 'FIND_STUDENTS',
  FIND_ONE = 'FIND_STUDENT',
  UPDATE = 'UPDATE_STUDENT',
  DELETE = 'DELETE_STUDENT',
}

export enum CanchaMsg{
  CREATE = 'CREATE_CANCHA',
  FIND_ALL = 'FIND_CANCHAS',
  FIND_ONE = 'FIND_CANCHA',
  UPDATE = 'UPDATE_CANCHA',
  DELETE = 'DELETE_CANCHA',
}
