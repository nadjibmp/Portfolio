import React from 'react'
import { WorksSection } from './Works.styled'
import Title from '../../Title/Title'
import img from '../../../images/taskify.png';
import Description from '../../WorksDescription/Description';

interface Props {
    Img: string,
    ProjectType: string,
    Title: string,
    description: string,
    Techs: string[]
};
interface PropsList {
    InfoList: Props[]
}
const Works: React.FC<PropsList> = ({ InfoList }) => {
    return (
        <WorksSection>
            <div className='content grid grid-cols-12 gap-4'>
                <div className='col-span-12'>
                    <Title number={"02"} title={"Some Things I’ve Built"} />
                </div>

                <div className="col-span-12 grid grid-cols-12">
                    <div className="col-span-7">
                        <div className='picture'>
                            <div className="overlay"></div>
                            <img src={img} alt="app_img" />
                        </div>
                    </div>

                    <div className=" relative col-span-5 ">
                        <Description />
                    </div>
                </div>
                <div className="col-span-12 grid grid-cols-12">
                    <div className="col-span-7">
                        <div className='picture'>
                            <div className="overlay"></div>
                            <img src={img} alt="app_img" />
                        </div>
                    </div>

                    <div className=" relative col-span-5 ">
                        <Description />
                    </div>
                </div>
                <div className="col-span-12 grid grid-cols-12">
                    <div className="col-span-7">
                        <div className='picture'>
                            <div className="overlay"></div>
                            <img src={img} alt="app_img" />
                        </div>
                    </div>

                    <div className=" relative col-span-5 ">
                        <Description />
                    </div>
                </div>
            </div>
        </WorksSection>
    )
}

export default Works