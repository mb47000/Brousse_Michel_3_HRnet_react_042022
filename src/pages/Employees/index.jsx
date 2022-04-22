import Title from '../../components/Title'
import { Link } from 'react-router-dom'
import EmployeeTable from '../../components/EmployeeTable'

const Employees = () => {
  return (
    <div className="container">
      <Title title={'Current Employees'} />
      <EmployeeTable />
      <Link to="/">Home</Link>
    </div>
  )
}
export default Employees
