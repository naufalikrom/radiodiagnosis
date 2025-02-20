import React from 'react'
import TitleText from '../../atoms/titleText'

const About = () => {
    return (

        <div className="flex flex-col items-center p-6 ">
            <div className="w-full text-center md:text-left pt-10">
                <TitleText className="text-5xl font-bold text-center mb-6">
                    About System
                </TitleText>
            </div>

            <div className="w-full flex flex-col justify-center m-4 md:m-0">
                <p>This radiodiagnosis system is used as a system that can help users because there is an AI to detect abnormalities that occur in the patient's teeth. With the help of this AI, it is hoped that this system can help dentists diagnose dental abnormalities and patients to see a temporary diagnosis quickly and accurately.</p>
                <br/>
                <p>Dentists or patients can input panoramic radiograpics images to the system. after the system processes the image, there will be results in the form of image pieces per tooth and in the tooth image pieces there will be a description of the tooth number that uses the international standard, namely odontogram. in addition to the tooth number, there will be a description of normal teeth or dental abnormalities.</p>
            </div>
        </div>
    )
}

export default About
