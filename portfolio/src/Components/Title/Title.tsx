import React from 'react'
import { TitleWrapper } from './Title.styled'

interface Props {
    number: string,
    title: string
}

const Title: React.FC<Props> = ({ number, title }) => {
    return (
        <TitleWrapper className='w-full text-4xl '>
            <span>{number}.</span>{title}
        </TitleWrapper>
    )
}

export default Title