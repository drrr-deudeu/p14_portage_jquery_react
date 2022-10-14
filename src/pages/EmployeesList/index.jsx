import { useEffect, useContext } from "react"
import { DataContext } from "../../utils/dataContext"
import { DataTable } from "react-datatable-pager-lite"
import { Link } from "react-router-dom"
import "react-datatable-pager-lite/dist/index.css"
export default function EmployeesList() {
  const { employeesList } = useContext(DataContext)
  const columns = [
    { title: "First Name", data: "firstName" },
    { title: "Last Name", data: "lastName" },
    { title: "Start Date", data: "startDate" },
    { title: "Department", data: "department" },
    { title: "Date of Birth", data: "dateOfBirth" },
    { title: "Street", data: "street" },
    { title: "City", data: "city" },
    { title: "State", data: "state" },
    { title: "Zip Code", data: "zipCode" },
  ]

  useEffect(() => {}, [employeesList.length])

  return (
    <>
      <div id='employee-div' className='container'>
        <h1>Current Employees {employeesList.length}</h1>
        <DataTable
          columns={columns}
          dataList={employeesList}
          name={"employee-table"}
        />
        <Link to='/'>Home</Link>
      </div>
    </>
  )
}
