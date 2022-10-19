import { createContext, useState } from "react"
// import { employees_datas } from "../../datas/employees"
import { employees_datas, columns } from "../../datas/datas"

/**
 *
 * React Context
 *
 */
export const DataContext = createContext()
/**
 * React component allowing to share the isMockData boolean value for all pages.
 * @param {JSX.Element} param0
 */
export const DataProvider = ({ children }) => {
  const [employeesList, setEmployeesList] = useState(employees_datas)
  // console.log(JSON.stringify(employees_datas))

  const addEmployee = (employee) => {
    setEmployeesList((employeesList) => [...employeesList, employee])
  }

  return (
    <DataContext.Provider value={{ employeesList, addEmployee, columns }}>
      {children}
    </DataContext.Provider>
  )
}
