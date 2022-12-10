import React from 'react'
import BorderColorIcon from '@mui/icons-material/BorderColor';
type Props = {}

function TranscriptionText({ }: Props) {
    return (
        <div className='my-4'>
            <div className='flex justify-end	'>
                <button className='bg-slate-400	px-4 py-2 text-white m-4'><BorderColorIcon />Highlihgt</button>

            </div>
            <p>steps the iconic, rocky steps. We're here for one of the greatest rivalries in all of sports. Tomorrow at 03:00 p.m.. Eastern, it's the 123rd edition of the Army Navy football game. And it's so much more than a game. Dating back to 1890, the traditions, pageantry, passion, and respect make the Army Navy game the greatest rivalry in American sports. The game is so big that ten sitting US. Presidents have attended, from Theodore Roosevelt in 1901 to Donald Trump two years ago. It is humbling to watch this rivalry. It's said that this is a game where everyone playing is willing to die for everyone watching, that's powerful stuff. This is America's game. If only all of us could have the perspective of these individuals representing the Naval Academy in Annapolis, Maryland, and the US. Military Academy in West Point, New York. They stand their ground against the opposing side, but afterwards, they walk across the field and embrace each other as brothers and sisters, because they never forget that in the end, they're all on the same team. But don't get me wrong. They play hard for bragging rights that'll last a lifetime. Navy leads the series 62, 53 and seven all time. And to paraphrase the 34th President of the United States, Dwight Eisenhower, the army and Navy are the best of friends 364 and a half days out of the year. But on</p>
            <div className='flex justify-end mt-8'>
                <button className='rounded-lg px-4 py-1 bg-slate-600 text-white'>Finish</button>
            </div>
        </div>
    )
}

export default TranscriptionText