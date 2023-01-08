import { PropsList } from "../Components/Sections/Works/Works";
import TaskifyImg from '../images/taskify.png';
import { Direction } from "../Utils/CommonTypes";
import sc1 from "../images/sc1.png"
import sc2 from "../images/sc2.png"
import sc3 from "../images/sc3.png"
import sc4 from "../images/sc4.png"
import sc5 from "../images/sc5.png"
import sc6 from "../images/sc6.png"
import sc7 from "../images/sc7.png"
import sc8 from "../images/sc8.png"
import sc9 from "../images/sc9.png"
import sc10 from "../images/sc10.png"
import sc11 from "../images/sc11.png"
import sc12 from "../images/sc12.png"
import sc13 from "../images/sc13.png"
import g1 from "../images/g1.png"
import g2 from "../images/g2.png"
import g3 from "../images/g3.png"
import g4 from "../images/g4.png"
import g5 from "../images/g5.png"
import g6 from "../images/g6.png"
import g7 from "../images/g7.png"

export const myWorks: PropsList = {
  InfoList: [
    {
      ProjectType: "Featured Project",
      Techs: ["ReactJs", "TypeScript", "Styled Components"],
      Img: [TaskifyImg, TaskifyImg, TaskifyImg],
      Title: "Taskify App",
      description: `A minimal, dark blue theme for VS Code, Sublime Text, Atom,
                    iTerm, and more. Available on Visual Studio Marketplace, Package Control,
                    Atom Package Manager, and npm.`,
      Direction: Direction.rtl
    },
    {
      ProjectType: "Featured Project",
      Techs: ["ReactJs", "NodeJs", "ES6", "Styled Components", "Leaflet", "Socket.io"],
      Img: [sc1, sc2, sc3, sc4, sc5, sc6, sc7, sc8, sc9, sc10, sc11, sc12, sc13],
      Title: "3aqaar",
      description: `3aqaar serves the full lifecycle of owning and living in a home: buying, selling, renting, Zillow is the leading real estate and rental marketplace dedicated 
                    to empowering consumers with data `,
      Direction: Direction.ltr
    },
    {
      ProjectType: "Featured Project",
      Techs: ["HTML", "Css3", "JS", "Codegneiter", "Php", "Mysql"],
      Img: [g6, g2, g3, g4, g5, g1, g7],
      Title: "Genipharm",
      description: `3aqaar serves the full lifecycle of owning and living in a home: buying, selling, renting, Zillow is the leading real estate and rental marketplace dedicated 
                    to empowering consumers with data `,
      Direction: Direction.rtl
    },
  ],
};
