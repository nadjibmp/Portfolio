import React from 'react'
import { BriefSection } from './Briefing.styled';
const Briefing: React.FC = () => {
    return (

        <BriefSection>
            <div className='content grid grid-cols-12 gap-4'>

                <div className='col-span-12'>
                    <span className='w-full text-md'>Hi, my name is </span>
                </div>

                <div className='col-span-12'>
                    <h1 className='text-lg xl:text-[64px]'>Annane Ahmed Nadjib.</h1>
                </div>

                <div className='col-span-12'>
                    <h2 className='my__subject text-3xl text-[42px]'>I build things for the web.</h2>
                </div>

                <div className='lg:col-span-7 mt-4 col-span-12 md:col-span-10 sm:col-md-'>
                    <p className='text-md leading-7'>
                        I’m a software engineer specializing in building exceptional digital experiences.
                        I'm passionate about cutting-edge, pixel-perfect, beautiful interfaces and intuitively implemented UX.
                    </p>
                </div>

                <div className='col-span-12 mt-6'>
                    <button id='btn__contact'>Contact me</button>
                </div>
            </div>
        </BriefSection>

    )
}

export default Briefing