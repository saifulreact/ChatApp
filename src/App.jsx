import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom"
import LayoutOne from "./Layouts/LayoutOne"
import Home from "./pages/home/Home"
import About from "./pages/about/About"
import Registration from "./pages/registration/Registration"
import Login from "./pages/login/Login"

function App() {
  const router=createBrowserRouter(
    createRoutesFromElements(
      <Route>


      <Route path="/" element={<LayoutOne/>} >

        <Route index element={<Home/>}/>
        <Route path="about" element={<About/>}/>
      </Route>
            <Route path="/registration" element={<Registration/>}/>
      <Route path="/login" element={<Login/>}/>
      </Route>






    
    )
  )

  return (
    <>
     <RouterProvider router={router}/>
    </>
  )
}

export default App
