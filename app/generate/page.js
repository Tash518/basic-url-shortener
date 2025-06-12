"use client"
import React, { useState } from 'react'

const Shorten = () => {

    const [baseurl, setbaseurl] = useState("")
    const [shorturl, setShorturl] = useState("")
    const [generated, setGenerated] = useState(false)
    const handleChange = (e) => {

    }
    return (
        <div className='mx-auto max-w-lg my-2 bg-rose-200 p-8 rounded-lg flex flex-col'>
            <h1 className='font-bold text-2xl'>Generate Shortened URLs</h1>
            <div className='flex flex-col gap-4 mt-4'>
                <input className='p-1 bg-amber-50 rounded-b-lg focus:outline-purple-800' onChange={e=>{setbaseurl(e.target.value)}} value={baseurl} type="text" placeholder='Enter your URL' />
                <input className='p-4 bg-amber-50 rounded-b-lg focus:outline-purple-800' onChange={e=>{setShorturl(e.target.value)}} value={shorturl} type="text" placeholder='Enter Short URL' />
                <button className='w-full rounded-3xl bg-red-900 text-white p-1 my-2 font-bold '>Generate</button>
            </div>
        </div>
    )
}

export default Shorten
