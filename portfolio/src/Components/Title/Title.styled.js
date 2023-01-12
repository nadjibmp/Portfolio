import styled from 'styled-components';
import ColorPalette from '../../FontsAndColors/ColorPalette';


export const TitleWrapper = styled.h2`
    margin-bottom:3%;
    font-weight:600;
    font-family: 'Open sans', sans-serif;
    position: relative;
    width:100%;
    color:${ColorPalette.White};
    span{
        color:${ColorPalette.Light};
        margin-right:5px;
    }
    &:after{
        content:"";
        position: absolute;
        border-top: 1px solid ${ColorPalette.Light};
        top:50%;
        margin-left: 20px;
        width:250px;
        opacity:0.1;
        @media (max-width: 1281px) {
            display:none;
        }   
    }
`;
