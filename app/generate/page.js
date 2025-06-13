"use client"
import Link from 'next/link'
import React, { useState } from 'react'

const Shorten = () => {

    const [baseurl, setbaseurl] = useState("")
    const [shorturl, setShorturl] = useState("")
    const [generated, setGenerated] = useState("")

    const generate = () => {
        const myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        const raw = JSON.stringify({
            "url": baseurl,
            "shorturl": shorturl
        });

        const requestOptions = {
            method: "POST",
            headers: myHeaders,
            body: raw,
            redirect: "follow"
        };

        fetch("/api/generate", requestOptions)
            .then((response) => response.json())
            .then((result) => {
                setGenerated(`${process.env.NEXT_PUBLIC_HOST}/${shorturl}`)
                setbaseurl("")
                setShorturl("")
                alert(`${process.env.NEXT_PUBLIC_HOST}/${shorturl}`);
                console.log(result)
            })
            .catch((error) => console.error(error));
    }


    return (
        <div className='mx-auto max-w-lg my-2 bg-rose-200 p-8 rounded-lg flex flex-col'>
            <h1 className='font-bold text-2xl'>Generate Shortened URLs</h1>
            <div className='flex flex-col gap-4 mt-4'>
                <input className='p-1 bg-amber-50 rounded-b-lg focus:outline-purple-800' onChange={e => { setbaseurl(e.target.value) }} value={baseurl} type="text" placeholder='Enter your URL' />
                <input className='p-4 bg-amber-50 rounded-b-lg focus:outline-purple-800' onChange={e => { setShorturl(e.target.value) }} value={shorturl} type="text" placeholder='Enter Short URL' />
                <button onClick={generate} className='w-full rounded-3xl bg-red-900 text-white p-1 my-2 font-bold '>Generate</button>
            </div>
            {generated && console.log(generated)}
            {generated && <>
                <span className='font-bold text-lg'> Your Link :</span><code> <Link target='_blank' href={generated} className='text-rose-600 hover:underline'>{generated}</Link>
                </code></>}
        </div>
    )
}

export default Shorten
