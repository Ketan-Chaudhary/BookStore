// import React from 'react'
// import Home from './Pages/Home'
// import { createBrowserRouter, Navigate, RouterProvider } from "react-router-dom";
// import Courses from './Pages/Courses'
// import Signup from './Components/Login/Signup';
// import { Toaster } from 'react-hot-toast';
// import { useAuth } from './context/AuthProvider';


// const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Home />,
//   },
//   {
//     path: "/course",
//     element: {authUser?<Courses />:<Navigate to="/signup"},
//   },
//   {
//     path: "/signup",
//     element: <Signup />,
//   },
// ]);

// const App = () => {
//   const [authUser,setAuthUser]= useAuth();
//   return (
//     <>
//      <RouterProvider router={router} />
//      <Toaster/>
//     </>
//   )
// }

// export default App


import { Navigate, Route, Routes } from "react-router-dom";
import React from 'react'
import Home from './Pages/Home'
import Courses from './Pages/Courses'
import Signup from './Components/Login/Signup';
import { Toaster } from 'react-hot-toast';
import { useAuth } from './context/AuthProvider';

function App() {
  const [authUser, setAuthUser] = useAuth();
  console.log(authUser);
  return (
    <>
      <div className="dark:bg-slate-900 dark:text-white">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/course"
            element={authUser ? <Courses /> : <Navigate to="/signup" />}
          />
          <Route path="/signup" element={<Signup />} />
        </Routes>
        <Toaster />
      </div>
    </>
  );
}

export default App;