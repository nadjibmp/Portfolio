    import styled from "styled-components";
    import ColorPalette from "../../../FontsAndColors/ColorPalette";

    export const ContactSection = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    color: #fff;
    margin-top: 30px;
    padding: 40px 0 10px 0;

    .title {
        color: ${ColorPalette.Light};
        font-family: "Open sans", sans-serif;
        font-size: 1.1rem;
        font-weight: 300;
        margin: 10px 0 30px 0;
    }

    .main__title {
        font-family: "Poppins", sans-serif;
        font-weight: 600;
        color: #e6f1ff;
        line-height: 1.1;
        opacity: 0.85;
        font-size: 2.25rem;
        margin-bottom: 30px;
    }

    .content {
        text-align: center;
        width: 50%;
        font-family: "poppins", sans-serif;
        font-size: 0.95em;
        line-height: 1.8;
        font-family: "poppins", sans-serif;
        color: #e6f1ff;
        margin-bottom: 30px;
    }

    .contact__btn {
        color: ${ColorPalette.Light};
        padding: 10px 15px;
        background-color: transparent;
        border: 1px solid ${ColorPalette.Light};
        border-radius: 0.2rem;
        transition: all 0.2s ease-in;
        font-family: "open sans", sans-serif;
        font-size: 16px;
        margin: 40px 0 0 0;
        &:hover {
        background-color: rgba(255, 211, 105, 1);
        color: black;
        transform: scale(0.96);
        }
    }

    .designed__by_section{
        margin-top: 160px;
        text-align: center;
        > * {
            margin: 5px 0;
            font-family: "Poppins", sans-serif;
            color: #e6f1ff;
            font-size: 0.85rem;
        }
        > :last-child{
            color: ${ColorPalette.Light};
        }
    }
    `;
