import React from "react";
import Icon from "../helper/Icon";
import { download } from "../../../Image/header/pic";
import { PDFDocument, PageSizes, StandardFonts, rgb } from "pdf-lib";
import { useSelector } from "react-redux";
import { Style } from "@mui/icons-material";

const Download = () => {
  const data = useSelector((state) => {
    return state.projects;
  });
  console.log(data);
  const pageIndex = data.currentPage;
  console.log(pageIndex);
  const paged = data.pages[pageIndex] ? data.pages[pageIndex] : [];

  const canvasTextElements = paged.texts ? paged.texts : [];
  const canvasShapeElements = paged.shapes ? paged.shapes : [];

  const generate = async () => {
    console.log("hello", canvasTextElements);
    const pdfDoc = await PDFDocument.create();
    const page = pdfDoc.addPage();
    canvasTextElements.forEach(async (textElement) => {
      const { text, x, y, family, fontSize, color } = textElement;

      const fontObj = await pdfDoc.embedFont(StandardFonts.Helvetica);
      // const [r, g, b] = color;

      page.drawText(text, {
        x,
        y,
        font: fontObj,
        fontSize,
        // color: rgb(r, g, b),
      });
    });
    canvasShapeElements.forEach((shapeElement) => {
      var { style, x, y, width, height } = shapeElement;
      width = parseInt(width);
      height = parseInt(height);

      // const [r, g, b] = color;

      if (style === "Square") {
        page.drawRectangle({
          x,
          y,
          width,
          height,
          //  color: rgb(r, g, b),
        });
      } else if (style === "Circle") {
        page.drawCircle({
          x,
          y,
          size: Math.min(width, height),
          // color: rgb(r, g, b),
        });
      } else if (style === "Polygon") {
        // Add your own logic to draw custom paths if needed
      }
    });

    const pdfBytes = await pdfDoc.saveAsBase64();
    console.log(pdfBytes);
    // Create a download link
    const downloadLink = document.createElement("a");
    downloadLink.href = `data:application/pdf;base64,${pdfBytes}`;
    downloadLink.download = "template.pdf";
    downloadLink.click();
  };
  return (
    <div
      onClick={() => {
        console.log("secondf");
        generate();
      }}
    >
      <Icon img={download} desc="Download" />
    </div>
  );
};

export default Download;
