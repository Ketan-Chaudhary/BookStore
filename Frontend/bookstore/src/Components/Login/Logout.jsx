import React from 'react'
import { useAuth } from '../../context/AuthProvider'
import toast from 'react-hot-toast';

const Logout = () => {
    const [authUser,setAuthUser]=useAuth();
    const handleLogOut=()=>{
        try {
            setAuthUser({
                ...authUser,
                User:null
            })
            toast.success("Logout successfully")
            setTimeout(() => {  
                window.location.reload()
                localStorage.removeItem("Users")  
              }, 1000);
        } catch (error) {
            toast.error(error.message)
        }
    }
  return (
    <button className='px-3 py-2 bg-red-500 text-white rounded-md cursor-pointer' onClick={handleLogOut}>Logout</button>
  )
}

export default Logout