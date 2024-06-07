import React from 'react'
import Home from './Pages/Home'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Courses from './Pages/Courses'
import Signup from './Components/Login/Signup';


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/course",
    element: <Courses />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
]);

const App = () => {
  return (
    <>
     <RouterProvider router={router} />
    </>
  )
}

export default App