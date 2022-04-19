import React, { useState, useRef } from 'react'
import DatePicker from 'react-datepicker'
import Select from 'react-select'
import 'react-datepicker/dist/react-datepicker.css'
import statesList from '../../data/states.js'
import departmentsList from '../../data/departments.js'

const NewEmployeeForm = () => {
  const form = useRef(null)
  const [birthDate, setBirthDate] = useState()
  const [startDate, setStartDate] = useState()
  const [selectedState, setSelectedState] = useState(statesList[0])
  const [selectedDepartment, setSelectedDepartment] = useState(
    departmentsList[0]
  )

  const resetForm = (e) => {
    setSelectedState(statesList[0])
    setSelectedDepartment(departmentsList[0])
    setBirthDate(null)
    setStartDate(null)
    e.target.reset()
  }

  const handleSubmit = (e) => {
    e.preventDefault()

    const data = new FormData(form.current)
    // data.set('birthDate', birthDate.toLocaleDateString('en-US'))
    // data.set('startDate', startDate.toLocaleDateString('en-US'))

    console.log(JSON.stringify(Object.fromEntries(data)))

    resetForm(e)
  }

  return (
    <>
      <form ref={form} onSubmit={(e) => handleSubmit(e)}>
        <label htmlFor="first-name">First Name</label>
        <input name="firstName" type="text" id="first-name" />
        <label htmlFor="last-name">Last Name</label>
        <input name="lastName" type="text" id="last-name" />
        <label htmlFor="date-of-birth">Date of Birth</label>
        <DatePicker
          required
          selected={birthDate}
          onChange={(date) => setBirthDate(date)}
          name="birthDate"
          id="date-of-birth"
        />
        <label htmlFor="start-date">Start Date</label>
        <DatePicker
          required
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          name="startDate"
          id="start-date"
        />
        <fieldset className="address">
          <legend>Address</legend>

          <label htmlFor="street">Street</label>
          <input name="street" id="street" type="text" />

          <label htmlFor="city">City</label>
          <input name="city" id="city" type="text" />

          <label htmlFor="state">State</label>
          <Select
            value={selectedState}
            defaultValue={selectedState}
            onChange={setSelectedState}
            options={statesList}
            id="states"
            name="state"
          />

          <label htmlFor="zip-code">Zip Code</label>
          <input name="zip-code" id="zip-code" type="number" />
        </fieldset>
        <label htmlFor="department">Department</label>
        <Select
          name="department"
          value={selectedDepartment}
          defaultValue={selectedDepartment}
          onChange={setSelectedDepartment}
          options={departmentsList}
          id="department"
        />
        <div className="container address">
          <button type="submit">Save</button>
        </div>
      </form>
    </>
  )
}

export default NewEmployeeForm