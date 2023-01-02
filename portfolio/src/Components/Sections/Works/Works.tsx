import React from 'react'
import { WorksSection } from './Works.styled'
import Title from '../../Title/Title'
import Description from '../../WorksDescription/Description';
import { Direction } from '../../../Utils/CommonTypes'

export interface WorkProps {
    Img?: string,
    ProjectType: string,
    Title: string,
    description: string,
    Techs: string[],
    Direction?: Direction
};

export interface PropsList {
    InfoList: WorkProps[]
}
const Works: React.FC<PropsList> = ({ InfoList }) => {
    return (
        <WorksSection>
            <div className='content grid grid-cols-12 gap-4'>
                <div className='col-span-12'>
                    <Title number={"02"} title={"Some Things I’ve Built"} />
                </div>
                {
                    InfoList.map(element => {
                        return (
                            element.Direction === Direction.rtl ?
                                <div className="col-span-12 grid grid-cols-12 rtl">
                                    <div className="col-span-7">
                                        <div className='picture'>
                                            <div className="overlay"></div>
                                            <img src={element.Img} alt="app_img" />
                                        </div>
                                    </div>

                                    <div className=" relative col-span-5 ">
                                        <Description
                                            ProjectType={element.ProjectType}
                                            Title={element.Title}
                                            Techs={element.Techs}
                                            description={element.description}
                                            Direction={element.Direction} />
                                    </div>
                                </div>

                                : //else  

                                <div className="col-span-12 grid grid-cols-12">
                                    <div className="col-span-7">
                                        <div className='picture'>
                                            <div className="overlay"></div>
                                            <img src={element.Img} alt="app_img" />
                                        </div>
                                    </div>

                                    <div className=" relative col-span-5 ">
                                        <Description
                                            ProjectType={element.ProjectType}
                                            Title={element.Title}
                                            Techs={element.Techs}
                                            description={element.description}
                                            Direction={element.Direction} />
                                    </div>
                                </div>
                        )
                    })
                }

            </div>
        </WorksSection>
    )
}

export default Works