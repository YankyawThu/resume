'use client'

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function Question() {
    const [seeker, setSeeker] = useState('y')
    const router = useRouter()

    async function submit(event) {
        event.preventDefault()
        
        const response = await fetch(`/api/add-survey?seeker=${seeker}`)
        // const data = await response.json()
        
        router.push('/yankyawthu-resume.pdf')
    }

    return (
        <div className="flex flex-col items-center justify-center h-screen w-full">
            <form onSubmit={submit} encType='multipart/form-data' id="form">
                <div className="w-80 lg:w-96 border-[1px] border-black dark:border-white rounded-lg p-4">
                    Are you recruiter or employer ? Y/N
                    <select onChange={e => setSeeker(e.target.value)} name="seeker" className="block w-full mt-4 p-2 focus:outline-none border-[1px] border-gray-400 dark:border-gray-600 text-black dark:text-white bg-transparent rounded-lg">
                        <option defaultValue="y">Yes</option>
                        <option value="n">No</option>
                    </select>
                </div>
                <button type="submit" className="submit border-[1px] border-black dark:border-white rounded-lg" role="button"><span className="">Submit</span></button>
            </form>
        </div>
    )
}