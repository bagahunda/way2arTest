export type TDoctorApi = {
  id: string,
  name: string,
  department: string,
  isHeadOfDepartment?: boolean
}

export type TNurseApi = {
  id: string,
  name: string,
  department: string
}

export type TDoctor = {
  id: string,
  name: string,
  department: string,
  isHeadOfDepartment?: boolean,
  isEditing: boolean
}

export type TNurse = {
  id: string,
  name: string,
  department: string,
  isEditing: boolean
}