import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom"
import { navbar } from "../utils/navbar"
import Navbar from "../components/navbar"


const Root =()=>{
    return(
        <BrowserRouter>
         <Routes>
           <Route element={<Navbar/>}>
                {
                 navbar.map(({ path, element, id }) => { 
                        return <Route key={id} path={path} element={element} /> })
                }
            <Route path="*" element={<h1>404</h1>}/>
            <Route path="/" element={<Navigate to={'/home'}/>}/>
          </Route>
         </Routes>
        </BrowserRouter>
    )
}
export default Root