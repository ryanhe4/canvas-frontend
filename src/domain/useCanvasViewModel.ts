import { useMemo, useState } from 'react'
import { FigureRect, useFigureActions, useFigures } from '@/data/local/useCanvasStore'
import Konva from 'konva'
import KonvaEventObject = Konva.KonvaEventObject

function useCanvasViewModel() {
  const figures = useFigures()
  const actions = useFigureActions()
  const [newFigure, setNewFigure] = useState<FigureRect | null>(null)

  const handleMouseDown = (event: KonvaEventObject<MouseEvent>) => {
    if (newFigure === null) {
      const position = event?.target?.getStage()?.getPointerPosition()

      if (position === null || position === undefined) {
        return
      }

      const { x, y } = position

      setNewFigure({ x, y, width: 0, height: 0, key: '0' })
    }
  }

  const handleMouseUp = (event: KonvaEventObject<MouseEvent>) => {
    if (newFigure !== null) {
      const sx = newFigure.x
      const sy = newFigure.y
      const position = event?.target?.getStage()?.getPointerPosition()

      if (position === null || position === undefined) {
        return
      }

      const { x, y } = position

      const annotationToAdd: FigureRect = {
        x: sx,
        y: sy,
        width: x - sx,
        height: y - sy,
        key: (figures.length + 1).toString(),
      }
      setNewFigure(null)
      actions.addFigure(annotationToAdd)
    }
  }

  const handleMouseMove = (event: KonvaEventObject<MouseEvent>) => {
    if (newFigure !== null) {
      const sx = newFigure.x
      const sy = newFigure.y
      const position = event?.target?.getStage()?.getPointerPosition()

      if (position === null || position === undefined) {
        return
      }

      const { x, y } = position

      setNewFigure({
          x: sx,
          y: sy,
          width: x - sx,
          height: y - sy,
          key: '0',
        },
      )
    }
  }

  const combinedFigure = useMemo(() => {
    if (newFigure === null) {
      return [...figures]
    } else {
      return [...figures, newFigure]
    }

  }, [figures, newFigure])

  return {
    combinedFigure, handleMouseDown, handleMouseMove, handleMouseUp,
  }
}

export default useCanvasViewModel
