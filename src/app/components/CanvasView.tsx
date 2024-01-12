'use client'
import { Group, Layer, Rect, Stage } from 'react-konva'
import useCanvasViewModel from '@/app/domain/useCanvasViewModel'

function CanvasView() {
  const {
    combinedFigure,
    selectedId,
    mode,
    handleMouseDown,
    handleMouseUp,
    handleMouseMove,
    updateSelect,
  } = useCanvasViewModel()

  return <Stage
    onMouseDown={handleMouseDown}
    onMouseUp={handleMouseUp}
    onMouseMove={handleMouseMove}
    width={window.outerWidth}
    height={window.innerHeight}>
    <Layer>
      {combinedFigure.map(value => {
        if (selectedId === value.key) {
          return <Group key={value.key}>
            <Rect
              x={value.x}
              y={value.y}
              width={value.width}
              height={value.height}
              fill="transparent"
              stroke={'red'}
              onClick={(e) => {
                updateSelect(null)
                e.cancelBubble = true
              }}
            />
            <Rect x={value.x - 5}
                  y={value.y - 5}
                  width={10}
                  height={10}
                  fill={'red'} />
            <Rect x={value.x + value.width - 5}
                  y={value.y - 5}
                  width={10}
                  height={10}
                  fill={'red'} />
            <Rect x={value.x - 5}
                  y={value.y + value.height - 5}
                  width={10}
                  height={10}
                  fill={'red'} />
            <Rect x={value.x + value.width - 5}
                  y={value.y + value.height - 5}
                  width={10}
                  height={10}
                  fill={'red'} />

          </Group>
        } else {
          return (
            <Rect
              key={value.key}
              x={value.x}
              y={value.y}
              width={value.width}
              height={value.height}
              fill="transparent"
              stroke={'black'}
              onClick={(e) => {
                if (mode === 'SELECT')
                  updateSelect(value.key)
                e.cancelBubble = true
              }}
            />
          )
        }
      })}
    </Layer>
  </Stage>
}

export default CanvasView
