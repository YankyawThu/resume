'use client'

export default function Question() {
    function submit() {
        window.open('https://docs.google.com/document/d/1uPRTJA04eT3_SjaT7IJ-ajVDpnKU1Y21QKUXLKTsms8/edit?usp=sharing', '_blank')
    }


    return (
        <div className="flex flex-col items-center justify-center h-screen w-full">
            <div>
                <div className="w-72 lg:w-96 border-[1px] border-black dark:border-white rounded-lg p-3">
                    Are you recuriter ? Y/N
                    <select name="recuriter" className="block w-full mt-3 p-2 focus:outline-none border-[1px] border-black dark:border-white text-black dark:text-white bg-transparent rounded-lg">
                        <option value="yes">Yes</option>
                        <option value="no">No</option>
                    </select>
                </div>
                <button onClick={() => submit()} className="submit border-[1px] border-black dark:border-white rounded-lg" role="button"><span className="">Submit</span></button>
            </div>
        </div>
    )
}