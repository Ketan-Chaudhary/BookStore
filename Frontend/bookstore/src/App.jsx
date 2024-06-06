import React from 'react'
import Home from './Pages/Home'
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Courses from './Pages/Courses'


const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/course",
    element: <Courses />,
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