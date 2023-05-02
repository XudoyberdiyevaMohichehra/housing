import { BrowserRouter, Navigate, Routes, Route } from "react-router-dom"
import { navbar } from "../utils/navbar"
import Navbar from "../components/navbar"
import ToTopButton from "../components/ToTopButton";
import Page from '../components/404page'


const Root =()=>{
    return(
        <BrowserRouter>
         <Routes>
           <Route element={<Navbar/>}>
                {
                 navbar.map(({ path, element, id }) => { 
                        return <Route key={id} path={path} element={element} /> })
                }
            <Route path="/" element={<Navigate to={'/home'}/>}/>
          </Route>
                    <Route path="*" element={<Page/>}/>
         </Routes>
            <ToTopButton />
        </BrowserRouter>
    )
}
export default Root