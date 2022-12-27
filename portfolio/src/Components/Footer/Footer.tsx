import React from 'react';
import { Wrapper } from './Footer.styled';
import { FiLinkedin, FiGithub, FiInstagram, FiFacebook } from 'react-icons/fi';
import ColorPalette from '../../FontsAndColors/ColorPalette';
const Footer: React.FC = () => {
    return (
        <Wrapper className="hidden lg:flex">
            <div className='container'>
                <ul>
                    <li className='icon__container'>
                        <FiGithub size={"1.5rem"} color={`${ColorPalette.White}`} title="github__link" />
                    </li>
                    <li className='icon__container'>
                        <FiLinkedin size={"1.5rem"} title="linkedin__link" />
                    </li >
                    <li className='icon__container'>
                        <FiInstagram size={"1.5rem"} title="instagram__link" />
                    </li>
                    <li className='icon__container'>
                        <FiFacebook size={"1.5rem"} title="facebook__link" />
                    </li>
                </ul>
                <ul>
                    <li className='email__adress'>anadjib53@gmail.com</li>
                </ul>
            </div>
        </Wrapper>
    )
}

export default Footer