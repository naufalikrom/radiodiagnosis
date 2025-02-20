import React from 'react'
import TitleText from '../../atoms/titleText'

const Advantages = () => {
  return (
    <div className='pt-16'>
      <div className="flex flex-col md:flex-row md:space-x-6 p-6 ">
        <div className="w-full md:w-1/2 md:text-left ">
          <TitleText className="text-5xl font-bold">
            Advantages of Radiodiagnosis System
          </TitleText>
          <div className="mt-4 ml-7 text-gray-300 space-y-4">
            <div className="flex items-start">
              <span className="text-2xl font-bold text-blue-400 mr-2">1.</span>
              <div className='flex flex-col items-start'>
                <p className='text-2xl'><strong>Helping Dentists</strong></p>
                <p>This system can help dentists with the help of AI so that it can help dentists in diagnosing.</p>
              </div>
            </div>
            <div className="flex items-start">
              <span className="text-2xl font-bold text-blue-400 mr-2">2.</span>
              <div className='flex flex-col items-start'>
                <p className='text-2xl'><strong>Information System for Patients</strong></p>
                <p>This system can be used as an information system because it can provide information on temporary predictions of dental abnormalities suffered by patients.</p>
              </div>
            </div>
          </div>
        </div>
        <div className="w-full md:w-1/2 flex justify-center mt-4 md:mt-0">
          <img
            src="/assets/images/panoramic.jpg"
            alt="Radiodiagnosis"
            className=" h-64 object-cover rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  )
}

export default Advantages
