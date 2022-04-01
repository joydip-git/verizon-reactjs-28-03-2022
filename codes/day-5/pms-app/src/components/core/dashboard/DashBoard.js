import React from 'react'
import { Link } from 'react-router-dom'

const DashBoard = () => {
    return (
        <nav className='navbar navbar-default'>
            <Link to='/home'>
                <button className='btn btn-group'>
                    Home
                </button>
            </Link>
            <Link to='/products'>
                <button className='btn btn-group'>
                    Products
                </button>
            </Link>
            <Link to='/products/addnew'>
                <button className='btn btn-group'>
                    Add Products
                </button>
            </Link>
            <Link to='/login'>
                <button className='btn btn-group'>
                    Login
                </button>
            </Link>
        </nav>
    )
}

export default DashBoard