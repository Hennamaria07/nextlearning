import Link from 'next/link'
import React from 'react'

const Navbar = () => {
    return (
        <nav className='flex justify-between items-center mx-10 my-5'>
            <div>
                <h1>Logo</h1>
            </div>
            <ul className='flex gap-5 justify-end items-center'>
                <Link href={'/'}>
                    <li>Home</li>
                </Link>
                <Link href={'/about'}>
                    <li>About</li>
                </Link>
                <Link href={'/contact'}>
                    <li>Contact</li>
                </Link>
            </ul>
        </nav>
    )
}

export default Navbar