import { createSlice } from '@reduxjs/toolkit'
import { employeeModel } from '../../../utils/models/'

const initialState = {
  employees: [],
}

const { actions, reducer } = createSlice({
  name: 'employee',
  initialState,
  reducers: {
    addEmployee: (draft, action) => {
      draft.employees.push(employeeModel(action.payload))
      return
    },
  },
})

export { actions }
export default reducer
