import styled from 'styled-components';
import ColorPalette from '../../FontsAndColors/ColorPalette'

export const BriefSection = styled.main`
    height:100vh;
    display: flex;
    flex-direction:column;
    justify-content:center;
    align-items:start;
    max-width:1200px;
    margin: 0 auto;

    span{
        color: ${ColorPalette.Light};
        font-family: 'Poppins', sans-serif; 
        width: 100%;
    }

    .content{
        h1,h2{
            font-family:'Poppins', sans-serif;
            font-weight: 600;
            color:${ColorPalette.White};
            line-height:1.1;
            opacity:0.85;
        }

        h2,p{
            opacity: 0.7;
        }

        p{
            color:${ColorPalette.White};
            font-family:'poppins', sans-serif;
            font-weight:300 !important;
        }

        #btn__contact
        {
            color:${ColorPalette.Light};
            padding:10px 15px;
            background-color:transparent; 
            border: 1px solid ${ColorPalette.Light};
            border-radius:0.2rem;
            transition: all 0.2s ease-in;
            font-family:'open sans', sans-serif;
            font-size:16px;
            &:hover{
                background-color:rgba(255, 211, 105, 1);
                color:black;
                transform: scale(0.96);
            }
        }
    }
`;