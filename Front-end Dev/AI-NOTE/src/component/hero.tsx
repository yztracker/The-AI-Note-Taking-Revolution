import React from 'react'

type Props = {}

function hero({ }: Props) {
    return (
        <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <h1 className="mx-auto text-5xl">NOTE AI!</h1>
            <p className="mx-auto text-lg mt-6 text-slate-700">transcription the speech and turn it into funny and impressive notes</p>
            <button className='my-8 px-12 py-2 bg-slate-800 text-white rounded-md'>start now</button>
        </main>
    )
}

export default hero