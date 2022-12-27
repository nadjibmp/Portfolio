import React from 'react'
import { DescriptionWrapper } from './Description.styled';
const Description: React.FC = () => {
  return (
    <DescriptionWrapper>
      <div className="type">
        <h4>Featured Project</h4>
      </div>
      <div className="title">
        <h3>Taskify App</h3>
      </div>
      <div className="description">
        <p>
          A minimal, dark blue theme for VS Code, Sublime Text, Atom,
          iTerm, and more. Available on Visual Studio Marketplace, Package Control,
          Atom Package Manager, and npm.
        </p>
      </div>
      <div className="techs">
        <ul className='flex flex-wrap  p-2'>
          <li>React.js</li>
          <li>TypeScript</li>
          <li>Styled Components</li>
        </ul>
      </div>
      <div className="links">

      </div>
    </DescriptionWrapper>
  )
}

export default Description