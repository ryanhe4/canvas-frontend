function useCanvasViewModel() {
  // const figures = useFigures()
  // const mode = useCanvasMode()
  // const actions = useFigureActions()
  // const [newFigure, setNewFigure] = useState<FigureRect | null>(null)
  // const selectedId = useCanvasSelect()
  //
  // const handleClickChangeMode = (mode: CanvasMode) => {
  //   actions.updateMode(mode)
  //   actions.updateSelectedRect(null)
  // }
  //
  // const handleMouseDown = (event: KonvaEventObject<MouseEvent>) => {
  //   if (newFigure === null && mode === 'CREATE') {
  //     const position = event?.target?.getStage()?.getPointerPosition()
  //
  //     if (position === null || position === undefined) {
  //       return
  //     }
  //     const { x, y } = position
  //
  //     setNewFigure({ x, y, width: 0, height: 0, key: '0' })
  //   }
  // }
  //
  // const handleMouseUp = (event: KonvaEventObject<MouseEvent>) => {
  //   if (newFigure !== null && mode === 'CREATE') {
  //     const sx = newFigure.x
  //     const sy = newFigure.y
  //     const position = event?.target?.getStage()?.getPointerPosition()
  //
  //     if (position === null || position === undefined) {
  //       return
  //     }
  //     const { x, y } = position
  //
  //     const annotationToAdd: FigureRect = {
  //       x: sx,
  //       y: sy,
  //       width: x - sx,
  //       height: y - sy,
  //       key: (figures.length + 1).toString(),
  //     }
  //
  //     setNewFigure(null)
  //     actions.addFigure(annotationToAdd)
  //   }
  // }
  //
  // const handleMouseMove = (event: KonvaEventObject<MouseEvent>) => {
  //   if (newFigure !== null && mode === 'CREATE') {
  //     const sx = newFigure.x
  //     const sy = newFigure.y
  //     const position = event?.target?.getStage()?.getPointerPosition()
  //
  //     if (position === null || position === undefined) {
  //       return
  //     }
  //
  //     const { x, y } = position
  //
  //     setNewFigure({
  //         x: sx,
  //         y: sy,
  //         width: x - sx,
  //         height: y - sy,
  //         key: '0',
  //       },
  //     )
  //   }
  // }
  //
  // const combinedFigure = useMemo(() => {
  //   if (newFigure === null) {
  //     return [...figures]
  //   } else {
  //     return [...figures, newFigure]
  //   }
  //
  // }, [figures, newFigure])
  //
  // return {
  //   combinedFigure,
  //   mode,
  //   selectedId,
  //   updateSelect: actions.updateSelectedRect,
  //   handleMouseDown,
  //   handleMouseMove,
  //   handleMouseUp,
  //   handleChangeMode: handleClickChangeMode,
  // }
}

export default useCanvasViewModel
