import styled from 'styled-components';
import ColorPalette from '../../FontsAndColors/ColorPalette';

export const Wrapper = styled.footer`
    z-index:-1;
    justify-content: space-between;
    flex-direction:row;
    position:fixed;
    bottom:0;
    left:0;
    width:100%;
    .container{
        max-width: 1580px;
        margin: 0 auto;
        display:flex;
        justify-content: space-between;
        flex-direction:row;
        ul{
            position:relative;
            padding-bottom: 82px;
            &:after{
            position:absolute;
            content:"";
            border-left:1px solid ${ColorPalette.Light};
            bottom:0;
            left:10px;
            height:80px;
        }
        .email__adress{
                writing-mode: vertical-lr;
                margin: 10px 0;
                font-size:16px;
                font-weight: 100;
                letter-spacing: 1.7px;
                transition:all 0.3s;
                &:hover {
                    color:${ColorPalette.Light};
                    cursor:pointer;
                }
            }

        .icon__container{
            margin: 20px 0;
            cursor:pointer;
            > * {
                transition: all 0.1s ease-in;
            }
            &:hover{
                > * {
                    color:${ColorPalette.Light};
                    transform: translateY(-2px);
                }
            }
        }
        }
    }
`;