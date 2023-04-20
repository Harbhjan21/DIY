import { styled } from "@mui/material/styles";
import Tooltip, { tooltipClasses } from "@mui/material/Tooltip";

const HtmlTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: "#5E5E5E",
    width: 190,
    height: 118,
    borderRadius: 10,
    fontFamily: "Montserrat",
    fontSize: 14,
  },
  [`& .${tooltipClasses.arrow}`]: {
    color: "#5E5E5E",
    fontSize: 50,
    left: 20,
  },
}));

export default HtmlTooltip;
