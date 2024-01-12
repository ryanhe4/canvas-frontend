'use client'
import { useEffect, useState } from 'react'
import { fabric } from 'fabric'
import { Canvas } from 'fabric/fabric-impl'

function CanvasView() {
  const [canvas, setCanvas] = useState<Canvas | null>(null);

  const initCanvas = () => (
    new fabric.Canvas('canvas', {
      height: 800,
      width: 800,
      backgroundColor: 'pink'
    })
  );

  useEffect(() => {
    setCanvas(initCanvas());
  }, []);

  return <canvas id={'canvas'}/>
}

export default CanvasView
