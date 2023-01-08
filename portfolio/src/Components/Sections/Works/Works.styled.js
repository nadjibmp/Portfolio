import styled from 'styled-components';
import ColorPalette from '../../../FontsAndColors/ColorPalette';

export const WorksSection = styled.section`
    display: flex;
    flex-direction:column;
    justify-content:center;
    align-items:start;
    max-width:1000px;
    margin: 10% auto;

    .picture{
        position:relative;
        border-radius:7px;
        cursor:pointer;
        .overlay{
            position:absolute;
            width:100%;
            height:100%;
            background-color:${ColorPalette.Light};
            left:0;
            top:0;
            opacity:0.3;
            transition: all ease 0.3s;
        }
        &:hover .overlay{
            opacity:0;
        }

        .overlay,img{
            border-radius:4px;
        }
    }

    .rtl{
        direction:rtl;
    }

    .react-simple-image-viewer__modal{
        z-index:99;
    }
`;