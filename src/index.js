import React from "react"
import ReactDOM from "react-dom/client"
import reportWebVitals from "./reportWebVitals"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import CreateEmployee from "./pages/CreateEmployee"
import EmployeesList from "./pages/EmployeesList"
import NotFound from "./pages/NotFound"
import "./sass/main.scss"
import { DataProvider } from "./utils/dataContext"
const root = ReactDOM.createRoot(document.getElementById("root"))
/**
 * The App's Routes
 */
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <DataProvider>
        <Routes>
          <Route path='/' element={<CreateEmployee />}></Route>
          <Route path='/employee-list.html' element={<EmployeesList />}></Route>
          <Route path='*' element={<NotFound />}></Route>
        </Routes>
      </DataProvider>
    </BrowserRouter>
  </React.StrictMode>
)

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals()
