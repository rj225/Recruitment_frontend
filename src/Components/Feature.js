import React from 'react'

function Feature({title , description , className}) {
    return (
        <div className={` bg-gradient-to-tl from-fuchsia-100 via-30% via-orange-100 to-rose-200 w-1/3 p-4 rounded-lg text-center shadow-md ${className}`}>
            <h4 className="text-xl my-2 font-bold mb-2">{title}</h4>
            <p className="text-gray-600">{description}</p>
        </div>
    )
}

export default Feature