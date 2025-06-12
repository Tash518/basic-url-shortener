import Link from 'next/link'
import React from 'react'

const Navbar = () => {
    return (
        <nav className='flex text-white justify-between px-4 items-center bg-red-500 h-14'>
            <div className="logo font-extrabold text-2xl">FitUrl</div>
            <ul className=' flex justify-center items-center gap-3'>
                <Link href="/"><li>Home</li></Link>
                <Link href="/"><li>About</li></Link>
                <Link href="/"><li>Contact</li></Link>
                <Link href="/"><li>Shorten</li></Link>
                <li className='flex gap-2'>
                    <Link href="/generate" className='bg-slate-600 rounded-2xl p-2'><button>TRY NOW</button></Link>
                    <Link href="/github" className='bg-slate-600 rounded-2xl p-2'><button>Github</button></Link>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar
