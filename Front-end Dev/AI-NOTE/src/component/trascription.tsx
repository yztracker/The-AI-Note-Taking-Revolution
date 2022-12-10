import React, { useRef } from 'react'
import RadioButtonCheckedIcon from '@mui/icons-material/RadioButtonChecked';
type Props = {}

function trascription({ }: Props) {
    const fileUpload = useRef(null);
    const handleUpload = () => {
        fileUpload.current.click()
    }
    return (
        <>
            <input type="file" id="actual-btn" style={{ opacity: "0" }} ref={fileUpload} />

            <button className="mx-auto  flex flex-col m-8 rounded shadow-md  sm:w-80 animate-pulse h-90 max-w-5xl" onClick={handleUpload}>


                <div className="flex-1 px-4 py-8 space-y-4 sm:p-8 w-full bg-gray-50 ">
                    <div className="h-48 rounded-t bg-gray-300">
                        <div className='py-4'>
                            <p className='py'>touch to input file</p>

                        </div>
                    </div>
                    <div className="w-full h-6 rounded bg-gray-300"></div>
                    <div className="w-3/4 h-6 rounded bg-gray-300"></div>
                </div>

            </button>

            <button className='rounded-lg px-4 py-1 bg-slate-600 text-white'><RadioButtonCheckedIcon />  Record</button>

        </>

    )
}

export default trascription