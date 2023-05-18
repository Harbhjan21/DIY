const canvasDimension = JSON.parse(window.localStorage.getItem("canvasDimension")) ? JSON.parse(window.localStorage.getItem("canvasDimension")) : {width : 400 , height : 400};
const valueX = Math.floor(canvasDimension.width / 2) - 100; 
const valueY = Math.floor(canvasDimension.height / 2) - 100; 
// console.log("ValueX and ValueY ===> ", valueX , valueY)
const frames = [
  {
    category: "sticker",
    style: "Circle",
    clipPath: "circle(50% at 50% 50%)",
    height: "100px",
    width: "100px",
    x: `${valueX}`,
    y: `${valueY}`,
    background: "whitesmoke",
    zIndex:0
  },
  {
    category: "sticker",
    category: "sticker",
    style: "Triangle",
    clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)",
    height: "100px",
    width: "100px",
    x: `${valueX}`,
    y: `${valueY}`,
    background: "whitesmoke",
    zIndex:0
  },
  {
    category: "sticker",
    style: "Square",
    clipPath: "polygon(0 0, 100% 0, 100% 100%, 0% 100%)",
    height: "100px",
    width: "100px",
    x: `${valueX}`,
    y: `${valueY}`,
    background: "whitesmoke",
    zIndex:0
  },
  {
    category: "sticker",
    style: "Polygon",
    clipPath: "polygon(25% 0, 75% 0, 100% 100%,0 100%)",
    height: "100px",
    width: "100px",
    x: `${valueX}`,
    y: `${valueY}`,
    background: "whitesmoke",
    zIndex:0
  },
  {
    category: "sticker",
    style: "Polygon",
    clipPath: "polygon(50% 0%, 100% 38%, 82% 100%, 18% 100%, 0% 38%)",
    height: "100px",
    width: "100px",
    x: `${valueX}`,
    y: `${valueY}`,
    background: "whitesmoke",
    zIndex:0
  },
  {
    category: "sticker",
    style: "Polygon",
    clipPath: "polygon(50% 100%, 100% 62%, 82% 0, 18% 0, 0 62%)",
    height: "100px",
    width: "100px",
    x: `${valueX}`,
    y: `${valueY}`,
    background: "whitesmoke",
    zIndex:0
  },
  {
    category: "sticker",
    style: "Polygon",
    clipPath: "polygon(25% 0%, 75% 0%, 100% 50%, 75% 100%, 25% 100%, 0% 50%)",
    height: "100px",
    width: "100px",
    x: `${valueX}`,
    y: `${valueY}`,
    background: "whitesmoke",
    zIndex:0
  },
  {
    category: "sticker",
    style: "Polygon",
    clipPath: "polygon(50% 0, 100% 25%, 100% 75%, 50% 100%, 0 75%, 0 25%)",
    height: "100px",
    width: "100px",
    x: `${valueX}`,
    y: `${valueY}`,
    background: "whitesmoke",
    zIndex:0
  },
  {
    category: "sticker",
    style: "Polygon",
    clipPath:
      "polygon(50% 0%, 90% 20%, 100% 60%, 75% 100%, 25% 100%, 0% 60%, 10% 20%)",
    height: "100px",
    width: "100px",
    x: `${valueX}`,
    y: `${valueY}`,
    background: "whitesmoke",
    zIndex:0
  },
  {
    category: "sticker",
    style: "Polygon",
    clipPath:
      "polygon(50% 100%, 90% 80%, 100% 40%, 75% 0, 25% 0, 0 40%, 10% 80%)",
    height: "100px",
    width: "100px",
    x: `${valueX}`,
    y: `${valueY}`,
    background: "whitesmoke",
    zIndex:0
  },
  {
    category: "sticker",
    style: "Polygon",
    clipPath:
      "polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)",
    height: "100px",
    width: "100px",
    x: `${valueX}`,
    y: `${valueY}`,
    background: "whitesmoke",
    zIndex:0
  },
  {
    category: "sticker",
    style: "Polygon",
    clipPath:
      "polygon(13% 13%, 50% 0, 87% 13%, 100% 50%, 87% 87%, 50% 100%, 13% 87%, 0 50%)",
    height: "100px",
    width: "100px",
    x: `${valueX}`,
    y: `${valueY}`,
    background: "whitesmoke",
    zIndex:0
  },
  {
    category: "sticker",
    style: "Polygon",
    clipPath:
      "polygon(50% 0%, 80% 10%, 100% 35%, 100% 70%, 80% 90%, 50% 100%, 20% 90%, 0% 70%, 0% 35%, 20% 10%)",
    height: "100px",
    width: "100px",
    x: `${valueX}`,
    y: `${valueY}`,
    background: "whitesmoke",
    zIndex:0
  },
  {
    category: "sticker",
    style: "Polygon",
    clipPath: "polygon(0 0, 100% 25%, 100% 75%,0 100%)",
    height: "100px",
    width: "100px",
    x: `${valueX}`,
    y: `${valueY}`,
    background: "whitesmoke",
    zIndex:0
  },
  {
    category: "sticker",
    style: "Square",
    clipPath: "polygon(25% 0, 75% 0, 75% 100%, 25% 100%)",
    height: "100px",
    width: "100px",
    x: `${valueX}`,
    y: `${valueY}`,
    background: "whitesmoke",
    zIndex:0
  },
  {
    category: "sticker",
    style: "Square",
    clipPath: "polygon(0 25%, 100% 25%, 100% 75%,0 75%)",
    height: "100px",
    width: "100px",
    x: `${valueX}`,
    y: `${valueY}`,
    background: "whitesmoke",
    zIndex:0
  },
  {
    category: "sticker",
    style: "Circle",
    clipPath: "ellipse(25% 50% at 50% 50%)",
    height: "100px",
    width: "100px",
    x: `${valueX}`,
    y: `${valueY}`,
    background: "whitesmoke",
    zIndex:0
  },
  {
    category: "sticker",
    style: "Circle",
    clipPath: "ellipse(50% 25% at 50% 50%)",
    height: "100px",
    width: "100px",
    x: `${valueX}`,
    y: `${valueY}`,
    background: "whitesmoke",
    zIndex:0
  },
  {
    category: "sticker",
    style: "Polygon",
    clipPath: "polygon(25% 0%, 100% 0%, 75% 100%, 0% 100%)",
    height: "100px",
    width: "100px",
    x: `${valueX}`,
    y: `${valueY}`,
    background: "whitesmoke",
    zIndex:0

  },
  {
    category: "sticker",
    style: "Polygon",
    clipPath: "polygon(50% 0%, 100% 50%, 50% 100%, 0% 50%)",
    height: "100px",
    width: "100px",
    x: `${valueX}`,
    y: `${valueY}`,
    background: "whitesmoke",
    zIndex:0
  },
  {
    category: "sticker",
    style: "Triangle",
    clipPath: "polygon(100% 0, 75% 100%, 0 100%)",
    height: "100px",
    width: "100px",
    x: `${valueX}`,
    y: `${valueY}`,
    background: "whitesmoke",
    zIndex:0
  },
  {
    category: "sticker",
    style: "Triangle",
    clipPath: "polygon(0 0, 100% 100%, 25% 100%)",
    height: "100px",
    width: "100px",
    x: `${valueX}`,
    y: `${valueY}`,
    background: "whitesmoke",
    zIndex:0
  },
  {
    category: "sticker",
    style: "Triangle",
    clipPath: "polygon(0 0, 100% 100%, 0 100%)",
    height: "100px",
    width: "100px",
    x: `${valueX}`,
    y: `${valueY}`,
    background: "whitesmoke",
    zIndex:0
  },
  {
    category: "sticker",
    style: "Triangle",
    clipPath: "polygon(100% 0, 100% 100%, 0 100%)",
    height: "100px",
    width: "100px",
    x: `${valueX}`,
    y: `${valueY}`,
    background: "whitesmoke",
    zIndex:0
  },
  {
    category: "sticker",
    style: "Arrows",
    clipPath:
      "polygon(40% 0%, 40% 20%, 100% 20%, 100% 80%, 40% 80%, 40% 100%, 0% 50%)",
    height: "100px",
    width: "100px",
    x: `${valueX}`,
    y: `${valueY}`,
    background: "whitesmoke",
    zIndex:0
  },
  {
    category: "sticker",
    style: "Arrows",
    clipPath:
      "polygon(0% 20%, 60% 20%, 60% 0%, 100% 50%, 60% 100%, 60% 80%, 0% 80%)",
    height: "100px",
    width: "100px",
    x: `${valueX}`,
    y: `${valueY}`,
    background: "whitesmoke",
    zIndex:0
  },
  {
    category: "sticker",
    style: "Arrows",
    clipPath:
      "polygon(100% 40%, 80% 40%, 80% 100%, 20% 100%, 20% 40%, 0 40%, 50% 0)",
    height: "100px",
    width: "100px",
    x: `${valueX}`,
    y: `${valueY}`,
    background: "whitesmoke",
    zIndex:0
  },
  {
    category: "sticker",
    style: "Arrows",
    clipPath:
      "polygon(100% 60%, 80% 60%, 80% 0%, 20% 0%, 20% 60%, 0 60%, 50% 100%)",
    height: "100px",
    width: "100px",
    x: `${valueX}`,
    y: `${valueY}`,
    background: "whitesmoke",
    zIndex:0
  },
  {
    category: "sticker",
    style: "Arrows",
    clipPath:
      "polygon(0 50%, 30% 0, 30% 25%, 70% 25%, 70% 0, 100% 50%, 70% 100%, 70% 75%, 30% 75%, 30% 100%)",
    height: "100px",
    width: "100px",
    x: `${valueX}`,
    y: `${valueY}`,
    background: "whitesmoke",
    zIndex:0
  },
  {
    category: "sticker",
    style: "Arrows",
    clipPath:
      "polygon(50% 0, 0 30%, 25% 30%, 25% 70%, 0% 70%, 50% 100%, 100% 70%, 75% 70%, 75% 30%, 100% 30%)",
    height: "100px",
    width: "100px",
    x: `${valueX}`,
    y: `${valueY}`,
    background: "whitesmoke",
    zIndex:0
  },
  {
    category: "sticker",
    style: "Arrows",
    clipPath: "polygon(0 25%, 100% 25%, 75% 50%, 100% 75%, 0 75%, 25% 50%)",
    height: "100px",
    width: "100px",
    x: `${valueX}`,
    y: `${valueY}`,
    background: "whitesmoke",
    zIndex:0
  },
  {
    category: "sticker",
    style: "Arrows",
    clipPath: "polygon(70% 20%, 100% 50%, 70% 80%, 0 80%, 0 20%)",
    height: "100px",
    width: "100px",
    x: `${valueX}`,
    y: `${valueY}`,
    background: "whitesmoke",
    zIndex:0
  },
  {
    category: "sticker",
    style: "Arrow",
    clipPath: "polygon(0 20%, 70% 20%, 100% 50%, 70% 80%, 0 80%, 30% 50%)",
    height: "100px",
    width: "100px",
    x: `${valueX}`,
    y: `${valueY}`,
    background: "whitesmoke",
    zIndex:0
  },
  {
    category: "sticker",
    style: "Polygon",
    clipPath:
      "polygon(50% 0, 61% 35%, 100% 35%, 68% 57%, 83% 100%, 50% 70%, 17% 100%, 32% 57%, 0 36%, 39% 35%)",
    height: "100px",
    width: "100px",
    x: `${valueX}`,
    y: `${valueY}`,
    background: "whitesmoke",
    zIndex:0
  },
  {
    category: "sticker",
    style: "Polygon",
    clipPath:
      "polygon(50% 0, 60% 30%, 100% 20%, 70% 50%, 100% 80%, 60% 70%, 50% 100%, 40% 70%, 0 80%, 30% 50%, 0 20%, 40% 30%)",
    height: "100px",
    width: "100px",
    x: `${valueX}`,
    y: `${valueY}`,
    background: "whitesmoke",
    zIndex:0
  },
  {
    category: "sticker",
    style: "Polygon",
    clipPath:
      "polygon(50% 0, 60% 25%, 85% 15%, 75% 40%, 100% 50%, 75% 60%, 85% 85%, 60% 75%, 50% 100%, 40% 75%, 15% 85%, 25% 60%, 0 50%, 25% 40%, 15% 15%, 40% 25%)",
    height: "100px",
    width: "100px",
    x: `${valueX}`,
    y: `${valueY}`,
    background: "whitesmoke",
    zIndex:0
  },
  {
    category: "sticker",
    style: "Polygon",
    clipPath:
      "polygon(50% 0, 65% 35%, 100% 50%, 65% 65%, 50% 100%, 35% 65%, 0 50%, 35% 35%)",
    height: "100px",
    width: "100px",
    x: `${valueX}`,
    y: `${valueY}`,
    background: "whitesmoke",
    zIndex:0
  },
  {
    category: "sticker",
    style: "Polygon",
    clipPath:
      "polygon(50% 20%, 100% 0, 80% 50%, 100% 100%, 50% 80%, 0 100%, 20% 50%, 0 0)",
    height: "100px",
    width: "100px",
    x: `${valueX}`,
    y: `${valueY}`,
    background: "whitesmoke",
    zIndex:0
  },
  {
    category: "sticker",
    style: "Polygon",
    clipPath:
      "polygon(50% 0, 67% 25%, 100% 25%, 84% 50%, 100% 75%, 67% 75%, 50% 100%, 33% 75%, 0 75%, 17% 50%, 0 25%, 33% 25%)",
    height: "100px",
    width: "100px",
    x: `${valueX}`,
    y: `${valueY}`,
    background: "whitesmoke",
    zIndex:0
  },
  {
    category: "sticker",
    style: "Polygon",
    clipPath:
      "polygon(0% 50%, 25% 67%, 25% 100%, 50% 84%, 75% 100%, 75% 67%, 100% 50%, 75% 33%, 75% 0%, 50% 17%, 25% 0%, 25% 33%)",
    height: "100px",
    width: "100px",
    x: `${valueX}`,
    y: `${valueY}`,
    background: "whitesmoke",
    zIndex:0
  },
  {
    category: "sticker",
    style: "Polygon",
    clipPath: "polygon(50% 0%, 75% 50%, 50% 100%, 25% 50%)",
    height: "100px",
    width: "100px",
    x: `${valueX}`,
    y: `${valueY}`,
    background: "whitesmoke",
    zIndex:0
  },

  // //hexagon
  // "polygon(25% 25%, 75% 25%, 100% 50%, 75% 75%, 25% 75%, 0% 50%)",
];

export default frames;

// import CircleIcon from "@mui/icons-material/Circle";
// import SquareIcon from "@mui/icons-material/Square";
// import ChangeHistoryIcon from "@mui/icons-material/ChangeHistory";
// import PentagonIcon from "@mui/icons-material/Pentagon";
// import HexagonIcon from "@mui/icons-material/Hexagon";
// import GradeIcon from "@mui/icons-material/Grade";
// import FavoriteIcon from "@mui/icons-material/Favorite";
// import ArrowRightAltIcon from "@mui/icons-material/ArrowRightAlt";
// import AllOutIcon from "@mui/icons-material/AllOut";
// import StarsSharpIcon from "@mui/icons-material/StarsSharp";

// const frames = [
//     <SquareIcon />,
//     <CircleIcon />,
//     <PentagonIcon />,
//     <GradeIcon />,
//     <HexagonIcon />,
//     <FavoriteIcon />,
//     <ArrowRightAltIcon />,
//     <AllOutIcon />,
//     <StarsSharpIcon />,
//     <ChangeHistoryIcon />,
//   ];

//   export default frames;
