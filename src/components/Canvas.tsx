import { Layer, Rect, Stage } from 'react-konva'
import useCanvasViewModel from '@/domain/useCanvasViewModel'
import { useState } from 'react'

function Canvas() {
  const { combinedFigure, handleMouseDown, handleMouseUp, handleMouseMove } = useCanvasViewModel()
  const [selectedId, setSelectedId] = useState<null | string>(null)

  return <Stage
    onMouseDown={handleMouseDown}
    onMouseUp={handleMouseUp}
    onMouseMove={handleMouseMove}
    width={window.outerWidth}
    height={window.innerHeight}>
    <Layer>
      {combinedFigure.map(value => {
        return (
          <Rect
            key={value.key}
            x={value.x}
            y={value.y}
            width={value.width}
            height={value.height}
            fill="transparent"
            stroke={selectedId === value.key ? 'red' : 'black'}
            onClick={() => {
              setSelectedId(value.key)
            }}
          />
        )
      })}
    </Layer>
  </Stage>
}

export default Canvas
