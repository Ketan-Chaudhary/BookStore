import React from 'react'
import data from '../../assets/books.json'
import Cards from '../Cards/Cards'
import { Link } from 'react-router-dom'
const Course = () => {
  return (
    <section>
        <div className="max-w-screen-2xl container mx-auto md:px-20 px-4">
            <div className='mt-28 items-center justify-center text-center'>
                <h1 className=" md: text-4xl">We're delighted to have you <span className='text-pink-500'>Here !</span> </h1>
                <p className='mt-12'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Est tempora dolorum reprehenderit eius natus minima excepturi? Perspiciatis quod vel quam molestias sequi laborum earum necessitatibus tempora blanditiis amet culpa perferendis, ipsam fugiat veniam! Voluptatem, similique?</p>
                <Link to='/'>
                <button className='bg-pink-500 text-white px-4 py-2 rounded-md mt-6 hover:bg-pink-600 duration-300'>Back</button>
                </Link>
            </div>

            <div className='mt-12 grid grid-cols-1 md:grid-cols-4'>
                {
                    data.map((item)=>(
                        <Cards item={item} key={item.id}/>
                    ))
                }
            </div>
        </div>
    </section>
  )
}

export default Course