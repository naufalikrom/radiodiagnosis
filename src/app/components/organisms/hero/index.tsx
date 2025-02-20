import React from 'react'
import TitleText from '../../atoms/titleText'

const Hero = () => {
    return (
        <div className="flex flex-col md:flex-row items-center md:space-x-6 p-6 ">
            <div className="w-full md:w-1/2 text-center md:text-left">
                <TitleText className="text-5xl font-bold">
                    Radiodiagnosis System
                </TitleText>
                <p className="mt-4 text-gray-300">
                    Detecting dental abnormalities using AI assistance is needed to help dentists diagnose dental abnormalities or help people with dental diseases to find out predictions of dental abnormalities they suffer.
                </p>
            </div>

            <div className="w-full md:w-1/2 flex justify-center mt-4 md:mt-0">
                <img
                    src="/assets/images/tooth.jpg"
                    alt="Radiodiagnosis"
                    className="w-full h-auto object-cover rounded-lg shadow-lg"
                />
            </div>
        </div>
    );
};


export default Hero
