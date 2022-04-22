import { configureStore } from '@reduxjs/toolkit'
import employeeReducer from './features/employee/reducer'

const store = configureStore({
  reducer: {
    employee: employeeReducer,
  },
})
export default store
