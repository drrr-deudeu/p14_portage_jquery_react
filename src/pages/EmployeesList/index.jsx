import { useEffect, useContext } from "react"
import { DataContext } from "../../utils/dataContext"
import { DataTable } from "react-datatable-pager-lite"
import { Link } from "react-router-dom"
import "react-datatable-pager-lite/dist/index.css"
export default function EmployeesList() {
  const { employeesList, columns } = useContext(DataContext)
  const rowsPerPage = [10, 25, 50, 100]
  useEffect(() => {}, [employeesList.length])
  if (employeesList && employeesList.length)
    return (
      <div id='employee-div' className='container'>
        <h1>Current Employees {employeesList.length}</h1>
        <DataTable
          columns={columns}
          dataList={employeesList}
          name={"employee-table"}
          rowsPerPage={rowsPerPage[0]}
          rowsPossibleUserChoice={rowsPerPage}
        />
        <Link to='/'>Home</Link>
      </div>
    )
}
