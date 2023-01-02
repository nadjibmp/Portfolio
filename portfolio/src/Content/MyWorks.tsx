import { PropsList } from "../Components/Sections/Works/Works";
import TaskifyImg from '../images/taskify.png';
import { Direction } from "../Utils/CommonTypes";

export const myWorks: PropsList = {
  InfoList: [
    {
      ProjectType: "Featured Project",
      Techs: ["ReactJs", "TypeScript", "Styled COmponents"],
      Img: TaskifyImg,
      Title: "Taskify App",
      description: `A minimal, dark blue theme for VS Code, Sublime Text, Atom,
                    iTerm, and more. Available on Visual Studio Marketplace, Package Control,
                    Atom Package Manager, and npm.`,
      Direction: Direction.rtl
    },
    {
      ProjectType: "Featured Project",
      Techs: ["ReactJs", "TypeScript", "Styled COmponents"],
      Img: TaskifyImg,
      Title: "Taskify App",
      description: `A minimal, dark blue theme for VS Code, Sublime Text, Atom,
                    iTerm, and more. Available on Visual Studio Marketplace, Package Control,
                    Atom Package Manager, and npm.`,
      Direction: Direction.ltr
    },
  ],
};
