import React from 'react'

type Props = {}

function header({ }: Props) {
    return (
        <header className="py-4">
            <div className="max-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex items-center md:gap-x-12">
                    <a className="font-bold text-xl">NOTE-AI</a>
                    <div className='hidden md:flex md:gap-x-6'>
                        <a href="#" className="rouneded p-8 text-gray-700 hover:bg-slate-200 hover:text-slate-900">Home</a>
                        <a href="#" className="rouneded p-8 text-gray-700 hover:bg-slate-200 hover:text-slate-900">About</a>
                        <a href="#" className="rouneded p-8 text-gray-700 hover:bg-slate-200 hover:text-slate-900">Contact</a>

                    </div>
                </div>
            </div>
            <nav>
            </nav>
        </header>
    )
}

export default header