import React from 'react'
import Navbar from '../../Navbar/Navbar';
import Briefing from '../../Briefing/Briefing';
import { NavLinks } from '../../../Content/Links';
import logo from '../../../images/logo.svg';

const Hero: React.FC = () => {
    return (
        <>
            <Navbar links={NavLinks} logo={logo} />
            <Briefing />
        </>

    )
}

export default Hero