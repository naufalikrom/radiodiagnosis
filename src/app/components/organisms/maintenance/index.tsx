import React from 'react'

const Maintenance = () => {
    return (
        <div className='flex flex-col items-center justify-center'>
            <div className="w-full md:w-1/2 flex justify-center mt-4 md:mt-0">
                <img
                    src="/assets/images/maintenance.webp"
                    alt="Radiodiagnosis"
                    className="w-full h-auto object-cover rounded-lg shadow-lg"
                />
            </div>
            <h1>The system is undergoing maintenance, please apologize if it is inconvenient.</h1>
        </div>
    )
}

export default Maintenance
