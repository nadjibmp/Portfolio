import React from 'react'
import { AboutSection } from './About.styled';
import img from '../../../images/portfolio.jpg'
import Title from '../../Title/Title';
const About: React.FC = () => {
    return (
        <AboutSection>
            <div className='content grid grid-cols-12 gap-4'>
                <div className='col-span-12'>
                    <Title number={'01'} title='About Me' />
                </div>
                <div className='col-span-12 grid grid-cols-12'>
                    <div className="col-span-8">
                        <article className='my__summary'>
                            Hello! My name is <span>Ahmed Nadjib</span> and I enjoy creating things that live on
                            the internet. My interest in web development started back in 2018 when
                            I decided to try make my first website — turns out hacking together a
                            custom reblog button taught me a lot about HTML & CSS!
                        </article>

                        <article className='my__summary'>
                            Fast-forward to today, and I’ve had the privilege of working at Xpertsoft,
                            a start-up, a huge corporation, and a student-led design studio. My main focus these days is building accessible,
                            inclusive products and digital experiences at Upstatement for a variety of clients.
                        </article>

                        <article className='my__summary'>
                            Here are a few technologies I’ve been working with recently:
                            <div className='flex tech__list'>
                                <ul>
                                    <li>JavaScript (ES6+)</li>
                                    <li>TypeScript</li>
                                    <li>.NET (C#)</li>
                                </ul>
                                <ul>
                                    <li>React.js</li>
                                    <li>Xamarin</li>
                                    <li>Express.js</li>
                                </ul>
                            </div>
                        </article>
                    </div>
                    <div className='col-span-4 flex justify-center'>
                        <div className="pic__container">
                            <div className='overlay'></div>
                            <img src={img} alt="profile_picture" />
                        </div>
                    </div>
                </div>
            </div>
        </AboutSection >
    )
}

export default About