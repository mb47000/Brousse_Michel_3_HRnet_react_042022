import { Link } from 'react-router-dom'
import NewEmployeeForm from '../../components/NewEmployeeForm'
import Title from '../../components/Title'

const Home = () => {
  return (
    <>
      <Title title="HRnet" />
      <div className="container">
        <Link to="/employees">View Current Employees</Link>
        <h2>Create Employee</h2>
        <NewEmployeeForm />
      </div>
    </>
  )
}

export default Home
