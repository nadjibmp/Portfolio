import styled from 'styled-components';
import ColorPalette from '../../FontsAndColors/ColorPalette';

export const DescriptionWrapper = styled.div`
    position:absolute;
    width:450px;
    right:50px;
    display:flex;
    flex-direction:column;
    justify-content:Center;
    align-items:flex-end;

    .type{
        margin: 5px 0;

        h4{
            color:${ColorPalette.Light};
            font-family:'open sans', sans-serif;
        }
    }

    .title{
        margin: 0 0 15px 0;
        h3{
            font-size:2.3em;
            font-family: 'poppins', sans-serif;
            font-weight:700;
            color:${ColorPalette.White};
        }
    }
    
    .description{
        background-color:${ColorPalette.Default};
        padding:15px;
        border-radius: 5px;
        box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;        
        p{
            font-size:0.85em;
            line-height:1.8;
            font-family:'poppins', sans-serif;
            color:${ColorPalette.White};
            span{
                color: ${ColorPalette.Light};
            }
        }
    }

    .techs{
        max-width:100%;
        li{
            margin-left:20px;
            font-size:0.8em;
            font-family:'poppins', sans-serif;
        }
    }
`;