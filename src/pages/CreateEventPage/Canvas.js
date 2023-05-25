import React, { useState } from "react";
import useImage from "use-image";
import UpPatternSrc from "../../assets/images/up-pattern.png";
import DownPatternSrc from "../../assets/images/down-pattern.png";
import { Image as KonvaImage, Stage, Layer, Rect, Circle } from "react-konva";
export default function Canvas({ imgSrc }) {
  const [background] = useImage(imgSrc);
  const [upPattern] = useImage(UpPatternSrc);
  const [downPattern] = useImage(DownPatternSrc);
  const imageStyle = {
    x: 100,
    y: 100,
    rotation: 45,
    scaleX: 1.5,
    scaleY: 1.5,
    opacity: 0.8,
  };
  return (
    <Stage width={window.innerWidth / 2} height={window.innerHeight / 2}>
      <Layer>
        <KonvaImage image={upPattern} />
        <KonvaImage
          image={background}
          id="backgroundImage"
          width={window.innerWidth / 2}
          height={window.innerHeight / 2}
        />
        <Rect width={100} height={100} fill="red" shadowBlur={10} />
        <KonvaImage image={downPattern} />
      </Layer>
    </Stage>
  );
}
