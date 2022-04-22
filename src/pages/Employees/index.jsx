import { selectEmployees } from '../../redux/selectors'
import { useSelector } from 'react-redux'

const Employees = () => {
  const employees = useSelector(selectEmployees)
  console.log(employees)
  return <div>Employees</div>
}

export default Employees
