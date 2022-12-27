import styled from 'styled-components';
import ColorPalette from '../../../FontsAndColors/ColorPalette';

export const AboutSection = styled.section`
    display: flex;
    flex-direction:column;
    justify-content:center;
    align-items:start;
    max-width:1000px;
    margin: 10% auto;

    .my__summary{
        color:${ColorPalette.White};
        font-family: 'open sans';
        line-height:1.8;
        font-weight:400;
        opacity: 0.7;
        margin-bottom: 20px;
        
        span{
            color: ${ColorPalette.Light};
        }

        .tech__list{
            ul{
                padding:10px 0px;
                width:30%;
                list-style: none
            }
            li {
                &:before{
                    content: "▹ ";
                    font-size:16px;
                    color: ${ColorPalette.Light};
                }
            }
        }
    }

    .pic__container{
        height:400px;
        border: 2px solid ${ColorPalette.Light};
        border-radius:5px;
        position:relative;
        .overlay{
            height:100%;
            transform:translate(-15px, -15px);
            position:absolute;
            top:0;
            width:100%;
            z-index:2;
            background-color:${ColorPalette.Light};
            opacity:0.3;
            cursor:pointer;
            transition: all 0.2s ease-out;
            &:hover{
                opacity:0;
                transform:translate(-10px, -10px);
                & + img{
                    transform:translate(-10px, -10px);
                }
            }
        }
        img { 
            max-width:100%;
            max-height:100%;
            border-radius:5px;
            transform:translate(-15px, -15px);
            transition: all 0.2s ease;
        }
    }
`;