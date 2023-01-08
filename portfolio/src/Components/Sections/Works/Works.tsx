import React, { useState, useCallback } from 'react'
import { WorksSection } from './Works.styled'
import Title from '../../Title/Title'
import Description from '../../WorksDescription/Description';
import { Direction } from '../../../Utils/CommonTypes'
import ImageViewer from 'react-simple-image-viewer';

export interface WorkProps {
    Img: string[],
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

    const [currentImage, setCurrentImage] = useState<number>(0);
    const [isViewerOpen, setIsViewerOpen] = useState<boolean>(false);

    const OpenImageViewer = useCallback((index: number): void => {
        setCurrentImage(index);
        setIsViewerOpen(true);
    }, []);

    const CloseImageViewer = (): void => {
        setCurrentImage(0);
        setIsViewerOpen(false);
    };

    return (
        <WorksSection>
            <div className='content grid grid-cols-12 gap-4'>
                <div className='col-span-12'>
                    <Title number={"02"} title={"Some Things I’ve Built"} />
                </div>
                {
                    InfoList.map((element, index) => {
                        return (
                            element.Direction === Direction.rtl ?
                                <div className="col-span-12 grid grid-cols-12 rtl my-5" key={index}>
                                    <div className="col-span-7">
                                        <div className='picture'>
                                            <div className="overlay"
                                                onClick={() => OpenImageViewer(index)} />
                                            <img
                                                src={element.Img && element.Img[0]}
                                                alt="app_img" />
                                        </div>

                                    </div>
                                    <div className=" relative col-span-5 ">
                                        <Description
                                            Img={element.Img}
                                            ProjectType={element.ProjectType}
                                            Title={element.Title}
                                            Techs={element.Techs}
                                            description={element.description}
                                            Direction={element.Direction} />
                                    </div>
                                    {isViewerOpen && (
                                        <ImageViewer
                                            src={element.Img}
                                            currentIndex={currentImage}
                                            disableScroll={false}
                                            closeOnClickOutside={true}
                                            onClose={CloseImageViewer}
                                        />
                                    )}
                                </div>

                                : //else  

                                <div className="col-span-12 grid grid-cols-12">

                                    <div className="col-span-7">
                                        <div className='picture'>
                                            <div className="overlay"
                                                onClick={() => OpenImageViewer(index)} />
                                            <img src={element.Img && element.Img[0]} alt="app_img" />
                                        </div>
                                    </div>

                                    <div className=" relative col-span-5 ">
                                        <Description
                                            Img={element.Img}
                                            ProjectType={element.ProjectType}
                                            Title={element.Title}
                                            Techs={element.Techs}
                                            description={element.description}
                                            Direction={element.Direction} />
                                    </div>
                                    {isViewerOpen && (
                                        <ImageViewer
                                            src={element.Img}
                                            currentIndex={currentImage}
                                            disableScroll={false}
                                            closeOnClickOutside={true}
                                            onClose={CloseImageViewer}
                                        />
                                    )}
                                </div>
                        )
                    })
                }

            </div>
        </WorksSection>
    )
}

export default Works