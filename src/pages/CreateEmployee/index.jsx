import { useState } from "react"
import Select from "react-select"
import { useContext } from "react"
import { Link } from "react-router-dom"
import { DataContext } from "../../utils/dataContext"
import DatePicker from "react-datepicker"
import { states, options } from "../../datas/employees"
import "react-datepicker/dist/react-datepicker.css"

export default function CreateEmployee() {
  const { addEmployee } = useContext(DataContext)
  const saveEmployee = (e) => {
    e.preventDefault()
    addEmployee(form)
    console.log(form)
  }
  const [form, setForm] = useState({
    firstName: "User1",
    lastName: "Test1",
    dateOfBirth: "09/08/2022",
    startDate: "",
    department: "Engineering",
    street: "45 rue de l'utilisateur",
    city: "New City",
    state: "AL",
    zipCode: "34567",
  })
  const [startDate, setStartDate] = useState(new Date())
  const [birthDate, setBirthDate] = useState(new Date())
  const onChangeInput = (e) => {
    e.preventDefault()
    setForm({ ...form, [e.target.id]: e.target.value })
  }
  const onChangeSelect = (v) => {
    setForm({ ...form, department: v.value })
  }
  const onChangeState = (v) => {
    setForm({ ...form, state: v.value })
  }

  const changeDate = (date, dateField) => {
    setForm({
      ...form,
      [dateField]:
        date.getDate().toLocaleString(undefined, {
          minimumIntegerDigits: 2,
        }) +
        "/" +
        (date.getMonth() + 1).toLocaleString(undefined, {
          minimumIntegerDigits: 2,
        }) +
        "/" +
        date.getFullYear(),
    })
  }
  return (
    <>
      <div className='title'>
        <h1>HRnet</h1>
      </div>
      <div className='container'>
        <Link to='employee-list.html'>View Current Employees</Link>
        <h2>Create Employee</h2>
        <form action='#' id='create-employee' onSubmit={saveEmployee}>
          <label htmlFor='first-name'>First Name</label>
          <input
            type='text'
            id='firstName'
            value={form.firstName}
            onChange={(e) => onChangeInput(e)}
          />
          <label htmlFor='last-name'>Last Name</label>
          <input
            type='text'
            id='lastName'
            value={form.lastName}
            onChange={(e) => onChangeInput(e)}
          />
          <label htmlFor='dateOfBirth'>Date of Birth</label>
          <DatePicker
            id='dateOfBirth'
            selected={birthDate}
            showYearDropdown
            dropdownMode='select'
            yearItemNumber={9}
            dateFormat='dd/MM/yyyy'
            onChange={(date) => {
              setBirthDate(date)
              changeDate(date, "dateOfBirth")
            }}
          />
          <label htmlFor='start-date'>Start Date</label>
          <DatePicker
            id='startDate'
            selected={startDate}
            showYearDropdown
            dropdownMode='select'
            yearItemNumber={9}
            dateFormat='dd/MM/yyyy'
            onChange={(date) => {
              setStartDate(date)
              changeDate(date, "startDate")
            }}
          />
          <fieldset className='address'>
            <legend>Address</legend>

            <label htmlFor='street'>Street</label>
            <input
              id='street'
              type='text'
              //value={form.street}
              onChange={(v) => onChangeInput(v)}
            />

            <label htmlFor='city'>City</label>
            <input
              id='city'
              type='text'
              //value={form.city}
              onChange={(e) => onChangeInput(e)}
            />

            <label htmlFor='state'>State</label>
            <Select
              name='state'
              id='state'
              //value={form.state}
              onChange={(e) => onChangeState(e)}
              options={states}
            />

            <label htmlFor='zip-code'>Zip Code</label>
            <input
              id='zipCode'
              type='number'
              //value={form.zipCode}
              onChange={(e) => onChangeInput(e)}
            />
          </fieldset>
          <label htmlFor='department'>Department</label>
          <Select
            name='department'
            id='department'
            onChange={(e) => onChangeSelect(e)}
            options={options}
          />
          <button type='submit'>Save</button>{" "}
        </form>
      </div>
      <div id='confirmation' className='modal'>
        Employee Created!
      </div>
    </>
  )
}
