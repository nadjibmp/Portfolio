import React from 'react'
import { DescriptionWrapper } from './Description.styled';
import { WorkProps } from '../Sections/Works/Works';
import { Direction } from '../../Utils/CommonTypes';

const Description: React.FC<WorkProps> = ({ ProjectType, Title, Techs, description, Direction }) => {
  return (
    <DescriptionWrapper direction={Direction}>
      <div className="type">
        <h4>{ProjectType}</h4>
      </div>
      <div className="title">
        <h3>{Title}</h3>
      </div>
      <div className="description">
        <p>
          {
            description
          }
        </p>
      </div>
      <div className="techs">
        <ul className='flex flex-wrap  p-2'>
          {
            Techs.map(tech => {
              return <li key={tech}> {tech}</li>
            })}
        </ul>
      </div>
      <div className="links">

      </div>
    </DescriptionWrapper>
  )
}

export default Description